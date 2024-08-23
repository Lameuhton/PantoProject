import React from "react";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

const RatingSlider = () => {
  const cards = [
    {
      background: "/BgCard1.svg",
      name: "John Doe",
      city: "Interior Designer",
      image: "/Profile1.svg",
      comment:
        "Thank you so much! My living room now feels more luxurious and stylish. The furniture adds a touch of elegance that truly transforms the space.",
      rating: 5,
    },
    {
      background: "/BgCard2.svg",
      name: "Jane Smith",
      city: "Stay-at-Home Mom",
      image: "/Profile2.svg",
      comment:
        "Thanks to Panto, my apartment now looks and feels more like a luxury home. The quality and design are outstanding!",
      rating: 5,
    },
    {
      background: "/BgCard3.svg",
      name: "Emily Johnson",
      city: "Office Worker",
      image: "/Profile3.svg",
      comment:
        "Affordable and perfect for my budget! These pieces have made my space feel more inviting without breaking the bank.",
      rating: 5,
    },
  ];
  return (
    <div className="relative w-full max-w-6xl mx-auto my-16 overflow-visible min-h-[476px]">
      <Swiper
        className="overflow-visible"
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className="rounded-2xl min-h-[476px] flex items-end justify-center shadow-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${card.background})` }}
            >
              <div className="relative bg-white w-[330px] rounded-2xl p-6 pb-15 mb-4 shadow-lg">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="rounded-full border-4 border-white bg-white "
                  />
                </div>
                <div className="text-center mt-3">
                  <p className="text-lg font-semibold text-gray-900">
                    {card.name}
                  </p>
                  <p className="text-sm text-gray-500">{card.city}</p>
                  <p className="text-sm text-gray-700 mt-4">{card.comment}</p>
                </div>
                <div className="flex justify-center mt-6">
                  {Array(card.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-[#F6B76F]" />
                    ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom navigation buttons */}
        <div className="swiper-button-prev custom-button">
          <img src="/ArrowL.svg" alt="Little arrow left" />
        </div>
        <div className="swiper-button-next custom-button">
          <img src="/ArrowR.svg" alt="Little arrow right" />
        </div>
      </Swiper>
    </div>
  );
};

export default RatingSlider;
