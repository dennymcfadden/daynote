import React from "react";
interface ProductImageProps {
  className?: string;
}
export const ProductImage: React.FC<ProductImageProps> = ({
  className = ""
}) => {
  return <div className={`self-start min-w-60 w-[380px] max-md:max-w-full pb-0 ${className}`}>
      <img alt="Daynote App Preview" src="/lovable-uploads/55072a03-2897-487d-9801-56544e07347e.png" className="aspect-[0.49] object-contain w-full max-h-[50vh] max-md:max-w-full" />
    </div>;
};