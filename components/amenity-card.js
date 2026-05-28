// Reusable Amenities Component for Courtallam Cottage
const AMENITIES_LIST = [
  {
    title: "Organic Spice Orchards",
    desc: "Private trails of nutmeg, rambutan fruits, rich pepper vines, and fresh cardamom plantations bordering your rooms.",
    icon: "wifi" // fallback mapped to wifi (or custom)
  },
  {
    title: "Forest Stream Canopy",
    desc: "Experience the calming trickling of a seasonal mountain stream flowing from high peaks directly beside cottage yards.",
    icon: "waterfall"
  },
  {
    title: "Five Falls Proximity",
    desc: "Located just a brief 7-minute forest path walk from the legendary Five Waterfalls complex, enjoying fresh misty mornings.",
    icon: "location"
  },
  {
    title: "Traditional Banana-Leaf Dining",
    desc: "Homestyle, organic South Indian breakfasts and authentic dinners cooked by local family chefs with picked spices.",
    icon: "restaurant"
  },
  {
    title: "Secure Estate Parking",
    desc: "Gated entry, around-the-clock ground caretakers, and expansive brick-paved parking plots for cars and travels.",
    icon: "parking"
  },
  {
    title: "High-Speed Wi-Fi Area",
    desc: "Stay linked with the office or stream pristine entertainment with our high-speed property-wide wireless internet routing.",
    icon: "wifi"
  }
];

function renderAmenityCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  AMENITIES_LIST.forEach(amen => {
    const iconSpan = createDOMElement("span", {
      "data-icon": amen.icon,
      class: "w-6 h-6"
    });

    const iconWrapper = createDOMElement("div", {
      class: "w-12 h-12 rounded-xl bg-surface text-secondary flex items-center justify-center"
    }, iconSpan);

    const titleEl = createDOMElement("h3", {
      class: "text-lg md:text-xl font-serif font-bold text-primary"
    }, amen.title);

    const descEl = createDOMElement("p", {
      class: "text-sm text-on-surface-variant font-sans leading-relaxed"
    }, amen.desc);

    const spaceDiv = createDOMElement("div", {
      class: "space-y-4"
    }, iconWrapper, titleEl, descEl);

    const card = createDOMElement("div", {
      class: "glass p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
    }, spaceDiv);

    container.appendChild(card);
  });

  if (typeof injectSVGIcons === "function") {
    injectSVGIcons();
  }
}
