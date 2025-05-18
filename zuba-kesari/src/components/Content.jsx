import React from "react";
import Card from "./Card";

function Content() {
  return (
    <section className="bg-orange-50 rounded-2xl shadow-md 
        py-12 px-4 flex flex-col items-center justify-center gap-2 mx-4
    ">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-4xl font-extrabold text-orange-950 tracking-tighter">Cancerous Product</h2>
        <p className="md:text-xl text-orange-950 tracking-tight text-center max-w-sm">
          Discover an extensive selection of highly cancerous products designed
          specifically for you!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
      </div>
    </section>
  );
}

export default Content;
