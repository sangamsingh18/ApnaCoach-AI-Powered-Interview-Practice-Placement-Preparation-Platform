import axios from "axios";

/**
 * Extracts JSON from a string that may contain markdown blocks or other text.
 */
const extractJson = (text) => {
    try {
        // Try parsing directly first
        return JSON.parse(text);
    } catch (e) {
        // Look for JSON within code blocks
        const match = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
        if (match && match[1]) {
            try {
                return JSON.parse(match[1]);
            } catch (e2) {
                // Fall through
            }
        }
        
        // Try finding anything that looks like a JSON object or array
        const startBracket = text.indexOf('{');
        const startArray = text.indexOf('[');
        const start = (startBracket !== -1 && (startArray === -1 || startBracket < startArray)) ? startBracket : startArray;
        
        if (start !== -1) {
            const endBracket = text.lastIndexOf('}');
            const endArray = text.lastIndexOf(']');
            const end = (endBracket !== -1 && (endArray === -1 || endBracket > endArray)) ? endBracket : endArray;
            
            if (end !== -1 && end > start) {
                try {
                    return JSON.parse(text.substring(start, end + 1));
                } catch (e3) {
                    // Fall through
                }
            }
        }
        throw new Error("Could not extract valid JSON from response");
    }
};

export const askAi = async (messages, options = {}) => {
    try {
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("Messages array is empty.");
        }

        const payload = {
            model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
            messages: messages,
            temperature: options.temperature ?? 0.7,
        };

        // If JSON mode is requested or if the prompt implies JSON
        if (options.json || messages.some(m => m.content.toLowerCase().includes("json"))) {
            payload.response_format = { type: "json_object" };
        }

        const response = await axios.post("https://api.groq.com/openai/v1/chat/completions",
            payload,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const content = response?.data?.choices?.[0]?.message?.content;

        if (!content || !content.trim()) {
            throw new Error("Groq API returned empty response.");
        }

        if (options.json || (payload.response_format && payload.response_format.type === "json_object")) {
            try {
                const parsed = extractJson(content);
                return options.returnParsed ? parsed : JSON.stringify(parsed);
            } catch (e) {
                console.error("Failed to parse JSON response from Groq:", e.message);
                if (options.json) throw e; 
            }
        }

        return content;
    } catch (error) {
        console.error("Groq Error:", error.response?.data || error.message);
        throw new Error("Groq API Error: " + (error.response?.data?.error?.message || error.message));
    }
};
