// Standard DOM creation helper to avoid raw string interpolation
function createDOMElement(tag, attributes = {}, ...children) {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(attributes)) {
    if (key === "class" || key === "className") {
      element.className = value;
    } else if (key === "id") {
      element.id = value;
    } else if (key.startsWith("on") && typeof value === "function") {
      const eventName = key.toLowerCase().substring(2);
      element.addEventListener(eventName, value);
    } else {
      element.setAttribute(key, value);
    }
  }
  children.flat(2).forEach(child => {
    if (child !== null && child !== undefined && child !== false) {
      if (typeof child === "string" || typeof child === "number") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    }
  });
  return element;
}

// Centralized Business Configuration for Courtallam Cottage
const BUSINESS_CONFIG = {
  name: "Courtallam Cottage",
  tagline: "Where the Western Ghats waterfalls meet luxurious living",
  desc: "Nestled in the lush, mist-kissed foothills of Courtallam (Kuttralam) in Tamil Nadu, our premium eco-homestay offers a peaceful sanctuary. Escape the hustle of city life to surround yourself with private orchards, seasonal forest streams, and majestic mountain views—all while enjoying warm, boutique South Indian hospitality.",
  phone: "+91 98421 27812",
  phoneRaw: "919842127812",
  email: "stay@courtallamcottage.com",
  address: "14/3, Shenbagadevi Temple Road, Upper Courtallam, Tenkasi District, Tamil Nadu - 627802",
  googleMapsLink: "https://maps.google.com/?q=Shenbagadevi+Temple+Road+Courtallam+Tenkasi",
  socials: {
    instagram: "https://instagram.com/courtallamcottage",
    facebook: "https://facebook.com/courtallamcottage",
  },
  
  // Dynamic pricing info
  pricing: {
    currency: "₹",
    taxRate: 0.12,
  },

  // WhatsApp Deep Link Generator
  getWhatsAppLink: function(messageText) {
    const text = encodeURIComponent(messageText || "Hello! I am interested in booking a stay at Courtallam Cottage. Could you please share availability?");
    return `https://wa.me/${this.phoneRaw}?text=${text}`;
  }
};

// Rooms Data Array
const ROOMS_DATA = [
  {
    id: "orchard-deluxe",
    name: "Orchard Deluxe Estate Room",
    tagline: "Private Sanctuary in Fruit-Groves",
    desc: "A beautifully private room surrounded by our organic fruit plantations (Rambutant, Mangosteen, Nutmeg). Features high-quality linen, handmade terracotta flooring, a boutique modern bathroom, and a spacious private wooden deck overlooking the misty valley peaks.",
    priceMin: 3500,
    priceMax: 4800,
    maxOccupancy: 2,
    bedType: "King Bed",
    view: "Organic Plantation & Hills",
    size: "420 sq.ft.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    amenities: ["wifi", "air-conditioning", "private-deck", "organic-toiletries", "tea-coffee", "parking"]
  },
  {
    id: "riverstream-suite",
    name: "The Riverstream Cottage Suite",
    tagline: "Unwind Beside Forest Stream Soundscapes",
    desc: "Set directly on the edge of a tranquil, seasonal forest stream flowing from the Shenbagadevi range. Enjoy high exposed-beam ceilings, handcrafted teakwood furniture, a semi-outdoor luxury shower, and custom armchairs on the porch for perfect meditation sessions.",
    priceMin: 5500,
    priceMax: 6800,
    maxOccupancy: 3,
    bedType: "Super King Bed",
    view: "Private Stream & Canopy",
    size: "650 sq.ft.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    amenities: ["wifi", "air-conditioning", "river-view", "outdoor-shower", "premium-minibar", "parking"]
  },
  {
    id: "shenbagam-family",
    name: "Shenbagam Family Stone Villa",
    tagline: "Rustic Elegance for Unforgettable Family Reunions",
    desc: "A sprawling double-bedroom stone villa nestled adjacent to fragrant Shenbagam tree gardens. Offers an expansive private veranda with traditional wooden swings, a localized South-Indian styled dining pavilion, state-of-the-art modern amenities, and plenty of space for family banter.",
    priceMin: 8000,
    priceMax: 10500,
    maxOccupancy: 5,
    bedType: "2 King Beds + 1 Daybed",
    view: "Shenbagam Garden & Peaks",
    size: "1100 sq.ft.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    amenities: ["wifi", "air-conditioning", "garden-swing", "kitchenette", "cable-tv", "2x-bathrooms"]
  },
  {
    id: "canopy-penthouse",
    name: "The Whispering Canopy Penthouse",
    tagline: "High-Altitude Treehouse Living",
    desc: "Our crown jewel. An elevated luxury wooden structural penthouse nested high up in the dense canopy. Offers an outstanding 360-degree panoramic sight of the mountain ranges, premium wood floor paneling, glass sky-walls, and high-contrast designer bathroom amenities.",
    priceMin: 6500,
    priceMax: 8500,
    maxOccupancy: 2,
    bedType: "Plush California King",
    view: "Courtallam Peak 360 Panoramic",
    size: "800 sq.ft.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    amenities: ["wifi", "air-conditioning", "sky-walls", "premium-bathtub", "coffee-bar", "parking"]
  }
];

