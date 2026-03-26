/* ===== SITE CONFIG ===== */
const CONFIG = {
  whatsappNumberPK: "03042828068",
  whatsappNumberInternational: "923042828068",
  whatsappText: "Thanks for contacting us! I will get back to you soon with the best solution for your business.",
  email: "digitalmarketingskills46@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/zamin-abbas-7479aa3a3",
    instagram: "https://www.instagram.com/ranazamin71?igsh=a2p0d2lmMnRmYmxz&utm_source=qr",
    facebook: "https://www.facebook.com/share/17yHeH7ynM/?mibextid=wwXIfr"
  },
  interactiveImages: ["1.png", "2.png", "3.png"]
};

/* ===== SETUP SOCIAL LINKS ===== */
function setupSocialLinks() {
  const setHref = (id, url) => { const el = document.getElementById(id); if (el) el.href = url; };
  setHref("lnkLinkedin", CONFIG.social.linkedin);
  setHref("lnkInstagram", CONFIG.social.instagram);
  setHref("lnkFacebook", CONFIG.social.facebook);
  setHref("lnkLinkedin2", CONFIG.social.linkedin);
  setHref("lnkInstagram2", CONFIG.social.instagram);
  setHref("lnkFacebook2", CONFIG.social.facebook);
}

/* ===== WHATSAPP + EMAIL LINKS ===== */
function setupContactLinks() {
  const waUrl = `https://wa.me/${CONFIG.whatsappNumberInternational}?text=${encodeURIComponent(CONFIG.whatsappText)}`;
  const emailUrl = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Digital Marketing Inquiry")}&body=${encodeURIComponent("Assalam-o-Alaikum,\n\nI want digital marketing services (Local SEO / On-Page SEO / SMM / Ads). Please share details.\n\nThanks")}`;

  document.getElementById("waFloat")?.setAttribute("href", waUrl);
  document.getElementById("waTop")?.setAttribute("href", waUrl);
  document.getElementById("waBooking")?.setAttribute("href", waUrl);
  document.getElementById("emailTop")?.setAttribute("href", emailUrl);
}

/* ===== MOBILE MENU TOGGLE ===== */
function setupMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.style.display = mobileMenu.style.display === "none" ? "block" : "none";
    });
    mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.style.display = "none"));
  }
}

/* ===== ACTIVE NAV HIGHLIGHT ===== */
function setupNavHighlight() {
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
  const sections = ["home","about","skills","projects","services","experience","contact"].map(id => document.getElementById(id)).filter(Boolean);
  if (!navLinks.length || !sections.length) return;

  const setActive = (id) => navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
  const ioNav = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActive(visible.target.id);
  }, { threshold: [0.15, 0.35, 0.55, 0.75] });
  sections.forEach(s => ioNav.observe(s));
}

/* ===== REVEAL ON SCROLL ===== */
function setupReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;
  
  const ioReveal = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); ioReveal.unobserve(e.target); }
    });
  }, { threshold: 0.14 });
  revealEls.forEach(el => ioReveal.observe(el));
}

