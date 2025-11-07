
import Image from "next/image";
import { Img1, Img5, Img6 } from "@/public/assets/img";

const BlogContent = () => {
  const blogPosts = [
    {
      title: "أخصائي المساج العلاجي والاسترخائي في الرياض",
      date: "23 سبتمبر 2025",
      excerpt:
        "وش يعني أخصائي مساج في الرياض عند مراكز الراحة؟ إذا كنت تبحث على تجربة راحة وتدليل على أصولها، فـ أخصائي المساج العلاجي والاسترخائي هو الحل الأمثل لك. نحن في مراكز الراحة نقدم لك أفضل خدمات المساج بأيدي محترفين مدربين على أعلى المستويات.",
      slug: "massage-specialist-riyadh",
      category: "المساج",
      image: Img1,
    },
    {
      title: "فوائد البدكير للرجال",
      date: "10 أغسطس 2025",
      excerpt:
        "كثير ناس يظنون إن البدكير بس شكل وتجميل بس الحقيقة؟ البدكير أساس في العناية الشخصية وراح تحس بفرق كبير من أول جلسة. في مراكز الراحة، نقدم خدمات بديكير احترافية خاصة بالرجال تساعدك تحافظ على صحة قدميك وجمالها.",
      slug: "pedicure-benefits-men",
      category: "العناية بالقدمين",
      image: Img5,
    },
    {
      title: "فوائد الحمام المغربي للرجال",
      date: "10 أغسطس 2025",
      excerpt:
        "أكيد قد سمعت كثير عن الحمّام المغربي، بس يمكن ما جربته أو ما تعرف فوائده الحقيقية خلّنا نقول لك وش الحمام المغربي وفوائده الكثيرة. الحمام المغربي من أقدم وأشهر طرق العناية بالبشرة والجسم، وهو جزء أساسي من تقاليد العناية العربية الأصيلة.",
      slug: "moroccan-bath-benefits-men",
      category: "الحمام المغربي",
      image: Img6,
    },
  ];

  return (
    <div className="pt-10 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="relative h-64 overflow-hidden">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-gray-500">{post.date}</div>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                  {post.excerpt}
                </p>
                {/* <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                >
                  اقرأ المزيد
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </Link> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;

