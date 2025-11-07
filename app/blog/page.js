import BlogContent from "../components/Blog/BlogContent";

export const metadata = {
  title: "المدونة - مراكز الراحة",
  description:
    "اكتشف أحدث المقالات والنصائح في عالم السبا والاسترخاء. معلومات مفيدة عن المساج والحمام المغربي والعناية بالبشرة",
  keywords: "مقالات سبا، نصائح المساج، الحمام المغربي، العناية بالبشرة، مدونة",
};

const page = () => {
  return <BlogContent />;
};

export default page;