/* ===== ANIMATED CURSOR ===== */
function setupCursor() {
  const cursor = document.getElementById("cursor");
  const dot = document.getElementById("cursorDot");
  if (!cursor || !dot) return;
  // Skip on touch devices
  if (window.matchMedia('(hover: none)').matches) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let cx = mx, cy = my;
  let dx = mx, dy = my;
  const CURSOR_LERP = 0.22;
  const DOT_LERP = 0.52;

  window.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });

  const hoverTargets = "a, button, input, textarea, select, .btn, .card, .service-card";
  const setHover = (on) => cursor.classList.toggle("hover", on);
  document.addEventListener("mouseover", (e) => { if (e.target.closest(hoverTargets)) setHover(true); }, { passive: true });
  document.addEventListener("mouseout",  (e) => { if (e.target.closest(hoverTargets)) setHover(false); }, { passive: true });

  function raf(){
    cx += (mx - cx) * CURSOR_LERP;
    cy += (my - cy) * CURSOR_LERP;
    dx += (mx - dx) * DOT_LERP;
    dy += (my - dy) * DOT_LERP;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

/* ===== COLORFUL SMOKE (CURSOR-FOLLOW) ===== */
function setupSmoke() {
  // Skip entirely on mobile/touch - saves GPU and battery
  if (window.matchMedia('(hover: none), (max-width: 768px)').matches) return;

  const blob1 = document.getElementById("blob1");
  const blob2 = document.getElementById("blob2");
  const blob3 = document.getElementById("blob3");
  const blob4 = document.getElementById("blob4");
  if (!blob1 || !blob2 || !blob3 || !blob4) return;

  let sx = window.innerWidth * 0.35, sy = window.innerHeight * 0.25;
  let tx = sx, ty = sy;

  window.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; }, { passive:true });

  const offsets = [
    { el: blob1, k: 0.06, ox: -140, oy: -160 },
    { el: blob2, k: 0.045, ox:  180, oy: -120 },
    { el: blob3, k: 0.032, ox:  60, oy:  220 },
    { el: blob4, k: 0.040, ox: -220, oy:  160 }
  ];

  let t = 0;
  function smokeRAF(){
    sx += (tx - sx) * 0.06;
    sy += (ty - sy) * 0.06;
    t += 0.006;
    offsets.forEach((b, i) => {
      if (!b.el) return;
      const driftX = Math.sin(t + i*1.2) * 70;
      const driftY = Math.cos(t + i*1.1) * 55;
      b.el.style.transform = `translate3d(${sx + b.ox + driftX}px, ${sy + b.oy + driftY}px, 0)`;
    });
    requestAnimationFrame(smokeRAF);
  }
  requestAnimationFrame(smokeRAF);

  window.addEventListener("resize", () => {
    if (!Number.isFinite(tx) || !Number.isFinite(ty)){
      tx = window.innerWidth * 0.5;
      ty = window.innerHeight * 0.35;
    }
  }, { passive: true });
}

/* ===== ENTRANCE ANIMATIONS ===== */
function setupEntranceAnimations() {
  const animItems = document.querySelectorAll("[data-anim]");
  if (!animItems.length) return;

  const animIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("anim-show");
        animIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  animItems.forEach(el => animIO.observe(el));
}

/* ===== SIDEBAR ACTIVE LINK ===== */
function setupSidebarActive(){
  const links = Array.from(document.querySelectorAll('.service-sidebar .svc-link'));
  if (!links.length) return;
  const path = window.location.pathname.split('/').pop();
  links.forEach(a => {
    const href = a.getAttribute('href') || '';
    const name = href.split('/').pop();
    a.classList.toggle('active', name === path);
  });
}

/* ===== INTERACTIVE IMAGE SWAP ===== */
function setupImageSwap() {
  const frame = document.getElementById("swapFrame");
  const imgA = document.getElementById("swapImgA");
  const imgB = document.getElementById("swapImgB");
  const label = document.getElementById("swapLabel");

  if (!frame || !imgA || !imgB || !label) return;

  let index = 0;
  let showingA = true;
  let lastZone = -1;
  let isSwitching = false;

  CONFIG.interactiveImages.forEach(src => { const i = new Image(); i.src = src; });

  imgA.src = CONFIG.interactiveImages[0];
  imgB.src = CONFIG.interactiveImages[1] || CONFIG.interactiveImages[0];
  label.textContent = `Image 1 / ${CONFIG.interactiveImages.length}`;

  function setIndex(nextIndex){
    if (isSwitching) return;
    if (nextIndex === index) return;

    index = Math.max(0, Math.min(CONFIG.interactiveImages.length - 1, nextIndex));
    label.textContent = `Image ${index + 1} / ${CONFIG.interactiveImages.length}`;

    isSwitching = true;
    const nextSrc = CONFIG.interactiveImages[index];

    if (showingA){
      imgB.src = nextSrc;
      imgB.classList.remove("hidden");
      imgA.classList.add("hidden");
    } else {
      imgA.src = nextSrc;
      imgA.classList.remove("hidden");
      imgB.classList.add("hidden");
    }
    showingA = !showingA;
    setTimeout(() => { isSwitching = false; }, 140);
  }

  function handleMove(clientX, clientY){
    const r = frame.getBoundingClientRect();
    const x = (clientX - r.left) / r.width;
    const y = (clientY - r.top) / r.height;

    const tiltX = (0.5 - y) * 6;
    const tiltY = (x - 0.5) * 10;
    frame.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

    const zones = CONFIG.interactiveImages.length;
    const zone = Math.min(zones - 1, Math.max(0, Math.floor(x * zones)));
    if (zone !== lastZone){
      lastZone = zone;
      setIndex(zone);
    }
  }

  frame.addEventListener("mousemove", (e) => handleMove(e.clientX, e.clientY), { passive:true });
  frame.addEventListener("mouseleave", () => {
    frame.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    lastZone = -1;
  });

  let touchStartX = 0;
  frame.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive:true });
  frame.addEventListener("touchmove", (e) => { handleMove(e.touches[0].clientX, e.touches[0].clientY); }, { passive:true });
  frame.addEventListener("touchend", (e) => {
    const endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : touchStartX;
    const delta = endX - touchStartX;
    if (Math.abs(delta) > 30){
      if (delta < 0) setIndex(index + 1);
      else setIndex(index - 1);
    }
    frame.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    lastZone = -1;
  });
}

