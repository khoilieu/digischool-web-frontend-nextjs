/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SectionHeading } from "#/SectionHeading";

export function TutorialSection({
  title,
  description,
  badge,
  tutorials,
  ...rest
}) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tutorials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tutorials.length) % tutorials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-base-100 dark:bg-base-900 py-24" {...rest}>
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        
        <div className="max-w-6xl mx-auto mt-16">
          {/* Main Slider Container */}
          <div className="relative">
            {/* Slides */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {tutorials.map((tutorial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="text-center relative">
                      {/* Role Badge - Positioned above the iPhone mockup */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -top-[-25px] z-20">
                        <div className="bg-[#29375C]/70 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                          {tutorial.role}
                        </div>
                      </div>
                      
                      {/* iPhone Mockup Frame */}
                      <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                        {/* Screen */}
                        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                          {/* Video/Image Container */}
                          <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-300">
                            {tutorial.video ? (
                              <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                              >
                                <source src={tutorial.video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            ) : (
                              <img
                                src={tutorial.image}
                                alt={tutorial.title}
                                className="w-full h-full object-cover"
                              />
                            )}
                            
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                              <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 z-10 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 z-10 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {tutorials.length}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {tutorials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-[#29375C] w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
