"use client";

import Link from "next/link";
import Image from "next/image";
import { sendWhatsAppMessage } from "@/app/utils/whatsapp";
import { Img1 } from "@/public/assets/img";

const OffersSection = () => {
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
      image: "/assets/img/download1.webp",
    },
    {
      title: "بديكير مساج",
      price: "220 ر.س",
      description: "بديكير مع مساج للقدمين",
      image: "/assets/img/download2.webp",
    },
    {
      title: "مساج مغربي + بخار",
      price: "200 ر.س",
      description: "مساج مغربي مع جلسة بخار",
      image: "/assets/img/download.webp",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">عروض مراكز الراحة</h2>
          <p className="text-gray-600 text-lg">
            استمتع بأفضل العروض الحصرية من مراكز الراحة واحصل على تجربة
            استثنائية بأسعار مميزة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition hover:border-primary"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-primary font-bold text-2xl">
                      {offer.price}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() =>
                    sendWhatsAppMessage(
                      offer.title,
                      offer.price,
                      offer.description
                    )
                  }
                  className="block w-full bg-primary text-white text-center py-2 rounded-lg hover:bg-primary/90 transition"
                >
                  احجز الآن
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/offers"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition inline-block"
          >
            جميع العروض
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;

