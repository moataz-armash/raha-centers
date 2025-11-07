import Link from "next/link";
import Image from "next/image";
import { Img1, Img5, Img6 } from "@/public/assets/img";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "أخصائي المساج العلاجي والاسترخائي في الرياض",
      date: "23 سبتمبر 2025",
      excerpt:
        "وش يعني أخصائي مساج في الرياض عند مراكز الراحة؟ إذا كنت تبحث على تجربة راحة وتدليل على أصولها، فـ أخصائي...",
      slug: "massage-specialist-riyadh",
      image: Img1,
    },
    {
      title: "فوائد البدكير للرجال",
      date: "10 أغسطس 2025",
      excerpt:
        "كثير ناس يظنون إن البدكير بس شكل وتجميل بس الحقيقة؟ البدكير أساس في العناية الشخصية وراح تحس بفرق كبير من...",
      slug: "pedicure-benefits-men",
      image: Img5,
    },
    {
      title: "فوائد الحمام المغربي للرجال",
      date: "10 أغسطس 2025",
      excerpt:
        "أكيد قد سمعت كثير عن الحمّام المغربي، بس يمكن ما جربته أو ما تعرف فوائده الحقيقية خلّنا نقول لك وش...",
      slug: "moroccan-bath-benefits-men",
      image: Img6,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">أحدث المقالات</h2>
          <p className="text-gray-600 text-lg">
            اكتشف أحدث المقالات والنصائح في عالم السبا والاسترخاء
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="relative h-48 overflow-hidden">
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
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
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

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition inline-block"
          >
            جميع المقالات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

