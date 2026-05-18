
import React, { useState } from 'react';

interface OrganicImageFrameProps {
  imageUrl: string;
  altText: string;
  className?: string;
  borderWidth?: number;
  borderColor?: string;
  removeBackground?: boolean;
  removeShadow?: boolean;
  isEllipse?: boolean;
  aspectRatio?: '16/9' | '4/3' | '1/1';
  roundedCorners?: boolean;
  showShadow?: boolean;
}

const OrganicImageFrame = ({ 
  imageUrl, 
  altText, 
  className = '',
  borderWidth = 0,
  borderColor = 'transparent',
  removeBackground = false,
  removeShadow = true,
  isEllipse = false,
  aspectRatio = '4/3',
  roundedCorners = true,
  showShadow = false
}: OrganicImageFrameProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Determine the border radius based on style options
  const borderRadiusStyle = isEllipse 
    ? '50%' 
    : roundedCorners ? '16px' : '0';

  // Modify image URL to WebP if not already
  const getOptimizedImageUrl = (url: string) => {
    // Handle missing URL
    if (!url) {
      console.error('No image URL provided');
      return '';
    }

    // Don't modify local project images
    if (url.startsWith('/') || url.startsWith('data:') || url.startsWith('blob:')) {
      return url;
    }
    
    try {
      // Convert to WebP for external images
      if (url.includes('unsplash.com') && !url.includes('&fm=webp')) {
        return `${url}&fm=webp&q=80`;
      }
    } catch (error) {
      console.error('Error optimizing image URL:', error);
    }
    
    return url;
  };

  const optimizedImageUrl = getOptimizedImageUrl(imageUrl);
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  
  const handleImageError = () => {
    console.error(`Failed to load image: ${imageUrl}`);
    setHasError(true);
    setIsLoading(false);
  };

  // Check if URL is valid before rendering
  if (!imageUrl) {
    return (
      <div className={`bg-gray-100 ${className}`} style={{ aspectRatio }}>
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <span className="text-red-500 text-sm">Missing image URL</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div 
        className={`w-full h-full relative overflow-hidden`}
        style={{ 
          borderWidth: `${borderWidth}px`,
          borderColor: borderColor,
          borderStyle: borderWidth > 0 ? 'solid' : 'none',
          borderRadius: borderRadiusStyle,
          boxShadow: showShadow ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
          aspectRatio: aspectRatio
        }}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-8 h-8 border-4 border-[#2A92D8] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 p-4 text-center">
            <span className="text-red-500 text-sm">Image could not be loaded</span>
            <span className="text-xs text-gray-500 mt-1">{altText}</span>
          </div>
        )}
        
        <img 
          src={optimizedImageUrl} 
          alt={altText} 
          className={`w-full h-full object-cover ${
            isEllipse ? 'rounded-full' : roundedCorners ? 'rounded-[16px]' : ''
          } ${
            removeBackground ? 'mix-blend-multiply' : ''
          } ${
            isLoading || hasError ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-300`}
          loading="lazy"
          style={{
            filter: removeBackground ? 'contrast(1.1) brightness(1.1)' : 'none'
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
    </div>
  );
};

export default OrganicImageFrame;
