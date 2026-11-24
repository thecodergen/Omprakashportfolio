/**
 * =============================================================================
 * OM PRAKASH SETHY — LUXURY EDITORIAL CONTROLLER & ANIMATION ENGINE
 * Handles Dynamic Modal Dialog, Theme Switching, Scroll Progress,
 * Fluid Cursor Glow, 3D Magnetic Card Tilts, Scroll Reveals & Interactions
 * =============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.PORTFOLIO_CONFIG;
  if (!config) {
    console.error("Configuration data not loaded.");
    return;
  }

  // 1. Initialize Theme Engine (Dark Theme Default, Light Optional)
  initThemeEngine();

  // 2. Render Core Dynamic Components
  renderFeaturedWork(config.featuredProjects);
  renderSkillsCategories(config.skills.categories);
  renderEducationCards(config.education);
  renderLeadershipPanels(config.leadership.items);
  renderTechWordmarks(config.techStackLogos);

  // 3. Initialize Modal Dialog System
  initProjectModal(config.featuredProjects);

  // 4. Initialize Animation Engine
  initScrollProgressBar();
  initAmbientCursorGlow();
  initScrollReveals();
  initFloatingQuickPill();
  initCardTiltInteractions();
  initInternshipCarousel();

  // 5. Initialize Contact Form & Toast
  initContactForm();

  // 6. Initialize Smooth Active Nav Tracking
  initNavScrollObserver();

  // 7. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * =============================================================================
 * THEME ENGINE (DARK DEFAULT / LIGHT IVORY TOGGLE)
 * =============================================================================
 */
function initThemeEngine() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('ops-theme') || 'dark';

  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ops-theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === 'dark' 
    ? `<i data-lucide="sun" style="width: 17px; height: 17px;"></i>`
    : `<i data-lucide="moon" style="width: 17px; height: 17px;"></i>`;
  if (window.lucide) window.lucide.createIcons();
}

/**
 * =============================================================================
 * SCROLL PROGRESS BAR
 * =============================================================================
 */
function initScrollProgressBar() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

/**
 * =============================================================================
 * AMBIENT CURSOR GLOW FOLLOWER
 * =============================================================================
 */
function initAmbientCursorGlow() {
  if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;

  const glow = document.getElementById('ambient-cursor-glow');
  if (!glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(renderGlow);
    }
  }, { passive: true });

  function renderGlow() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;

    if (Math.abs(mouseX - currentX) > 0.1 || Math.abs(mouseY - currentY) > 0.1) {
      requestAnimationFrame(renderGlow);
    } else {
      isMoving = false;
    }
  }
}

/**
 * =============================================================================
 * SCROLL REVEAL OBSERVER
 * =============================================================================
 */
function initScrollReveals() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    return;
  }

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

/**
 * =============================================================================
 * FLOATING QUICK-ACTION PILL (BACK TO TOP)
 * =============================================================================
 */
function initFloatingQuickPill() {
  const pill = document.getElementById('floating-quick-pill');
  if (!pill) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 380) {
      pill.classList.add('visible');
    } else {
      pill.classList.remove('visible');
    }
  }, { passive: true });
}

/**
 * =============================================================================
 * 3D CARD TILT & HOVER SHEEN
 * =============================================================================
 */
function initCardTiltInteractions() {
  if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;

  const tiltCards = document.querySelectorAll('.editorial-project-card, .vision-pillar-box, .skill-category-panel, .education-card-box');
  
  tiltCards.forEach(card => {
    let rect = null;
    let ticking = false;

    card.addEventListener('mouseenter', () => {
      rect = card.getBoundingClientRect();
    });

    card.addEventListener('mousemove', (e) => {
      if (!rect) rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (!ticking) {
        requestAnimationFrame(() => {
          if (!rect) return;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -4;
          const rotateY = ((x - centerX) / centerX) * 4;

          card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
          ticking = false;
        });
        ticking = true;
      }
    });

    card.addEventListener('mouseleave', () => {
      rect = null;
      card.style.transform = '';
    });
  });
}

