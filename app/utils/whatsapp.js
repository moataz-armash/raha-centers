export const sendWhatsAppMessage = (offerTitle = "", offerPrice = "", offerDescription = "") => {
  const phoneNumber = "966592098944";
  
  let message = "مرحباً، أريد الحجز في مراكز الراحة\n\n";
  
  if (offerTitle) {
    message += `العرض: ${offerTitle}\n`;
  }
  
  if (offerPrice) {
    message += `السعر: ${offerPrice}\n`;
  }
  
  if (offerDescription) {
    message += `\nالتفاصيل:\n${offerDescription}\n`;
  }
  
  message += "\nأرجو التواصل معي لتأكيد الحجز.";
  
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};

