import React from "react";
import logo from "../../assets/Frame_1.gif";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="container mx-auto rounded-lg p-5 mx-5 py-16 bg-white/10  my-10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        <div className="flex-1 flex flex-col items-center justify-center  md:items-start gap-6">
          <img
            src={logo}
            alt="Metro Solver"
            className="w-24 h-24 object-contain"
          />
          <h2 className="text-2xl md:text-3xl font-bold">
            Still have a question?
          </h2>
          <div className="flex gap-4 mt-4">
            <Facebook
              size={24}
              className="hover:text-blue-500 transition cursor-pointer"
            />
            <Twitter
              size={24}
              className="hover:text-blue-400 transition cursor-pointer"
            />
            <Instagram
              size={24}
              className="hover:text-pink-500 transition cursor-pointer"
            />
            <Linkedin
              size={24}
              className="hover:text-blue-700 transition cursor-pointer"
            />
            <Youtube
              size={24}
              className="hover:text-red-600 transition cursor-pointer"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 [&>*]:border backdrop-blur-md p-6 rounded-xl flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg px-4 py-2 text-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg px-4 py-2 text-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full rounded-lg px-4 py-2 text-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="WhatsApp Number"
            className="w-full rounded-lg px-4 py-2 text-black focus:outline-none"
          />
          <textarea
            placeholder="How can we help?"
            className="w-full rounded-xl px-4 py-3 text-black focus:outline-none resize-none h-32"
          />
          <button className="bg-purple-900 hover:bg-purple-700 text-white font-bold py-3 rounded-full mt-2 transition">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
