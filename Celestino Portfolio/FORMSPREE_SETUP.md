# Formspree Setup Instructions - SIMPLE & QUICK! 🚀

## Step 1: Sign up for Formspree (FREE - 2 minutes)

1. Go to **https://formspree.io/**
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with your email (you can use laurenzchristiancelestino@gmail.com)
4. Verify your email address

## Step 2: Create a New Form (1 minute)

1. After logging in, you'll see **"Create a New Form"**
2. Click **"New Form"**
3. Give it a name like "Portfolio Contact Form"
4. Click **"Create"**

## Step 3: Get Your Form Endpoint (30 seconds)

1. After creating the form, you'll see your **Form Endpoint**
2. It will look like: `https://formspree.io/f/xpzgkqyz` (yours will be different)
3. **Copy this entire URL**

## Step 4: Update Your Code (30 seconds)

1. Open `script.js` file
2. Find this line (around line 160):
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT', {
   ```
3. Replace `YOUR_FORMSPREE_ENDPOINT` with your actual endpoint
   - Example: If your endpoint is `https://formspree.io/f/xpzgkqyz`
   - Change it to: `'https://formspree.io/f/xpzgkqyz'`
   - **IMPORTANT:** Only use the part after `/f/`, so it should be: `'xpzgkqyz'`

   Final code should look like:
   ```javascript
   const response = await fetch('https://formspree.io/f/xpzgkqyz', {
   ```

## Step 5: Set Your Email (30 seconds)

1. In Formspree dashboard, go to your form settings
2. Under **"Email Notifications"**, make sure your email is set to: **laurenzchristiancelestino@gmail.com**
3. Save the settings

## Step 6: Test It! 🎉

1. Open your portfolio website
2. Go to Contact section
3. Fill out the form and submit
4. Check your email - you should receive the message!

## That's it! ✅

The form will now send emails directly to: **laurenzchristiancelestino@gmail.com**

## Free Plan Features

- ✅ **50 submissions per month** (free)
- ✅ **Email notifications**
- ✅ **Spam protection**
- ✅ **No coding required** (just copy-paste the endpoint)

## Need More Submissions?

If you need more than 50 submissions per month, Formspree has paid plans starting at $19/month for 1,000 submissions.

---

**Quick Summary:**
1. Sign up at formspree.io
2. Create a form
3. Copy the endpoint (the part after `/f/`)
4. Replace `YOUR_FORMSPREE_ENDPOINT` in `script.js` with your endpoint
5. Done! 🎊

