const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    workExperience: [{
        company: String,
        role: String,
        startDate: Date,
        endDate: Date,
        description: String
    }],
    education: [{
        institution: String,
        degree: String,
        startDate: Date,
        endDate: Date,
        description: String
    }],
    skills: [String],
    achievements: [String]
});

module.exports = mongoose.model('Resume', ResumeSchema);
