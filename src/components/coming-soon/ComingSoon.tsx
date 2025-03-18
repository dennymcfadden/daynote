import React from "react";
import { Logo } from "./Logo";
import { EmailSignupForm } from "./EmailSignupForm";
import { ProductImage } from "./ProductImage";
export const ComingSoon: React.FC = () => {
  return <section aria-labelledby="coming-soon-title" className="bg-[rgba(243,239,236,1)] flex items-center gap-[40px_94px] overflow-hidden justify-center flex-wrap px-[187px] max-md:px-5 py-[68px]">
      <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <img src="/lovable-uploads/a1709f56-bd59-4c3b-ade3-b0bad52f96bc.png" alt="Daynote App Icon" className="w-16 h-16 mb-4" />
        
        <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d11b44df90ee0b06bf7f08ab6fed9c03ca5f4f48ec41d161e8dc6389f3b533e?placeholderIfAbsent=true" className="aspect-[4.65] w-64 max-w-full" />

        <article className="text-black text-2xl font-medium mt-9 max-md:max-w-full max-md:mt-5">
          <p className="leading-relaxed text-lg">Daynote is the best way to journal because it's the journal that you will actually use. One audio note per day—automatically transcribed—snappy, happy.</p>
          <p className="mt-6 leading-relaxed text-lg">Journal entries are organized by date, year-over-year, connecting the moments that matter most. Every birthday, every solstice, every first day of school, connected in threads that add meaning to your memories.</p>
        </article>

        <EmailSignupForm />
      </div>

      <ProductImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/e404efc726cac842eea7ce49d3931134848f7e9a07f2d28e23803ba82bc0bcfa?placeholderIfAbsent=true" />
    </section>;
};