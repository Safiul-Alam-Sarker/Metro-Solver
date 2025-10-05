import React from "react";
import { MoveUpRight } from "lucide-react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div
      className={`bg-white/10 shadow-lg rounded-xl p-6 flex flex-col md:items-start text-left hover:shadow-2xl transition`}
    >
      {icon && <div className={`mb-6 md:mb-6 `}>{icon}</div>}

      <div className="flex-1">
        <h3 className={`text-xl font-semibold mb-2`}>{title}</h3>
        <p className={` mb-4`}>{description}</p>

        <button
          style={{ color: "lightblue" }}
          className={`flex items-center gap-2 font-semibold hover:underline transition text-red-500 `}
        >
          Read More <MoveUpRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
