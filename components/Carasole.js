// components/Carousel.js


"use client"
import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the Carousel CSS
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

const images = [
  'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?cs=srgb&dl=agriculture-corn-cornfield-1112080.jpg&fm=jpg',
  'https://profugo.org/wp-content/uploads/2013/09/AG.jpg',
  'https://wallpapercave.com/wp/wp7521125.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <ResponsiveCarousel
      showThumbs={false}
      infiniteLoop
      showStatus={false}
      selectedItem={currentIndex}
      onChange={(index) => setCurrentIndex(index)}
      emulateTouch
      swipeable
      autoPlay
      interval={5000}
      className="h-screen"
    >
     {images.map((image, index) => (
  <div key={index} className="w-full h-full flex justify-center items-center">
    <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
  </div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;