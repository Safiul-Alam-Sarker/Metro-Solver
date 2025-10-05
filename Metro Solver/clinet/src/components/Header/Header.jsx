import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  MessageCircle,
  Gift,
  LogOut,
  Handshake,
  Users,
  BookOpen,
  Newspaper,
  FileSearch,
  Briefcase,
  CircleDollarSign,
  ShieldCheck,
  Clipboard,
} from "lucide-react";

import logo from "../../assets/Frame.gif";
import profilepic from "../../assets/profile.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="w-full ">
      {/* Desktop Navbar */}
      <div className=" hidden md:flex justify-between items-center px-8 py-3">
        <div className="text-2xl font-bold text-gray-900">
          <Link to="">
            <img src={logo} />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="rounded-4xl p-4 flex gap-8">
          <NavLink
            to=""
            className={({ isActive }) =>
              `${
                isActive ? "ismodule-border-wrap  border-2" : ""
              } text-white hover:text-gray-300 font-medium transition px-3 py-2 rounded-full`
            }
          >
            <div className="px-4">Home</div>
          </NavLink>

          <NavLink
            to="about"
            className={({ isActive }) =>
              `${
                isActive ? "ismodule-border-wrap  border-2" : ""
              } text-white hover:text-gray-300 font-medium transition px-3 py-2 rounded-full`
            }
          >
            <div className="px-4">About Us</div>
          </NavLink>

          <NavLink
            to="service"
            className={({ isActive }) =>
              `${
                isActive ? "ismodule-border-wrap  border-2" : ""
              } text-white hover:text-gray-300 font-medium transition px-3 py-2 rounded-full`
            }
          >
            <div className="px-4">Services</div>
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              `${
                isActive ? "ismodule-border-wrap border-2" : ""
              } text-white hover:text-gray-300 font-medium transition px-3 py-2 rounded-full `
            }
          >
            <div className="px-4">Contact Us</div>
          </NavLink>
        </nav>

        <div className="flex items-center gap-4 relative">
          <button className="p-2 hover:bg-gray-200 transition">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
          </button>

          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition overflow-hidden"
            >
              <img src={profilepic} className="w-full h-full object-cover" />
            </button>
            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200 p-4">
                <div className="flex flex-col justify-center items-center gap-3 pb-3">
                  <img
                    src={profilepic}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <h4 className="font-semibold text-gray-800">John Doe</h4>
                  <p className="text-sm text-gray-500">john@example.com</p>
                </div>

                <div className="flex flex-col gap-3 mt-3 text-gray-700">
                  <Link
                    to="#"
                    className="flex items-center gap-2 hover:text-grey-600"
                  >
                    <User size={18} /> Profile
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center gap-2 hover:text-grey-600"
                  >
                    <Handshake size={18} /> Referrals
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center gap-2 hover:text-grey-600 "
                  >
                    <Gift size={18} /> Rewards{" "}
                    <button className="m1-3 btn_bg p-1 px-2 text-white font-bold rounded-lg">
                      468 pts
                    </button>
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center gap-2 hover:text-grey-600"
                  >
                    <LogOut size={18} /> Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center px-4 py-3">
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 hover:bg-gray-200 transition"
        >
          <Menu className="w-6 h-6 text-gray-800" />
        </button>

        <div className="text-xl font-bold text-gray-900">
          <Link to="#">
            <img src={logo} />
          </Link>
        </div>

        <button className="p-2 hover:bg-gray-200 transition">
          <MessageCircle className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 backdrop-blur-sm z-50">
          <div className="absolute top-15 left-0 h-full w-2/4 bg-white/20 backdrop-blur-lg shadow-2xl rounded-tr-2xl rounded-br-3xl p-6 [&>*]:text-white">
            <div className="relative p-4">
              <div className="flex flex-col justify-center items-center gap-3 pb-3">
                <img
                  src={profilepic}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h4 className="font-semibold text-gray-800">John Doe</h4>
                <p className="text-sm text-gray-500">john@example.com</p>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-2 right-0 p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <div className="flex flex-col gap-4 text-gray-800">
              <Link
                to="#"
                className="hover:text-red-600 flex items-center gap-2"
              >
                <User className="w-5 h-5 text-gray-700" />
                User Profile
              </Link>

              <Link
                to="#"
                className="hover:text-red-600 flex items-center gap-2"
              >
                <Gift className="w-5 h-5 text-gray-700" />
                Rewards
              </Link>

              <Link
                to="#"
                className="hover:text-red-600 flex items-center gap-2"
              >
                <Users className="w-5 h-5 text-gray-700" />
                Team Members
              </Link>

              <Link
                to="#"
                className="hover:text-red-600 flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5 text-gray-700" />
                Our Stories
              </Link>

              <Link
                to="#"
                className="hover:text-red-600 flex items-center gap-2"
              >
                <Newspaper className="w-5 h-5 text-gray-700" />
                Blog & News
              </Link>

              <Link
                to="#"
                className="hover:text-red-600 flex items-center gap-2"
              >
                <FileSearch className="w-5 h-5 text-gray-700" />
                Case Studies
              </Link>

              <Link
                to="#"
                className="hover:text-red-600 flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5 text-gray-700" />
                Careers
              </Link>

              <Link
                to="#"
                className="hover:text-red-600 flex items-center gap-2"
              >
                <CircleDollarSign className="w-5 h-5 text-gray-700" />
                Start Earning
              </Link>

              <Link
                to="#"
                className="hover:text-red-600 flex items-center gap-2"
              >
                <ShieldCheck className="w-5 h-5 text-gray-700" />
                Privacy Policy
              </Link>

              <Link
                to="#"
                className="hover:text-red-600 flex items-center gap-2"
              >
                <Clipboard className="w-5 h-5 text-gray-700" />
                Terms & Conditions
              </Link>

              <Link
                to="#"
                className="hover:text-red-600 flex items-center gap-2"
              >
                <LogOut className="w-5 h-5 text-gray-700" />
                Logout
              </Link>
            </div>
          </div>
          <style>
            {`
                      .btn_bg{
    background: linear-gradient(90deg,rgba(253, 29, 29, 1) 0%, rgba(252, 176, 69, 1) 80%)
}
          
          
          `}
          </style>
        </div>
      )}
    </header>
  );
};

export default Header;
