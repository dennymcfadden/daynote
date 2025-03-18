
import React from "react";
import { Logo } from "./Logo";
import { EmailSignupForm } from "./EmailSignupForm";
import { ProductImage } from "./ProductImage";
import { ScrollArea } from "../ui/scroll-area";

export const ComingSoon: React.FC = () => {
  return (
    <section 
      className="bg-[rgba(243,239,236,1)] min-h-screen flex relative px-5 md:px-0"
      aria-labelledby="coming-soon-title"
    >
      <ScrollArea className="h-screen md:w-[60%] py-[80px] md:pl-[120px] md:pr-[40px]">
        <div className="max-w-[600px]">
          <img src="/lovable-uploads/a1709f56-bd59-4c3b-ade3-b0bad52f96bc.png" alt="Daynote App Icon" className="w-16 h-16 mb-4" />
          
          <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d11b44df90ee0b06bf7f08ab6fed9c03ca5f4f48ec41d161e8dc6389f3b533e?placeholderIfAbsent=true" className="aspect-[4.65] w-64 max-w-full" />

          <article className="text-black text-2xl font-medium mt-9 max-md:max-w-full max-md:mt-5">
            <p className="leading-relaxed text-lg">Daynote is the best way to journal because it's the journal that you will actually use. One audio note per day—automatically transcribed—snappy, happy.</p>
            <p className="mt-6 leading-relaxed text-lg">Journal entries are organized by date, year-over-year, connecting the moments that matter most. Every birthday, every solstice, every first day of school, connected in threads that add meaning to your memories.</p>
          </article>

          <EmailSignupForm />
        </div>
      </ScrollArea>

      {/* Mobile product image */}
      <div className="md:hidden flex justify-center w-full mt-8 mb-[80px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e404efc726cac842eea7ce49d3931134848f7e9a07f2d28e23803ba82bc0bcfa?placeholderIfAbsent=true"
          alt="Daynote App Preview"
          className="aspect-[0.49] object-contain w-[300px] max-h-[60vh]"
        />
      </div>

      {/* Desktop product image - fixed and vertically centered */}
      <ProductImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/e404efc726cac842eea7ce49d3931134848f7e9a07f2d28e23803ba82bc0bcfa?placeholderIfAbsent=true" />
    </section>
  );
};
