import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function calculateTimeRemaining() {
    const currentTime = new Date().getTime();
    const difference = targetDate - currentTime;

    if (difference <= 0) {
      // Timer expired
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  return (
    <div>
      <div className="bg-[#0000004b] mx-10 md:mx-0 md:px-10 h-24 md:h-32 rounded-2xl">
        <div className="flex justify-center items-center h-24 md:h-32 gap-2 md:gap-20">
          <div className="flex flex-col items-center gap-0 md:gap-2">
            <h2 className="text-2xl md:text-4xl font-bold">{remainingTime.days}</h2>
            <h2 className="text-xl md:text-3xl font-medium">Days</h2>
          </div>
          <div>
            <p className="text-white text-xs md:text-2xl">&#9830;</p>
            <p className="md:-mt-2 text-white text-xs md:text-2xl">&#9830;</p>
          </div>
          <div className="flex flex-col items-center gap-0 md:gap-2">
            <h2 className="text-2xl md:text-4xl font-bold">{remainingTime.hours}</h2>
            <h2 className="text-xl md:text-3xl font-medium">Hrs</h2>
          </div>
          <div>
            <p className="text-white text-xs md:text-2xl">&#9830;</p>
            <p className="md:-mt-2 text-white text-xs md:text-2xl">&#9830;</p>
          </div>
          <div className="flex flex-col items-center gap-0 md:gap-2">
            <h2 className="text-2xl md:text-4xl font-bold">{remainingTime.minutes}</h2>
            <h2 className="text-xl md:text-3xl font-medium">Mins</h2>
          </div>
          <div>
            <p className="text-white text-xs md:text-2xl">&#9830;</p>
            <p className="md:-mt-2 text-white text-xs md:text-2xl">&#9830;</p>
          </div>
          <div className="flex flex-col items-center gap-0 md:gap-2">
            <h2 className="text-2xl md:text-4xl font-bold">{remainingTime.seconds}</h2>
            <h2 className="text-xl md:text-3xl font-medium">Secs</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
