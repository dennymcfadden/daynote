
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
      } = await supabase.from("waitlist").insert([{
        email: data.email
      }]);
      
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
  
  return <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col text-[19px] mt-[24px] max-md:max-w-full max-md:mt-5">
      {!isSubmitted ? <>
          <input id="email" type="email" placeholder="Enter your email" {...register("email")} className={`w-[447px] border border-[color:var(--colorBorder,rgba(52,51,51,0.15))] bg-white min-h-[72px] max-w-full overflow-hidden text-[#696868] font-normal leading-[30px] mt-4 pl-6 rounded-lg border-solid max-md:max-w-full max-md:pl-5 ${errors.email ? "border-red-500" : ""}`} aria-invalid={errors.email ? "true" : "false"} />

          {errors.email && <p className="text-red-500 text-sm mt-1 leading-relaxed">{errors.email.message}</p>}

          <button type="submit" disabled={isSubmitting} className="flex-1 shrink basis-[0%] bg-[rgba(251,146,64,1)] min-h-12 w-[447px] max-w-full overflow-hidden text-black font-[590] text-center leading-[30px] mt-4 rounded-lg max-md:max-w-full hover:bg-[rgba(251,126,44,1)] transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed py-3">
            {isSubmitting ? "Submitting..." : "Join waitlist"}
          </button>
        </> : <div className="w-[447px] max-w-full bg-[#D8D1CF] rounded-lg p-6 mt-4 text-center">
          <p className="text-black font-medium text-left text-base">You're on the list. We'll be in touch soon. Now, be a pal and share with a friend.</p>
        </div>}
      
      <p className="text-sm text-gray-600 mt-8">
        Have a question? <a href="mailto:hi@denny.nyc" className="text-gray-600 underline">Send us an email.</a>
      </p>
    </form>;
};
