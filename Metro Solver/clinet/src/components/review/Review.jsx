import React, { useRef, useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import reviews from "./ReviewData";

const Review = () => {
  const sliderRef = useRef(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: 300 * direction,
          behavior: "smooth",
        });

        const maxScroll =
          sliderRef.current.scrollWidth - sliderRef.current.offsetWidth;

        if (sliderRef.current.scrollLeft >= maxScroll) setDirection(-1);
        if (sliderRef.current.scrollLeft <= 0) setDirection(1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    setDirection(-1);
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    setDirection(1);
  };

  return (
    <section className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          What People Say
        </h1>
        <p className="text-gray-300 mb-12 text-base sm:text-lg md:text-xl">
          See what our customers and partners are saying about our services.
        </p>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          >
            {reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={scrollLeft}
              className="bg-white/10 text-white w-15 h-15  p-4 rounded-full hover:bg-white/20 transition flex items-center justify-center"
            >
              &#8592;
            </button>
            <button
              onClick={scrollRight}
              className="bg-white/10 text-white w-15 h-15 p-4 rounded-full hover:bg-white/20 transition flex items-center justify-center"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
