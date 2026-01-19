import express from "express";
import transporter from "../config/emailConfig.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.SUPPORT_EMAIL,
      subject: subject || "New Contact Message",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("CONTACT EMAIL ERROR:", err);
    res.status(500).json({ message: "Email failed", error: err.message });
  }
});

export default router;
