"use client";

import Link from "next/link";
import Image from "next/image";
import { sendWhatsAppMessage } from "@/app/utils/whatsapp";
import { useRouter } from "next/navigation";
import { Img1, Img2, Img3 } from "@/public/assets/img/index.js";

const OffersContent = () => {
  const offers = [
    {
      title: "VIP مساج + حمام مغربي + بخار + بديكير + حلاقة + صنفره",
      price: "500 ر.س",
      description: "باقة VIP شاملة: مساج + حمام مغربي + بخار + بديكير + حلاقة + صنفرة",
      image: Img1,
    },
    {
      title: "مساج + حمام مغربي + بخار + بديكير",
      price: "250 ر.س",
      description: "مساج + حمام مغربي + بخار + بديكير",
      image: Img2,
    },
    {
      title: "بديكير مساج",
      price: "220 ر.س",
      description: "بديكير مع مساج للقدمين",
      image: Img3,
    },
    {
      title: "مساج مغربي + بخار",
      price: "200 ر.س",
      description: "مساج مغربي مع جلسة بخار",
      image: Img1,
    },
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative py-20 pt-32 bg-gradient-to-r from-[#40132d] to-[#d1955d]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">عروض مراكز الراحة</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
              استمتع بأفضل العروض الحصرية من مراكز الراحة واحصل على تجربة
              استثنائية بأسعار مميزة
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition hover:border-primary cursor-pointer group"
              onClick={() => router.push(`/offers/${index}`)}
            >
              <div className="relative h-64 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {offer.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-primary font-bold text-3xl">
                    {offer.price}
                  </span>
                </div>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    sendWhatsAppMessage(offer.title, offer.price, offer.description);
                  }}
                  className="block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
                >
                  احجز الآن
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default OffersContent;

