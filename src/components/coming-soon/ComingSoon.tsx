import React from "react";
import { Logo } from "./Logo";
import { EmailSignupForm } from "./EmailSignupForm";
import { ProductImage } from "./ProductImage";
export const ComingSoon: React.FC = () => {
  return <section className="bg-[rgba(243,239,236,1)] flex items-center gap-[40px_94px] overflow-hidden justify-center flex-wrap px-[187px] py-[123px] max-md:px-5 max-md:py-[100px]" aria-labelledby="coming-soon-title">
      <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d11b44df90ee0b06bf7f08ab6fed9c03ca5f4f48ec41d161e8dc6389f3b533e?placeholderIfAbsent=true" className="aspect-[4.65] w-64 max-w-full" />

        <article className="text-black text-2xl font-medium leading-9 mt-[72px] max-md:max-w-full max-md:mt-10">
          <p className="text-xl">
            Daynote is a unique way to journal that adds meaning to your
            memories. Entries are organized by day—year over year—connecting the
            moments that matter most.
          </p>
          <p className="mt-6">
            It's easy to capture your stories—just speak, and Daynote will turn
            your words into text and keep everything organized for you
          </p>
        </article>

        <EmailSignupForm />
      </div>

      <ProductImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/e404efc726cac842eea7ce49d3931134848f7e9a07f2d28e23803ba82bc0bcfa?placeholderIfAbsent=true" />
    </section>;
};