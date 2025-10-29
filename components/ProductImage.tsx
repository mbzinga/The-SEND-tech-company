'use client';

import React from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  productName: string;
}

export function ProductImage({ src, alt, productName }: ProductImageProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://via.placeholder.com/600x400/3b82f6/ffffff?text=${encodeURIComponent(productName)}`;
  };

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={handleError}
    />
  );
}

