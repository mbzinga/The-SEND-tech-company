'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './Button';

interface ProductCardProps {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  slug,
  tagline,
  description,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="aspect-video bg-gray-100 flex items-center justify-center">
        <img
          src={image}
          alt={`${name} product image`}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/400x225/3b82f6/ffffff?text=${encodeURIComponent(name)}`;
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{tagline}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <Link href={`/products/${slug}`}>
          <Button variant="outline" size="sm" className="w-full">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

