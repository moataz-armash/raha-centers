import { Logo } from "@/public/assets/img";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-16 text-center">
      <Image src={Logo} width={120} height={120} alt="مراكز الراحة" className="mb-8" />
      <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">عذراً، الصفحة غير موجودة</h2>
      <p className="text-gray-500 mb-8">يبدو أنك حاولت الوصول لصفحة غير موجودة ضمن الموقع.</p>
      <Link
        href="/"
        className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
