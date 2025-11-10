"use client";

const TopNavbar = () => {
  return (
    <div className="bg-primary text-white py-2 px-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <a
            dir="ltr"
            href="https://wa.me/966558817803"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-gray-300 transition">
            055 881 78 03
          </a>
        </div>
        <div className="text-sm">
          <span>مراكز الراحة - أفضل سبا رجالي</span>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
