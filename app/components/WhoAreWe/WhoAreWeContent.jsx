const WhoAreWeContent = () => {
  const features = [
    {
      title: "خبرة متميزة",
      description:
        "أكثر من 10 سنوات من الخبرة في مجال المساج والعناية بالبشرة",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "أعلى معايير الجودة",
      description:
        "نلتزم بأعلى معايير الجودة والاحترافية في جميع خدماتنا",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "فريق محترف",
      description:
        "طاقم عمل مميز وعلى مستوى عالي من الاحترافية والتدريب",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative py-20 pt-32 bg-gradient-to-r from-[#40132d] to-[#d1955d]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">عن مراكز الراحة</h1>
            <h2 className="text-2xl md:text-3xl opacity-90">المكان الأمثل للاسترخاء والراحة</h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="text-lg mb-6">
              مراكز الراحة علامة تجارية في عالم المساج والعناية بالبشرة والوجه والقدمين للرجال ولدينا أفضل خدمات الحمام المغربي، مركزنا مرخص ومعتمد لدى وزارة الشباب والرياضة ووزارة الصحة، تم تأسيس مراكز الراحة في عام 2014.
            </p>
            <p className="text-lg mb-6">
              نملك في مراكز الراحة، طاقم عمل مميز وعلى مستوى عالي من الاحترافية، بداية من طاقم الاستقبال والضيافة وعمال الفريق الخاص بالمساج بمختلف أنواعه، بالإضافة إلى الحمام المغربي، وتجهيز العرسان والعناية بالبشرة، ولدينا أمهر عمال لخدمات البديكير والعناية بالقدمين، وكذلك عمال صندوق الأمانات، بجانب خدمات وعروض أخرى ومميزة.
            </p>
            <p className="text-lg">
              مراكز الراحة هي علامة تجارية سعودية حيث تلتقي تقاليد العناية الأصيلة بالفخامة الحديثة في المدن النابضة بالحياة الرياض وجدة والدمام وحائل. يوفر منتجعنا الصحي ملاذًًا هادئًا من المشهد الحضري الصاخب.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition"
            >
              <div className="text-primary mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary text-white rounded-lg p-12 text-center">
          <h3 className="text-4xl font-bold mb-4">مراكز الراحة</h3>
          <p className="text-3xl">10+ سنوات من الخبرة</p>
          <p className="text-xl mt-4 opacity-90">
            وجهتك المثالية للاسترخاء
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWeContent;

