import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const blogPosts = {
  "massage-specialist-riyadh": {
    title: "أخصائي المساج العلاجي والاسترخائي في الرياض",
    date: "23 سبتمبر 2025",
    category: "المساج",
    image: "/assets/img/WhatsApp Image 2025-11-06 at 11.24.02_74f80a33.jpg",
    content: `
      <h2>ما هو أخصائي المساج العلاجي والاسترخائي؟</h2>
      <p>إذا كنت تبحث على تجربة راحة وتدليل على أصولها، فـ أخصائي المساج العلاجي والاسترخائي هو الحل الأمثل لك. نحن في مراكز الراحة نقدم لك أفضل خدمات المساج بأيدي محترفين مدربين على أعلى المستويات.</p>
      
      <h3>أنواع المساج المتاحة:</h3>
      <ul>
        <li><strong>مساج رفسكولوجي:</strong> يعمل على نقاط الضغط في القدمين واليدين لتحفيز الطاقة والاسترخاء</li>
        <li><strong>مساج سويدي:</strong> تقنية كلاسيكية للاسترخاء العميق وتخفيف التوتر</li>
        <li><strong>مساج تايلندي:</strong> يجمع بين التمدد والضغط لتحسين المرونة والطاقة</li>
        <li><strong>مساج سياتشو:</strong> تقنية يابانية تعمل على نقاط الطاقة في الجسم</li>
        <li><strong>مساج + اكواب:</strong> يجمع بين المساج وكاسات الهواء للعلاج العميق</li>
        <li><strong>مكس مساج:</strong> مزيج من أنواع المساج المختلفة للحصول على أفضل النتائج</li>
      </ul>
      
      <h3>فوائد المساج العلاجي:</h3>
      <ul>
        <li>تخفيف التوتر والضغط النفسي</li>
        <li>تحسين الدورة الدموية</li>
        <li>تخفيف آلام العضلات والمفاصل</li>
        <li>تحسين جودة النوم</li>
        <li>زيادة المرونة والطاقة</li>
        <li>تعزيز جهاز المناعة</li>
      </ul>
      
      <h3>لماذا تختار مراكز الراحة؟</h3>
      <p>في مراكز الراحة، نقدم خدمات مساج احترافية بأيدي أخصائيين مدربين على أعلى المستويات. نحن نستخدم أفضل الزيوت الطبيعية والتقنيات الحديثة لضمان تجربة استرخاء لا تُنسى.</p>
    `,
  },
  "pedicure-benefits-men": {
    title: "فوائد البدكير للرجال",
    date: "10 أغسطس 2025",
    category: "العناية بالقدمين",
    image: "/assets/img/WhatsApp Image 2025-11-06 at 19.08.51_a1d5a28d.jpg",
    content: `
      <h2>لماذا البدكير مهم للرجال؟</h2>
      <p>كثير ناس يظنون إن البدكير بس شكل وتجميل بس الحقيقة؟ البدكير أساس في العناية الشخصية وراح تحس بفرق كبير من أول جلسة. في مراكز الراحة، نقدم خدمات بديكير احترافية خاصة بالرجال تساعدك تحافظ على صحة قدميك وجمالها.</p>
      
      <h3>فوائد البدكير للرجال:</h3>
      <ul>
        <li><strong>صحة القدمين:</strong> إزالة الجلد الميت والكالو يحافظ على صحة القدمين</li>
        <li><strong>الراحة:</strong> تقليم الأظافر بشكل صحيح يمنع الألم والالتهابات</li>
        <li><strong>النظافة:</strong> تنظيف عميق للقدمين يمنع الروائح الكريهة</li>
        <li><strong>المظهر:</strong> قدمين نظيفة ومهذبة تعزز الثقة بالنفس</li>
        <li><strong>الاسترخاء:</strong> جلسة بديكير مع مساج للقدمين توفر استرخاء كامل</li>
      </ul>
      
      <h3>خدمات البدكير في مراكز الراحة:</h3>
      <ul>
        <li>تقليم وتشكيل الأظافر</li>
        <li>إزالة الجلد الميت والكالو</li>
        <li>تنظيف عميق للقدمين</li>
        <li>مساج للقدمين والساقين</li>
        <li>ترطيب القدمين بكريمات طبيعية</li>
      </ul>
      
      <h3>بديكير مساج - تجربة شاملة:</h3>
      <p>في مراكز الراحة، نقدم خدمة "بديكير مساج" التي تجمع بين العناية بالقدمين ومساج استرخائي. هذه الخدمة المميزة توفر لك تجربة شاملة من العناية والاسترخاء.</p>
    `,
  },
  "moroccan-bath-benefits-men": {
    title: "فوائد الحمام المغربي للرجال",
    date: "10 أغسطس 2025",
    category: "الحمام المغربي",
    image: "/assets/img/WhatsApp Image 2025-11-06 at 11.24.02_74f80a33.jpg",
    content: `
      <h2>ما هو الحمام المغربي؟</h2>
      <p>أكيد قد سمعت كثير عن الحمّام المغربي، بس يمكن ما جربته أو ما تعرف فوائده الحقيقية خلّنا نقول لك وش الحمام المغربي وفوائده الكثيرة. الحمام المغربي من أقدم وأشهر طرق العناية بالبشرة والجسم، وهو جزء أساسي من تقاليد العناية العربية الأصيلة.</p>
      
      <h3>فوائد الحمام المغربي:</h3>
      <ul>
        <li><strong>تنظيف عميق:</strong> إزالة الجلد الميت والسموم من الجسم</li>
        <li><strong>تفتيح البشرة:</strong> استخدام الصابون البلدي والطين الطبيعي لتفتيح البشرة</li>
        <li><strong>تحسين الدورة الدموية:</strong> الحرارة والتدليك يحسنان تدفق الدم</li>
        <li><strong>الاسترخاء:</strong> تجربة استرخاء كاملة للجسم والعقل</li>
        <li><strong>تنظيف المسام:</strong> فتح وتنظيف مسام البشرة بعمق</li>
        <li><strong>ترطيب البشرة:</strong> استخدام الزيوت الطبيعية لترطيب البشرة</li>
      </ul>
      
      <h3>خطوات الحمام المغربي:</h3>
      <ol>
        <li><strong>جلسة بخار:</strong> لفتح المسام وتنعيم الجلد</li>
        <li><strong>الصابون البلدي:</strong> تنظيف عميق بالصابون المغربي الأصيل</li>
        <li><strong>الليفة المغربية:</strong> تقشير الجلد الميت</li>
        <li><strong>الطين الطبيعي:</strong> قناع طبيعي لتفتيح وتنظيف البشرة</li>
        <li><strong>الزيوت الطبيعية:</strong> ترطيب البشرة بزيوت طبيعية</li>
      </ol>
      
      <h3>خدمات الحمام المغربي في مراكز الراحة:</h3>
      <p>نقدم في مراكز الراحة خدمة "حمام مغربي + بخار" التي تجمع بين الحمام المغربي التقليدي وجلسة بخار للاسترخاء الكامل. هذه الخدمة متوفرة بأسعار مميزة وتوفر تجربة أصيلة من العناية العربية.</p>
      
      <h3>نصائح بعد الحمام المغربي:</h3>
      <ul>
        <li>شرب كمية كافية من الماء</li>
        <li>استخدام مرطب للبشرة</li>
        <li>تجنب التعرض المباشر للشمس</li>
        <li>الراحة والاسترخاء</li>
      </ul>
    `,
  },
};

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: "المقال غير موجود - مراكز الراحة",
    };
  }

  return {
    title: `${post.title} - مراكز الراحة`,
    description: post.content.replace(/<[^>]*>/g, "").substring(0, 160),
    keywords: `${post.category}, ${post.title}, مراكز الراحة, سبا`,
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative py-20 pt-32" style={{ background: 'linear-gradient(to bottom right, rgba(155, 5, 84, 0.9), rgba(155, 5, 84, 0.7))' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold">{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg opacity-90">{post.date}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <article
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              العودة إلى المدونة
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

