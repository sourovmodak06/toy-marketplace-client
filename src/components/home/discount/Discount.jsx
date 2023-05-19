import React from "react";
import bg from "/images/bg.jpg";
import CountdownTimer from "./CountdownTimer";

const Discount = () => {
  const targetDate = new Date("2023-06-20T00:00:00Z").getTime();
  return (
    <div>
      <div className="relative">
        <img src={bg} alt="bg" className="w-full h-full md:h-[90vh]" />
        <div className="absolute top-0 w-full h-full md:h-[90vh] bg-[#385a6441] text-white">
          <div className="flex flex-col md:h-[90vh] items-center justify-center">
            <div className="py-5 md:py-10">
              <h2 className="text-center text-2xl md:text-4xl font-semibold w-3/4 m-auto">
                15% Discount On All Super Hero Toy Store
              </h2>
              <p className="text-center py-2 md:py-5 font-bold">
                Offer Expires on
              </p>
              <div>
                <CountdownTimer targetDate={targetDate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
