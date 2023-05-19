import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "/images/c-img-1.jpg";
import img2 from "/images/c-img-2.jpg";
import img3 from "/images/c-img-3.jpg";

AOS.init();

const Suggest = () => {
  return (
    <div className="py-10 overflow-hidden">
      <h2 className="text-center text-[#385a64] text-4xl font-semibold uppercase pb-5 md:pb-10 underline md:w-1/2 m-auto decoration-wavy decoration-yellow-300 underline-offset-4">
        It's never been easier to invest in your kid's toys
      </h2>
      <div className="flex flex-col gap-4 md:gap-10">
        <div data-aos="fade-up-left" data-aos-delay="50" data-aos-duration="1000" data-aos-offset="200">
          <div className="flex flex-col md:flex-row-reverse md:relative">
            <img src={img1} alt="img" className="h-96 md:w-1/2 border-4 border-yellow-300"/>
            <div className="md:absolute md:top-1/4 md:right-[40%] bg-white md:w-1/2 py-10 px-5 md:rounded-3xl">
                <h2 className="text-3xl font-semibold">Toys are all your baby need better toys for better growth</h2>
                <p>Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus magna.</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up-right" data-aos-delay="50" data-aos-duration="1000" data-aos-offset="200">
          <div className="flex flex-col md:flex-row md:relative">
            <img src={img2} alt="img" className="h-96 md:w-1/2 border-4 border-yellow-300"/>
            <div className="md:absolute md:top-1/4 md:left-[40%] bg-white md:w-1/2 py-10 px-5 md:rounded-3xl">
                <h2 className="text-3xl font-semibold">Creative modern wooden toys for kids development</h2>
                <p>Ut faucibus pulvinar elementum integer enim neque volutpat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Elit scelerisque mauris pellentesque pulvinar pellentesque tristique.</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-down-left" data-aos-delay="50" data-aos-duration="1000" data-aos-offset="200">
          <div className="flex flex-col md:flex-row-reverse md:relative">
            <img src={img3} alt="img" className="h-96 md:w-1/2 border-4 border-yellow-300"/>
            <div className="md:absolute md:top-1/4 md:right-[40%] bg-white md:w-1/2 py-10 px-5 md:rounded-3xl">
                <h2 className="text-3xl font-semibold">Wooden toys that will delight your little one a lot</h2>
                <p>Nisl vel pretium lectus quam id leo in vitae. Eros in cursus turpis massa. Blandit massa enim nec dui nunc. Turpis in eu mi bibendum neque egestas. Viverra nam libero justo laoreet sit amet cursus sit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggest;
