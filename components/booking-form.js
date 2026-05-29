// Reusable Interactive Booking Component for Courtallam Cottage
function renderBookingForm(containerId, pricingBreakoutId) {
  const container = document.getElementById(containerId);
  const breakout = document.getElementById(pricingBreakoutId);
  if (!container) return;

  // Render check-in / check-out matching South Indian premium resort design
  const roomSelect = createDOMElement("select", {
    id: "booking-room",
    name: "room",
    class: "w-full bg-surface border border-surface rounded-xl px-4 py-3.5 text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer appearance-none"
  });

  const defaultOpt = createDOMElement("option", {
    value: "",
    disabled: true,
    selected: true
  }, "Choose a premium suite");
  roomSelect.appendChild(defaultOpt);

  ROOMS_DATA.forEach(room => {
    roomSelect.appendChild(createDOMElement("option", {
      value: room.id,
      "data-min": room.priceMin
    }, `${room.name} (${formatCurrency(room.priceMin)}/night)`));
  });

  const chevron1 = createDOMElement("div", {
    class: "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary",
    "data-icon": "chevron_right"
  });

  const selectWrapper = createDOMElement("div", { class: "relative" }, roomSelect, chevron1);
  const selectLabel = createDOMElement("label", {
    for: "booking-room",
    class: "block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
  }, "Select Cottage Suite");

  const selectContainer = createDOMElement("div", {}, selectLabel, selectWrapper);

  // Check-In & Check-Out Inputs
  const checkInInput = createDOMElement("input", {
    type: "date",
    id: "check-in-date",
    name: "checkIn",
    required: true,
    class: "w-full bg-surface border border-surface rounded-xl px-4 py-3.5 text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
  });

  const checkInLabel = createDOMElement("label", {
    for: "check-in-date",
    class: "block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
  }, "Check-In Date");

  const checkInWrapper = createDOMElement("div", {}, checkInLabel, createDOMElement("div", { class: "relative" }, checkInInput));

  const checkOutInput = createDOMElement("input", {
    type: "date",
    id: "check-out-date",
    name: "checkOut",
    required: true,
    class: "w-full bg-surface border border-surface rounded-xl px-4 py-3.5 text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
  });

  const checkOutLabel = createDOMElement("label", {
    for: "check-out-date",
    class: "block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
  }, "Check-Out Date");

  const checkOutWrapper = createDOMElement("div", {}, checkOutLabel, createDOMElement("div", { class: "relative" }, checkOutInput));

  const datesGrid = createDOMElement("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, checkInWrapper, checkOutWrapper);

  // Guests & Children Select Box
  const guestsSelect = createDOMElement("select", {
    id: "guests-count",
    name: "guests",
    class: "w-full bg-surface border border-surface rounded-xl px-4 py-3.5 text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer appearance-none"
  });
  [
    { val: "1", text: "1 Adult" },
    { val: "2", text: "2 Adults", checked: true },
    { val: "3", text: "3 Adults" },
    { val: "4", text: "4 Adults" },
    { val: "5", text: "5 Adults" }
  ].forEach(opt => {
    guestsSelect.appendChild(createDOMElement("option", {
      value: opt.val,
      ...(opt.checked ? { selected: true } : {})
    }, opt.text));
  });

  const guestsLabel = createDOMElement("label", {
    for: "guests-count",
    class: "block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
  }, "Guests count");

  const guestsWrapper = createDOMElement("div", {}, guestsLabel, createDOMElement("div", { class: "relative" }, guestsSelect, createDOMElement("div", {
    class: "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary",
    "data-icon": "chevron_right"
  })));

  const childrenSelect = createDOMElement("select", {
    id: "children-count",
    name: "children",
    class: "w-full bg-surface border border-surface rounded-xl px-4 py-3.5 text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer appearance-none"
  });
  [
    { val: "0", text: "0 Children", checked: true },
    { val: "1", text: "1 Child" },
    { val: "2", text: "2 Children" }
  ].forEach(opt => {
    childrenSelect.appendChild(createDOMElement("option", {
      value: opt.val,
      ...(opt.checked ? { selected: true } : {})
    }, opt.text));
  });

  const childrenLabel = createDOMElement("label", {
    for: "children-count",
    class: "block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
  }, "Children");

  const childrenWrapper = createDOMElement("div", {}, childrenLabel, createDOMElement("div", { class: "relative" }, childrenSelect, createDOMElement("div", {
    class: "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary",
    "data-icon": "chevron_right"
  })));

  const guestsGrid = createDOMElement("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, guestsWrapper, childrenWrapper);

  // Customer Coordinates (Full Name & Email)
  const nameInput = createDOMElement("input", {
    type: "text",
    id: "guest-name",
    name: "guestName",
    required: true,
    placeholder: "Meenakshi",
    class: "w-full bg-surface border border-surface rounded-xl px-4 py-3.5 text-sm font-medium text-primary placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
  });

  const nameLabel = createDOMElement("label", {
    for: "guest-name",
    class: "block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
  }, "Your Full Name");

  const emailInput = createDOMElement("input", {
    type: "email",
    id: "guest-email",
    name: "guestEmail",
    required: true,
    placeholder: "meenakshi@example.com",
    class: "w-full bg-surface border border-surface rounded-xl px-4 py-3.5 text-sm font-medium text-primary placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
  });

  const emailLabel = createDOMElement("label", {
    for: "guest-email",
    class: "block text-xs uppercase tracking-wider font-semibold text-primary mb-2"
  }, "Email Address");

  const coordSection = createDOMElement("div", {
    class: "space-y-4 pt-4 border-t border-surface"
  }, createDOMElement("div", {}, nameLabel, nameInput), createDOMElement("div", {}, emailLabel, emailInput));

  // CTA submit button
  const submitIcon = createDOMElement("span", {
    "data-icon": "whatsapp",
    class: "w-5 h-5 text-white"
  });

  const submitText = createDOMElement("span", {}, "Proceed Reservation via WhatsApp");

  const submitBtn = createDOMElement("button", {
    type: "submit",
    class: "w-full py-4 bg-primary text-white text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-primary/95 shadow transition-all duration-200 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
  }, submitIcon, submitText);

  // Master Form
  const form = createDOMElement("form", {
    id: "cottage-reservation-form",
    class: "space-y-6"
  }, selectContainer, datesGrid, guestsGrid, coordSection, submitBtn);

  container.innerHTML = "";
  container.appendChild(form);

  // Select default date boundaries
  const today = new Date();
  if (checkInInput && checkOutInput) {
    const formattedToday = today.toISOString().split("T")[0];
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 2);
    const formattedTomorrow = tomorrow.toISOString().split("T")[0];

    checkInInput.min = formattedToday;
    checkInInput.value = formattedToday;
    checkOutInput.min = formattedToday;
    checkOutInput.value = formattedTomorrow;
  }

  // Pre-fill suite from URL query param if present
  const urlParams = new URLSearchParams(window.location.search);
  const selectedRoomId = urlParams.get("room");
  if (selectedRoomId && roomSelect) {
    roomSelect.value = selectedRoomId;
  }

  // Handle live breakout calculations
  function calculateTotal() {
    if (!breakout) return;

    const roomId = roomSelect ? roomSelect.value : "";
    const checkInVal = checkInInput ? checkInInput.value : "";
    const checkOutVal = checkOutInput ? checkOutInput.value : "";

    if (!roomId) {
      breakout.innerHTML = "";
      const fallbackDiv = createDOMElement("div", {
        class: "text-center py-8 text-on-surface-variant italic text-sm"
      }, "Please select a room to view pricing breakdown");
      breakout.appendChild(fallbackDiv);
      return;
    }

    const room = ROOMS_DATA.find(r => r.id === roomId);
    if (!room) return;

    let nights = 1;
    if (checkInVal && checkOutVal) {
      const start = new Date(checkInVal);
      const end = new Date(checkOutVal);
      const timeDiff = end.getTime() - start.getTime();
      nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (nights <= 0) nights = 1;
    }

    const basePrice = room.priceMin * nights;
    const hasTax = typeof BUSINESS_CONFIG.pricing.taxRate === "number" && BUSINESS_CONFIG.pricing.taxRate > 0;
    const taxes = hasTax ? Math.round(basePrice * BUSINESS_CONFIG.pricing.taxRate) : 0;
    const total = basePrice + taxes;

    const breakH3 = createDOMElement("h3", {
      class: "text-sm font-bold uppercase tracking-wider text-primary pb-3 border-b border-surface"
    }, "Fare Breakout");

    const rateRow = createDOMElement("div", { class: "flex items-center justify-between" },
      createDOMElement("span", {}, "Suite Rate"),
      createDOMElement("span", {}, `${formatCurrency(room.priceMin)} / night`)
    );

    const durRow = createDOMElement("div", { class: "flex items-center justify-between" },
      createDOMElement("span", {}, "Duration"),
      createDOMElement("span", {}, `${nights} ${nights === 1 ? 'Night' : 'Nights'}`)
    );

    const subRow = createDOMElement("div", { class: "flex items-center justify-between" },
      createDOMElement("span", {}, "Subtotal"),
      createDOMElement("span", { class: "font-bold text-primary" }, formatCurrency(basePrice))
    );

    const specsChildren = [rateRow, durRow, subRow];

    if (hasTax) {
      const taxRow = createDOMElement("div", { class: "flex items-center justify-between" },
        createDOMElement("span", {}, `Taxes & Fees (${BUSINESS_CONFIG.pricing.taxRate * 100}% GST)`),
        createDOMElement("span", {}, formatCurrency(taxes))
      );
      specsChildren.push(taxRow);
    }

    const specsBlock = createDOMElement("div", {
      class: "space-y-2 text-sm text-on-surface-variant font-sans"
    }, ...specsChildren);

    const totalRow = createDOMElement("div", {
      class: "pt-4 border-t border-surface flex items-center justify-between"
    },
      createDOMElement("span", { class: "text-sm uppercase tracking-wider font-semibold text-primary" }, "Est. Total Amount"),
      createDOMElement("span", { class: "text-xl md:text-2xl font-bold text-secondary font-sans" }, formatCurrency(total))
    );

    const noteIcon = createDOMElement("span", {
      "data-icon": "location",
      class: "w-4 h-4 text-secondary flex-shrink-0 mt-0.5"
    });
    const noteText = createDOMElement("span", {}, "Pricing may adjust marginally during peak monsoon seasons. No deposit is taken now. Our concierge team will lock dates with you directly.");
    const noteBlock = createDOMElement("div", {
      class: "p-3.5 bg-surface text-primary rounded-xl text-xs font-medium font-sans leading-relaxed flex items-start gap-2"
    }, noteIcon, noteText);

    const breakPanel = createDOMElement("div", {
      class: "border border-surface bg-white rounded-2xl p-6 md:p-8 space-y-4 animate-fade-in"
    }, breakH3, specsBlock, totalRow, noteBlock);

    breakout.innerHTML = "";
    breakout.appendChild(breakPanel);

    if (typeof injectSVGIcons === "function") {
      injectSVGIcons();
    }
  }

  // Bind live updates
  if (roomSelect) roomSelect.addEventListener("change", calculateTotal);
  if (checkInInput) checkInInput.addEventListener("change", calculateTotal);
  if (checkOutInput) checkOutInput.addEventListener("change", calculateTotal);

  // Initial calculation
  calculateTotal();

  // Reservation Form submit action
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const roomId = formData.get("room");
      const checkIn = formData.get("checkIn");
      const checkOut = formData.get("checkOut");
      const guests = formData.get("guests");
      const children = formData.get("children");
      const guestName = formData.get("guestName");
      const guestEmail = formData.get("guestEmail");

      const room = ROOMS_DATA.find(r => r.id === roomId);
      const roomName = room ? room.name : "Premium Suite";

      // Calculate total nights
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24)) || 1;

      const basePrice = room ? room.priceMin * nights : 0;
      const hasTax = typeof BUSINESS_CONFIG.pricing.taxRate === "number" && BUSINESS_CONFIG.pricing.taxRate > 0;
      const taxes = hasTax ? Math.round(basePrice * BUSINESS_CONFIG.pricing.taxRate) : 0;
      const total = basePrice + taxes;
      const rateBreakdownText = hasTax 
        ? `${formatCurrency(total)} (incl. ${BUSINESS_CONFIG.pricing.taxRate * 100}% GST)` 
        : `${formatCurrency(basePrice)}`;

      // Formulate detailed, extremely polite professional WhatsApp text message
      const waMessage = `✨ NEW RESERVATION REQUEST ✨
-----------------------------------------
Cottage: ${roomName}
Guest Name: ${guestName}
Email: ${guestEmail}
Check-In: ${checkIn}
Check-Out: ${checkOut}
Total Duration: ${nights} night(s)
Guests Layout: ${guests} adult(s) + ${children} child(ren)
Approximate Rate: ${rateBreakdownText}
-----------------------------------------
Hello ${BUSINESS_CONFIG.name} team! I've selected dates using your web dashboard reservation form. Could you please confirm room block and send payment details is available? Thank you!`;

      // Redirect of WhatsApp page links
      window.open(BUSINESS_CONFIG.getWhatsAppLink(waMessage), "_blank");
    });
  }

  if (typeof injectSVGIcons === "function") {
    injectSVGIcons();
  }
}
