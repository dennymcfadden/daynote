
import React from "react";
import { Logo } from "./Logo";
import { EmailSignupForm } from "./EmailSignupForm";
import { ProductImage } from "./ProductImage";
import { useIsMobile } from "@/hooks/use-mobile";
export const ComingSoon: React.FC = () => {
  const isMobile = useIsMobile();
  return <section aria-labelledby="coming-soon-title" className={`flex items-center gap-[40px_94px] overflow-hidden justify-center flex-wrap
        px-5 sm:px-8 md:px-12 lg:px-32 xl:px-48 2xl:px-64
        ${isMobile ? 'pt-[34px] pb-[68px]' : 'py-[68px]'}`}>
      <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <img src="/lovable-uploads/a1709f56-bd59-4c3b-ade3-b0bad52f96bc.png" alt="Daynote App Icon" className="w-16 h-16 mb-10" />
        
        <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d11b44df90ee0b06bf7f08ab6fed9c03ca5f4f48ec41d161e8dc6389f3b533e?placeholderIfAbsent=true" className="aspect-[4.65] w-64 max-w-full" />

        <article className="text-black text-2xl font-medium mt-9 max-md:max-w-full max-md:mt-5">
          <p className="leading-relaxed text-lg md:text-lg max-md:text-base text-gray-600">Daynote is the best way to journal because it's the journal that you will actually use. One audio note per day, automagically transcribed, zippity zap.</p>
          <p className="mt-6 leading-relaxed text-lg md:text-lg max-md:text-base text-gray-600">Journal entries are organized by date, year-over-year, creating threads from the rituals that matter most.</p>
        </article>

        <EmailSignupForm />
      </div>

      <ProductImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/e404efc726cac842eea7ce49d3931134848f7e9a07f2d28e23803ba82bc0bcfa?placeholderIfAbsent=true" />
    </section>;
};
