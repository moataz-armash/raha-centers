import Image from "next/image";
import { Logo } from "@/public/assets/img/index.js";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center min-h-screen bg-primary text-primary animate-fadeIn">
      <div className="animate-bounce mb-4">
        <Image src={Logo} alt="مراكز الراحة" width={100} height={100} />
      </div>
      <div className="text-2xl text-white font-semibold tracking-wide animate-pulse">جاري التحميل...</div>
    </div>
  );
};

export default Loading;