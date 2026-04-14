/* ===================================================
   Wanderly — Traveler Reviews
   Handles review submission, star rating, and display.
   Reviews are stored in localStorage for demonstration.
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const reviewForm = document.getElementById('review-form');
  const starRating = document.getElementById('star-rating');
  const ratingInput = document.getElementById('review-rating');
  const reviewsContainer = document.getElementById('reviews-container');

  if (!reviewForm || !starRating || !reviewsContainer) return;

  let currentRating = 0;

  // ---- Utility: get current language ----
  function tr(key) {
    return (typeof t === 'function') ? t(key) : key;
  }

  // ---- Star Rating Interaction ----
  const starButtons = starRating.querySelectorAll('.star-btn');

  starButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentRating = parseInt(btn.getAttribute('data-value'), 10);
      ratingInput.value = currentRating;
      updateStarDisplay();
    });

    btn.addEventListener('mouseenter', () => {
      const hoverValue = parseInt(btn.getAttribute('data-value'), 10);
      highlightStars(hoverValue);
    });

    btn.addEventListener('mouseleave', () => {
      highlightStars(currentRating);
    });
  });

  /**
   * Highlight stars up to the given value.
   * @param {number} value
   */
  function highlightStars(value) {
    starButtons.forEach((btn) => {
      const btnValue = parseInt(btn.getAttribute('data-value'), 10);
      btn.classList.toggle('active', btnValue <= value);
    });
  }

  /** Update star display to match current rating. */
  function updateStarDisplay() {
    highlightStars(currentRating);
  }

  // ---- Load & Save Reviews from localStorage ----
  const STORAGE_KEY = 'wanderly-reviews';

  /**
   * Load reviews from localStorage.
   * @returns {Array<Object>}
   */
  function loadReviews() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  /**
   * Save reviews to localStorage.
   * @param {Array<Object>} reviews
   */
  function saveReviews(reviews) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  }

  // ---- Sanitize text for safe HTML insertion ----
  function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---- Render Reviews ----
  function renderReviews() {
    const reviews = loadReviews();
    const allReviews = [...getDefaultReviews(), ...reviews];

    if (allReviews.length === 0) {
      reviewsContainer.innerHTML = `<p class="reviews-empty" data-i18n="reviews.empty">${tr('reviews.empty')}</p>`;
      return;
    }

    reviewsContainer.innerHTML = '';

    allReviews.forEach((review) => {
      const card = document.createElement('div');
      card.className = 'review-card';

      const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

      const tourLabel = getTourLabel(review.tour);
      const dateStr = review.date ? new Date(review.date).toLocaleDateString() : '';

      card.innerHTML = `
        <div class="review-card-header">
          <div class="review-avatar">${sanitize(review.name.charAt(0).toUpperCase())}</div>
          <div class="review-meta">
            <strong>${sanitize(review.name)}</strong>
            <span class="review-tour-label">${sanitize(tourLabel)}</span>
          </div>
          <div class="review-stars" aria-label="${review.rating} out of 5 stars">${stars}</div>
        </div>
        <p class="review-text">${sanitize(review.text)}</p>
        ${dateStr ? `<small class="review-date">${sanitize(dateStr)}</small>` : ''}
      `;

      reviewsContainer.appendChild(card);
    });
  }

  /**
   * Get the display label for a tour key.
   * @param {string} tourKey
   * @returns {string}
   */
  function getTourLabel(tourKey) {
    const tourKeyMap = {
      paris: 'tours.paris.title',
      rome: 'tours.rome.title',
      andes: 'tours.andes.title',
      tokyo: 'tours.tokyo.title',
      bali: 'tours.bali.title',
      marrakech: 'tours.marrakech.title',
      hongkong: 'tours.hongkong.title',
    };
    const i18nKey = tourKeyMap[tourKey];
    return i18nKey ? tr(i18nKey) : tourKey;
  }

  /**
   * Return default seed reviews for demo purposes.
   * @returns {Array<Object>}
   */
  function getDefaultReviews() {
    return [
      {
        name: 'Emily W.',
        tour: 'paris',
        rating: 5,
        text: tr('reviews.default.1.text'),
        date: '2025-11-15',
      },
      {
        name: 'Carlos R.',
        tour: 'rome',
        rating: 4,
        text: tr('reviews.default.2.text'),
        date: '2025-10-22',
      },
      {
        name: 'Yuki S.',
        tour: 'tokyo',
        rating: 5,
        text: tr('reviews.default.3.text'),
        date: '2025-12-01',
      },
      {
        name: 'Lisa C.',
        tour: 'hongkong',
        rating: 5,
        text: tr('reviews.default.4.text'),
        date: '2026-01-18',
      },
    ];
  }

  // ---- Form Submission ----
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(reviewForm);
    const name = (formData.get('reviewName') || '').trim();
    const tour = formData.get('reviewTour') || '';
    const rating = parseInt(formData.get('reviewRating'), 10);
    const text = (formData.get('reviewText') || '').trim();

    // Validation
    if (!name || !tour || !rating || rating < 1 || !text) {
      showReviewMessage(tr('reviews.form.error'), 'error');
      return;
    }

    const review = {
      name,
      tour,
      rating,
      text,
      date: new Date().toISOString(),
    };

    const reviews = loadReviews();
    reviews.push(review);
    saveReviews(reviews);

    reviewForm.reset();
    currentRating = 0;
    updateStarDisplay();
    ratingInput.value = '0';

    showReviewMessage(tr('reviews.form.success'), 'success');
    renderReviews();
  });

  /**
   * Display a temporary message below the review form.
   * @param {string} text
   * @param {'success' | 'error'} type
   */
  function showReviewMessage(text, type) {
    const existing = reviewForm.querySelector('.form-message');
    if (existing) existing.remove();

    const msg = document.createElement('p');
    msg.className = `form-message form-message--${type}`;
    msg.textContent = text;
    msg.style.marginTop = '1rem';
    msg.style.padding = '0.75rem 1rem';
    msg.style.borderRadius = '8px';
    msg.style.fontWeight = '600';
    msg.style.fontSize = '0.95rem';

    if (type === 'success') {
      msg.style.background = '#e6f5f0';
      msg.style.color = '#145f4b';
    } else {
      msg.style.background = '#ffeaea';
      msg.style.color = '#c0392b';
    }

    reviewForm.appendChild(msg);
    setTimeout(() => msg.remove(), 5000);
  }

  // ---- Initial Render ----
  renderReviews();
});
