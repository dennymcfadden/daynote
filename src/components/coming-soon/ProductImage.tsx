import React from "react";
interface ProductImageProps {
  src?: string;
  className?: string;
}
export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  className = ""
}) => {
  return <div className={`self-start min-w-60 w-[380px] max-md:max-w-full ${className}`}>
      <img alt="Daynote App Preview" className="aspect-[0.49] object-contain w-full max-h-[80vh] max-md:max-w-full" src="/lovable-uploads/382bff46-fa2c-4c87-8a95-3c7e8d39efb7.png" />
    </div>;
};