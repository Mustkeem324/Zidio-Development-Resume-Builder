const express = require('express');
const { getResumes, createResume } = require('../controllers/resumeController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getResumes).post(protect, createResume);

module.exports = router;
