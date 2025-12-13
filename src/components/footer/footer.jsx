import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faDropbox,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const sociaIcons = [
  { icon: faTwitter, href: "#!" },
  { icon: faFacebook, href: "#!" },
  { icon: faLinkedin, href: "#!" },
  { icon: faDropbox, href: "#!" },
  { icon: faInstagram, href: "#!" },
];

const SocialItem = ({ social }) => (
  <li>
    <a href={social.href} className="text-gray-300 text-2xl opacity-60 hover:opacity-100 hover:text-white transition">
      <FontAwesomeIcon icon={social.icon} />
    </a>
  </li>
);

SocialItem.propTypes = {
  social: PropTypes.object.isRequired,
};

const Footer11 = () => {
  return (
    <footer className="bg-[#0b1727] text-white py-12 md:py-20 tracking-wide font-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between">

          {/* Left Section */}
          <div className="flex flex-col md:flex-row md:w-1/2 xl:w-2/5">
            <a href="#!" className="min-w-[80px] w-[80px] md:min-w-[110px] md:w-[110px]">
              <img
                src="/company-pic.svg"
                alt="Logo"
                className="w-full h-auto"
              />
            </a>

            <div className="mt-4 md:mt-0 md:ps-6">
              <h3 className="text-xl font-light mb-3 text-bold">
                COMPANY-IT <span className=" text-sm font-serif">Software Company</span>
              </h3>
              <p className="text-gray-300 text-base leading-6 opacity-70">
                COMPANY-IT | Nationally 
                [
                  <span>
                    <span style={{color : '#FF9933'}}>I</span>
                    <span style={{color : '#FF9933'}}>N</span>
                    <span style={{color : '#FFFFFF'}}>D</span>
                    <span style={{color : '#138808'}}>I</span>
                    <span style={{color : '#138808'}}>A</span>
                  </span>
                ] 
                 proven , globally ambitious. Partner with us as we expand
                 our vision worldwide.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-8 md:mt-0 md:w-1/2 xl:w-2/5">
            <h3 className="text-xl font-light mb-4">Find Us On</h3>

            <ul className="flex justify-center md:justify-start space-x-6">
              {sociaIcons.map((social, i) => (
                <SocialItem social={social} key={i} />
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-300 text-sm opacity-70">
            Copyright ADKD {new Date().getFullYear()}, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer11;
