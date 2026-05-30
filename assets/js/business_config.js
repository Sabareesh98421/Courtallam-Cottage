// Centralized Business Configuration for Courtallam Cottage
const BUSINESS_CONFIG = {
  name: "Courtallam Cottage",
  tagline: "Where the Western Ghats waterfalls meet luxurious living",
  desc: "Nestled in the lush, mist-kissed foothills of Courtallam (Kuttralam) in Tamil Nadu, our premium eco-homestay offers a peaceful sanctuary. Escape the hustle of city life to surround yourself with private orchards, seasonal forest streams, and majestic mountain views-all while enjoying warm, boutique South Indian hospitality.",
  phone: "+91 98421 27812",
  phoneRaw: "919842127812",
  email: "ogcourtallamcottage@gmail.com",
  address: "Courtallam cottage , 34, 1st street, opp. to Bus stand, Parasakthi Nagar, Courtallam, Tamil Nadu 627802, India",
  gbpLink: "https://share.google/0oJ5tyNkfhAULe1Qt",
  googleMapsLink: "https://www.google.com/maps/place/Courtallam+Cottage/@8.935396,77.2728238,17z/data=!3m1!4b1!4m6!3m5!1s0x3b042a2ffe9b716b:0x65fc46f889750783!8m2!3d8.9353907!4d77.2753987!16s%2Fg%2F11fxcdd272",
  socials: {
    instagram: "https://instagram.com/courtallamcottage",
    facebook: "https://facebook.com/courtallamcottage",
  },

  // Dynamic pricing info
  pricing: {
    currency: "₹",
    taxRate: 0, // Set to 0 to completely remove/hide taxes from fare breakout, or set to decimal (e.g. 0.12 for 12% GST) to enable it
  },

  // WhatsApp Deep Link Generator
  getWhatsAppLink: function (messageText) {
    const text = encodeURIComponent(messageText || "Hello! I am interested in booking a stay at Courtallam Cottage. Could you please share availability?");
    return `https://wa.me/${this.phoneRaw}?text=${text}`;
  },

  // Reuse one source of truth for map links.
  getGoogleMapsEmbedLink: function () {
    return `https://www.google.com/maps?q=${encodeURIComponent(this.address)}&output=embed`;
  }
};

// Lock config so this file remains the runtime source of truth.
Object.freeze(BUSINESS_CONFIG.socials);
Object.freeze(BUSINESS_CONFIG.pricing);
Object.freeze(BUSINESS_CONFIG);