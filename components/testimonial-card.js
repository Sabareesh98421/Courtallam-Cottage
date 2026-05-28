// Reusable Testimonial Card Component for Courtallam Cottage
function renderTestimonialCards(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container || !TESTIMONIALS_DATA) return;

  const listToRender = limit ? TESTIMONIALS_DATA.slice(0, limit) : TESTIMONIALS_DATA;

  container.innerHTML = "";

  listToRender.forEach(testi => {
    // Rating block stars
    const starsContainer = createDOMElement("div", { class: "flex items-center gap-1" });
    for (let i = 0; i < testi.rating; i++) {
      starsContainer.appendChild(createDOMElement("span", {
        "data-icon": "star",
        class: "w-4 h-4 text-[#F2C94C]"
      }));
    }

    const reviewText = createDOMElement("p", {
      class: "text-on-surface-variant font-sans text-sm md:text-base leading-relaxed italic"
    }, `"${testi.text}"`);

    const topSection = createDOMElement("div", { class: "space-y-4" }, starsContainer, reviewText);

    // Monogram Avatar
    const initials = testi.name.split(" ").map(n => n[0]).join("");
    const avatar = createDOMElement("div", {
      class: "w-10 h-10 rounded-full bg-surface text-primary font-bold flex items-center justify-center text-sm uppercase"
    }, initials);

    const userName = createDOMElement("h4", {
      class: "text-sm font-bold text-primary font-sans leading-none"
    }, testi.name);

    const userLoc = createDOMElement("span", {
      class: "text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold mt-1 block"
    }, testi.location);

    const userDetails = createDOMElement("div", {}, userName, userLoc);

    const userInfoBlock = createDOMElement("div", {
      class: "flex items-center gap-4 mt-6 pt-4 border-t border-surface"
    }, avatar, userDetails);

    const testiCard = createDOMElement("div", {
      class: "glass p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow"
    }, topSection, userInfoBlock);

    container.appendChild(testiCard);
  });

  // Trigger SVG injector so that the stars render beautifully
  if (typeof injectSVGIcons === "function") {
    injectSVGIcons();
  }
}
