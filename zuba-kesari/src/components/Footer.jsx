import React from "react";

function Footer() {
  return (
    <footer className="py-4 px-4 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center gap-2 max-w-sm">
        <a href="#">
          <h1 className="text-2xl font-extrabold text-orange-50 tracking-tighter hover:text-orange-700 transition-all duration-300 ">Vimal</h1>
        </a>
        <p className="text-sm text-orange-50 text-center">
          Bimal cannot be held accountable for any health issues, including
          cancer, that may arise from consumption.
        </p>
      </div>
      <p className="text-sm text-orange-100 text-center">
        &copy: {new Date().getFullYear()} Bolo Zubaan Canceri . All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
