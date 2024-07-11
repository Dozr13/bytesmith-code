'use server';
import { Resend } from 'resend';
import ClientEmailTemplate from '@/components/templates/ClientEmailTemplate';
import AdminEmailTemplate from '@/components/templates/AdminEmailTemplate';
import { render } from '@react-email/render';

interface State {
  error: string | null;
  success: boolean;
}

export const sendEmail = async (formData: FormData): Promise<State> => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const bscEmail = process.env.BYTESMITH_CODE_EMAIL || '';

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email to user
    await resend.emails.send({
      from: 'Wade Pate <wade.pate@bytesmithcode.com>',
      to: email,
      subject: 'Thank you for reaching out!',
      html: render(ClientEmailTemplate({ name, message })),
    });

    // Send email to company email address
    await resend.emails.send({
      from: 'Wade Pate <wade.pate@bytesmithcode.com>',
      to: bscEmail,
      subject: '!!!! - New Contact Form Submission',
      html: render(AdminEmailTemplate({ name, email, message })),
    });

    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
