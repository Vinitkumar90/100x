import React from "react";
import packetImage from "../assets/packet.png";

function Card() {
  return (
    <div className="flex flex-col md:flex-row  justify-center items-center gap-12 bg-orange-100
     p-6 rounded-2xl">
      <img src={packetImage} alt="" width={270} height={270} />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col text-orange-950">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tightere">
            <span className="text-orange-600">Bimal</span> Elaichi
          </h3>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur.
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300">
            Die Now
          </button>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300">
            Die Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
