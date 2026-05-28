// Reusable Filterable Gallery Card Component for Courtallam Cottage
function renderGalleryCards(containerId, filterButtonsId = null, limit = null) {
  const container = document.getElementById(containerId);
  if (!container || !GALLERY_DATA) return;

  function generateGrid(activeTag = "All") {
    const filteredImages = activeTag === "All" 
      ? (limit ? GALLERY_DATA.slice(0, limit) : GALLERY_DATA)
      : GALLERY_DATA.filter(img => img.tag === activeTag);

    container.innerHTML = "";

    filteredImages.forEach(item => {
      const img = createDOMElement("img", {
        src: item.image,
        alt: item.title,
        referrerpolicy: "no-referrer",
        class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      });

      const hoverTag = createDOMElement("span", {
        class: "text-[10px] font-bold text-secondary uppercase tracking-widest block font-sans"
      }, item.tag);

      const hoverTitle = createDOMElement("h4", {
        class: "text-lg md:text-xl font-serif font-black text-white mt-1"
      }, item.title);

      const hoverDesc = createDOMElement("p", {
        class: "text-xs text-[#bcaba0] leading-relaxed mt-1 font-sans"
      }, item.desc);

      const hoverOverlay = createDOMElement("div", {
        class: "absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
      }, hoverTag, hoverTitle, hoverDesc);

      const imgCard = createDOMElement("div", {
        class: "group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in aspect-square md:aspect-[4/3] border border-surface"
      }, img, hoverOverlay);

      container.appendChild(imgCard);
    });
  }

  // Create Filter Buttons if container element is provided
  const filterBtnContainer = document.getElementById(filterButtonsId);
  if (filterBtnContainer) {
    const tags = ["All", ...new Set(GALLERY_DATA.map(item => item.tag))];

    const rail = createDOMElement("div", {
      id: "gallery-filter-rail",
      class: "flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8"
    });

    tags.forEach(tag => {
      const btn = createDOMElement("button", {
        "data-tag": tag,
        class: `px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-200 border cursor-pointer ${
          tag === "All" 
            ? "bg-primary text-white border-primary" 
            : "bg-white text-on-surface-variant hover:text-primary hover:border-primary border-surface"
        }`
      }, tag);

      btn.addEventListener("click", () => {
        // Toggle selected styling
        rail.querySelectorAll("button").forEach(b => {
          b.classList.remove("bg-primary", "text-white", "border-primary");
          b.classList.add("bg-white", "text-on-surface-variant", "border-surface");
        });
        btn.classList.remove("bg-white", "text-on-surface-variant", "border-surface");
        btn.classList.add("bg-primary", "text-white", "border-primary");

        const selectedTag = btn.getAttribute("data-tag");
        generateGrid(selectedTag);
      });

      rail.appendChild(btn);
    });

    filterBtnContainer.innerHTML = "";
    filterBtnContainer.appendChild(rail);
  }

  // Initial grid render
  generateGrid();
}
