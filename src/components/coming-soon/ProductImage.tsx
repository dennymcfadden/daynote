
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
      className={`self-stretch min-w-60 w-[380px] my-auto max-md:max-w-full ${className}`}
    >
      <img
        src={src}
        alt="Daynote App Preview"
        className="aspect-[0.49] object-contain w-full max-h-[80vh] rounded-[0px_0px_0px_0px] max-md:max-w-full"
      />
    </div>
  );
};
