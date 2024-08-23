import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlus, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

export default function ProductCarousel() {
  const products = [
    {
      name: "Sakarias Armchair",
      price: 392,
      image: "/chair1.png",
      rating: 5,
    },
    {
      name: "Baltsar Chair",
      price: 299,
      image: "/chair2.png",
      rating: 5,
    },
    {
      name: "Anjay Chair",
      price: 519,
      image: "/chair3.png",
      rating: 5,
    },
    {
      name: "Nyantuy Chair",
      price: 921,
      image: "/chair4.png",
      rating: 5,
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-20 overflow-visible">
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
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-grey2 rounded-t-2xl px-6 pt-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
              />
            </div>

            <div className="bg-white rounded-b-2xl pb-6 px-6 pt-3">
              <p className="text-gray-500 text-[17px] font-light">Chair</p>
              <h3 className="h3 text-[21px]">{product.name}</h3>
              <div className="flex items-center my-2 gap-1">
                {Array(product.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
              </div>
              <div className="flex justify-between flex-wrap items-center mt-10">
                <p className="text-lg font-semibold">${product.price}</p>
                <button className="w-10 h-10 bg-[#0D1B39] text-white rounded-full flex items-center justify-center">
                  <FaPlus />
                </button>
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
}
