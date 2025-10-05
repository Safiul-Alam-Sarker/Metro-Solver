import React from "react";
import { Star } from "lucide-react";

const ReviewCard = ({ img, name, designation, review, rating, company }) => {
  return (
    <div className="bg-white/10 text-white p-6 rounded-xl shadow-lg flex-shrink-0 w-80 flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <img
          src={img}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-white"
        />
        <div className="flex space-x-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} className="text-yellow-400 w-5 h-5" />
            ))}
        </div>
      </div>
      <p className="text-white font-semibold mb-3">
        {name} | <span className="text-gray-300">{designation}</span>
      </p>

      <p className="text-left text-gray-200 mb-4">&quot;{review}&quot;</p>

      <p className="text-gray-400 text-sm">
        ⭐ {rating} | {company}
      </p>
    </div>
  );
};

export default ReviewCard;
