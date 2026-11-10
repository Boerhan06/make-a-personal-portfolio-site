/**
 * Main Portfolio Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initColorTheme();
  initCanvas();
  renderProfile();
  renderSkills();
  renderProjects('all');
  renderExperience();
  renderTestimonials();
  initProjectModal();
  initFilterTabs();
  initContactForm();
  initCustomizer();
  initScrollEffects();
  initMobileMenu();

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ==========================================================================
   1. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const html = document.documentElement;
  
  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

  function toggle() {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
    showToast(isDark ? 'Switched to Dark Mode 🌙' : 'Switched to Light Mode ☀️', 'info');
  }

  if (themeToggle) themeToggle.addEventListener('click', toggle);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggle);

  updateThemeIcons(html.classList.contains('dark'));
}

function updateThemeIcons(isDark) {
  const icons = document.querySelectorAll('.theme-icon');
  icons.forEach(icon => {
    icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
  });
  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   2. Accent Color Customization
   ========================================================================== */
function initColorTheme() {
  const savedColor = localStorage.getItem('theme-color') || 'indigo';
  document.documentElement.setAttribute('data-theme-color', savedColor);
  
  const swatches = document.querySelectorAll('.color-swatch');
  swatches.forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.getAttribute('data-color');
      document.documentElement.setAttribute('data-theme-color', color);
      localStorage.setItem('theme-color', color);
      swatches.forEach(s => s.classList.remove('ring-4', 'ring-white', 'ring-offset-2', 'ring-offset-slate-900'));
      btn.classList.add('ring-4', 'ring-white', 'ring-offset-2', 'ring-offset-slate-900');
      showToast(`Accent theme updated to ${color.toUpperCase()} 🎨`, 'success');
    });
  });
}

/* ==========================================================================
   3. Render Profile & Dynamic Hero Data
   ========================================================================== */
function renderProfile() {
  const p = portfolioData.profile;

  // Name, title, badges
  const nameEls = document.querySelectorAll('.profile-name');
  nameEls.forEach(el => el.textContent = p.name);

  const roleEls = document.querySelectorAll('.profile-role');
  roleEls.forEach(el => el.textContent = p.role);

  const bioEl = document.getElementById('profile-bio');
  if (bioEl) bioEl.textContent = p.bio;

  const badgeEl = document.getElementById('status-badge-text');
  if (badgeEl) badgeEl.textContent = p.badge;

  const locationEl = document.getElementById('profile-location');
  if (locationEl) locationEl.textContent = p.location;

  const emailTextEl = document.getElementById('profile-email-text');
  if (emailTextEl) emailTextEl.textContent = p.email;

  // Stats Grid
  const statsContainer = document.getElementById('stats-grid');
  if (statsContainer && p.stats) {
    statsContainer.innerHTML = p.stats.map(stat => `
      <div class="glass-panel p-4 rounded-2xl text-center border transition hover:border-indigo-500/50">
        <div class="text-2xl sm:text-3xl font-extrabold gradient-text">${stat.value}</div>
        <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">${stat.label}</div>
      </div>
    `).join('');
  }

  // Copy email button
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(p.email).then(() => {
        showToast(`Copied ${p.email} to clipboard! 📋`, 'success');
      }).catch(() => {
        showToast('Could not copy email automatically.', 'info');
      });
    });
  }
}

/* ==========================================================================
   4. Render Skills & Interactive Search Filter
   ========================================================================== */
