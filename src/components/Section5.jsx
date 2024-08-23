import React from "react";
import MoreInfo from "./MoreInfo";

const Section5 = () => {
  return (
    <section className="grid grid-cols-2 items-center gap-10 pb-52">
      <div className="pl-20 flex flex-col gap-8">
        <p className="text-orange uppercase tracking-widest font-medium">
          Materials
        </p>
        <h2 className="h2 leading-snug w-[70%]">
          Very Serious Materials For Making Furniture
        </h2>
        <p className="p w-[90%]">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <MoreInfo />
      </div>
      <img
        src="/Background5.svg"
        alt="Multiples images of furnitures"
        className=" place-self-end"
      />
    </section>
  );
};

export default Section5;
