"use client";

import { useState } from "react";

const ContactContent = () => {
  const [nearestBranch, setNearestBranch] = useState(null);
  const [error, setError] = useState("");

  const branches = [
    {
      name: "مركز مطل الواحة",
      phone: "059 209 89 44",
      address: "مطل الواحة - الحزم",
      hours: "يومياً من 03:00 ص - 12:00 م",
      coords: { lat: 24.5387307, lng: 46.6533781 },
      link: "https://www.google.com/maps/place/%D9%85%D8%B3%D8%A7%D8%AC+%D9%88%D8%AD%D9%84%D8%A7%D9%82+%D9%85%D8%B7%D9%84+%D8%A7%D9%84%D9%88%D8%A7%D8%AD%D8%A9+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B1%D8%AE%D8%A7%D8%A1%E2%80%AD/@24.5387307,46.6533781,3450a,13.1y/data=!3m8!1e2!...",
    },
    {
      name: "مركز عنوان الهدوء",
      phone: "055 052 14 99",
      address: "عنوان الهدوء - طريق ديراب",
      hours: "يومياً من 03:00 ص - 12:00 م",
      coords: { lat: 24.5333721, lng: 46.6561032 },
      link: "https://www.google.com/maps/place/%D9%85%D8%B3%D8%A7%D8%AC+%D8%B9%D9%86%D9%88%D8%A7%D9%86+%D8%A7%D9%84%D9%87%D8%AF%D9%88%D8%A1+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B1%D8%AE%D8%A7%D8%A1%E2%80%AD/@24.5333721,46.6561032,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2f11e1727efa5f:0xe8583d5ff2b7889f!8m2!3d24.5333721!4d46.6561032!16s%2Fg%2F11yd82xzsk?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D", // أضف الرابط هنا لاحقاً
    },
    {
      name: "مركز المثلث الذهبي",
      phone: "055 379 00 20",
      address: "طويق",
      hours: "يومياً من 03:00 ص - 12:00 م",
      coords: { lat: 24.5835872, lng: 46.5809821 },
      link: "https://www.google.com/maps/place/%D9%85%D8%B3%D8%A7%D8%AC+%D8%A7%D9%84%D9%85%D8%AB%D9%84%D8%AB+%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A+%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B1%D8%AE%D8%A7%D8%A1%E2%80%AD/@24.5835872,46.583557,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2f194882c80ca7:0xcd7929f83ee00cea!8m2!3d24.5835872!4d46.5809821!16s%2Fg%2F11yc92bf8g?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "معنى الراحة",
      phone: "059 209 89 44",
      address: "الموسى",
      hours: "يومياً من 03:00 ص - 12:00 م",
      coords: { lat: 24.5592413, lng: 46.5748409 },
      link: "https://www.google.com/maps/place/%D9%85%D8%B3%D8%A7%D8%AC+%D9%85%D8%B9%D9%86%D9%89+%D8%A7%D9%84%D8%B1%D8%A7%D8%AD%D8%A9+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B1%D8%AE%D8%A7%D8%A1%E2%80%AD/@24.5592413,46.5748409,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2f19adb887f8b5:0xd477343bf546daac!8m2!3d24.5592413!4d46.5748409!16s%2Fg%2F11yn1xgmlp?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "معالم الراحة",
      phone: "059 522 37 35",
      address: "طريق الامام مسلم",
      hours: "يومياً من 03:00 ص - 12:00 م",
      coords: { lat: 24.5488782, lng: 46.6764704 },
      link: "https://www.google.com/maps/place/%D9%85%D8%B3%D8%A7%D8%AC+%D9%85%D8%B9%D8%A7%D9%84%D9%85+%D8%A7%D9%84%D8%B1%D8%A7%D8%AD%D8%A9+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B1%D8%AE%D8%A7%D8%A1%E2%80%AD/@24.5488782,46.6764704,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2f0f0eb96bde71:0xa10153b7b3ff427d!8m2!3d24.5488782!4d46.6738955!16s%2Fg%2F11yg4ylkxq?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const findNearestBranch = () => {
    if (!navigator.geolocation) {
      setError("المتصفح لا يدعم تحديد الموقع الجغرافي");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        const distances = branches.map((branch) => {
          const distance = Math.sqrt(
            Math.pow(branch.coords.lat - latitude, 2) +
              Math.pow(branch.coords.lng - longitude, 2)
          );
          return { ...branch, distance };
        });

        distances.sort((a, b) => a.distance - b.distance);
        setNearestBranch(distances[0]);
        setError("");
      },
      () => {
        setError("تعذر تحديد موقعك. الرجاء السماح بإذن الموقع.");
      }
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative py-20 pt-32 bg-linear-to-r from-[#40132d] to-[#d1955d]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
            نحن هنا لمساعدتك. تواصل معنا للحجز أو الاستفسار
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">أقرب فرع</h2>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.612907744905!2d46.6533781!3d24.5387307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f19adb887f8b5%3A0xd477343bf546daac!2sMasaj%20Wahalaq%20Center!5e0!3m2!1sen!2seg!4v1699317731234!5m2!1sen!2seg"
                width="100%"
                height="500"
                style={{ border: 2 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* Nearest Branch Button */}
            <div className="mt-6 text-center">
              <button
                onClick={findNearestBranch}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                📍 أقرب فرع لي
              </button>

              {error && <p className="text-red-600 mt-3">{error}</p>}

              {nearestBranch && (
                <div className="mt-4 p-4 border rounded-lg text-right bg-gray-50">
                  <h4 className="font-semibold text-gray-800">
                    أقرب فرع:{" "}
                    <span className="text-primary">{nearestBranch.name}</span>
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {nearestBranch.address}
                  </p>
                  <a
                    href={nearestBranch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline">
                    عرض على الخريطة
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                معلومات الاتصال
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  📞 الهاتف:{" "}
                  <a
                    href="tel:+966558817803"
                    className="text-primary"
                    dir="ltr">
                    +966 55 881 78 03
                  </a>
                </p>
                <p>🕒 ساعات العمل: يومياً من 12:00 م - 03:00 ص</p>
              </div>
            </div>

            {/* Branches Section */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                فروعنا الرئيسية
              </h2>
              <div className="space-y-4">
                {branches.map((branch, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="font-semibold text-primary mb-1">
                      {branch.name}
                    </h3>
                    <p className="text-sm text-gray-600">{branch.address}</p>
                    <a
                      href={`tel:+966${branch.phone.replace(/^0/, "")}`}
                      className="text-sm text-primary hover:underline inline"
                      dir="ltr">
                      {branch.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
