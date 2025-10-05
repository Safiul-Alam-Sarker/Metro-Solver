import React from "react";

const Offer = () => {
  const offers = [
    "Budget Friendly",
    "No.1 in Europe",
    {
      before: "On your first purchase",
      after: "for all the products buy now get the offer",
    },
    "User Friendly",
    "24/7 Services",
  ];

  return (
    <div className="bg-black">
      <div className="w-screen py-4 bg-white/10 backdrop-blur-lg shadow-2xl  [&>*]:text-white">
        <div className="hidden lg:flex items-center justify-evenly w-full px-4">
          <span className="font-semibold">{offers[0]}</span>
          <span className="font-semibold">{offers[1]}</span>

          <span className="font-semibold flex items-center">
            {offers[2].before}{" "}
            <button className="btn_bg text-white font-bold px-3 mx-2 py-1 rounded-lg hover:bg-red-700 transition mx-1">
              30% OFF
            </button>{" "}
            {offers[2].after}
          </span>

          <span className="font-semibold">{offers[3]}</span>
          <span className="font-semibold">{offers[4]}</span>
        </div>

        <div className="lg:hidden overflow-hidden w-full">
          <div className="whitespace-nowrap animate-marquee flex items-center gap-2 px-4">
            <span className="font-semibold">{offers[0]}</span>
            <span className="mx-1 text-gray-400">·</span>

            <span className="font-semibold">{offers[1]}</span>
            <span className="mx-1 text-gray-400">·</span>

            <span className="font-semibold flex items-center">
              {offers[2].before}{" "}
              <button className="btn_bg text-white font-bold px-3 py-1 rounded-lg hover:bg-red-700 transition mx-1">
                30% OFF
              </button>{" "}
              {offers[2].after}
            </span>
            <span className="mx-1 text-gray-400">·</span>

            <span className="font-semibold">{offers[3]}</span>
            <span className="mx-1 text-gray-400">·</span>
            <span className="font-semibold">{offers[4]}</span>

            <span className="mx-2 font-semibold">{offers[0]}</span>
            <span className="mx-1 text-gray-400">·</span>
            <span className="font-semibold">{offers[1]}</span>
            <span className="mx-1 text-gray-400">·</span>
            <span className="font-semibold flex items-center">
              {offers[2].before}{" "}
              <button className="btn_bg text-white font-bold px-3 py-1 rounded-lg hover:bg-red-700 transition mx-1">
                30% OFF
              </button>{" "}
              {offers[2].after}
            </span>
            <span className="mx-1 text-gray-400">·</span>
            <span className="font-semibold">{offers[3]}</span>
            <span className="mx-1 text-gray-400">·</span>
            <span className="font-semibold">{offers[4]}</span>
          </div>
        </div>

        <style>
          {`
        .btn_bg{
          background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 80%);
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 15s linear infinite;
        }
      `}
        </style>
      </div>
    </div>
  );
};

export default Offer;
