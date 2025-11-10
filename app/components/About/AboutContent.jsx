"use client";

import Image from "next/image";
import { sendWhatsAppMessage } from "@/app/utils/whatsapp";
import { Img1, Img2, Img5, Img6, real } from "@/public/assets/img/index.js";

const AboutContent = () => {
  const services = [
    {
      title: "مساج رفسكولوجي",
      price: "150",
      description: "مساج رفسكولوجي احترافي للاسترخاء والراحة",
      image: Img6,
    },
    {
      title: "مساج سويدي",
      price: "160",
      description: "مساج سويدي كلاسيكي للاسترخاء العميق",
      image: Img2,
    },
    {
      title: "مساج تايلندي",
      price: "170",
      description: "مساج تايلندي تقليدي للطاقة والحيوية",
      image: Img1,
    },
    {
      title: "مساج + اكواب",
      price: "190",
      description: "مساج مع كاسات الهواء للعلاج والاسترخاء",
      image: Img2,
    },
    {
      title: "مساج سياتشو",
      price: "170",
      description: "مساج سياتشو ياباني للتوازن والاسترخاء",
      image: Img1,
    },
    {
      title: "مكس مساج",
      price: "200",
      description: "مزيج من أنواع المساج المختلفة",
      image: Img2,
    },
    {
      title: "حمام مغربي + بخار",
      price: "120",
      description: "حمام مغربي تقليدي مع جلسة بخار",
      image: Img1,
    },
    {
      title: "بديكير",
      price: "120",
      description: "خدمات بديكير احترافية للعناية بالقدمين",
      image: Img5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative py-20 pt-32 bg-linear-to-r from-[#40132d] to-[#d1955d]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">خدماتنا</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
              اكتشف مجموعة واسعة من خدمات السبا والاسترخاء المميزة
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {service.description}
                  </p>
                  {/* <div className="text-primary font-bold text-lg mb-3">
                    {service.price}
                  </div> */}

                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-primary font-bold text-lg">
                      {service.price}
                    </span>
                    <Image src={real} width={20} height={7} alt="ريال" />
                  </div>

                  <button
                    onClick={() =>
                      sendWhatsAppMessage(
                        service.title,
                        service.price,
                        service.description
                      )
                    }
                    className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition text-sm font-semibold">
                    احجز الآن
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              جاهزون لتجربة استثنائية؟
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احجز موعدك الآن واستمتع بأفضل خدمات الاسترخاء
            </p>
            <button
              onClick={() => sendWhatsAppMessage("خدمات مراكز الراحة", "", "")}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
              احجز الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
