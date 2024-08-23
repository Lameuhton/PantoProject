import React from 'react'
import MoreInfo from './MoreInfo'

const Section4 = () => {
  return (
    <section className="grid grid-cols-2 py-64 items-center gap-15">
      <img src="/Background4.svg" alt="Image of a livingroom"/>
      <div className="pr-44 flex flex-col gap-8">
        <p className="text-orange uppercase tracking-widest font-medium">Experiences</p>
        <h2 className="h2 leading-snug w-[80%]">We Provide You The Best Experience</h2>
        <p className="p">
          You don't have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <MoreInfo />
      </div>
    </section>
  );
}

export default Section4
