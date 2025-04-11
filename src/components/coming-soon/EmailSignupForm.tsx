import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address"
  })
});
type FormValues = z.infer<typeof formSchema>;
export const EmailSignupForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from("waitlist").insert({
        email: data.email
      });
      if (error) {
        if (error.code === "23505") {
          toast.info("You're already on our waitlist!");
          setIsSubmitted(true);
        } else {
          console.error("Error saving email:", error);
          toast.error("Something went wrong. Please try again.");
        }
      } else {
        toast.success("Thank you for joining our waitlist!");
        setIsSubmitted(true);
        reset();
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="flex flex-col items-start gap-8 w-full">
      {!isSubmitted ? <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
          <div className="flex h-[72px] sm:h-[56px] px-6 items-center w-full rounded-lg border border-[rgba(52,51,51,0.15)] bg-white">
            <input type="email" placeholder="Enter your email" {...register("email")} className="w-full text-[19.2px] sm:text-base font-normal leading-[130%] font-['Nunito_Sans'] text-[#696868] bg-transparent border-none focus:outline-none" />
          </div>
          
          {errors.email && <p className="text-red-500 text-sm mt-1 leading-relaxed">{errors.email.message}</p>}
          
          <button type="submit" disabled={isSubmitting} className="flex h-12 justify-center items-center w-full rounded-lg bg-[#014532] text-white text-[19.2px] sm:text-base font-extrabold leading-[130%] font-['Nunito_Sans']">
            {isSubmitting ? "Submitting..." : "Join waitlist"}
          </button>
        </form> : <div className="w-full bg-[#D8D1CF] rounded-lg p-6 text-center">
          <p className="text-black font-medium text-left text-base">You're on the list. We'll be in touch soon. Now, be a pal and share with a friend.</p>
        </div>}
      
      <a href="https://my.daynote.app" target="_blank" rel="noopener noreferrer" className="text-[#014532] text-l font-medium font-['Nunito_Sans'] underline text-center w-full">
        Have an access code?
      </a>
    </div>;
};