import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-shrink-0 items-center justify-center">
      <span className="text-2xl pt-10 text-neutral-400 ">&copy;</span><img className="mx-2 w-28 pt-10" src={logo} alt="profile-logo" />
    </div>
  );
};

export default Footer;
