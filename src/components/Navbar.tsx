import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-slate-900/90 backdrop-blur-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Phone className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold text-white">SurpriseCall</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition-colors ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition-colors ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition-colors ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              How It Works
            </NavLink>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition-colors ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition-colors ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 px-4 py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition-colors ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition-colors ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition-colors ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              How It Works
            </NavLink>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition-colors ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition-colors ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
