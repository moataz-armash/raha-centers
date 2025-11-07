"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Img4 } from "@/public/assets/img";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "عبدالعزيز الذياب",
      text: "تجربة رائعة جدا وخدمة ممتازة من طاقم العمل والمساج كان احترافي جدا والحمام المغربي بقسم حمام مغربي محسن وشكرا لطاقم كله وانصح بريكو اسمه مساج جميل مساجه انصح به وبشده شكرا لكم جميعا",
    },
    {
      name: "مسفر الدوسري",
      text: "من افضل مراكز الحمام المغربي التي اجريتها يتميز بنظافه المكان ✅ الفخامة ✅ الترحيب و التعامل المميز✅ الضايفه ✅ جودة فالعمل ✅ اشكر الموظف نجيب على حسن تعامله ورحابه صدره . و فالختام و اشكر جزيل الشكر ،المتميز في عمله و امانته الاستاذ محسن المغربي انصح الجميل ماتتعدونه شغل يبرد الخاطر لا تتعدونه الي شغله نظيف ويبرد الخاطر يستاهل المدح ويستاهل من يتعنى له 🤍..",
    },
    {
      name: "محمد الذياب",
      text: "تجربة رائعة جدا وخدمة ممتازة من طاقم العمل والمساج كان احترافي جدا والحمام المغربي بقسم حمام مغربي محسن وشكرا لطاقم كله وانصح بريكو اسمه مساج جميل مساجه انصح به وبشده شكرا لكم جميعا",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#40132d] to-[#8e4848]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">آراء عملائنا</h2>
          <p className="text-gray-600 text-lg text-white">
            اكتشف ما يقوله عملاؤنا عن تجربتهم معنا
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 text-white p-8 rounded-lg shadow-md h-full mx-[5%] md:mx-[10%]">
                <div className="flex flex-col gap-3 items-center justify-center mb-4">
                  <Image src={Img4} alt="testimonial" width={100} height={100} />
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-white mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-white text-center">{testimonial.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;