// Testimonials Data Array
const TESTIMONIALS_DATA = [
  {
    name: "Meenakshi Sundaram",
    location: "Chennai",
    rating: 5,
    text: "An absolute slice of heaven. Waking up to the crisp mountain breeze and the distant soothing roar of the Courtallam waterfalls was unforgettable. The Orchard Suite is clean, premium, and very private."
  },
  {
    name: "Aditya & Shreya Goel",
    location: "Gurgaon",
    rating: 5,
    text: "We stayed at the Stream cottage. The sound of water running beside the balcony is incredibly healing. Hospitality is warm, personal, and premium. They served traditional South-Indian breakfast on banana leaves!"
  },
  {
    name: "Robert & Claire Wilson",
    location: "London",
    rating: 5,
    text: "A tranquil sanctuary beautifully situated away from the tourist hordes, yet within key minutes of the falls. Beautiful detailing, organic plantations, and amazing bird watching. We will absolutely return."
  },
  {
    name: "Dr. K. Raghavan",
    location: "Madurai",
    rating: 5,
    text: "The perfect weekend getaway for our large family. Stated in the Shenbagam Stone Villa—traditional architecture paired with pristine modern bathrooms. Outstanding care from the staff."
  }
];

// Gallery Images Data
const GALLERY_DATA = [
  {
    title: "Cottage Valley Sunrise",
    tag: "Surroundings",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Morning mist settling over the Western Ghats range bordering our property."
  },
  {
    title: "Eco Riverstream Cabin Exterior",
    tag: "Cabins",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "A view of our premium Riverstream cabin built cleanly using local basalt stone and premium teak wood."
  },
  {
    title: "Organic Cardamom Groves",
    tag: "Nature",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Lush botanical spaces of cardamom and pepper trailing the shade trees."
  },
  {
    title: "Courtyard Dining Experience",
    tag: "Dining",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Al-fresco evening lighting where signature South Indian delicacies are served."
  },
  {
    title: "Cozy Penthouse Lounge",
    tag: "Interiors",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Comfortable organic fabrics and locally-woven jute carpets inside our premium suites."
  },
  {
    title: "Schenbagadevi Waterfall Stream",
    tag: "Nature",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "A stream flowing directly from the high falls through the property borders."
  }
];

