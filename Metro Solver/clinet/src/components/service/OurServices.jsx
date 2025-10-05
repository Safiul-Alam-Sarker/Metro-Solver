import React, { useRef } from "react";
import ServiceCard from "./ServiceCard";
import {
  ShoppingCart,
  User,
  Package,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const OurServices = () => {
  const services = [
    {
      title: "E-commerce Solutions",
      description: "Build your online store and increase your sales quickly.",
      icon: <ShoppingCart size={40} />,
    },
    {
      title: "User Management",
      description: "Manage users, profiles, and permissions effortlessly.",
      icon: <User size={40} />,
    },
    {
      title: "Logistics & Delivery",
      description: "Streamlined delivery and supply chain management.",
      icon: <Package size={40} />,
    },
    {
      title: "Analytics & Reports",
      description: "Monitor performance and optimize your business decisions.",
      icon: <Package size={40} />,
    },
    {
      title: "Customer Support",
      description: "Provide fast and friendly support to your customers.",
      icon: <User size={40} />,
    },
    {
      title: "Marketing Solutions",
      description: "Boost your brand visibility with smart marketing tools.",
      icon: <ShoppingCart size={40} />,
    },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 [&>*]:text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h1>
        <p className="text-gray-300 mb-12 text-base sm:text-lg md:text-xl">
          We offer a wide range of services to help your business grow.
          <br /> Explore our solutions tailored to meet your needs.
        </p>

        <div className="hidden lg:grid grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="relative lg:hidden">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          >
            {services.map((service, i) => (
              <div key={i} className="flex-shrink-0 w-72">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={scrollLeft}
              className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
