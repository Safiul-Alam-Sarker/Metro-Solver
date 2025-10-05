import React, { useState, useRef } from "react";
import img from "../../assets/profile.jpg";

const storiesData = [
  {
    img,
    title: "How Our Service Helped Transform Business A",
    description:
      "We helped Business A scale rapidly using our tools and strategies...",
  },
  {
    img,
    title: "Case Study: Improving Efficiency in Company B",
    description:
      "Company B improved operational efficiency by 40% with our solutions...",
  },
  {
    img,
    title: "Blog Insight: Marketing Trends 2025",
    description:
      "Explore the latest marketing trends and how to leverage them effectively...",
  },
];

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState("Success Stories");
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const tabs = ["Success Stories", "Case Studies", "Blog & News"];

  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Success Stories, Case Studies & Blog
        </h1>
        <p className="text-gray-300 mb-8 text-center">
          Explore our latest success stories, <br />
          in-depth case studies, and informative blogs.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full border ${
                activeTab === tab
                  ? "bg-white/20 text-white border-purple-600"
                  : "border-gray-500 text-gray-300 hover:bg-gray-700"
              } transition`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="hidden md:flex flex-row justify-center gap-6">
          {storiesData.map((story, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg w-1/3 flex flex-col"
            >
              <img
                src={story.img}
                alt={story.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-xl font-semibold mb-2 line-clamp-2">
                    {story.title}
                  </h4>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {story.description}
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap mb-4">
                  <button className="px-3 py-1 bg-white/10 rounded-full text-white text-sm hover:bg-white/20 transition">
                    Action 1
                  </button>
                  <button className="px-3 py-1 bg-white/10 rounded-full text-white text-sm hover:bg-white/20 transition">
                    Action 2
                  </button>
                  <button className="px-3 py-1 bg-white/10 rounded-full text-white text-sm hover:bg-white/20 transition">
                    Action 3
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden relative">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide"
          >
            {storiesData.map((story, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex-shrink-0 w-80 snap-center flex flex-col"
              >
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 line-clamp-2">
                      {story.title}
                    </h4>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {story.description}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap mb-4">
                    <button className="px-3 py-1 bg-white/10 rounded-full text-white text-sm hover:bg-white/20 transition">
                      Action 1
                    </button>
                    <button className="px-3 py-1 bg-white/10 rounded-full text-white text-sm hover:bg-white/20 transition">
                      Action 2
                    </button>
                    <button className="px-3 py-1 bg-white/10 rounded-full text-white text-sm hover:bg-white/20 transition">
                      Action 3
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() =>
                sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
              }
              className="bg-white/10 text-white w-15 h-15 p-4 rounded-full hover:bg-white/40 transition"
            >
              &#8592;
            </button>
            <button
              onClick={() =>
                sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
              }
              className="bg-white/10 text-white w-15 h-15 p-4 rounded-full hover:bg-white/40 transition"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-6  py-4 bg-white/30 border-2 border-purple-600 rounded-full text-white font-semibold hover:bg-red-700 transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
