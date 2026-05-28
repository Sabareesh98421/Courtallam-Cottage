// Reusable Room Card Component for Courtallam Cottage
function renderRoomCards(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container || !ROOMS_DATA) return;

  const roomsToRender = limit ? ROOMS_DATA.slice(0, limit) : ROOMS_DATA;

  container.innerHTML = "";

  roomsToRender.forEach(room => {
    // Generate individual room amenities pills dynamically
    const amenityElements = room.amenities.map(amen => {
      const iconSpan = createDOMElement("span", {
        "data-icon": amen,
        class: "w-4 h-4 flex-shrink-0"
      });
      return createDOMElement("span", {
        class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface text-primary text-xs font-semibold uppercase tracking-wider"
      }, iconSpan, amen.replace("-", " "));
    });

    const waText = `Hello! I would like to book the "${room.name}" at Courtallam Cottage. Could you please confirm pricing and availability for my stay?`;
    const waLink = BUSINESS_CONFIG.getWhatsAppLink(waText);

    // Featured Image Panel
    const imgEl = createDOMElement("img", {
      src: room.image,
      alt: room.name,
      referrerpolicy: "no-referrer",
      class: "w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-in-out"
    });

    const tagEl = createDOMElement("div", {
      class: "absolute top-4 left-4 bg-primary text-white text-[10px] font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md"
    }, room.view);

    const imageWrapper = createDOMElement("div", {
      class: "relative overflow-hidden aspect-[16/10]"
    }, imgEl, tagEl);

    // Specifications
    const taglineSpan = createDOMElement("span", {
      class: "text-[10px] font-bold text-secondary uppercase tracking-widest block font-sans"
    }, room.tagline);

    const titleH3 = createDOMElement("h3", {
      class: "text-xl md:text-2xl font-serif font-black text-primary group-hover:text-secondary transition-colors mt-1"
    }, room.name);

    const nameContainer = createDOMElement("div", {}, taglineSpan, titleH3);

    const labelFrom = createDOMElement("span", { class: "text-xs text-on-surface-variant block uppercase font-sans" }, "From");
    const priceAmount = createDOMElement("span", { class: "text-xl md:text-2xl font-bold text-primary font-sans block" }, formatCurrency(room.priceMin));
    const labelNight = createDOMElement("span", { class: "text-[10px] text-on-surface-variant block uppercase font-sans" }, "/ Night");

    const priceContainer = createDOMElement("div", { class: "text-right flex-shrink-0" }, labelFrom, priceAmount, labelNight);

    const headerRow = createDOMElement("div", { class: "flex items-start justify-between gap-4" }, nameContainer, priceContainer);

    const descriptionPara = createDOMElement("p", {
      class: "text-sm text-on-surface-variant leading-relaxed font-sans mt-2"
    }, room.desc);

    // Room Meta Details
    const guestsIcon = createDOMElement("span", { "data-icon": "guests", class: "w-4 h-4 text-secondary" });
    const guestsText = createDOMElement("span", {}, `Max ${room.maxOccupancy} Guests`);
    const guestsMeta = createDOMElement("div", { class: "flex items-center gap-2" }, guestsIcon, guestsText);

    const bedIcon = createDOMElement("span", { "data-icon": "bed", class: "w-4 h-4 text-secondary" });
    const bedText = createDOMElement("span", {}, room.bedType);
    const bedMeta = createDOMElement("div", { class: "flex items-center gap-2" }, bedIcon, bedText);

    const specsGrid = createDOMElement("div", {
      class: "grid grid-cols-2 gap-4 py-4 border-t border-b border-surface text-xs font-sans text-on-surface-variant"
    }, guestsMeta, bedMeta);

    // Amenities list
    const amenitiesHeader = createDOMElement("span", {
      class: "text-xs uppercase tracking-wider font-semibold text-primary block mb-3"
    }, "Amenities Included");

    const amenitiesListContainer = createDOMElement("div", {
      class: "flex flex-wrap gap-2"
    }, amenityElements);

    const amenitiesBlock = createDOMElement("div", { class: "pt-2" }, amenitiesHeader, amenitiesListContainer);

    const topSection = createDOMElement("div", { class: "space-y-3" }, headerRow, descriptionPara, specsGrid, amenitiesBlock);

    // Action button elements
    const selectSuiteBtn = createDOMElement("a", {
      href: `booking.html?room=${room.id}`,
      class: "w-full text-center py-3 bg-primary text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-primary/95 hover:scale-[1.01] transition-all active:scale-95 duration-200"
    }, "Select Suite");

    const waIcon = createDOMElement("span", { "data-icon": "whatsapp", class: "w-4 h-4" });
    const waBtn = createDOMElement("a", {
      href: waLink,
      target: "_blank",
      rel: "noopener noreferrer",
      class: "w-full text-center py-3 border border-secondary text-secondary text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-secondary hover:text-white hover:scale-[1.01] transition-all active:scale-95 duration-200 flex items-center justify-center gap-2"
    }, waIcon, "Book WhatsApp");

    const actionsRow = createDOMElement("div", {
      class: "grid grid-cols-2 gap-3 mt-8 pt-4 border-t border-surface"
    }, selectSuiteBtn, waBtn);

    const bodyWrapper = createDOMElement("div", {
      class: "p-6 md:p-8 flex-1 flex flex-col justify-between"
    }, topSection, actionsRow);

    const card = createDOMElement("div", {
      id: room.id,
      class: "group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-surface"
    }, imageWrapper, bodyWrapper);

    container.appendChild(card);
  });
  
  // Re-inject icons so the SVG fallback engine handles new cards
  if (typeof injectSVGIcons === "function") {
    injectSVGIcons();
  }
}
