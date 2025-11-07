import OfferDetail from "@/app/components/Offers/OfferDetail";
import OffersContent from "../OffersContent";
import { notFound } from "next/navigation";

// إعادة نفس البيانات
function getOffers() {
  return [
    {
      title: "VIP مساج + حمام مغربي + بخار + بديكير + حلاقة + صنفره",
      price: "500 ر.س",
      description: "باقة VIP شاملة: مساج + حمام مغربي + بخار + بديكير + حلاقة + صنفرة",
      image: "/assets/img/download.webp",
    },
    {
      title: "مساج + حمام مغربي + بخار + بديكير",
      price: "250 ر.س",
      description: "مساج + حمام مغربي + بخار + بديكير",
      image: "/assets/img/download1.webp",
    },
    {
      title: "بديكير مساج",
      price: "220 ر.س",
      description: "بديكير مع مساج للقدمين",
      image: "/assets/img/download2.webp",
    },
    {
      title: "مساج مغربي + بخار",
      price: "200 ر.س",
      description: "مساج مغربي مع جلسة بخار",
      image: "/assets/img/download.webp",
    },
  ];
}

export default function OfferDetailPage({ params }) {
  const offers = getOffers();
  const offer = offers[parseInt(params.index, 10)];
  if (!offer) return notFound();
  return <OfferDetail offer={offer} />;
}