/* ===== HERO SLIDER ===== */
function setupHeroSlider() {
  const slides = document.querySelectorAll('.slider-hero .slide');
  if (!slides.length) return;
  let index = 0;
  slides[index].classList.add('active');
  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 6000);
}

/* ===== STICKY PIN IMAGE SWAP ===== */
function setupStickyPinSwap() {
  const pinFrame = document.getElementById("stickyPinFrame");
  if (!pinFrame) return;

  const imgs = Array.from(pinFrame.querySelectorAll("img"));
  const swapIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const rect = e.target.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, 1 - rect.top / window.innerHeight));
      const index = Math.min(imgs.length - 1, Math.floor(progress * imgs.length));
      imgs.forEach((img, i) => img.classList.toggle("active", i === index));
    });
  }, { threshold: Array.from({length: 10}, (_,i)=>i/10) });

  swapIO.observe(pinFrame);
}

/* ===== BOOKING FORM ===== */
function setupBookingForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Booking request received. You can also WhatsApp directly for fast response.");
  });
}

/* ===== CONTACT FORM ===== */
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Message sent! I'll get back to you soon.");
    form.reset();
  });
}

/* ===== SKILL BARS ANIMATION ===== */
function setupSkillBars() {
  const skillBars = document.querySelectorAll('.skill-fill');
  if (!skillBars.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.style.width || '0%';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => io.observe(bar));
}

/* ===== THEME TOGGLE (DARK/LIGHT MODE) ===== */
function setupThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme") || "light";
  const isDark = savedTheme === "dark";
  
  // Apply saved theme on page load
  if (isDark) {
    document.documentElement.classList.add("dark-mode");
    toggle.textContent = "🌙";
  } else {
    document.documentElement.classList.remove("dark-mode");
    toggle.textContent = "☀️";
  }

  // Toggle on click
  toggle.addEventListener("click", () => {
    const isDarkMode = document.documentElement.classList.toggle("dark-mode");
    toggle.textContent = isDarkMode ? "🌙" : "☀️";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
}

/* ===== DROPDOWN MENU FIX ===== */
function setupDropdownMenu() {
  const navDropdowns = document.querySelectorAll('.navDropdown');
  
  navDropdowns.forEach(dropdown => {
    const dropMenu = dropdown.querySelector('.dropMenu');
    let closeTimeout = null;
    // track number of elements currently hovered inside this dropdown
    let insideCount = 0;
    
    if (!dropMenu) return;
    // central hide function
    const hideMenu = () => {
      dropMenu.style.display = 'none';
      dropMenu.style.opacity = '0';
      dropMenu.style.visibility = 'hidden';
      dropMenu.style.pointerEvents = 'none';
    };

    const showMenu = () => {
      clearTimeout(closeTimeout);
      dropMenu.style.display = 'block';
      dropMenu.style.opacity = '1';
      dropMenu.style.visibility = 'visible';
      dropMenu.style.pointerEvents = 'auto';
    };

    const enter = () => { insideCount = Math.max(0, insideCount) + 1; showMenu(); };
    const leave = () => { insideCount = Math.max(0, insideCount - 1); if (insideCount === 0) closeTimeout = setTimeout(() => { if (insideCount === 0) hideMenu(); }, CLOSE_DELAY); };

    // Slightly longer delay to make it easier to move into nested submenus
    const CLOSE_DELAY = 800;

    // Keep menu open while hovering over dropdown or menu (use enter/leave counters)
    dropdown.addEventListener('mouseenter', enter);
    dropdown.addEventListener('mouseleave', leave);

    // Also keep open if hovering the menu itself (helps when submenu is absolutely positioned)
    dropMenu.addEventListener('mouseenter', enter);
    dropMenu.addEventListener('mouseleave', leave);

    // For each menu item that has a nested submenu, keep it open while hovering the nested submenu
    const submenuItems = dropMenu.querySelectorAll('.dropMenu-item.has-submenu');
    submenuItems.forEach(item => {
      const sub = item.querySelector('.dropSubmenu');
      if (!sub) return;
      item.addEventListener('mouseenter', enter);
      item.addEventListener('mouseleave', leave);
      // ensure hovering the nested submenu prevents it from closing
      sub.addEventListener('mouseenter', enter);
      sub.addEventListener('mouseleave', leave);
    });

    // Ensure hovering any link inside the menu keeps it open (covers items without nested submenus)
    const menuLinks = dropMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('mouseenter', enter);
      link.addEventListener('mouseleave', leave);
    });
  });
}

