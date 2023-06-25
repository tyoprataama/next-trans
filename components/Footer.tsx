import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100">
      <div className="flex items-center flex-wrap mt-10 sm:px-16 px-6 py-10">
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        © 2023{" "}
          Berkah Travel Trans
        . All Rights Reserved.
      </span>
      </div>
    </footer>
  );
}

export default Footer
