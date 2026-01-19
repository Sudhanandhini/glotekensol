import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables FIRST
dotenv.config();

// Log to verify credentials are loaded (remove in production)
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_APP_PASS:", process.env.EMAIL_APP_PASS ? "✓ Loaded" : "✗ Missing");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASS,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email config error:", error);
  } else {
    console.log("✓ Email server ready");
  }
});

export default transporter;