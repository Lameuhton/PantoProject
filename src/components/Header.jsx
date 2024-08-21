"use client";
import { useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-10 grid grid-cols-3 items-center px-20 py-10">
      <p className="self-start justify-self-start text-white text-[28px] font-semibold">
        Panto
      </p>
      <nav className="self-start text-white text-[18px] font-light">
        <ul className="flex justify-between">
          <li className="flex items-center gap-2">
            <div>Furniture</div>
            <MdOutlineKeyboardArrowDown />
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
