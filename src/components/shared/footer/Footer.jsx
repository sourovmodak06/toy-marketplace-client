import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import {
  FaEnvelopeOpen,
  FaFacebook,
  FaInstagram,
  FaMobileAlt,
  FaRedditAlien,
  FaTelegramPlane,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import daraz from "../../../../public/images/daraz.png";
import redx from "../../../../public/images/redx.svg";
import pandamart from "../../../../public/images/pandamart.png";
import fedex from "../../../../public/images/fedex.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-auto text-[#ffc600]">
      <div className="w-full bg-[#385a64] py-5 px-6 md:px-14">
        <div className="flex flex-col md:flex-row justify-between mb-5">
          <div>
            <Link to="/">
              <Logo></Logo>
            </Link>
            <div className="py-5">
              <h2 className="flex items-center gap-2 md:gap-4">
                <FaMobileAlt></FaMobileAlt>
                <span>+8801600000000</span>
              </h2>
              <h2 className="flex items-center gap-2 md:gap-4">
                <FaEnvelopeOpen></FaEnvelopeOpen>
                <span>info@superherotoystore.com</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72">
            <h2 className="uppercase font-medium text-2xl pb-5 pt-2">
              Address
            </h2>
            <h3>
              House#05 (8th Floor), Road# 20, Baridhara, Block J, Dhaka - 1212.
            </h3>
          </div>
          <div>
            <h2 className="font-medium text-2xl pb-5 pt-2">ONLINE PARTNERS</h2>
            <div>
              <img src={daraz} alt="daraz" className="w-28 h-5 md:h-10" />
              <img src={redx} alt="redx" className="h-5 md:h-10 my-2" />
              <img src={pandamart} alt="pandamart" className="w-28 " />
              <img src={fedex} alt="fedex" className=" h-5 md:h-10 mt-2" />
            </div>
          </div>
          <div>
            <h2 className="uppercase font-medium text-2xl pb-5 pt-2">
              Our media links
            </h2>
            <div className="flex gap-4">
              <Link to={"https://www.facebook.com/"}>
                <FaFacebook className="text-4xl"></FaFacebook>
              </Link>
              <Link to={"https://twitter.com/"}>
                <FaTwitter className="text-4xl"></FaTwitter>
              </Link>
              <Link to={"https://www.instagram.com/"}>
                <FaInstagram className="text-4xl"></FaInstagram>
              </Link>
              <Link to={"https://www.tiktok.com/"}>
                <FaTiktok className="text-4xl"></FaTiktok>
              </Link>
              <Link to={"https://telegram.org/"}>
                <FaTelegramPlane className="text-4xl"></FaTelegramPlane>
              </Link>
              <Link to={"https://www.whatsapp.com/"}>
                <FaWhatsapp className="text-4xl"></FaWhatsapp>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-5">
          <div>
            <h2 className="py-5 md:py-0 font-normal">
              &copy;{year} SuperHero ToyStore. All Rights Reserved
            </h2>
          </div>
          <div>
            <p className="font-normal">Powered by SuperHero ToyStore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
