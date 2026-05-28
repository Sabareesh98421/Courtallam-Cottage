// Reusable CTA Sections Components for Courtallam Cottage
function renderEcoSanctuaryCTA(containerId, isAlternateTheme = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const bgStyle = isAlternateTheme 
    ? "bg-secondary text-white" 
    : "bg-primary text-white";

  const bannerText = isAlternateTheme
    ? "Experience the Rejuvenating Western Ghats Monsoons"
    : "Ready to Hear the Soft Sounds of Falling Water?";

  const bodyText = isAlternateTheme
    ? "Our premium cottages are nestled right in the path of the mountain mists. Book early to lock in South India's premium monsoon getaway experience."
    : "Reserve your cottage suite today. Secure your escape into organic orchards, forest stream canopies, and boutique luxury.";

  // Subtle Decorative SVG Accent Backgrounds
  const accentRightSpan = createDOMElement("span", {
    "data-icon": "waterfall",
    class: "w-full h-full text-white"
  });
  const accentRight = createDOMElement("div", {
    class: "absolute -right-20 -bottom-20 w-80 h-80 opacity-5 pointer-events-none"
  }, accentRightSpan);

  const accentLeftSpan = createDOMElement("span", {
    "data-icon": "waterfall",
    class: "w-full h-full text-white"
  });
  const accentLeft = createDOMElement("div", {
    class: "absolute -left-20 -top-20 w-80 h-80 opacity-5 pointer-events-none"
  }, accentLeftSpan);

  // Contents
  const badge = createDOMElement("span", {
    class: "text-[10px] md:text-xs font-bold text-secondary uppercase tracking-widest block bg-white/10 px-4 py-1.5 rounded-full w-fit mx-auto"
  }, "Boutique Hill Sanctuary Escape");

  const titleEl = createDOMElement("h2", {
    class: "text-3xl md:text-5xl font-serif font-black leading-tight"
  }, bannerText);

  const descEl = createDOMElement("p", {
    class: "text-white/80 text-sm md:text-base leading-relaxed font-sans max-w-xl mx-auto"
  }, bodyText);

  // Link buttons
  const bookLink = createDOMElement("a", {
    href: "booking.html",
    class: "px-8 py-4 bg-secondary text-white font-semibold text-xs tracking-widest uppercase rounded-full shadow hover:bg-secondary/90 transition-transform active:scale-[0.98] duration-200 hover:scale-[1.01] flex items-center justify-center gap-2"
  }, "Book Online Cottage Room");

  const whatsappIconSpan = createDOMElement("span", {
    "data-icon": "whatsapp",
    class: "w-5 h-5 flex-shrink-0 text-[#25D366]"
  });
  const chatLink = createDOMElement("a", {
    href: BUSINESS_CONFIG.getWhatsAppLink('Hello! I would like to consult about booking availability for Courtallam Cottage.'),
    target: "_blank",
    rel: "noopener noreferrer",
    class: "px-8 py-4 bg-white text-primary font-semibold text-xs tracking-widest uppercase rounded-full shadow hover:bg-white/95 transition-transform active:scale-[0.98] duration-200 hover:scale-[1.01] flex items-center justify-center gap-2"
  }, whatsappIconSpan, "Chat on WhatsApp");

  const buttonsGroup = createDOMElement("div", {
    class: "flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 font-sans"
  }, bookLink, chatLink);

  const interactiveContainer = createDOMElement("div", {
    class: "max-w-2xl mx-auto space-y-6 relative z-10"
  }, badge, titleEl, descEl, buttonsGroup);

  const wrapper = createDOMElement("div", {
    class: `w-full ${bgStyle} rounded-3xl p-8 md:p-16 text-center space-y-6 relative overflow-hidden shadow-xl border-t-8 border-secondary`
  }, accentRight, accentLeft, interactiveContainer);

  container.innerHTML = "";
  container.appendChild(wrapper);

  if (typeof injectSVGIcons === "function") {
    injectSVGIcons();
  }
}
