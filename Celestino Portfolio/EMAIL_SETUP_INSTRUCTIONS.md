# Email Setup Instructions for Contact Form

## Step 1: Sign up for EmailJS (FREE)

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create an Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (laurenzchristiancelestino@gmail.com)
5. Click **Create Service**
6. **Copy your Service ID** (you'll need this)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Content:**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Click **Save**
5. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find **Public Key**
3. **Copy your Public Key**

## Step 5: Update the Code

Open `script.js` and replace these three values:

1. **Line with `emailjs.init("YOUR_PUBLIC_KEY")`** - Replace `YOUR_PUBLIC_KEY` with your actual Public Key
2. **Line with `'YOUR_SERVICE_ID'`** - Replace with your Service ID
3. **Line with `'YOUR_TEMPLATE_ID'`** - Replace with your Template ID

Example:
```javascript
emailjs.init("abc123xyz"); // Your Public Key

// Later in the code:
const response = await emailjs.send(
    'service_abc123',    // Your Service ID
    'template_xyz789',   // Your Template ID
    templateParams
);
```

## Step 6: Test the Form

1. Open your portfolio website
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email (laurenzchristiancelestino@gmail.com) - you should receive the message!

## Free Plan Limits

- EmailJS free plan allows **200 emails per month**
- Perfect for a portfolio website!

## Troubleshooting

- If emails don't arrive, check your spam folder
- Make sure all IDs are correctly copied (no extra spaces)
- Verify your Gmail account is properly connected in EmailJS
- Check the browser console (F12) for any error messages

---

**Note:** The email will be sent directly to: laurenzchristiancelestino@gmail.com

