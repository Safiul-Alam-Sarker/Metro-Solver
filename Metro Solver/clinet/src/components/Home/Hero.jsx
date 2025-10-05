import heroImg from "../../assets/Frame3.gif";
import { Sparkles } from "lucide-react";
import growth from "../../assets/Frame 1229.gif";

const Hero = () => {
  return (
    <section className="container mx-auto relative overflow-hidden">
      <div className="z-10 px-4 flex flex-col md:flex-row items-start md:items-center justify-between min-h-screen">
        <div className="md:w-1/2 flex flex-col justify-center mt-20 md:mt-0">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
            Expert to
            <br /> Digitize Your
          </h1>

          <img src={growth} className="pb-4 w-60 md:80" alt="growth" />
          <p className="text-gray-700 py-4 mb-6 text-lg md:text-xl">
            We are constantly growing or learning and improving. Enter your
            personal real estate sanctuary, where finding the ideal home is
            easy.
          </p>
          <button className="flex items-center bg-red-600 text-white font-bold px-6 py-3 rounded-full text-lg hover:bg-red-700 transition w-max">
            <Sparkles />
            <p className="ml-3">Explore now</p>
          </button>
        </div>
      </div>

      <img
        src={heroImg}
        alt="Hero"
        className="absolute bottom-90 right-0 w-20 h-20 lg:w-32 lg:h-32 rounded-full object-cover shadow-xl m-4"
      />
    </section>
  );
};

export default Hero;
