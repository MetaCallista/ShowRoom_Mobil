import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return <div className="w-full bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center">No Images</div>;
  }
  
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <img src={mainImage} alt="Main car view" className="w-full h-auto rounded-lg shadow-md aspect-[4/3] object-cover" />
      <div className="grid grid-cols-5 gap-2 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-full h-auto rounded cursor-pointer aspect-video object-cover transition-all duration-200 ${mainImage === img ? 'ring-2 ring-blue-500' : 'hover:opacity-80'}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;