function renderSkills(filterText = '') {
  const skills = portfolioData.skills;
  const categories = [
    { key: 'frontend', title: 'Frontend & UI Engineering', icon: 'monitor' },
    { key: 'backend', title: 'Backend & Cloud Systems', icon: 'server' },
    { key: 'cloudAi', title: 'Architecture, AI & DevOps', icon: 'sparkles' }
  ];

  const container = document.getElementById('skills-container');
  if (!container) return;

  const search = filterText.toLowerCase().trim();

  container.innerHTML = categories.map(cat => {
    const list = skills[cat.key].filter(s => s.name.toLowerCase().includes(search) || s.level.toLowerCase().includes(search));
    
    if (search && list.length === 0) return '';

    return `
      <div class="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl accent-bg/10 flex items-center justify-center text-indigo-500 accent-color">
              <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">${cat.title}</h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${list.map(skill => `
              <div class="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between group hover:border-indigo-500/50 transition">
                <div class="flex items-center gap-2.5">
                  <div class="w-7 h-7 rounded-lg bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-300">
                    <i data-lucide="${skill.icon || 'code'}" class="w-4 h-4"></i>
                  </div>
                  <span class="font-semibold text-sm text-slate-800 dark:text-slate-200">${skill.name}</span>
                </div>
                <span class="text-xs px-2.5 py-1 rounded-full font-medium bg-slate-200 dark:bg-slate-700/70 text-slate-600 dark:text-slate-300">
                  ${skill.level}
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (container.innerHTML.trim() === '') {
    container.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">No skills match "${filterText}"</div>`;
  }

  if (window.lucide) window.lucide.createIcons();

  // Search input handler
  const skillSearch = document.getElementById('skill-search-input');
  if (skillSearch && !skillSearch.dataset.initialized) {
    skillSearch.dataset.initialized = 'true';
    skillSearch.addEventListener('input', (e) => {
      renderSkills(e.target.value);
    });
  }
}

/* ==========================================================================
   5. Render Projects & Filter Tabs
   ========================================================================== */
function renderProjects(category = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = category === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === category);

  container.innerHTML = filtered.map(project => `
    <article class="glass-panel glass-card rounded-2xl overflow-hidden flex flex-col justify-between group" data-project-id="${project.id}">
      <div>
        <!-- Visual Banner -->
        <div class="relative overflow-hidden aspect-[16/10] bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <img 
            src="${project.image}" 
            alt="${project.title}"
            loading="lazy"
            class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          <!-- Category & Metrics Tag -->
          <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md bg-slate-900/80 text-white border border-slate-700/70">
              ${project.category}
            </span>
            ${project.featured ? `
              <span class="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center gap-1.5">
                <i data-lucide="sparkles" class="w-3 h-3"></i> Featured
              </span>
            ` : ''}
          </div>

          <div class="absolute bottom-3 left-4 right-4">
            <p class="text-xs font-mono text-emerald-400 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md inline-flex items-center gap-1.5 border border-emerald-500/20">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              ${project.metrics}
            </p>
          </div>
        </div>

        <!-- Project Details -->
        <div class="p-6">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
            ${project.title}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
            ${project.description}
          </p>

          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-1.5 mt-4">
            ${project.tags.map(tag => `
              <span class="text-xs px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                ${tag}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="p-6 pt-0 border-t border-slate-200/50 dark:border-slate-800/60 mt-4 flex items-center justify-between gap-3">
        <button 
          onclick="openProjectDetails('${project.id}')"
          class="text-xs font-semibold text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1.5 py-2 group/btn"
        >
          View Case Study <i data-lucide="arrow-right" class="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1"></i>
        </button>

        <div class="flex items-center gap-2">
          <a 
            href="${project.githubUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="View source code on GitHub"
            class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          >
            <i data-lucide="github" class="w-4 h-4"></i>
          </a>
          <a 
            href="${project.demoUrl}" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View live project demo" 
            class="p-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition accent-bg accent-bg-hover"
          >
            <i data-lucide="external-link" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function initFilterTabs() {
  const tabs = document.querySelectorAll('.project-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active', 'accent-bg', 'text-white');
        t.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
      });
      tab.classList.add('active', 'accent-bg', 'text-white');
      tab.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
      
      const filter = tab.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

/* ==========================================================================
   6. Project Modal Case Study Viewer
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = document.getElementById('modal-backdrop');

  function closeModal() {
    modal.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal-open')) {
      closeModal();
    }
  });

  window.openProjectDetails = function(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-metrics').textContent = project.metrics;
    document.getElementById('modal-description').textContent = project.extendedDescription || project.description;
    
    // Links
    document.getElementById('modal-demo-link').href = project.demoUrl;
    document.getElementById('modal-github-link').href = project.githubUrl;

    // Highlights list
    const highlightsContainer = document.getElementById('modal-highlights');
    if (highlightsContainer) {
      highlightsContainer.innerHTML = project.highlights.map(item => `
        <li class="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"></i>
          <span>${item}</span>
        </li>
      `).join('');
    }

    // Tech tags
    const tagsContainer = document.getElementById('modal-tags');
    if (tagsContainer) {
      tagsContainer.innerHTML = project.tags.map(t => `
        <span class="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
          ${t}
        </span>
      `).join('');
    }

    modal.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    if (window.lucide) window.lucide.createIcons();
  };
}

/* ==========================================================================
   7. Experience & Testimonials Rendering
   ========================================================================== */
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = portfolioData.experience.map((exp, index) => `
    <div class="relative pl-8 sm:pl-10 pb-10 border-l-2 border-slate-200 dark:border-slate-800 last:pb-0 last:border-transparent group">
      <!-- Dot indicator -->
      <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 group-hover:scale-125 transition-transform"></div>
      
      <div class="glass-panel p-6 rounded-2xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">${exp.role}</h3>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 accent-color w-fit">
            ${exp.period}
          </span>
        </div>
        <div class="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
          <span>${exp.company}</span>
          <span>•</span>
          <span class="text-xs">${exp.location}</span>
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          ${exp.description}
        </p>
        <div class="flex flex-wrap gap-1.5">
          ${exp.skills.map(s => `
            <span class="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              ${s}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = portfolioData.testimonials.map(item => `
    <div class="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-1 text-amber-400 mb-4">
          ${Array(5).fill(0).map(() => '<i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>').join('')}
        </div>
        <p class="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed">
          "${item.quote}"
        </p>
      </div>
      <div class="flex items-center gap-3.5 mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800">
        <img 
          src="${item.avatar}" 
          alt="${item.author}" 
          class="w-11 h-11 rounded-full object-cover ring-2 ring-indigo-500/30"
        />
        <div>
          <h4 class="font-bold text-sm text-slate-900 dark:text-white">${item.author}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400">${item.role}</p>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   8. Interactive Contact Form with Validation & Feedback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'info');
      return;
    }

    // Submit animation simulation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-2"></i> Sending...`;
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast('Thank you! Your message has been sent successfully.', 'success');
      if (window.lucide) window.lucide.createIcons();
    }, 1200);
  });
}