// Reusable SVG Path Fallback Library
const SVG_FALLBACKS = {
  wifi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 9.24v3z"></path></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M17.439 14.65c-.215-.11-.77-.38-.89-.425-.12-.045-.255-.06-.39.12-.135.18-.525.66-.645.8-.12.135-.24.15-.455.045a7.518 7.518 0 01-2.92-1.8 8.286 8.286 0 01-2.025-2.52c-.12-.215-.015-.33.09-.435.09-.11.21-.24.315-.36.105-.12.135-.21.21-.345.075-.135.03-.255-.015-.36-.045-.105-.39-.945-.54-1.305-.143-.347-.291-.347-.39-.347h-.33c-.12 0-.315.045-.48.225-.165.18-.63.615-.63 1.5s.645 1.74.735 1.86c.09.12 1.258 1.92 3.05 2.693.426.183.759.293 1.018.376.43.136.821.117 1.13.07.345-.053 1.058-.433 1.208-.85.15-.417.15-.775.105-.85-.045-.075-.165-.12-.38-.23z"></path><path d="M12.004 2a9.995 9.995 0 00-8.684 14.989l-1.314 4.8 4.908-1.288A9.995 9.995 0 1012.004 2z"></path></svg>`,
  waterfall: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M3 13h18"></path><path d="M3 7h18"></path><path d="M5 21l3-18"></path><path d="M19 21l-3-18"></path><path d="M12 21h.01"></path><path d="M12 17h.01"></path><path d="M12 13h.01"></path><path d="M12 9h.01"></path></svg>`,
  parking: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  guests: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M2 4v16"></path><path d="M2 11h20"></path><path d="M22 4v16"></path><path d="M2 17h20"></path><path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>`,
  chevron_left: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="15 18 9 12 15 6"></polyline></svg>`,
  chevron_right: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
  restaurant: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path><path d="M12 6v6l4 2"></path></svg>`,
};

// SVG Icon Cache - Load icons once and reuse them
const SVG_CACHE = {
  icons: {},
  loading: {},
  CACHE_VERSION: Date.now(), // Cache-buster version
  
  // Preload all SVG icons from the folder
  async preloadIcons() {
    const iconNames = [
      'bed', 'calendar', 'chevron_left', 'chevron_right', 'close', 'email',
      'guests', 'location', 'menu', 'parking', 'phone', 'restaurant',
      'star', 'waterfall', 'whatsapp', 'wifi'
    ];
    
    for (const name of iconNames) {
      // Always try to fetch fresh SVG files first (with cache-buster)
      try {
        const response = await fetch(`assets/svgs/${name}.svg?v=${this.CACHE_VERSION}`, {
          cache: 'no-store'
        });
        if (response.ok) {
          this.icons[name] = await response.text();
          continue;
        }
      } catch (e) {
        // Fall through to fallback if fetch fails
      }
      
      // Fallback to inline SVG if file not found
      if (SVG_FALLBACKS[name]) {
        this.icons[name] = SVG_FALLBACKS[name];
      }
    }
  },
  
  // Get a cached SVG and apply classes/title
  getSVG(iconName, classes = "w-6 h-6 text-current", title = "") {
    if (!this.icons[iconName]) {
      console.warn(`[SVG Cache] Icon not found: ${iconName}`);
      return null;
    }
    
    let svgText = this.icons[iconName];
    // Create a temporary container to parse SVG
    const temp = document.createElement("div");
    temp.innerHTML = svgText;
    const svg = temp.querySelector("svg");
    
    if (!svg) {
      console.warn(`[SVG Cache] Failed to parse SVG for icon: ${iconName}`);
      return null;
    }
    
    // Clone and apply classes
    const clone = svg.cloneNode(true);
    classes.split(" ").forEach(cls => {
      if (cls.trim()) clone.classList.add(cls);
    });
    
    // Add title if provided
    if (title) {
      const titleEl = document.createElementNS("http://www.w3.org/2000/svg", "title");
      titleEl.textContent = title;
      clone.appendChild(titleEl);
    }
    
    return clone;
  }
};

// Debug: Log cache status on page load
console.log(`[SVG Cache] Initialized cache version: ${SVG_CACHE.CACHE_VERSION}`);

