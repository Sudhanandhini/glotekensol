// test-email.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASS,
  },
});

transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER, // send to yourself
  subject: "Test Email",
  text: "If you receive this, your config works!",
}, (err, info) => {
  if (err) console.error("❌ Error:", err);
  else console.log("✓ Email sent:", info.messageId);
});