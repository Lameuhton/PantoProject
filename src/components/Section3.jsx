"use client"
import React from 'react'
import { useState } from "react";

const Section3 = () => {
  const [selected, setSelected] = useState("Chair");

  const categories = ["Chair", "Beds", "Sofa", "Lamp"];

  return (
    <section className=" bg-grey1 w-full flex flex-col items-center">
      <h2 className="h2 pt-14 pb-11"> Best Selling Product</h2>

      <div className="relative flex bg-grey3 rounded-full py-2 space-x-2">
        <div
          className="absolute bg-white rounded-full transform transition-all duration-300 mx-2"
          style={{
            left: `${categories.indexOf(selected) * 80}px`,
            width: "70px",
            height: "70%",
          }}
        ></div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`z-10 font-normal rounded-full px-4 py-2 transition-colors duration-300  ${
              selected === category
                ? "text-black"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Section3;
