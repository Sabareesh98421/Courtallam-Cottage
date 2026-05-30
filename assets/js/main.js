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

if (typeof BUSINESS_CONFIG === "undefined") {
  throw new Error("BUSINESS_CONFIG is not loaded. Include assets/js/business_config.js before assets/js/main.js.");
}

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
      'star', 'waterfall', 'whatsapp', 'wifi', 'instagram', 'facebook'
    ];
    
    for (const name of iconNames) {
      try {
        const response = await fetch(`assets/svgs/${name}.svg?v=${this.CACHE_VERSION}`, {
          cache: 'no-store'
        });
        if (response.ok) {
          this.icons[name] = await response.text();
        }
      } catch (e) {
        console.warn(`[SVG Cache] Failed to load icon file: ${name}`, e);
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

    // Get classes and title from element
    const classes = el.getAttribute("class") || "w-6 h-6 text-current";
    const title = el.getAttribute("title") || "";
    
    // Get cached SVG and inject
    const svg = SVG_CACHE.getSVG(iconName, classes, title);
    if (svg) {
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
        btnIcon.removeAttribute("data-icon-injected");
        btnIcon.setAttribute("data-icon", "close");
        injectSVGIcons();
      }
    } else {
      mobileNav.classList.add("hidden");
      mobileNav.classList.remove("flex");
      if (btnIcon) {
        btnIcon.removeAttribute("data-icon-injected");
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
    class: "w-6 h-6 text-white"
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
