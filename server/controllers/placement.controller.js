import PlacementTest from "../models/placement.model.js";
import User from "../models/user.model.js";

export const savePlacementTest = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (user.credits < 50) {
      return res.status(400).json({ message: "Insufficient credits. Minimum 50 credits required to complete this Placement Mock Exam drive." });
    }

    const {
      candidateName,
      targetRole,
      level,
      difficultyMode,
      resumeText,
      resumeData,
      testScores,
      allStrengths,
      allWeaknesses,
      finalReport
    } = req.body;

    if (!candidateName || !targetRole || !level || !testScores || !finalReport) {
      return res.status(400).json({ message: "Missing required placement exam data." });
    }

    const newTest = await PlacementTest.create({
      userId: user._id,
      candidateName,
      targetRole,
      level,
      difficultyMode: difficultyMode || "medium",
      resumeText,
      resumeData,
      testScores,
      allStrengths,
      allWeaknesses,
      finalReport,
      status: "completed"
    });

    user.credits -= 50;
    await user.save();

    return res.status(201).json({
      message: "Placement test saved successfully.",
      creditsLeft: user.credits,
      testId: newTest._id
    });
  } catch (error) {
    console.error("savePlacementTest error:", error);
    return res.status(500).json({ message: `Failed to save placement drive: ${error.message || error}` });
  }
};

export const getMyPlacementTests = async (req, res) => {
  try {
    const tests = await PlacementTest.find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .select("targetRole level finalReport createdAt status");
    return res.json(tests);
  } catch (error) {
    console.error("getMyPlacementTests error:", error);
    return res.status(500).json({ message: `Failed to retrieve history: ${error.message || error}` });
  }
};

export const getPlacementTestReport = async (req, res) => {
  try {
    const test = await PlacementTest.findById(req.params.id);
    if (!test) {
      return res.status(404).json({ message: "Placement report not found." });
    }

    // Verify ownership
    if (test.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Unauthorized access to this report." });
    }

    return res.json(test);
  } catch (error) {
    console.error("getPlacementTestReport error:", error);
    return res.status(500).json({ message: `Failed to fetch report: ${error.message || error}` });
  }
};
