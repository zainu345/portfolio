'use server';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { validateString, validateEmail, getErrorMessage } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const receiverEmail = process.env.RECEIVE_EMAIL || 'connect2abdulaziz@gmail.com';

interface EmailResponse {
  data?: unknown;
  error?: string;
}
interface FormData {
  senderEmail: string;
  message: string;
}

const createErrorResponse = (message: string): EmailResponse => ({ error: message });

export const sendEmail = async (formData: FormData): Promise<EmailResponse> => {
  const {senderEmail, message} = formData;

  // Simple server-side validation
  if (!validateEmail(senderEmail)) {
    return createErrorResponse("Invalid sender email");
  }
  if (!validateString(message, 50000)) {
    return createErrorResponse("Invalid message");
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: receiverEmail,
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    return { data };
  } catch (error) {
    return createErrorResponse(getErrorMessage(error));
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const formData = req.body; 
    const response = await sendEmail(formData);

    return res.status(response.error ? 400 : 200).json(response);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
