"use client"
import React from 'react'
import RatingSlider from './RatingSlider';

const Testimonials = () => {

  return (
    <section className='flex flex-col items-center'>
      <p className="text-orange uppercase tracking-widest font-medium mb-3">
        Testimonials
      </p>
      <h2 className="h2">Our Client Reviews</h2>

      <RatingSlider />
    </section>
  );
}

export default Testimonials