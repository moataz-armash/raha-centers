import { Logo } from "@/public/assets/img";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "404 - الصفحة غير موجودة | مراكز الراحة",
  description: "الصفحة التي تبحث عنها غير موجودة. تصفح فروعنا وخدماتنا من الصفحة الرئيسية.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative py-20 pt-32 bg-linear-to-r from-[#40132d] to-[#d1955d] flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-8xl font-extrabold text-white mb-2 drop-shadow-lg">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">الصفحة غير موجودة</h2>
          <p className="text-white/80 mb-10 max-w-md text-lg">
            يبدو أنك حاولت الوصول لصفحة غير موجودة. يمكنك التنقل عبر الروابط أدناه.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="bg-white text-primary px-6 py-2 rounded-lg font-bold hover:bg-white/90 transition shadow">
              الرئيسية
            </Link>
            <Link
              href="/ourBranches"
              className="bg-teal text-white px-6 py-2 rounded-lg font-bold hover:opacity-90 transition shadow">
              فروعنا
            </Link>
            <Link
              href="/offers"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-bold hover:bg-white/10 transition">
              العروض
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-bold hover:bg-white/10 transition">
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
