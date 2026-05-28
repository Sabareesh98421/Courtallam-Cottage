// Reusable Header Component for Courtallam Cottage
const HEADER_LINKS = [
  { name: "Home", url: "index.html" },
  { name: "About Us", url: "about.html" },
  { name: "Rooms & Suites", url: "rooms.html" },
  { name: "Gallery", url: "gallery.html" },
  { name: "Contact", url: "contact.html" }
];

function injectHeader() {
  const container = document.getElementById("header-container");
  if (!container) return;

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  
  // Desktop navigation items using DOM creation
  const desktopNavList = createDOMElement("ul", { class: "flex items-center gap-8 font-sans" });
  HEADER_LINKS.forEach(link => {
    const isActive = currentPath === link.url;
    const activeClass = isActive 
      ? "text-primary font-semibold border-b-2 border-secondary" 
      : "text-on-surface-variant hover:text-primary transition-colors duration-200 border-b-2 border-transparent";
    
    const a = createDOMElement("a", {
      href: link.url,
      class: `${activeClass} pb-1.5 text-sm uppercase tracking-wider font-medium`
    }, link.name);
    
    desktopNavList.appendChild(createDOMElement("li", {}, a));
  });

  // Mobile navigation items using DOM creation
  const mobileNavContainer = createDOMElement("nav", { class: "flex flex-col gap-2 font-sans" });
  HEADER_LINKS.forEach(link => {
    const isActive = currentPath === link.url;
    const activeClass = isActive 
      ? "text-white bg-primary-container font-semibold" 
      : "text-white/80 hover:text-white hover:bg-black/10 transition-colors";
    
    const a = createDOMElement("a", {
      href: link.url,
      class: `${activeClass} block px-4 py-3 rounded-lg text-base font-medium tracking-wide uppercase`
    }, link.name);
    
    mobileNavContainer.appendChild(a);
  });

  const divider = createDOMElement("div", { class: "border-t border-white/10 my-3" });
  const secureBookLink = createDOMElement("a", {
    href: "booking.html",
    class: "w-full py-3.5 rounded-lg bg-secondary text-white text-center text-sm font-semibold uppercase tracking-wider shadow hover:opacity-95 transition-opacity duration-200"
  }, "Secure Booking");
  
  mobileNavContainer.appendChild(divider);
  mobileNavContainer.appendChild(secureBookLink);

  const mobileNav = createDOMElement("div", {
    id: "mobile-nav",
    class: "hidden md:hidden bg-primary/95 text-white flex-col gap-2 p-6 border-t border-primary-container animate-fade-in"
  }, mobileNavContainer);

  // Logo / Brand Emblem
  const logoCircle = createDOMElement("div", {
    class: "w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background text-xl font-serif font-bold tracking-tight shadow-md transition-transform group-hover:scale-105"
  }, "CC");

  const logoTitle = createDOMElement("h1", {
    class: "text-xl md:text-2xl font-serif font-bold text-primary tracking-tight"
  }, "Courtallam Cottage");

  const logoSubtitle = createDOMElement("p", {
    class: "text-[10px] uppercase tracking-widest text-secondary font-semibold font-sans mt-0.5"
  }, "Premium Hill Homestay");

  const logoText = createDOMElement("div", { class: "leading-none" }, logoTitle, logoSubtitle);

  const brandLink = createDOMElement("a", {
    href: "index.html",
    class: "flex items-center gap-3 group"
  }, logoCircle, logoText);

  // Desktop Navigation Actions
  const desktopNav = createDOMElement("nav", { class: "hidden md:block" }, desktopNavList);

  // CTA Action Buttons
  const bookStayTab = createDOMElement("a", {
    href: "booking.html",
    class: "px-5 py-2.5 rounded-full bg-primary text-white text-xs uppercase tracking-widest font-semibold shadow hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95 duration-200"
  }, "Book Stay");
  const ctaContainer = createDOMElement("div", { class: "hidden lg:flex items-center gap-4" }, bookStayTab);

  // Mobile Toggler Button
  const toggleIcon = createDOMElement("div", { "data-icon": "menu", class: "w-6 h-6" });
  const toggleBtn = createDOMElement("button", {
    id: "mobile-menu-btn",
    "aria-label": "Toggle Navigation Menu",
    class: "md:hidden p-2 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
  }, toggleIcon);

  // Combine components into header
  const headerContainer = createDOMElement("div", {
    class: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
  }, brandLink, desktopNav, ctaContainer, toggleBtn);

  const header = createDOMElement("header", {
    class: "w-full bg-background/90 backdrop-blur-md border-b border-surface sticky top-0 z-40 transition-all duration-300"
  }, headerContainer, mobileNav);

  container.innerHTML = "";
  container.appendChild(header);
}

// Automatically trigger injection on script load or DOM-load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectHeader);
} else {
  injectHeader();
}
