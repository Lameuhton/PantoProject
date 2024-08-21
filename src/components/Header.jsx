"use client"
import { useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Header() {

    const headerRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          headerRef.current.classList.add(
            "backdrop-blur-[6px]",
            "mask-gradient"
          );
        } else {
          headerRef.current.classList.remove(
            "backdrop-blur-[6px]",
            "mask-gradient"
          );
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-50 bg-transparent transition-all duration-500 grid grid-cols-3 items-center px-20 py-10"
    >
      <p className="self-start justify-self-start text-white text-[28px] font-semibold">
        Panto
      </p>
      <nav className="self-start text-white text-[18px] font-light">
        <ul className="flex justify-between">
          <li className="flex items-center gap-2">
            <div>Furniture</div>
            <MdOutlineKeyboardArrowDown/>
          </li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <img
        src="/CartIcon.png"
        alt="Icon of a cart"
        className="flex self-start justify-self-end"
      />
    </header>
  );
}
