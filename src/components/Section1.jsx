"use client";
import { FiSearch, FiX } from "react-icons/fi";


export default function Section1() {
  return (
    <section className="bg-[url('/backgroundHomepage.png')] h-[1084px] bg-cover bg-center mask-gradient-sm">
      <div className="pt-40 px-64 2xl:px-72 text-center flex flex-col items-center">
        <h1 className="h1">Make Your Interior More Minimalistic & Modern</h1>
        <p className="pt-5 text-[24px] text-white font-extralight leading-10 w-[80%] 2xl:px-28 mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        <form className="relative w-[344px] sm:mx-4 mt-12 text-white">
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full py-4 pl-5 pr-10 border-white border-[1px] rounded-full focus:outline-none text-[18px] backdrop-blur-[1px] bg-white text-white bg-opacity-20"
          />
          <div className="absolute inset-y-0 right-2 top-2 flex items-center cursor-pointer rounded-3xl px-3 h-[45px] w-[47px] bg-orange">
            <FiSearch className=" text-white hover:text-gold transition-colors duration-300 text-3xl" />
          </div>
        </form>
      </div>
    </section>
  );
}
