import React from "react";
import img from "../../assets/zara.png";

const Brand = () => {
  const brands = [img, img, img, img, img, img, img];

  return (
    <div className=" bg-red-500 overflow-hidden bg-transparent py-6">
      <div className="flex items-center whitespace-nowrap animate-scroll">
        {[...brands, ...brands].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-15 py-6 rounded-xl bg-white/20  mx-15 opacity-80 hover:opacity-100 transition"
          >
            <img
              src={logo}
              alt={`Brand ${i}`}
              className="h-20 px-5 py-5 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            display: inline-flex;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Brand;
