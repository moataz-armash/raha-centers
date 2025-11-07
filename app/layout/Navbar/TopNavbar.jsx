"use client";

const TopNavbar = () => {
  return (
    <div className="bg-primary text-white py-2 px-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <a href="tel:+966592098944" className="hover:text-gray-300 transition">
            059-209-8944
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
