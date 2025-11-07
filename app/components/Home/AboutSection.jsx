import Link from "next/link";
import Image from "next/image";
import { Img2 } from "@/public/assets/img/index.js";

const AboutSection = () => {
  const features = [
    {
      title: "خبرة متميزة",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "أعلى معايير الجودة",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "فريق محترف",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* الصورة */}
          <div className="w-full h-64 md:h-[370px] relative rounded-2xl overflow-hidden shadow-lg">
            <Image src={Img2} alt="عن مراكز الراحة" fill className="object-cover" priority />
          </div>

          {/* نص عن المركز */}
          <div className="text-center md:text-right">
            <h2 className="text-4xl font-bold text-primary mb-4">عن مراكز الراحة</h2>
            <h3 className="text-2xl text-gray-700 mb-6">المكان الأمثل للاسترخاء والراحة</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              مراكز الراحة علامة تجارية في عالم المساج والعناية بالبشرة والوجه والقدمين للرجال ولدينا أفضل خدمات الحمام المغربي، مركزنا مرخص ومعتمد لدى وزارة الشباب والرياضة ووزارة الصحة، تم تأسيس مراكز الراحة في عام 2014.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
              نملك في مراكز الراحة، طاقم عمل مميز وعلى مستوى عالي من الاحترافية، بداية من طاقم الاستقبال والضيافة وعمال الفريق الخاص بالمساج بمختلف أنواعه، بالإضافة إلى الحمام المغربي، وتجهيز العرسان والعناية بالبشرة، ولدينا أمهر عمال لخدمات البديكير والعناية بالقدمين، وكذلك عمال صندوق الأمانات، بجانب خدمات وعروض أخرى ومميزة.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <div className="text-primary mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/whoAreWe"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition inline-block"
          >
            اقرأ المزيد عنا
          </Link>
        </div>

        <div className="mt-16 bg-primary text-white rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-2">مراكز الراحة</h3>
          <p className="text-2xl">10+ سنوات من الخبرة</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

