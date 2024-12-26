import React from "react";
import Button from "./Button";
import Image from "next/image";
import carImage from "@/public/images/car1.png";
import shapeImage from "@/public/images/shape.png";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <h1 className="text-4xl font-semibold text-slate-800">
        Find, Book, or Rent a Car <br /> -quickly and easily!
      </h1>
      <p className="text-slate-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda odio
        inventore omnis similique laborum laudantium aut quasi, distinctio
        labore deserunt illum beatae impedit tempore quibusdam.
      </p>

      <Button />

      <div className="w-full relative">
        <div className="flex justify-center items-end">
          <Image src={carImage} alt="car" className="" />
        </div>

        <div className="absolute top-0 lg:right-28 md:right-0 sm:-right-10 xl:right-40 -z-10 bg-gradient-to-tr from-blue-700 to-blue-400 w-[600px] h-[400px] rounded-full"></div>
        
      </div>
    </div>
  );
};

export default Hero;
