# Glotek Ensol Backend Server

Backend server for handling contact and career form submissions with email notifications.

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@glotekensol.com
SUPPORT_EMAIL=support@sunsys.in

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173
```

### 3. Gmail App Password Setup

If using Gmail:

1. Enable 2-factor authentication on your Google account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate an app password for Mail
4. Use this password in the `EMAIL_PASS` field

For other email services, adjust the `EMAIL_SERVICE` and credentials accordingly.

### 4. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Contact Form
- **URL:** `POST /api/contact`
- **Content-Type:** `application/json`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91-XXXXXXXXXX",
    "subject": "Inquiry",
    "message": "Your message here"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Your message has been sent successfully. We will contact you soon."
  }
  ```

### Career Application
- **URL:** `POST /api/career`
- **Content-Type:** `multipart/form-data`
- **Fields:**
  - `name` (required): Full name
  - `email` (required): Email address
  - `position` (required): Current position
  - `lookingFor` (optional): Position looking for
  - `jobType` (optional): Job type preference
  - `message` (optional): Additional message
  - `cv` (required): PDF or Word document file (max 5MB)
- **Response:**
  ```json
  {
    "success": true,
    "message": "Your application has been submitted successfully. We will review it and contact you soon."
  }
  ```

## Features

- ✅ Email notifications to support team
- ✅ Confirmation emails to users
- ✅ File upload support for CVs (PDF, DOC, DOCX)
- ✅ Form validation
- ✅ CORS support for frontend integration
- ✅ Error handling and logging
- ✅ Environment-based configuration

## Troubleshooting

### Server won't start
- Check if port 5000 is already in use
- Verify Node.js is installed: `node --version`
- Check `.env` file exists and has correct configuration

### Emails not sending
- Verify email credentials are correct
- If using Gmail, ensure app password is set (not regular password)
- Check `SUPPORT_EMAIL` is a valid email address
- Enable less secure apps if not using app passwords

### CORS errors in frontend
- Verify `FRONTEND_URL` in `.env` matches your frontend URL
- Check frontend is running on the correct port
- Make sure backend is running before frontend

## Frontend Integration

The frontend pages (Contact and Career) are configured to make API calls to:
- `http://localhost:5000/api/contact` for contact form
- `http://localhost:5000/api/career` for career applications

Update the URLs in the frontend files if deploying to production.
