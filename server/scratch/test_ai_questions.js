const https = require('https');

const apiKey = process.env.GROQ_API_KEY || "gsk_your_groq_api_key_placeholder";
const model = "llama-3.1-8b-instant";

const prompt = `Generate exactly 12 technical MCQ questions for a fresher Software Engineer candidate.
Skills: JavaScript, React, Node.js, SQL

CRITICAL: Return ONLY a JSON array. No markdown. No explanation. ASCII only. No newlines inside strings.

Example format:
[
  {
    "id": 1,
    "question": "What is X?",
    "options": [
      {"label": "A", "text": "option1"},
      {"label": "B", "text": "option2"},
      {"label": "C", "text": "option3"},
      {"label": "D", "text": "option4"}
    ],
    "correct_answer": "A",
    "explanation": "Because X is option1."
  }
]

Generate 12 questions in this exact format. Mix easy (4), medium (5), hard (3).`;

const postData = JSON.stringify({
  model: model,
  messages: [{ role: "system", content: prompt }],
  temperature: 0.15,
  response_format: { type: "json_object" }
});

const options = {
  hostname: 'api.groq.com',
  port: 443,
  path: '/openai/v1/chat/completions',
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(body);
      const content = json.choices[0].message.content;
      console.log("=== Status Code ===");
      console.log(res.statusCode);
      console.log("=== Raw Response Content ===");
      console.log(content);
      
      const match = content.match(/\[[\s\S]*\]/);
      const parsed = JSON.parse(match ? match[0] : content);
      console.log("=== Parsed JSON Array ===");
      console.log(JSON.stringify(parsed, null, 2));
      console.log("=== First Question Details ===");
      console.log("Question:", parsed[0]?.question);
      console.log("Options:", parsed[0]?.options);
      console.log("Correct Answer:", parsed[0]?.correct_answer);
      console.log("Explanation:", parsed[0]?.explanation);
    } catch (e) {
      console.error("Failed:", e.message);
      console.log("Body was:", body);
    }
  });
});

req.on('error', (e) => {
  console.error("Request Error:", e.message);
});

req.write(postData);
req.end();