/**
 * =============================================================================
 * FEATURED WORK RENDERER
 * =============================================================================
 */
function renderFeaturedWork(projects) {
  const grid = document.getElementById('featured-projects-grid');
  if (!grid || !projects) return;

  grid.innerHTML = projects.map((p, idx) => `
    <article class="editorial-project-card reveal delay-${idx + 1}" data-project-id="${p.id}" tabindex="0" role="button" aria-label="View details for ${p.title}">
      <div class="project-visual-mockup-frame">
        <div class="mockup-gold-symbol">${p.symbol}</div>
      </div>
      <div class="project-card-meta-row">
        <span class="project-category-sublabel">${p.category}</span>
        <span class="project-plus-trigger" aria-hidden="true">+</span>
      </div>
      <h3 class="project-card-title">${p.title}</h3>
      <div class="project-role-caption">${p.role}</div>
      <p class="project-brief-summary">${p.shortDesc}</p>
      <div class="project-card-tags-footer">
        ${p.technologies.slice(0, 3).map(t => `<span class="tech-tag-chip">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

/**
 * =============================================================================
 * MODAL DETAIL VIEW SYSTEM
 * =============================================================================
 */
function initProjectModal(projects) {
  const backdrop = document.getElementById('project-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!backdrop) return;

  const projectMap = new Map(projects.map(p => [p.id, p]));

  function openModal(id) {
    const proj = projectMap.get(id);
    if (!proj) return;

    document.getElementById('modal-category-label').textContent = proj.category;
    document.getElementById('modal-project-title').textContent = proj.title;
    document.getElementById('modal-role-pill').textContent = proj.role;
    document.getElementById('modal-overview-text').textContent = proj.fullOverview;

    const featuresList = document.getElementById('modal-features-list');
    if (featuresList && proj.features) {
      featuresList.innerHTML = proj.features.map(f => `
        <li class="modal-feature-item">
          <span class="modal-feature-bullet">✦</span>
          <span>${f}</span>
        </li>
      `).join('');
    }

    const techWrap = document.getElementById('modal-tech-chips');
    if (techWrap && proj.technologies) {
      techWrap.innerHTML = proj.technologies.map(t => `
        <span class="tech-tag-chip" style="font-size: 0.74rem; padding: 4px 8px;">${t}</span>
      `).join('');
    }

    const githubBtn = document.getElementById('modal-github-link');
    if (githubBtn) {
      if (proj.githubUrl) {
        githubBtn.href = proj.githubUrl;
        githubBtn.style.display = 'inline-flex';
      } else {
        githubBtn.style.display = 'none';
      }
    }

    const liveBtn = document.getElementById('modal-live-link');
    if (liveBtn) {
      if (proj.liveUrl) {
        liveBtn.href = proj.liveUrl;
        liveBtn.style.display = 'inline-flex';
      } else {
        liveBtn.style.display = 'none';
      }
    }

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.editorial-project-card');
    if (card) {
      const id = card.getAttribute('data-project-id');
      openModal(id);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeModal();
    }
    if (e.key === 'Enter') {
      const card = document.activeElement?.closest('.editorial-project-card');
      if (card) {
        openModal(card.getAttribute('data-project-id'));
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
}

/**
 * =============================================================================
 * VERIFIED CERTIFICATIONS ARCHIVE RENDERER & INTERACTIVE FILTER
 * =============================================================================
 */
function renderCertificates(certList) {
  const grid = document.getElementById('certifications-grid-editorial');
  const filterPills = document.querySelectorAll('.cert-filter-pill');
  if (!grid || !certList) return;

  function renderFiltered(category) {
    const filtered = category === 'all' 
      ? certList 
      : certList.filter(c => c.categoryCode === category);

    grid.innerHTML = filtered.map((c, idx) => `
      <article class="cert-card-box reveal delay-${(idx % 4) + 1}" data-cert-id="${c.id}" tabindex="0" role="button" aria-label="View certification details for ${c.title}">
        <div class="cert-card-top-row">
          <span class="cert-badge-tag">${c.badge}</span>
          <span class="cert-category-code">${c.category}</span>
        </div>

        <h3 class="cert-card-title">${c.title}</h3>
        <div class="cert-issuer-line">
          <i data-lucide="shield-check" style="width: 14px; height: 14px; color: var(--gold-primary);"></i>
          <span>${c.issuer}</span>
        </div>

        <p class="cert-brief-desc">${c.description}</p>

        <div class="cert-footer-meta">
          <div class="cert-date-text">
            <i data-lucide="calendar" style="width: 12px; height: 12px;"></i>
            <span>${c.date}</span>
          </div>
          <div class="cert-action-btns">
            <a href="${c.file}" target="_blank" class="cert-view-pdf-btn" title="Open PDF in new tab" onclick="event.stopPropagation();">
              <i data-lucide="file-text" style="width: 13px; height: 13px;"></i>
              <span>PDF ↗</span>
            </a>
            <button class="cert-info-trigger" aria-label="Detailed info" onclick="event.stopPropagation(); document.querySelector('[data-cert-id=\\'${c.id}\\']').click();">
              <i data-lucide="info" style="width: 13px; height: 13px;"></i>
            </button>
          </div>
        </div>
      </article>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
    initScrollReveals();
  }

  // Initial render all
  renderFiltered('all');

  // Filter click interactions
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      renderFiltered(filter);
    });
  });
}

/**
 * =============================================================================
 * CERTIFICATE MODAL PREVIEW CONTROLLER
 * =============================================================================
 */
function initCertModal(certList) {
  const backdrop = document.getElementById('cert-modal-backdrop');
  const closeBtn = document.getElementById('modal-cert-close-btn');
  if (!backdrop || !certList) return;

  function openCertModal(id) {
    const cert = certList.find(c => c.id === id);
    if (!cert) return;

    document.getElementById('modal-cert-category-label').textContent = cert.category;
    document.getElementById('modal-cert-title').textContent = cert.title;
    document.getElementById('modal-cert-issuer-badge').textContent = `${cert.badge} • ${cert.date}`;
    document.getElementById('modal-cert-desc').textContent = cert.description;
    document.getElementById('modal-cert-issuer').textContent = cert.issuer;
    document.getElementById('modal-cert-instructor').textContent = cert.instructor || 'Certified Faculty';
    document.getElementById('modal-cert-date').textContent = cert.date;

    const downloadLink = document.getElementById('modal-cert-download-link');
    const openLink = document.getElementById('modal-cert-open-link');

    if (downloadLink) {
      downloadLink.href = cert.file;
      downloadLink.setAttribute('download', cert.file.split('/').pop());
    }
    if (openLink) {
      openLink.href = cert.file;
    }

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.cert-card-box');
    if (card) {
      const id = card.getAttribute('data-cert-id');
      openCertModal(id);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeCertModal();
    }
    if (e.key === 'Enter') {
      const card = document.activeElement?.closest('.cert-card-box');
      if (card) {
        openCertModal(card.getAttribute('data-cert-id'));
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeCertModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeCertModal();
  });
}

/**
 * =============================================================================
 * SKILLS, EDUCATION, LEADERSHIP & LOGOS RENDERERS
 * =============================================================================
 */
function renderSkillsCategories(categories) {
  const container = document.getElementById('skills-categories-grid');
  if (!container || !categories) return;

  container.innerHTML = categories.map((cat, idx) => `
    <div class="skill-category-panel reveal delay-${(idx % 3) + 1}">
      <h3 class="skill-category-name">${cat.name}</h3>
      <div class="skill-pills-wrap">
        ${cat.items.map(item => `<span class="skill-pill-tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderEducationCards(educationList) {
  const container = document.getElementById('education-timeline-grid');
  if (!container || !educationList) return;

  container.innerHTML = educationList.map((item, idx) => `
    <div class="education-card-box reveal delay-${idx + 1}">
      <span class="edu-period-badge">${item.period}</span>
      <h3 class="edu-degree-title">${item.degree}</h3>
      <div class="edu-institution-label">${item.institution} • ${item.location}</div>
      <p class="edu-details-text">${item.desc}</p>
    </div>
  `).join('');
}

function renderLeadershipPanels(items) {
  const container = document.getElementById('leadership-two-col');
  if (!container || !items) return;

  container.innerHTML = items.map((item, idx) => `
    <div class="leadership-panel-card reveal delay-${idx + 1}">
      <h3 class="leadership-role-header">${item.role}</h3>
      <div class="leadership-org-sub">${item.organization}</div>
      <p style="font-size: 0.9rem; line-height: 1.65; color: var(--text-secondary); margin-bottom: 20px;">
        ${item.desc}
      </p>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
        ${item.highlights.map(h => `
          <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.84rem; color: var(--text-warm-white);">
            <span style="color: var(--gold-primary);">✦</span>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

function renderTechWordmarks(logos) {
  const container = document.getElementById('tech-wordmarks-row');
  if (!container || !logos) return;

  container.innerHTML = logos.map((l, idx) => `
    <span class="tech-wordmark-item reveal delay-${idx + 1}" title="${l.tag}">${l.name}</span>
  `).join('');
}

/**
 * =============================================================================
 * CONTACT FORM & TOAST
 * =============================================================================
 */
function initContactForm() {
  const form = document.getElementById('footer-contact-form');
  const toast = document.getElementById('editorial-toast');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name']?.value || 'Friend';

    if (toast) {
      toast.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="color: var(--gold-primary); font-size: 1.2rem;">✦</span>
          <span>Thank you, <strong>${name}</strong>. Your message has been received. I'll get back to you shortly at <strong>dev.somprakash@gmail.com</strong>.</span>
        </div>
      `;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 5000);
    }

    form.reset();
  });
}

/**
 * =============================================================================
 * ACTIVE NAVIGATION HIGHLIGHTING (INTERSECTION OBSERVER)
 * =============================================================================
 */
function initNavScrollObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));
}

/**
 * =============================================================================
 * INTERNSHIP & CERTIFICATION 5-SECOND AUTO-CAROUSEL
 * =============================================================================
 */
function initInternshipCarousel() {
  const container = document.getElementById('internship-carousel-container');
  const slides = document.querySelectorAll('.internship-slide');
  const tabs = document.querySelectorAll('.carousel-tab-btn');
  const fill = document.getElementById('carousel-countdown-fill');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');

  if (!container || slides.length === 0) return;

  const SLIDE_DURATION = 5000; // 5 seconds per slide
  const INTERVAL_STEP = 50;    // smooth countdown update
  let currentIndex = 0;
  let elapsed = 0;
  let timer = null;
  let isPaused = false;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === currentIndex);
    });
    elapsed = 0;
    if (fill) fill.style.width = '0%';
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(() => {
      if (!isPaused) {
        elapsed += INTERVAL_STEP;
        const percent = (elapsed / SLIDE_DURATION) * 100;
        if (fill) fill.style.width = `${Math.min(100, percent)}%`;

        if (elapsed >= SLIDE_DURATION) {
          showSlide(currentIndex + 1);
        }
      }
    }, INTERVAL_STEP);
  }

  function stopTimer() {
    if (timer) clearInterval(timer);
  }

  // Click on tabs to jump directly
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-slide-index'), 10);
      showSlide(idx);
    });
  });

  // Next / Prev arrow buttons
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  }

  // Pause on hover so the user can comfortably examine details or click links
  container.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  container.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  // Initialize first slide and begin 5-second countdown
  showSlide(0);
  startTimer();
}
