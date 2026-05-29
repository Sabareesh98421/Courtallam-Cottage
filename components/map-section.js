function renderContactMapSection(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const section = createDOMElement("section", { class: "bg-surface py-20" });
  const wrapper = createDOMElement("div", { class: "max-w-7xl mx-auto px-6 space-y-12" });

  const header = createDOMElement("div", { class: "text-center max-w-xl mx-auto space-y-3" });
  header.appendChild(createDOMElement("span", {
    class: "text-xs uppercase tracking-widest font-bold text-secondary"
  }, "Our Geographical Context"));
  header.appendChild(createDOMElement("h2", {
    class: "text-2xl md:text-3xl font-serif font-black text-primary"
  }, "Upper Courtallam Foothills Map"));
  header.appendChild(createDOMElement("p", {
    class: "text-on-surface-variant text-xs font-sans"
  }, "Arrive via direct rail loops to Tenkasi Junction (6km) or fly to Tuticorin Airport (2h drive). Scroll details or tap to trigger direct driving navigation."));

  const mapCard = createDOMElement("div", {
    class: "rounded-3xl border border-surface overflow-hidden shadow-sm relative h-[450px] bg-white"
  });

  const mapFrame = createDOMElement("iframe", {
    src: BUSINESS_CONFIG.getGoogleMapsEmbedLink(),
    class: "absolute inset-0 w-full h-full border-0",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade",
    allowfullscreen: ""
  });

  const pinWrap = createDOMElement("div", { class: "absolute left-[58%] top-[43%] z-20" });
  pinWrap.appendChild(createDOMElement("span", {
    class: "absolute inline-flex h-12 w-12 rounded-full bg-secondary/40 animate-ping"
  }));
  const pin = createDOMElement("div", {
    class: "relative w-12 h-12 rounded-full bg-secondary shadow-2xl border-4 border-white flex items-center justify-center animate-bounce"
  }, createDOMElement("span", { "data-icon": "location", class: "w-6 h-6 text-white" }));
  pinWrap.appendChild(pin);
  pinWrap.appendChild(createDOMElement("div", {
    class: "absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-primary text-white text-[10px] uppercase tracking-widest font-bold shadow-xl"
  }, BUSINESS_CONFIG.name));

  const overlay = createDOMElement("div", { class: "absolute inset-0 bg-black/10 pointer-events-none" });

  const detailsWrap = createDOMElement("div", { class: "relative z-10 h-full flex items-end p-8 md:p-12" });
  const details = createDOMElement("div", {
    class: "bg-[#173124]/95 text-white p-6 md:p-8 rounded-2xl max-w-md border border-white/10 space-y-4 shadow-xl backdrop-blur-sm"
  });
  details.appendChild(createDOMElement("div", { class: "flex items-center gap-2" },
    createDOMElement("span", { "data-icon": "location", class: "w-5 h-5 text-secondary" }),
    createDOMElement("h4", { class: "font-serif font-bold text-lg" }, "Detailed Driving Landmark")
  ));
  details.appendChild(createDOMElement("p", {
    class: "text-xs text-white/80 leading-relaxed font-sans"
  }, "Proceed up the Shenbagadevi Temple pathway road just beyond the Forest Gate checkpost. Follow our wooden botanical road tags for 400 meters."));
  details.appendChild(createDOMElement("a", {
    href: BUSINESS_CONFIG.googleMapsLink,
    target: "_blank",
    rel: "noopener noreferrer",
    class: "w-full text-center block py-3 bg-secondary text-white text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-secondary/95 transition-transform duration-300 hover:scale-[1.01] cursor-pointer shadow"
  }, "Open in Google Maps"));

  detailsWrap.appendChild(details);

  mapCard.appendChild(mapFrame);
  mapCard.appendChild(pinWrap);
  mapCard.appendChild(overlay);
  mapCard.appendChild(detailsWrap);

  wrapper.appendChild(header);
  wrapper.appendChild(mapCard);
  section.appendChild(wrapper);

  container.innerHTML = "";
  container.appendChild(section);

  if (typeof injectSVGIcons === "function") {
    injectSVGIcons();
  }
}