/* ==========================================================================
   9. Live Customizer Drawer (Color, Name, Role Live Edit)
   ========================================================================== */
function initCustomizer() {
  const trigger = document.getElementById('customizer-trigger');
  const closeBtn = document.getElementById('close-customizer');
  const drawer = document.getElementById('customizer-drawer');
  const overlay = document.getElementById('customizer-overlay');

  function openDrawer() {
    drawer.classList.add('drawer-open');
    overlay.classList.remove('hidden');
  }

  function closeDrawer() {
    drawer.classList.remove('drawer-open');
    overlay.classList.add('hidden');
  }

  if (trigger) trigger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Live input fields
  const nameInput = document.getElementById('cust-name-input');
  const roleInput = document.getElementById('cust-role-input');
  const bioInput = document.getElementById('cust-bio-input');

  if (nameInput) {
    nameInput.value = portfolioData.profile.name;
    nameInput.addEventListener('input', (e) => {
      portfolioData.profile.name = e.target.value;
      renderProfile();
    });
  }

  if (roleInput) {
    roleInput.value = portfolioData.profile.role;
    roleInput.addEventListener('input', (e) => {
      portfolioData.profile.role = e.target.value;
      renderProfile();
    });
  }

  if (bioInput) {
    bioInput.value = portfolioData.profile.bio;
    bioInput.addEventListener('input', (e) => {
      portfolioData.profile.bio = e.target.value;
      renderProfile();
    });
  }

  // Reset button
  const resetBtn = document.getElementById('reset-customizer-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      localStorage.removeItem('theme-color');
      document.documentElement.setAttribute('data-theme-color', 'indigo');
      showToast('Theme reset to default!', 'info');
    });
  }
}

/* ==========================================================================
   10. Ambient Interactive Particle Canvas
   ========================================================================== */
function initCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const count = Math.min(Math.floor(window.innerWidth / 20), 45);

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.classList.contains('dark');
    const color = isDark ? '148, 163, 184' : '99, 102, 241';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${p.alpha * 0.4})`;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${color}, ${(1 - dist / 120) * 0.12})`;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

/* ==========================================================================
   11. Scroll Effects & Mobile Navigation
   ========================================================================== */
function initScrollEffects() {
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop?.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      backToTop?.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  function toggleMenu() {
    menu.classList.toggle('hidden');
  }

  toggleBtn.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

/* ==========================================================================
   12. Toast Notification Helper
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="shrink-0 text-indigo-400">
      <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" class="w-5 h-5"></i>
    </div>
    <div class="text-sm font-medium">${message}</div>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
