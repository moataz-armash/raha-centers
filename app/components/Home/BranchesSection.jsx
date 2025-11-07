import Link from "next/link";

const BranchesSection = () => {
  const branches = [
    {
      name: "مركز مطل الواحه",
      phone: "0550521499",
      address: "مطل الواحة - الحزم",
      hours: "يومياً من 10:00 ص - 10:00 م",
    },
    {
      name: "مركز عنوان الهداء",
      phone: "0553790020",
      address: "عنوان الهدوء - طريق ديراب",
      hours: "يومياً من 10:00 ص - 10:00 م",
    },
    {
      name: "مركز المثلث الذهبي",
      phone: "0592098944",
      address: "معالم الراحة - طريق الامام مسلم",
      hours: "يومياً من 10:00 ص - 10:00 م",
    },
    {
      name: "معنى الراحة",
      phone: "0592098944",
      address: "الموسى",
      hours: "يومياً من 10:00 ص - 10:00 م",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">فروعنا</h2>
          <p className="text-gray-600 text-lg">
            تجدوننا في أرقى المواقع في مختلف مدن المملكة العربية السعودية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                {branch.name}
              </h3>
              <p className="text-gray-600 mb-4">{branch.address}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:+966${branch.phone.replace(/^0/, '')}`}
                    className="text-gray-700 hover:text-primary transition"
                  >
                    {branch.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{branch.hours}</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-4 block text-center bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
              >
                تواصل معنا
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition inline-block"
          >
            جميع الفروع
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;

