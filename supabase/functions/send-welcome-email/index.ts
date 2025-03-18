
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailPayload {
  record: {
    id: string;
    email: string;
    created_at: string;
  };
  type: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  console.log("Starting send-welcome-email function");
  
  try {
    // Log the raw request body for debugging
    const bodyText = await req.text();
    console.log("Raw request body:", bodyText);
    
    // Parse the JSON manually after logging
    let payload: EmailPayload;
    try {
      payload = JSON.parse(bodyText);
      console.log("Parsed payload:", payload);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      return new Response(
        JSON.stringify({ 
          success: false,
          error: "Invalid JSON payload: " + parseError.message
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
    
    // Validate the payload
    if (!payload || !payload.record || !payload.record.email) {
      console.error("Invalid payload structure:", payload);
      return new Response(
        JSON.stringify({ 
          success: false,
          error: "Invalid payload structure. Expected record with email." 
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
    
    // Only process when a new record is inserted
    if (payload.type !== "INSERT") {
      return new Response(
        JSON.stringify({ message: "Not an insert operation" }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { email } = payload.record;
    console.log(`Sending welcome email to ${email}`);

    const emailResponse = await resend.emails.send({
      from: "Waitlist <onboarding@resend.dev>",
      to: [email],
      subject: "You're on our waitlist!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; font-size: 24px;">Thank you for joining our waitlist!</h1>
          <p style="color: #666; font-size: 16px; line-height: 1.5;">
            We're excited to have you on board. We'll keep you updated on our progress and let you know when we launch.
          </p>
          <p style="color: #666; font-size: 16px; line-height: 1.5;">
            In the meantime, follow us on social media for the latest updates.
          </p>
          <div style="background-color: #D8D1CF; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="color: #333; font-size: 16px; margin: 0;">
              Be a pal and share with friends who might be interested!
            </p>
          </div>
          <p style="color: #999; font-size: 14px; margin-top: 30px;">
            If you have any questions, reply to this email or contact us at <a href="mailto:hi@denny.nyc" style="color: #999; text-decoration: underline;">hi@denny.nyc</a>
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Welcome email sent successfully", 
        data: emailResponse 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error sending welcome email:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || "An unknown error occurred" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