// SVG Injector Helper Function - Now using cache to avoid repeated fetches
function injectSVGIcons() {
  document.querySelectorAll("[data-icon]:not([data-icon-injected])").forEach((el) => {
    const iconName = el.getAttribute("data-icon");
    if (!iconName) return;

    // Mark as injected to prevent re-processing
    el.setAttribute("data-icon-injected", "true");

    // Apply proper display style to ensure the wrapper element obeys width/height Tailwind classes
    const tagName = el.tagName.toLowerCase();
    if (tagName === "span") {
      el.style.display = "inline-flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      el.style.verticalAlign = "middle";
    } else if (tagName === "div") {
      if (!el.style.display || el.style.display === "inline") {
        el.style.display = "block";
      }
    }

    // Get classes and title from element
    const classes = el.getAttribute("class") || "w-6 h-6 text-current";
    const title = el.getAttribute("title") || "";
    
    // Get cached SVG and inject
    const svg = SVG_CACHE.getSVG(iconName, classes, title);
    if (svg) {
      el.innerHTML = "";
      el.appendChild(svg);
    } else {
      console.warn(`SVG icon not found in cache: ${iconName}`);
    }
  });
}

// Format Currency Utility
function formatCurrency(amount) {
  return typeof amount === "number" 
    ? `${BUSINESS_CONFIG.pricing.currency}${amount.toLocaleString("en-IN")}`
    : amount;
}

// Dynamic Component Injection Registry
document.addEventListener("DOMContentLoaded", async () => {
  console.log("[SVG Cache] Starting icon preload...");
  
  // Preload all SVG icons into cache first
  const startTime = performance.now();
  await SVG_CACHE.preloadIcons();
  const loadTime = performance.now() - startTime;
  
  console.log(`[SVG Cache] Preload complete in ${loadTime.toFixed(2)}ms, loaded ${Object.keys(SVG_CACHE.icons).length} icons`);
  
  // Then inject icons
  injectSVGIcons();
  
  // Inject floating WhatsApp button
  injectFloatingWhatsApp();
  
  // Register mobile menu toggler
  setupMobileMenu();
});

// Setup Mobile Menu behavior
function setupMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  if (!menuBtn || !mobileNav) return;

  const btnIcon = menuBtn.querySelector("[data-icon]");

  menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("hidden");
    if (isOpen) {
      mobileNav.classList.remove("hidden");
      mobileNav.classList.add("flex");
      if (btnIcon) {
        btnIcon.setAttribute("data-icon", "close");
        injectSVGIcons();
      }
    } else {
      mobileNav.classList.add("hidden");
      mobileNav.classList.remove("flex");
      if (btnIcon) {
        btnIcon.setAttribute("data-icon", "menu");
        injectSVGIcons();
      }
    }
  });
}

// Inject Floating WhatsApp Button with subtle bouncing animation and tooltip
function injectFloatingWhatsApp() {
  if (document.getElementById("floating-whatsapp-btn")) return;
  
  const tooltip = createDOMElement("span", {
    class: "absolute right-16 scale-0 bg-primary text-white text-xs py-2 px-3.5 rounded-full shadow-lg font-medium transition-all duration-300 origin-right group-hover:scale-100 whitespace-nowrap"
  }, "Chat with our Concierge!");

  const whatsappIcon = createDOMElement("div", {
    "data-icon": "whatsapp",
    class: "w-7 h-7 text-white"
  });

  const link = createDOMElement("a", {
    href: BUSINESS_CONFIG.getWhatsAppLink('Hello! I would like to inquire about cottage booking availability.'),
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Contact Courtallam Cottage support on WhatsApp",
    class: "relative p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] transition-transform duration-300 hover:scale-110 active:scale-95 animate-pulse-subtle flex items-center justify-center"
  }, whatsappIcon);

  const waContainer = createDOMElement("div", {
    id: "floating-whatsapp-btn",
    class: "fixed bottom-6 right-6 z-50 flex items-center group"
  }, tooltip, link);

  document.body.appendChild(waContainer);
  injectSVGIcons();
}
