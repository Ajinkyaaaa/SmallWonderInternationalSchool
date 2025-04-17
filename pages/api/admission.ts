import type { NextApiRequest, NextApiResponse } from 'next';

type AdmissionData = {
    parentName: string;
    email: string;
    phone: string;
    childName: string;
    childAge: string;
    preferredStartDate: string;
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
    const formData = req.body as AdmissionData;

    // Required fields validation
    const requiredFields = ['parentName', 'email', 'phone', 'childName', 'childAge'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof AdmissionData]);

    if (missingFields.length > 0) {
      return res.status(400).json({ 
        error: 'Please fill all required fields.',
        missingFields
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    // Phone number basic validation
    if (formData.phone.length < 8) {
      return res.status(400).json({ error: 'Please provide a valid phone number.' });
    }

    // Child age validation
    if (!formData.childAge.match(/^\d+/) || parseInt(formData.childAge) < 2 || parseInt(formData.childAge) > 6) {
      return res.status(400).json({ error: 'Child age must be between 2 and 6 years.' });
    }

    // Send to Google Sheets via Apps Script
    const googleScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL1;
    if (!googleScriptUrl) {
      throw new Error('Google Apps Script URL not configured');
    }

    const googleResponse = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        formType: 'admission'
      }),
    });

    if (!googleResponse.ok) {
      const errorData = await googleResponse.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to save admission data to Google Sheets');
    }

    // Optional: Send email notification
    // await sendAdmissionNotification(formData);

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your admission application! We will contact you soon to schedule a visit.' 
    });

  } catch (error) {
    console.error('Error processing admission:', error);
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Failed to process admission application',
      details: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}