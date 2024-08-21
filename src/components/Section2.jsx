import React from "react";
import MoreInfo from "./MoreInfo";

const Section2 = () => {
  return (
    <section className="px-20 grid grid-cols-4 py-40 gap-10 2xl:gap-32">
      <h2 className="h2">Why Choosing Us</h2>
      <div className="flex flex-col gap-4">
        <h3 className="h3">Luxury facilites</h3>
        <p className="p text-[16px]">
          The advantage of hiring a workspace with us is that givees you
          comfortable service and all-around facilites.
        </p>
        <MoreInfo />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="h3">Affordable Price</h3>
        <p className="p text-[16px]">
          You can get a workspace of the highst quality at an affordable price
          and still enjoy the facilites that are only here.
        </p>
        <MoreInfo />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="h3">Many choices</h3>
        <p className="p text-[16px]">
          We provide many unique work space choices so that you can choose the
          workspace to your linking.
        </p>
        <MoreInfo />
      </div>
    </section>
  );
};

export default Section2;