/* ===== BASIC INSPECT / VIEW-SOURCE DETERRENTS ===== */
function setupInspectBlockers(){
  // Only block right-click - do NOT block keyboard shortcuts (hurts PageSpeed score)
  document.addEventListener('contextmenu', function(e){
    try { e.preventDefault(); } catch (err) {}
    return false;
  }, { passive: false });
}

/* ===== PROJECT MODAL ===== */
function setupProjectsModal() {
  const projectCards = document.querySelectorAll('#projects .project-card');
  if (!projectCards.length) return;

  const modal = document.createElement('div');
  modal.id = 'projectModal';
  modal.className = 'project-modal';
  modal.innerHTML = `
    <div class="project-modal-content">
      <button class="project-modal-close" aria-label="Close modal">&times;</button>
      <div class="project-modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.project-modal-close');
  const modalBody = modal.querySelector('.project-modal-body');

  const closeModal = () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  };

  projectCards.forEach((card) => {
    const openModal = () => {
      const title = card.querySelector('h3')?.textContent || '';
      const client = card.querySelector('.client-type')?.textContent || '';
      const details = card.querySelector('.project-detail-content')?.innerHTML || '';
      const bullets = Array.from(card.querySelectorAll('.bullets li'))
        .map(li => `<li>${li.textContent}</li>`)
        .join('');

      modalBody.innerHTML = `
        <h2>${title}</h2>
        <p><strong>${client}</strong></p>
        <ul class="bullets">${bullets}</ul>
        ${details}
      `;
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    };

    card.querySelector('.view-case-study')?.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal();
    });

    card.addEventListener('click', openModal);
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
  });
}

/* ===== SERVICE MODAL ===== */
function setupServicesModal() {
  const serviceCards = document.querySelectorAll('#services .service-card');
  if (!serviceCards.length) return;

  const modal = document.createElement('div');
  modal.id = 'serviceModal';
  modal.className = 'service-modal';
  modal.innerHTML = `
    <div class="service-modal-content">
      <button class="service-modal-close" aria-label="Close modal">&times;</button>
      <div class="service-modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.service-modal-close');
  const modalBody = modal.querySelector('.service-modal-body');

  const closeModal = () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  };

  serviceCards.forEach((card) => {
    const openModal = () => {
      const title = card.querySelector('h3')?.textContent || '';
      const details = card.querySelector('.service-detail-content')?.innerHTML || '';
      const bullets = Array.from(card.querySelectorAll('.bullets li'))
        .map(li => `<li>${li.textContent}</li>`)
        .join('');

      modalBody.innerHTML = `
        <h2>${title}</h2>
        <ul class="bullets">${bullets}</ul>
        ${details}
      `;
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    };

    card.querySelector('.view-details')?.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal();
    });

    card.addEventListener('click', openModal);
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
  });
}

/* ===== INIT ALL MODULES ===== */
document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupSocialLinks();
  setupContactLinks();
  setupMobileMenu();
  setupDropdownMenu();
  setupNavHighlight();
  setupReveal();
  setupCursor();
  setupSmoke();
  setupEntranceAnimations();
  setupImageSwap();
  setupStickyPinSwap();
  setupBookingForm();
  setupContactForm();
  setupSkillBars();
  setupSidebarActive();
  setupProjectsModal();
  setupServicesModal();
  setupInspectBlockers();
});
