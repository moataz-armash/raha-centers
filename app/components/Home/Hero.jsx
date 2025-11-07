"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { Logo, Img1, Img2 } from "@/public/assets/img/index.js";

const Hero = () => {
  const sendWhatsApp = (message = "أريد الحجز") => {
    const phoneNumber = "966592098944";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const slides = [
    {
      title: "مراكز الراحة",
      subtitle: "وجهتك المثالية للاسترخاء",
      cta: "خدماتنا",
      image: Img2,
    },
    {
      title: "اكتشف عالم الاسترخاء",
      subtitle: "تجربة استثنائية لراحة الجسم والروح",
      cta: "خدماتنا",
      image: Img1,
    },
    {
      title: "خدمات سبا متميزة",
      subtitle: "بأيدي متخصصين محترفين لتجربة لا تنسى",
      cta: "خدماتنا",
      image: Img1,
    },

  ];

  return (
    <div className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full flex items-center justify-center">
              {slide.image && (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              )}
              <div className="absolute inset-0"></div>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link
                    href="/offers"
                    className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    {slide.cta}
                  </Link>
                  <button
                    onClick={() => sendWhatsApp(`أريد الحجز - ${slide.title}`)}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition border-2 border-white"
                  >
                    احجز الآن
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;

