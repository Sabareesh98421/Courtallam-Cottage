// Reusable Footer Component for Courtallam Cottage
function injectFooter() {
  const container = document.getElementById("footer-container");
  if (!container) return;

  // Pillar 1: Brand details
  const p1LogoImg = createDOMElement("img", {
    src: "assets/svgs/website_logo.svg",
    alt: "Courtallam Cottage Logo",
    class: "w-10 h-10 object-contain",
    style: "scale: 3.5;"
  });

  const p1LogoTitle = createDOMElement("h2", {
    class: "text-xl font-serif font-bold text-white tracking-wide"
  }, BUSINESS_CONFIG.name);

  const p1LogoSub = createDOMElement("p", {
    class: "text-[10px] uppercase tracking-widest text-[#bcaba0] font-semibold"
  }, "Boutique Eco Homestay");

  const p1LogoText = createDOMElement("div", {}, p1LogoTitle, p1LogoSub);
  const p1Header = createDOMElement("div", { class: "flex items-center gap-3" }, p1LogoImg, p1LogoText);

  const p1Desc = createDOMElement("p", {
    class: "text-sm text-[#bcaba0] leading-relaxed font-sans"
  }, "A premium hill-station sanctuary nestled in the serene slopes of the Western Ghats. Experience waterfalls, organic spice orchards, aromatic air, and authentic South Indian hospitality.");

  // Socials
  const igIcon = createDOMElement("span", { "data-icon": "instagram", class: "w-5 h-5" });
  const fbIcon = createDOMElement("span", { "data-icon": "facebook", class: "w-5 h-5" });

  const igLink = createDOMElement("a", {
    href: BUSINESS_CONFIG.socials.instagram,
    target: "_blank",
    rel: "noopener",
    class: "w-10 h-10 rounded-full bg-white/5 hover:bg-secondary/40 text-white flex items-center justify-center transition-colors hover:scale-105 duration-200",
    "aria-label": "Visit Courtallam Cottage on Instagram"
  }, igIcon);

  const fbLink = createDOMElement("a", {
    href: BUSINESS_CONFIG.socials.facebook,
    target: "_blank",
    rel: "noopener",
    class: "w-10 h-10 rounded-full bg-white/5 hover:bg-secondary/40 text-white flex items-center justify-center transition-colors hover:scale-105 duration-200",
    "aria-label": "Visit Courtallam Cottage on Facebook"
  }, fbIcon);

  const socialContainer = createDOMElement("div", { class: "flex items-center gap-3 pt-2" }, igLink, fbLink);
  const p1 = createDOMElement("div", { class: "space-y-4" }, p1Header, p1Desc, socialContainer);

  // Pillar 2: Navigation links
  const p2Title = createDOMElement("h3", {
    class: "text-sm uppercase tracking-wider font-semibold text-white font-sans"
  }, "Explore");

  const p2List = createDOMElement("ul", { class: "space-y-2 text-sm text-[#bcaba0]" });
  const exploreLinks = [
    { text: "Home Dashboard", url: "index.html" },
    { text: "Our Legacy & About", url: "about.html" },
    { text: "Suites & Cottages", url: "rooms.html" },
    { text: "Waterfall Gallery", url: "gallery.html" },
    { text: "Get in touch", url: "contact.html" }
  ];
  exploreLinks.forEach(link => {
    const a = createDOMElement("a", { href: link.url, class: "hover:text-white transition-colors" }, link.text);
    p2List.appendChild(createDOMElement("li", {}, a));
  });

  const p2 = createDOMElement("div", { class: "space-y-4" }, p2Title, p2List);

  // Pillar 3: Suites links
  const p3Title = createDOMElement("h3", {
    class: "text-sm uppercase tracking-wider font-semibold text-white font-sans"
  }, "Our Suites");

  const p3List = createDOMElement("ul", { class: "space-y-2 text-sm text-[#bcaba0]" });
  const suitesListing = [
    { text: "Orchard Deluxe Estate Room", url: "rooms.html#orchard-deluxe" },
    { text: "The Riverstream Cottage Suite", url: "rooms.html#riverstream-suite" },
    { text: "Shenbagam Family Stone Villa", url: "rooms.html#shenbagam-family" },
    { text: "The Whispering Canopy Penthouse", url: "rooms.html#canopy-penthouse" }
  ];
  suitesListing.forEach(link => {
    const a = createDOMElement("a", { href: link.url, class: "hover:text-white transition-colors" }, link.text);
    p3List.appendChild(createDOMElement("li", {}, a));
  });

  const p3 = createDOMElement("div", { class: "space-y-4" }, p3Title, p3List);

  // Pillar 4: Contact links
  const p4Title = createDOMElement("h3", {
    class: "text-sm uppercase tracking-wider font-semibold text-white font-sans"
  }, "Location & Contact");

  const p4List = createDOMElement("ul", { class: "space-y-3.5 text-sm text-[#bcaba0] font-sans" });
  
  // Location
  const locIcon = createDOMElement("span", { "data-icon": "location", class: "w-5 h-5 text-secondary flex-shrink-0 mt-0.5" });
  const locSpan = createDOMElement("span", { class: "leading-relaxed" }, BUSINESS_CONFIG.address);
  const locLi = createDOMElement("li", { class: "flex items-start gap-3" }, locIcon, locSpan);

  // Phone
  const phoneIcon = createDOMElement("span", { "data-icon": "phone", class: "w-5 h-5 text-secondary" });
  const phoneA = createDOMElement("a", { href: `tel:${BUSINESS_CONFIG.phoneRaw}`, class: "hover:text-white transition-colors" }, BUSINESS_CONFIG.phone);
  const phoneLi = createDOMElement("li", { class: "flex items-center gap-3" }, phoneIcon, phoneA);

  // Email
  const mailIcon = createDOMElement("span", { "data-icon": "email", class: "w-5 h-5 text-secondary" });
  const mailA = createDOMElement("a", { href: `mailto:${BUSINESS_CONFIG.email}`, class: "hover:text-white transition-colors" }, BUSINESS_CONFIG.email);
  const mailLi = createDOMElement("li", { class: "flex items-center gap-3" }, mailIcon, mailA);

  p4List.appendChild(locLi);
  p4List.appendChild(phoneLi);
  p4List.appendChild(mailLi);

  const p4 = createDOMElement("div", { class: "space-y-4" }, p4Title, p4List);

  // Combine into a grid
  const grid = createDOMElement("div", {
    class: "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
  }, p1, p2, p3, p4);

  // Legal Bar
  const legalText = createDOMElement("p", { class: "text-xs text-[#bcaba0] font-sans" }, 
    `© ${new Date().getFullYear()} ${BUSINESS_CONFIG.name}. All Rights Reserved. Designed for premium eco-getaways.`
  );

  const privacyLink = createDOMElement("a", { href: "#", class: "hover:text-white transition-colors" }, "Privacy Policy");
  const termsLink = createDOMElement("a", { href: "#", class: "hover:text-white transition-colors" }, "Booking Terms & Conditions");
  const legalLinks = createDOMElement("div", { class: "flex items-center gap-6 text-xs text-[#bcaba0] font-sans" }, privacyLink, termsLink);

  const legalBar = createDOMElement("div", {
    class: "max-w-7xl mx-auto px-6 border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
  }, legalText, legalLinks);

  const footer = createDOMElement("footer", {
    class: "bg-[#1B2621] text-[#E6EADF] pt-16 pb-12 overflow-hidden border-t-4 border-secondary"
  }, grid, legalBar);

  container.innerHTML = "";
  container.appendChild(footer);

  if (typeof injectSVGIcons === "function") {
    injectSVGIcons();
  }
}

// Automatically trigger injection on script load or DOM-load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectFooter);
} else {
  injectFooter();
}
