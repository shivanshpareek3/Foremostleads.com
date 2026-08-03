"use server";

export async function submitContactForm(data: any) {
  try {
    // In a real application, you would use Resend or Nodemailer here to send the email.
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Log the data for testing
    console.log("Contact Form Submitted:", data);

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Failed to submit form. Please try again later." };
  }
}
