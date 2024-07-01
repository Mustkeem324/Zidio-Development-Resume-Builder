const Resume = require('../models/Resume');

// Get all resumes for a user
const getResumes = async (req, res) => {
    const resumes = await Resume.find({ user: req.user._id });
    res.json(resumes);
};

// Create a new resume
const createResume = async (req, res) => {
    const { workExperience, education, skills, achievements } = req.body;

    const resume = new Resume({
        user: req.user._id,
        workExperience,
        education,
        skills,
        achievements
    });

    const createdResume = await resume.save();
    res.status(201).json(createdResume);
};

module.exports = { getResumes, createResume };
