/* ===================================================
   Wanderly — Admin Panel JavaScript
   CRUD operations for Tours, Reviews, and Inquiries.
   All data stored in localStorage (simulated database).
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Storage Keys ----
  const TOURS_KEY = 'wanderly-admin-tours';
  const REVIEWS_KEY = 'wanderly-reviews';
  const INQUIRIES_KEY = 'wanderly-inquiries';

  // ---- Sanitize text for safe HTML insertion ----
  function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---- Generic localStorage helpers ----
  function loadData(key) {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // ---- Tab Switching ----
  const tabs = document.querySelectorAll('.admin-tab');
  const panels = document.querySelectorAll('.admin-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => (p.style.display = 'none'));
      tab.classList.add('active');
      const panelId = 'panel-' + tab.getAttribute('data-tab');
      const panel = document.getElementById(panelId);
      if (panel) panel.style.display = 'block';
    });
  });

  // ===================================================
  // TOURS MANAGEMENT
  // ===================================================
  const tourFormWrap = document.getElementById('tour-form-wrap');
  const tourForm = document.getElementById('tour-form');
  const tourFormTitle = document.getElementById('tour-form-title');
  const addTourBtn = document.getElementById('add-tour-btn');
  const cancelTourBtn = document.getElementById('cancel-tour-btn');
  const toursTableBody = document.getElementById('tours-table-body');
  const toursEmpty = document.getElementById('tours-empty');
  const toursTable = document.getElementById('tours-table');

  /** Get all tours (built-in + custom). */
  function getBuiltInTours() {
    return [
      { id: 'builtin-paris', key: 'paris', title: 'Paris Walking Tour', titleZh: '巴黎徒步之旅', location: 'Paris, France', locationZh: '法国巴黎', duration: '3 hours', price: 59, badge: 'bestseller', desc: 'Stroll through charming arrondissements, discover hidden courtyards, and hear the stories behind iconic landmarks.', descZh: '漫步迷人的街区，探索隐秘的庭院，聆听标志性地标背后的故事。', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80', builtin: true },
      { id: 'builtin-rome', key: 'rome', title: 'Rome History & Food Tour', titleZh: '罗马历史与美食之旅', location: 'Rome, Italy', locationZh: '意大利罗马', duration: '4 hours', price: 75, badge: 'new', desc: 'Taste authentic Roman cuisine while exploring ancient ruins and Renaissance architecture with a local historian.', descZh: '在当地历史学家的带领下，品尝正宗的罗马美食，探索古代遗迹和文艺复兴建筑。', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80', builtin: true },
      { id: 'builtin-andes', key: 'andes', title: 'Andes Hiking Expedition', titleZh: '安第斯山脉徒步探险', location: 'Cusco, Peru', locationZh: '秘鲁库斯科', duration: '2 days', price: 189, badge: 'adventure', desc: 'Trek through breathtaking mountain trails, visit remote villages, and camp under the stars in the Peruvian highlands.', descZh: '穿越令人叹为观止的山间小径，拜访偏远村庄，在秘鲁高原的星空下露营。', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&q=80', builtin: true },
      { id: 'builtin-tokyo', key: 'tokyo', title: 'Tokyo After Dark', titleZh: '东京夜游', location: 'Tokyo, Japan', locationZh: '日本东京', duration: '3 hours', price: 65, badge: 'popular', desc: 'Experience the neon-lit energy of Shinjuku, Shibuya, and hidden izakayas with a local nightlife expert.', descZh: '在本地夜生活达人的带领下，感受新宿、涩谷的霓虹灯能量和隐秘居酒屋。', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80', builtin: true },
      { id: 'builtin-bali', key: 'bali', title: 'Bali Rice Terrace Walk', titleZh: '巴厘岛梯田漫步', location: 'Ubud, Bali', locationZh: '巴厘岛乌布', duration: '5 hours', price: 45, badge: 'nature', desc: 'Wander through emerald-green rice paddies, meet local farmers, and enjoy a traditional Balinese lunch.', descZh: '穿行翠绿的稻田，与当地农民交流，享受传统巴厘岛午餐。', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80', builtin: true },
      { id: 'builtin-marrakech', key: 'marrakech', title: 'Marrakech Medina Discovery', titleZh: '马拉喀什老城探秘', location: 'Marrakech, Morocco', locationZh: '摩洛哥马拉喀什', duration: '4 hours', price: 55, badge: 'cultural', desc: 'Navigate the vibrant souks, visit palaces and mosques, and uncover centuries of Moroccan craft traditions.', descZh: '穿梭于热闹的集市，参观宫殿和清真寺，揭开摩洛哥数百年手工艺传统。', image: 'https://images.unsplash.com/photo-1568797629192-789acf8e4df3?w=600&q=80', builtin: true },
      { id: 'builtin-hongkong', key: 'hongkong', title: 'Hong Kong Highlights Tour', titleZh: '香港精华之旅', location: 'Hong Kong, China', locationZh: '中国香港', duration: '5 hours', price: 68, badge: 'popular', desc: 'Discover the dazzling skyline from Victoria Peak, ride the iconic Star Ferry across the harbour, and explore vibrant street markets and temples.', descZh: '从太平山顶欣赏迷人天际线，乘坐标志性的天星小轮穿越维多利亚港，探索充满活力的街市和古庙。', image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80', builtin: true },
    ];
  }

  function getCustomTours() {
    return loadData(TOURS_KEY);
  }

  function getAllTours() {
    return [...getBuiltInTours(), ...getCustomTours()];
  }

  const badgeLabels = {
    popular: 'Popular',
    bestseller: 'Best Seller',
    new: 'New',
    adventure: 'Adventure',
    nature: 'Nature',
    cultural: 'Cultural',
  };

  function renderTours() {
    const tours = getAllTours();
    toursTableBody.innerHTML = '';

    if (tours.length === 0) {
      toursTable.style.display = 'none';
      toursEmpty.style.display = 'block';
      return;
    }

    toursTable.style.display = '';
    toursEmpty.style.display = 'none';

    tours.forEach((tour) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><code>${sanitize(tour.key)}</code></td>
        <td>${sanitize(tour.title)}</td>
        <td>📍 ${sanitize(tour.location)}</td>
        <td>⏱ ${sanitize(tour.duration)}</td>
        <td>$${sanitize(String(tour.price))}</td>
        <td>${sanitize(badgeLabels[tour.badge] || tour.badge)}</td>
        <td class="actions-cell">
          ${tour.builtin
            ? '<span style="color:var(--color-text-light);font-size:0.8rem;">Built-in</span>'
            : `<button class="btn-edit" data-id="${sanitize(tour.id)}" title="Edit">✏️</button>
               <button class="btn-delete" data-id="${sanitize(tour.id)}" title="Delete">🗑️</button>`
          }
        </td>
      `;
      toursTableBody.appendChild(tr);
    });

    // Bind edit/delete
    toursTableBody.querySelectorAll('.btn-edit').forEach((btn) => {
      btn.addEventListener('click', () => editTour(btn.getAttribute('data-id')));
    });
    toursTableBody.querySelectorAll('.btn-delete').forEach((btn) => {
      btn.addEventListener('click', () => deleteTour(btn.getAttribute('data-id')));
    });
  }

  function showTourForm(tour) {
    tourFormWrap.style.display = 'block';
    if (tour) {
      tourFormTitle.textContent = 'Edit Tour';
      document.getElementById('tour-id').value = tour.id;
      document.getElementById('tour-key').value = tour.key;
      document.getElementById('tour-title-input').value = tour.title;
      document.getElementById('tour-title-zh').value = tour.titleZh || '';
      document.getElementById('tour-location').value = tour.location;
      document.getElementById('tour-location-zh').value = tour.locationZh || '';
      document.getElementById('tour-duration-input').value = tour.duration;
      document.getElementById('tour-price-input').value = tour.price;
      document.getElementById('tour-badge-type').value = tour.badge || 'popular';
      document.getElementById('tour-image').value = tour.image || '';
      document.getElementById('tour-desc').value = tour.desc;
      document.getElementById('tour-desc-zh').value = tour.descZh || '';
    } else {
      tourFormTitle.textContent = 'Add New Tour';
      tourForm.reset();
      document.getElementById('tour-id').value = '';
    }
    tourFormWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function hideTourForm() {
    tourFormWrap.style.display = 'none';
    tourForm.reset();
  }

  addTourBtn.addEventListener('click', () => showTourForm(null));
  cancelTourBtn.addEventListener('click', hideTourForm);

  tourForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(tourForm);
    const id = formData.get('tourId') || 'custom-' + Date.now();
    const tour = {
      id,
      key: (formData.get('tourKey') || '').trim().toLowerCase(),
      title: (formData.get('tourTitle') || '').trim(),
      titleZh: (formData.get('tourTitleZh') || '').trim(),
      location: (formData.get('tourLocation') || '').trim(),
      locationZh: (formData.get('tourLocationZh') || '').trim(),
      duration: (formData.get('tourDuration') || '').trim(),
      price: parseInt(formData.get('tourPrice'), 10) || 0,
      badge: formData.get('tourBadge') || 'popular',
      image: (formData.get('tourImage') || '').trim(),
      desc: (formData.get('tourDesc') || '').trim(),
      descZh: (formData.get('tourDescZh') || '').trim(),
      builtin: false,
    };

    if (!tour.key || !tour.title || !tour.desc) return;

    const tours = getCustomTours();
    const existingIndex = tours.findIndex((t) => t.id === id);
    if (existingIndex >= 0) {
      tours[existingIndex] = tour;
    } else {
      tours.push(tour);
    }

    saveData(TOURS_KEY, tours);
    hideTourForm();
    renderTours();
  });

  function editTour(id) {
    const tours = getCustomTours();
    const tour = tours.find((t) => t.id === id);
    if (tour) showTourForm(tour);
  }

  function deleteTour(id) {
    if (!confirm('Are you sure you want to delete this tour?')) return;
    const tours = getCustomTours().filter((t) => t.id !== id);
    saveData(TOURS_KEY, tours);
    renderTours();
  }

  // ===================================================
  // REVIEWS MANAGEMENT
  // ===================================================
  const reviewsTableBody = document.getElementById('reviews-table-body');
  const reviewsEmpty = document.getElementById('reviews-empty');
  const reviewsTable = document.getElementById('reviews-table');
  const clearReviewsBtn = document.getElementById('clear-reviews-btn');

  function renderReviews() {
    const reviews = loadData(REVIEWS_KEY);
    reviewsTableBody.innerHTML = '';

    if (reviews.length === 0) {
      reviewsTable.style.display = 'none';
      reviewsEmpty.style.display = 'block';
      return;
    }

    reviewsTable.style.display = '';
    reviewsEmpty.style.display = 'none';

    reviews.forEach((review, index) => {
      const dateStr = review.date ? new Date(review.date).toLocaleDateString() : '';
      const stars = '★'.repeat(review.rating || 0) + '☆'.repeat(5 - (review.rating || 0));
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${sanitize(review.name || '')}</td>
        <td>${sanitize(review.tour || '')}</td>
        <td style="color:var(--color-accent);letter-spacing:1px;">${stars}</td>
        <td class="text-truncate">${sanitize(review.text || '')}</td>
        <td>${sanitize(dateStr)}</td>
        <td class="actions-cell">
          <button class="btn-delete" data-index="${index}" title="Delete">🗑️</button>
        </td>
      `;
      reviewsTableBody.appendChild(tr);
    });

    reviewsTableBody.querySelectorAll('.btn-delete').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        deleteReview(idx);
      });
    });
  }

  function deleteReview(index) {
    if (!confirm('Are you sure you want to delete this review?')) return;
    const reviews = loadData(REVIEWS_KEY);
    reviews.splice(index, 1);
    saveData(REVIEWS_KEY, reviews);
    renderReviews();
  }

  clearReviewsBtn.addEventListener('click', () => {
    if (!confirm('Are you sure you want to delete ALL user reviews?')) return;
    saveData(REVIEWS_KEY, []);
    renderReviews();
  });

  // ===================================================
  // INQUIRIES MANAGEMENT
  // ===================================================
  const inquiriesTableBody = document.getElementById('inquiries-table-body');
  const inquiriesEmpty = document.getElementById('inquiries-empty');
  const inquiriesTable = document.getElementById('inquiries-table');
  const clearInquiriesBtn = document.getElementById('clear-inquiries-btn');

  function renderInquiries() {
    const inquiries = loadData(INQUIRIES_KEY);
    inquiriesTableBody.innerHTML = '';

    if (inquiries.length === 0) {
      inquiriesTable.style.display = 'none';
      inquiriesEmpty.style.display = 'block';
      return;
    }

    inquiriesTable.style.display = '';
    inquiriesEmpty.style.display = 'none';

    inquiries.forEach((inquiry, index) => {
      const dateStr = inquiry.date ? new Date(inquiry.date).toLocaleDateString() : '';
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${sanitize(inquiry.name || '')}</td>
        <td>${sanitize(inquiry.email || '')}</td>
        <td>${sanitize(inquiry.tour || '')}</td>
        <td class="text-truncate">${sanitize(inquiry.message || '')}</td>
        <td>${sanitize(dateStr)}</td>
        <td class="actions-cell">
          <button class="btn-delete" data-index="${index}" title="Delete">🗑️</button>
        </td>
      `;
      inquiriesTableBody.appendChild(tr);
    });

    inquiriesTableBody.querySelectorAll('.btn-delete').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        deleteInquiry(idx);
      });
    });
  }

  function deleteInquiry(index) {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    const inquiries = loadData(INQUIRIES_KEY);
    inquiries.splice(index, 1);
    saveData(INQUIRIES_KEY, inquiries);
    renderInquiries();
  }

  clearInquiriesBtn.addEventListener('click', () => {
    if (!confirm('Are you sure you want to delete ALL inquiries?')) return;
    saveData(INQUIRIES_KEY, []);
    renderInquiries();
  });

  // ===================================================
  // INITIAL RENDER
  // ===================================================
  renderTours();
  renderReviews();
  renderInquiries();
});
