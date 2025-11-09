import Hero from "./components/Home/Hero";
import AboutSection from "./components/Home/AboutSection";
import OffersSection from "./components/Home/OffersSection";
import TestimonialsSection from "./components/Home/TestimonialsSection";
import BranchesSection from "./components/Home/BranchesSection";
import BlogSection from "./components/Home/BlogSection";

export const metadata = {
  title: "مراكز الراحة - أفضل سبا رجالي بالرياض",
  description:
    "اكتشف عالم الاسترخاء مع أفضل خدمات المساج والحمام المغربي والعناية بالبشرة للرجال. تجربة استثنائية لراحة الجسم والروح",
  keywords:
    "مراكز الراحة، سبا رجالي، مساج، حمام مغربي، عناية بالبشرة، استرخاء، الرياض، سبا الرياض",
  openGraph: {
    title: "مراكز الراحة - أفضل سبا رجالي بالرياض",
    description:
      "اكتشف عالم الاسترخاء مع أفضل خدمات المساج والحمام المغربي والعناية بالبشرة للرجال",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <OffersSection />
      <TestimonialsSection />
      <BranchesSection />
      {/* <BlogSection /> */}
    </>
  );
}
