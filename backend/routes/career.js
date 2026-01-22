import express from 'express';
import { body, validationResult } from 'express-validator';
import multer from 'multer';
import transporter from '../config/emailConfig.js';
import { asyncHandler } from '../middleware/errorHandler.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF and Word documents are allowed.'));
    }
  }
});

// Validation middleware
const validateCareer = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('position').trim().notEmpty().withMessage('Current position is required'),
  body('lookingFor').optional().trim(),
 
  body('message').optional().trim()
];

// Handle career form submission
router.post('/', upload.single('cv'), validateCareer, asyncHandler(async (req, res) => {
  // Check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, position, lookingFor, jobType, message } = req.body;

  // Check if CV file was uploaded
  if (!req.file) {
    return res.status(400).json({ error: 'CV file is required' });
  }

  // Email to support team
  const supportMailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: process.env.SUPPORT_EMAIL || 'support@sunsys.in',
    subject: `New Career Application: ${name}`,
    html: `
      <h2>New Career Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Current Position:</strong> ${position}</p>
      <p><strong>Position Looking For:</strong> ${lookingFor || 'Not specified'}</p>
     
      <p><strong>Additional Message:</strong> ${message || 'None'}</p>
      <p><strong>CV File:</strong> ${req.file.originalname}</p>
      <hr>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `,
    attachments: [
      {
        filename: req.file.originalname,
        content: req.file.buffer
      }
    ]
  };

  // Confirmation email to applicant
  const applicantMailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: email,
    subject: 'Career Application Received - Glotek Ensol',
    html: `
      <h2>Thank You for Your Application!</h2>
      <p>Dear ${name},</p>
      <p>We have received your career application and will review it shortly.</p>
      <p>Our HR team will contact you if your profile matches our requirements.</p>
      <hr>
      <p><strong>Application Details:</strong></p>
      <ul>
        <li><strong>Current Position:</strong> ${position}</li>
        <li><strong>Position Applied For:</strong> ${lookingFor || 'General'}</li>
      
      </ul>
      <hr>
      <p>Best regards,<br>Glotek Ensol HR Team</p>
    `
  };

  // Send emails
  try {
    await transporter.sendMail(supportMailOptions);
    await transporter.sendMail(applicantMailOptions);

    res.status(200).json({
      success: true,
      message: 'Your application has been submitted successfully. We will review it and contact you soon.'
    });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit application. Please try again later.',
      error: error.message
    });
  }
}));

export default router;
