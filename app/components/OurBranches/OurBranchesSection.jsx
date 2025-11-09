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
      phone: "0592098944",
      address: "مطل الواحة - الحزم",
      hours: "يومياً من 10:00 ص - 10:00 م",
      images: [motel6, motel1, motel2, motel3, motel4, motel5],
    },
    {
      name: "مركز عنوان الهدوء",
      phone: "0550521499",
      address: "عنوان الهدوء - طريق ديراب",
      hours: "يومياً من 10:00 ص - 10:00 م",
      images: [relax2, relax1, relax3, relax6, relax4, relax5],
    },
    {
      name: "مركز المثلث الذهبي",
      phone: "0553790020",
      address: "طويق ",
      hours: "يومياً من 10:00 ص - 10:00 م",
      images: [triangle1, triangle2, triangle3, triangle4, triangle5, relax6],
    },
    {
      name: "معنى الراحة",
      phone: "0592098944",
      address: "الموسى",
      hours: "يومياً من 10:00 ص - 10:00 م",
      images: [relaxmeaning, relax1, triangle2, relax3, relax4, relax6],
    },
    {
      name: "معالم الراحة",
      phone: "0595223735",
      address: "طريق الامام مسلم",
      hours: "يومياً من 10:00 ص - 10:00 م",
      images: [relax, relax1, triangle2, relax3, relax4, relax6],
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
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
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
                    className="text-gray-700 hover:text-primary transition">
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
              <Link
                href="/contact"
                className="mt-4 block text-center bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition">
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
