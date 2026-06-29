"use client";
import {
  triangle5,
  motel1,
  motel2,
  motel3,
  motel4,
  motel5,
  motel6,
  relax1,
  relax2,
  relax3,
  relax4,
  relax5,
  relax6,
  triangle1,
  triangle2,
  triangle3,
  triangle4,
  triangle6,
  relax,
  relaxmeaning,
  dar1,
  dar2,
  dar3,
  dar4,
  dar5,
  dar6,
  matl1,
  matl2,
  matl3,
  matl4,
  matl5,
  matl6,
  matl7,
} from "@/public/assets/img";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const OurBranchesSection = () => {
  const branches = [
    {
      name: "مركز مطل الواحه",
      phone: "059 209 89 44",
      address: "مطل الواحة - الحزم",
      hours: "يومياً من 12:00 م - 03:00 ص",
      mapLink: "https://maps.app.goo.gl/wE69gvW1G5fL6m8C8",
      images: [motel6, motel1, motel2, motel3, motel4, motel5],
    },
    {
      name: "مركز عنوان الهدوء",
      phone: "055 052 14 99",
      address: "عنوان الهدوء - طريق ديراب",
      hours: "يومياً من 12:00 م - 03:00 ص",
        mapLink: "https://maps.app.goo.gl/GM7S7cHg3p1um97Z9",
      images: [relax2, relax1, relax3, relax6, relax4, relax5],
    },
    {
      name: "مركز المثلث الذهبي",
      phone: "055 379 00 20",
      address: "طويق ",
      hours: "يومياً من 12:00 م - 03:00 ص",
        mapLink: "https://maps.app.goo.gl/b5VnZF5t61z3yV8r8",
      images: [triangle1, triangle2, triangle3, triangle4, triangle5, relax6],
    },
    {
      name: "معنى الراحة",
      phone: "059 209 89 44",
      address: "الموسى",
      hours: "يومياً من 12:00 م - 03:00 ص",
        mapLink: "https://maps.app.goo.gl/Q7dJtm9BKJHMurfm9",
      images: [relaxmeaning, relax1, triangle2, relax3, relax4, relax6],
    },
    {
      name: "معالم الراحة",
      phone: "059 522 37 35",
      address: "المروة، الرياض",
      hours: "يومياً من 12:00 م - 03:00 ص",
      mapLink: "https://maps.app.goo.gl/KVoA1pWfwWnSmc1M7",
      images: [relax, relax1, triangle2, relax3, relax4, relax6],
    },
    {
      name: "مركز دار الواحة للإسترخاء",
      phone: "059 522 37 35",
      address: "عبدالرحمن الداخل، طويق",
      hours: "يومياً من 12:00 م - 03:00 ص",
      mapLink: "https://maps.app.goo.gl/WoeJyVrJmQyXvuyW7",
      images: [dar2, dar5, dar6, dar3, dar5, dar1],
    },
    {
      name: "مطل الواحة للاسترخاء",
      phone: "059 482 28 32",
      address: "طريق خديجة بنت خويلد، طويق",
      hours: "يومياً من 12:00 م - 03:00 ص",
      mapLink: "https://maps.app.goo.gl/yjcMiW5SKb4PYTGD7",
      images: [matl1, matl2, matl3, matl4, matl5, matl6, matl7],
    },
  ];
  return (
    <>
      <section className="mb-10">
        <div className="relative py-20 pt-32 bg-linear-to-r from-[#40132d] to-[#d1955d]">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">فروعنا</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
                اكتشف مجموعة واسعة من خدمات السبا والاسترخاء المميزة
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {branches
            .slice()
            .reverse()
            .map((branch, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition relative">
                {index === 0 && (
                  <div className="absolute top-4 right-4 bg-teal-600 text-white px-6 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                    أحدث فروعنا
                  </div>
                )}
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  className="pb-12">
                  {branch.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={img}
                        alt="مراكز-الراحه"
                        className="w-full h-[300px] rounded mb-2"
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {branch.name}
                </h3>
                <p className="text-gray-600 mb-4">{branch.address}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href={`tel:+966${branch.phone.replace(/^0/, "")}`}
                      className="text-gray-700 hover:text-primary transition"
                      dir="ltr">
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{branch.hours}</span>
                  </div>
                </div>
                {branch.mapLink && (
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 border border-primary text-primary py-2 rounded-lg hover:bg-primary/10 transition text-sm">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    الموقع على الخريطة
                  </a>
                )}
                <Link
                  href="/contact"
                  className="mt-2 block text-center bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition">
                  تواصل معنا
                </Link>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default OurBranchesSection;
