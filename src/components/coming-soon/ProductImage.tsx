
import React from "react";

interface ProductImageProps {
  src: string;
  className?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  className = "",
}) => {
  return (
    <div
      className={`hidden md:block fixed right-0 top-1/2 -translate-y-1/2 w-[380px] ${className}`}
    >
      <img
        src={src}
        alt="Daynote App Preview"
        className="aspect-[0.49] object-contain w-full max-h-[80vh] rounded-[0px_0px_0px_0px]"
      />
    </div>
  );
};
