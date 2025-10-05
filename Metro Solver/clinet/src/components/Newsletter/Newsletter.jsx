import React from "react";
import logo from "../../assets/Frame_1.gif";
import { Sparkles } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="container mx-auto px-5 py-12 flex justify-center">
      <div className="bg-white/20 backdrop-blur-md rounded-xl w-full max-w-4xl p-8 flex flex-col gap-8 items-center">
        <div className="flex items-center gap-4 justify-center">
          <img
            src={logo}
            alt="Company Logo"
            className="w-24 h-24 object-contain"
          />
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold text-white">
              METRO SOLVER
            </span>
            <p className="w-full text-center text-white uppercase tracking-widest truncate">
              YOUR IT PARTNER
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-lg md:text-xl font-bold text-white mb-2">
              Subscribe to our Newsletter
            </h1>
            <p className="text-gray-200 text-xs md:text-base">
              Join 250,000+ subscribers and get the latest updates directly in
              your inbox.
            </p>
          </div>

          <div className="flex-1 md:flex-none flex justify-center md:justify-end w-full max-w-md mt-4 md:mt-0">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full py-4 px-8 pr-32 text-black bg-white focus:outline-none"
              />
              <button className="flex jusify-center items-center absolute right-1 top-1 bottom-1 bg-purple-900 hover:bg-purple-700 text-white px-6 rounded-full transition">
                <Sparkles />
                <p className="ml-3 text-xs md:text-base">Subscribe</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
