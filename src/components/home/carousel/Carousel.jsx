import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "https://i.ibb.co/0Gs2b8L/DST-Marvel-Select-Movie-Doctor-Strange-Banner.jpg",
      title: "Doctor Strange",
      text: "Doctor Strange, the Sorcerer Supreme, wields mystical powers to protect the realms from supernatural threats.",
    },
    {
      url: "https://i.ibb.co/b3zpG13/Batman-Superman-Worlds-Finest-8-4-Banner-scaled.jpg",
      title: "Superman vs Batman",
      text: "Superman and Batman, two legendary heroes, clash in an epic battle that tests their strength and ideologies.",
    },
    {
      url: "https://i.ibb.co/jffP8h9/JAD98037-Batman-Arkham-Knight-Batmobile.webp",
      title: "Batman",
      text: "Batman, the Dark Knight, patrols Gotham City, using his intelligence, gadgets, and combat skills to fight crime.",
    },

    {
      url: "https://i.ibb.co/FzrhBnD/18675324-10212980702972773-366369504-o-scaled-600.jpg",
      title: "A Star Wars Story",
      text: "A Star Wars Story transports us to captivating new adventures within the vast and beloved Star Wars universe.",
    },
    {
      url: "https://i.ibb.co/5LfSF5C/mb-story-the-avengers-launch-2x.jpg",
      title: "The Avengers",
      text: "The Avengers, Earth's mightiest heroes, assemble to defend the world against formidable threats and save the day.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const [timer, setTimer] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    setTimer(intervalId);
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div className="md:max-w-[1400px] h-[500px] w-full m-auto pb-16 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="bg-gradient-to-r from-[#385a64] to-[#385a641a] w-full h-full">
          <div className="absolute left-0 top-24 md:top-0 md:h-[420px] flex flex-col justify-center px-5 md:px-10 md:w-1/2 md:text-justify">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {slides[currentIndex].title}
            </h2>
            <p className="text-white">{slides[currentIndex].text}</p>
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute bottom-20 -translate-x-0 translate-y-[-50%] right-20 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute bottom-20 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      
    </div>
  );
};

export default Carousel;
