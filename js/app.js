/**
 * TRUVIO COMMERCE PRESENTATION ENGINE
 * Dynamic Markdown Slide Deck Controller with View Transitions
 */

(function () {
  'use strict';

  // --- State ---
  let slides = [];
  let currentIndex = 0;
  let timerInterval = null;
  let elapsedSeconds = 0;
  let isOverviewOpen = false;
  let isNotesOpen = false;
  let isHelpOpen = false;

  // --- DOM Elements ---
  const slideStage = document.getElementById('slideStage');
  const slideCounter = document.getElementById('slideCounter');
  const progressBar = document.getElementById('progressBar');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const notesBtn = document.getElementById('notesBtn');
  const overviewBtn = document.getElementById('overviewBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const helpBtn = document.getElementById('helpBtn');

  const notesDrawer = document.getElementById('notesDrawer');
  const notesBody = document.getElementById('notesBody');
  const notesCloseBtn = document.getElementById('notesCloseBtn');
  const timerDisplay = document.getElementById('timerDisplay');

  const overviewModal = document.getElementById('overviewModal');
  const overviewGrid = document.getElementById('overviewGrid');
  const overviewCloseBtn = document.getElementById('overviewCloseBtn');

  const helpModal = document.getElementById('helpModal');
  const helpCloseBtn = document.getElementById('helpCloseBtn');

  // Fallback slides content in case fetch('slides.md') is blocked by file:// CORS
  const FALLBACK_MARKDOWN = `
<!-- slide: 1 -->
<div class="slide-badge">⚡ Truvio Commerce &bull; Autonomous Experience Engine</div>

# Agentic AI in Truvio Commerce
### Solving Automated Landing Page Creation at Enterprise Scale

<div class="hero-stats">
  <div class="stat-pill"><span class="icon">🤖</span> Multi-Agent Orchestration</div>
  <div class="stat-pill"><span class="icon">🛍️</span> Native Catalog Integration</div>
  <div class="stat-pill"><span class="icon">🚀</span> Zero-Friction Merchant UX</div>
</div>

<p class="slide-footer-text">Prepared for Truvio Product & Commerce Engineering &bull; 5-Slide Executive Overview</p>

<!-- notes:
Welcome everyone. Today we are presenting how Agentic AI transforms one of the biggest friction points in e-commerce: creating high-converting, on-brand landing pages rapidly within Truvio Commerce.
-->

---

<!-- slide: 2 -->
<div class="slide-badge red">⚠️ The Core Problem</div>

## The Landing Page Bottleneck in Commerce Today

Traditional CMS & e-commerce landing page creation is slow, fragmented, and disconnects merchants from real-time customer intent.

<div class="grid grid-3">
  <div class="card warning">
    <div class="card-icon">⏳</div>
    <h3>Slow Time-to-Market</h3>
    <p>Launches take <strong>3 to 14 days</strong> involving marketers, copywriters, designers, and frontend devs.</p>
  </div>
  <div class="card warning">
    <div class="card-icon">🗄️</div>
    <h3>Siloed Truvio Data</h3>
    <p>Product stock, pricing tiers, and merchandising rules must be manually copied and kept in sync.</p>
  </div>
  <div class="card warning">
    <div class="card-icon">📉</div>
    <h3>Generic Conversion</h3>
    <p>Static landing pages cannot react dynamically to real-time ad campaigns, inventory shifts, or audience segments.</p>
  </div>
</div>

<div class="callout warning-callout">
  <strong>The Consequence:</strong> Missed flash campaign windows, high CAC, and frustrated merchandising teams.
</div>

<!-- notes:
Here we highlight the pain points. In typical commerce platforms, merchants want to launch a campaign for a trending product or seasonal sale, but coordinating assets, copy, and layouts takes days.
-->

---

<!-- slide: 3 -->
<div class="slide-badge blue">🧠 Architectural Blueprint</div>

## The Multi-Agent Swarm for Truvio

Instead of a monolithic LLM, we orchestrate **specialized autonomous agents** working in continuous feedback loops.

<div class="grid grid-4">
  <div class="card agent-card">
    <div class="agent-tag">Agent 01</div>
    <h4>Catalog Context Agent</h4>
    <p>Queries Truvio Commerce APIs for live inventory, variants, margins, and customer reviews.</p>
  </div>
  <div class="card agent-card">
    <div class="agent-tag">Agent 02</div>
    <h4>Layout & UX Agent</h4>
    <p>Selects optimized component structures, hero sections, social proof, and checkout anchors.</p>
  </div>
  <div class="card agent-card">
    <div class="agent-tag">Agent 03</div>
    <h4>Copy & Brand Agent</h4>
    <p>Generates high-intent headlines, persuasive value props, and SEO-optimized metadata.</p>
  </div>
  <div class="card agent-card">
    <div class="agent-tag">Agent 04</div>
    <h4>QA & Conversion Auditor</h4>
    <p>Verifies brand compliance, a11y standards, Truvio checkout paths, and mobile responsiveness.</p>
  </div>
</div>

<div class="callout info-callout">
  <strong>Key Innovation:</strong> Agents self-correct before publication. If the QA Agent flags broken stock links, the Catalog Agent re-routes inventory seamlessly.
</div>

<!-- notes:
Explain the architecture: We break down the job into distinct expert roles: Catalog integration, UX hierarchy, persuasion/brand tone, and automated QA.
-->

---

<!-- slide: 4 -->
<div class="slide-badge purple">⚙️ End-to-End Workflow</div>

## From Merchant Intent to Live Truvio Page

How a merchant prompt becomes a fully deployed, high-converting experience in minutes.

<div class="workflow-steps">
  <div class="step-item">
    <div class="step-number">01</div>
    <div class="step-content">
      <h4>Merchant Intent Prompt</h4>
      <p><em>"Create a Father's Day premium grooming bundle landing page with high-margin kits."</em></p>
    </div>
  </div>
  <div class="step-connector">➔</div>
  <div class="step-item">
    <div class="step-number">02</div>
    <div class="step-content">
      <h4>Agent Swarm Execution</h4>
      <p>Agents fetch Truvio SKUs, compose grid layouts, author benefit-driven copy, and embed widgets.</p>
    </div>
  </div>
  <div class="step-connector">➔</div>
  <div class="step-item">
    <div class="step-number">03</div>
    <div class="step-content">
      <h4>Automated Preview & Approval</h4>
      <p>Interactive preview rendered in Truvio Admin with 1-click merchant modifications or approval.</p>
    </div>
  </div>
  <div class="step-connector">➔</div>
  <div class="step-item">
    <div class="step-number">04</div>
    <div class="step-content">
      <h4>Instant Edge Publishing</h4>
      <p>Page published to Truvio storefront CDN with real-time A/B testing variants already armed.</p>
    </div>
  </div>
</div>

<div class="code-preview">
  <code>// Truvio Agent Task Dispatcher
const landingPage = await truvioSwarm.generateLandingPage({
  campaign: "FathersDay2026",
  targetAudience: "Affluent Gift Buyers",
  targetMarginMin: 0.42,
  truvioStoreId: "store_us_east"
});</code>
</div>

<!-- notes:
Walk through the flow: Prompt -> Swarm execution -> Merchant visual preview -> Instant Edge CDN publishing.
-->

---

<!-- slide: 5 -->
<div class="slide-badge green">📈 Outcomes & Future Vision</div>

## Measured Impact & Strategic Roadmap

Transforming Truvio Commerce from a reactive storefront to an autonomous growth platform.

<div class="grid grid-3">
  <div class="card metric-card">
    <div class="metric-value">92%</div>
    <div class="metric-title">Reduction in Launch Time</div>
    <p>From an average of 6 days down to under 15 minutes per landing page.</p>
  </div>
  <div class="card metric-card">
    <div class="metric-value">+34%</div>
    <div class="metric-title">Lift in Conversion Rate</div>
    <p>Powered by hyper-relevant product pairing and real-time inventory alignment.</p>
  </div>
  <div class="card metric-card">
    <div class="metric-value">10x</div>
    <div class="metric-title">Campaign Velocity</div>
    <p>Merchants run multi-variant micro-campaigns without overhead.</p>
  </div>
</div>

<div class="roadmap-box">
  <h4>Next Milestones for Truvio Commerce:</h4>
  <ul>
    <li><strong>Phase 1 (Current):</strong> Merchant-assisted landing page generation & catalog retrieval.</li>
    <li><strong>Phase 2 (Q4):</strong> Autonomous real-time A/B variant mutation based on live conversion heatmaps.</li>
    <li><strong>Phase 3 (2027):</strong> Predictive landing page pre-generation based on search trend forecasting.</li>
  </ul>
</div>

<!-- notes:
Wrap up with concrete business value and future roadmap. Emphasize how this fundamentally shifts Truvio's competitive moat.
-->
`;

  // --- Load & Parse Markdown ---
  async function loadMarkdownContent() {
    try {
      const response = await fetch('slides.md?v=' + Date.now());
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const text = await response.text();
      return text;
    } catch (err) {
      console.warn('Could not fetch slides.md directly (likely local file:// CORS or network). Using bundled markdown fallback.', err);
      return FALLBACK_MARKDOWN;
    }
  }

  function parseSlides(rawMarkdown) {
    // Split by markdown horizontal rules (---) on their own line
    const rawChunks = rawMarkdown.split(/^---$/m);
    const parsed = [];

    rawChunks.forEach((chunk, index) => {
      const trimmed = chunk.trim();
      if (!trimmed) return;

      // Extract notes: <!-- notes: ... -->
      let notes = '';
      const notesMatch = trimmed.match(/<!--\s*notes:([\s\S]*?)-->/i);
      if (notesMatch) {
        notes = notesMatch[1].trim();
      }

      // Remove notes comments from visible slide markdown
      let slideMarkdown = trimmed.replace(/<!--\s*notes:[\s\S]*?-->/gi, '');
      // Also remove slide markers like <!-- slide: 1 -->
      slideMarkdown = slideMarkdown.replace(/<!--\s*slide:\s*\d+\s*-->/gi, '');

      // Parse HTML via marked
      let html = '';
      if (window.marked && typeof window.marked.parse === 'function') {
        html = window.marked.parse(slideMarkdown);
      } else {
        // Basic fallback parser if marked is missing
        html = slideMarkdown
          .replace(/^### (.*$)/gim, '<h3>$1</h3>')
          .replace(/^## (.*$)/gim, '<h2>$1</h2>')
          .replace(/^# (.*$)/gim, '<h1>$1</h1>')
          .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
          .replace(/\*(.*)\*/gim, '<em>$1</em>');
      }

      // Extract title for overview card
      const titleMatch = slideMarkdown.match(/^#{1,3}\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1].replace(/<[^>]*>/g, '') : `Slide ${index + 1}`;

      parsed.push({
        index: parsed.length,
        html: html.trim(),
        notes: notes || 'No speaker notes for this slide.',
        title: title
      });
    });

    return parsed;
  }

  // --- Rendering & View Transitions ---
  function renderSlide(index) {
    if (!slides[index]) return;
    slideStage.innerHTML = slides[index].html;
  }

  function updateHUD() {
    const total = slides.length;
    const currentNum = currentIndex + 1;

    slideCounter.textContent = `${String(currentNum).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    progressBar.style.width = `${(currentNum / total) * 100}%`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === total - 1;

    // Update notes panel if open
    if (slides[currentIndex]) {
      notesBody.innerHTML = slides[currentIndex].notes
        .split('\n\n')
        .map(p => `<p>${p}</p>`)
        .join('');
    }

    // Update active state in overview modal
    document.querySelectorAll('.overview-card').forEach((card, idx) => {
      card.classList.toggle('active', idx === currentIndex);
    });
  }

  function goToSlide(newIndex, direction = 'forward') {
    if (newIndex < 0 || newIndex >= slides.length || newIndex === currentIndex) return;

    const updateDOM = () => {
      currentIndex = newIndex;
      renderSlide(currentIndex);
      updateHUD();
      history.replaceState(null, '', `#slide-${currentIndex + 1}`);
    };

    // Modern Directional View Transition
    if (document.startViewTransition) {
      document.startViewTransition({
        update: updateDOM,
        types: [direction]
      });
    } else {
      updateDOM();
    }
  }

  function nextSlide() {
    goToSlide(currentIndex + 1, 'forward');
  }

  function prevSlide() {
    goToSlide(currentIndex - 1, 'backward');
  }

  // --- Speaker Timer ---
  function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      const mins = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
      const secs = String(elapsedSeconds % 60).padStart(2, '0');
      timerDisplay.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  // --- Modals & Drawers ---
  function toggleNotes() {
    isNotesOpen = !isNotesOpen;
    notesDrawer.classList.toggle('open', isNotesOpen);
    notesBtn.classList.toggle('active', isNotesOpen);
    if (isNotesOpen) {
      startTimer();
      updateHUD();
    }
  }

  function toggleOverview() {
    isOverviewOpen = !isOverviewOpen;
    overviewModal.classList.toggle('open', isOverviewOpen);
    overviewBtn.classList.toggle('active', isOverviewOpen);
  }

  function toggleHelp() {
    isHelpOpen = !isHelpOpen;
    helpModal.classList.toggle('open', isHelpOpen);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  function buildOverviewGrid() {
    overviewGrid.innerHTML = '';
    slides.forEach((slide, idx) => {
      const card = document.createElement('div');
      card.className = `overview-card ${idx === currentIndex ? 'active' : ''}`;
      card.innerHTML = `
        <div class="overview-card-num">SLIDE ${String(idx + 1).padStart(2, '0')}</div>
        <h3>${slide.title}</h3>
        <p>${slide.notes !== 'No speaker notes for this slide.' ? slide.notes : 'Click to jump to this slide'}</p>
      `;
      card.addEventListener('click', () => {
        const dir = idx > currentIndex ? 'forward' : 'backward';
        goToSlide(idx, dir);
        toggleOverview();
      });
      overviewGrid.appendChild(card);
    });
  }

  // --- Event Listeners ---
  function setupEvents() {
    // Prev / Next HUD buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Toggle drawers
    notesBtn.addEventListener('click', toggleNotes);
    notesCloseBtn.addEventListener('click', toggleNotes);
    overviewBtn.addEventListener('click', toggleOverview);
    overviewCloseBtn.addEventListener('click', toggleOverview);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    helpBtn.addEventListener('click', toggleHelp);
    helpCloseBtn.addEventListener('click', toggleHelp);

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // If modal is open, Esc closes it
      if (e.key === 'Escape') {
        if (isHelpOpen) { toggleHelp(); return; }
        if (isOverviewOpen) { toggleOverview(); return; }
        if (isNotesOpen) { toggleNotes(); return; }
      }

      if (isHelpOpen || isOverviewOpen) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'Backspace':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0, 'backward');
          break;
        case 'End':
          e.preventDefault();
          goToSlide(slides.length - 1, 'forward');
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 's':
        case 'S':
          e.preventDefault();
          toggleNotes();
          break;
        case 'o':
        case 'O':
          e.preventDefault();
          toggleOverview();
          break;
        case '?':
          e.preventDefault();
          toggleHelp();
          break;
      }
    });

    // Touch Swipe Navigation for Mobile/Tablet
    let touchStartX = 0;
    let touchStartY = 0;

    window.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Only swipe horizontally if diffX is significant and larger than vertical scrolling
      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }, { passive: true });

    // Deep Linking via URL Hash
    window.addEventListener('hashchange', () => {
      const match = window.location.hash.match(/slide-(\d+)/);
      if (match) {
        const target = parseInt(match[1], 10) - 1;
        if (target >= 0 && target < slides.length && target !== currentIndex) {
          const dir = target > currentIndex ? 'forward' : 'backward';
          goToSlide(target, dir);
        }
      }
    });

    // Print / PDF export support
    window.addEventListener('beforeprint', () => {
      // In print mode, render all slides into the stage sequentially
      const allSlidesHtml = slides.map(s => `<div class="slide-stage">${s.html}</div>`).join('');
      document.querySelector('.deck-viewport').innerHTML = allSlidesHtml;
    });

    window.addEventListener('afterprint', () => {
      // Restore normal single slide view
      document.querySelector('.deck-viewport').innerHTML = `<div class="slide-stage" id="slideStage"></div>`;
      renderSlide(currentIndex);
    });
  }

  // --- Initialization ---
  async function init() {
    const rawMarkdown = await loadMarkdownContent();
    slides = parseSlides(rawMarkdown);

    if (slides.length === 0) {
      slideStage.innerHTML = '<h2>No slides found in slides.md</h2>';
      return;
    }

    // Check URL hash for initial slide
    const match = window.location.hash.match(/slide-(\d+)/);
    if (match) {
      const target = parseInt(match[1], 10) - 1;
      if (target >= 0 && target < slides.length) {
        currentIndex = target;
      }
    }

    renderSlide(currentIndex);
    updateHUD();
    buildOverviewGrid();
    setupEvents();
    startTimer();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
