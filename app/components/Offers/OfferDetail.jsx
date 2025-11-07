import Image from "next/image";
import { sendWhatsAppMessage } from "@/app/utils/whatsapp";

const OfferDetail = ({ offer }) => {
  if (!offer) return <div className="text-center text-red-500">هذا العرض غير متوفر</div>;
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image src={offer.image} alt={offer.title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-primary mb-2">{offer.title}</h1>
            <div className="text-xl font-bold text-primary mb-6">{offer.price}</div>
            <p className="text-gray-800 text-lg mb-8 leading-relaxed">
              {offer.description}
            </p>
            <button
              onClick={() => sendWhatsAppMessage(offer.title, offer.price, offer.description)}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold text-xl hover:bg-primary/90 transition"
            >
              احجز الآن عبر واتساب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetail;
