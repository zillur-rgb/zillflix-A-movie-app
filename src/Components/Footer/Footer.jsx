import React from "react";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-800 mx-auto w-full my-8 p-8 rounded-md">
      <p className="text-gray-700 flex items-center gap-1 justify-center">
        Copyright <MdCopyright /> {year} | MD Zillur Rahman
      </p>
    </div>
  );
};

export default Footer;
