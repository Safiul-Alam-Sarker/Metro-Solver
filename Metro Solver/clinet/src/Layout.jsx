import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Offer from "./components/offer/Offer";
import backgroundVideo from "./assets/v.mp4";
import backgroundImage from "./assets/Comp1_4.gif";

function Layout() {
  return (
    <div className="relative text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>

      <div className="relative z-10">
        <Offer />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
