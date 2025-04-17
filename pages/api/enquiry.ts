import type { NextApiRequest, NextApiResponse } from 'next';

type EnquiryData = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    const formData = req.body as EnquiryData;

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return res.status(400).json({ error: 'Please fill all required fields.' });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    // Send to Google Sheets via Apps Script
    const googleScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!googleScriptUrl) {
      throw new Error('Google Apps Script URL not configured');
    }

    const googleResponse = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!googleResponse.ok) {
      const errorData = await googleResponse.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to save to Google Sheets');
    }

    // Optional: Save to your database here if needed
    // await saveToDatabase(formData);

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your enquiry! We will get back to you soon.' 
    });

  } catch (error) {
    console.error('Error processing enquiry:', error);
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Failed to process enquiry',
      details: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}