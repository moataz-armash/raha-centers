"use client";

import { useState } from "react";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [nearestBranch, setNearestBranch] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "966592098944";
    const message = `👋 مرحباً!  
  الاسم: ${formData.name}  
  📞 الهاتف: ${formData.phone}  
  📧 البريد الإلكتروني: ${formData.email}  
  💬 الرسالة: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ أضف هنا لينكات Google Maps الخاصة بكل فرع
  const branches = [
    {
      name: "مركز مطل الواحة",
      phone: "0550521499",
      address: "مطل الواحة - الحزم",
      hours: "يومياً من 10:00 ص - 10:00 م",
      coords: { lat: 24.5387307, lng: 46.6533781 },
      link: "https://www.google.com/maps/place/%D9%85%D8%B3%D8%A7%D8%AC+%D9%88%D8%AD%D9%84%D8%A7%D9%82+%D9%85%D8%B7%D9%84+%D8%A7%D9%84%D9%88%D8%A7%D8%AD%D8%A9+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B1%D8%AE%D8%A7%D8%A1%E2%80%AD/@24.5387307,46.6533781,3450a,13.1y/data=!3m8!1e2!...",
    },
    {
      name: "مركز عنوان الهداء",
      phone: "0553790020",
      address: "عنوان الهدوء - طريق ديراب",
      hours: "يومياً من 10:00 ص - 10:00 م",
      coords: { lat: 24.585, lng: 46.665 },
      link: "#", // أضف الرابط هنا لاحقاً
    },
    {
      name: "مركز المثلث الذهبي",
      phone: "0592098944",
      address: "معالم الراحة - طريق الامام مسلم",
      hours: "يومياً من 10:00 ص - 10:00 م",
      coords: { lat: 24.69, lng: 46.74 },
      link: "#",
    },
    {
      name: "معنى الراحة",
      phone: "0592098944",
      address: "الموسى",
      hours: "يومياً من 10:00 ص - 10:00 م",
      coords: { lat: 24.63, lng: 46.68 },
      link: "https://www.google.com/maps/place/%D9%85%D8%B3%D8%A7%D8%AC+%D9%88%D8%AD%D9%84%D8%A7%D9%82+%D9%85%D8%B7%D9%84+%D8%A7%D9%84%D9%88%D8%A7%D8%AD%D8%A9+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B1%D8%AE%D8%A7%D8%A1%E2%80%AD/@24.5387307,46.6533781,3450a,13.1y/data=!3m8!1e2!3m6!1sAF1QipP3oqr97fYuvtQKNihmYWM3wiBv9B3t8O0wJbk9!2e10!3e12!6shttps:%2F%2Fgz0.googleusercontent.com%2Fp%2FAF1QipP3oqr97fYuvtQKNihmYWM3wiBv9B3t8O0wJbk9%3Dw360-h240-k-no!7i5472!8i3648!4m7!3m6!1s0x3e2f1100293a0a11:0xfa41bf286504485a!8m2!3d24.5387307!4d46.6533781!10e5!16s%2Fg%2F11wx0s66ld?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D",
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
      <div className="relative py-20 pt-32 bg-gradient-to-r from-[#40132d] to-[#d1955d]">
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                إرسال الرسالة
              </button>
            </form>

            {/* Nearest Branch Button */}
            <div className="mt-6 text-center">
              <button
                onClick={findNearestBranch}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                📍 أقرب فرع لي
              </button>

              {error && <p className="text-red-600 mt-3">{error}</p>}

              {nearestBranch && (
                <div className="mt-4 p-4 border rounded-lg text-right bg-gray-50">
                  <h4 className="font-semibold text-gray-800">
                    أقرب فرع: <span className="text-primary">{nearestBranch.name}</span>
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">{nearestBranch.address}</p>
                  <a
                    href={nearestBranch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    عرض على الخريطة
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">معلومات الاتصال</h2>
              <div className="space-y-4 text-gray-700">
                <p>📞 الهاتف: <a href="tel:+966592098944" className="text-primary">+966 59 209 8944</a></p>
                <p>🕒 ساعات العمل: يومياً من 10:00 ص - 10:00 م</p>
              </div>
            </div>

            {/* Branches Section */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">فروعنا الرئيسية</h2>
              <div className="space-y-4">
                {branches.map((branch, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="font-semibold text-primary mb-1">{branch.name}</h3>
                    <p className="text-sm text-gray-600">{branch.address}</p>
                    <a
                      href={`tel:+966${branch.phone.replace(/^0/, "")}`}
                      className="text-sm text-primary hover:underline block"
                    >
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
