import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";

import jblLogo from "../assets/jbl-logo.png";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "PRODUCT", path: "/product" },
  { label: "BLOG", path: "/blog" },
  { label: "ABOUT US", path: "/about" },
  { label: "CONTACT US", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
      <nav className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4">
  <div
    className="
      navbar-glass
      w-full
      max-w-[1387px]
      h-[77px]
      rounded-[18px]
      border-t
      border-b
      border-l-[5px]
      border-r-[5px]
      border-white/20
      px-8
      flex
      items-center
      justify-between
    "
  >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={jblLogo}
            alt="JBL"
            className="w-[53px] h-[44px] top-[26px] left-[299px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-[742px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`
                relative
                font-['Oswald']
                text-[24px]
                font-normal
                uppercase
                transition-all
                duration-300
                ${
                  location.pathname === link.path
                    ? "text-[#FF6B00]"
                    : "text-white hover:text-[#FF6B00]"
                }
              `}
            >
              {link.label}

              {location.pathname === link.path && (
                <span className="absolute left-0 right-0 -bottom-2 h-[2px] bg-[#FF6B00]" />
              )}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button className="text-white hover:text-[#FF6B00] transition-colors">
            <FiSearch size={22} />
          </button>

          <button className="hidden sm:block text-white hover:text-[#FF6B00] transition-colors">
            <FiUser size={22} />
          </button>

          <button className="hidden sm:block text-white hover:text-[#FF6B00] transition-colors">
            <FiHeart size={22} />
          </button>

          <button className="text-white hover:text-[#FF6B00] transition-colors">
            <FiShoppingCart size={22} />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="
            absolute
            top-[90px]
            w-[95%]
            max-w-[1387px]
            rounded-[18px]
            border
            border-white/20
            bg-black/80
            backdrop-blur-xl
            p-6
            md:hidden
          "
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`
                  font-['Oswald']
                  text-[22px]
                  uppercase
                  ${
                    location.pathname === link.path
                      ? "text-[#FF6B00]"
                      : "text-white"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}