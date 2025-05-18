import React from "react";
import ajayImage from "../assets/Ajay.png";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto pt-12 px-4 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-8">
        <h1 className="font-bold md:text-6xl text-3xl  text-orange-950 tracking-tighter">
          Bolo Zubaan <span className="text-orange-50">Canceri</span>
        </h1>
        <p className="text-lg md:text-xl text-orange-950">More you eat, sooner you die</p>
      </div>
      <img src={ajayImage} alt=""
        className="w-[80%] md:w-[40%] h-full object-contain"
      />
    </section>
  );
}

export default Hero;
