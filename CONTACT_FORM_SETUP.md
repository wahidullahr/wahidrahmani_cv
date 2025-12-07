# Contact Form Setup Guide

## Quick Setup (2 minutes) - EmailJS

The contact form uses EmailJS, which is free and reliable. Follow these steps:

### Step 1: Sign Up
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (free account)
3. Verify your email

### Step 2: Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook" (or your email provider)
4. Connect your email account
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:
   ```
   Subject: New Contact from Portfolio - {{from_name}}
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key** (e.g., `abcdefghijklmnop`)

### Step 5: Update the Code
Open `portfolio/src/components/ContactForm.tsx` and replace:
- `YOUR_SERVICE_ID` with your Service ID
- `YOUR_TEMPLATE_ID` with your Template ID  
- `YOUR_PUBLIC_KEY` with your Public Key

### That's it! The form will work immediately.

---

## Alternative: Direct Email Link (Works Immediately)

If you want a solution that works RIGHT NOW without any setup, you can replace the form with a simple "Email Me" button that opens the user's email client. This is less fancy but works 100% of the time.

