/* ===================================================
   Wanderly — Explore Nearby (Map + POI Search)
   Uses Leaflet.js + OpenStreetMap + Overpass API
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.getElementById('explore-map');
  if (!mapContainer) return;

  // ---- Initialize Leaflet Map ----
  const map = L.map('explore-map').setView([48.8566, 2.3522], 13); // Default: Paris

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  let userMarker = null;
  let poiMarkers = [];
  let searchMarker = null;

  const locateBtn = document.getElementById('locate-btn');
  const searchBtn = document.getElementById('search-nearby-btn');
  const searchInput = document.getElementById('explore-search-input');
  const resultsContainer = document.getElementById('explore-results');
  const statusEl = document.getElementById('explore-status');

  // ---- Utility: get current language ----
  function lang() {
    return (typeof getCurrentLang === 'function') ? getCurrentLang() : 'en';
  }

  function tr(key) {
    return (typeof t === 'function') ? t(key) : key;
  }

  // ---- Show status message ----
  function showStatus(messageKey, isError) {
    if (!statusEl) return;
    statusEl.textContent = tr(messageKey);
    statusEl.className = 'explore-status' + (isError ? ' explore-status--error' : '');
    statusEl.style.display = 'block';
  }

  function hideStatus() {
    if (statusEl) statusEl.style.display = 'none';
  }

  // ---- Clear POI markers ----
  function clearPOIMarkers() {
    poiMarkers.forEach((m) => m.remove());
    poiMarkers = [];
    if (resultsContainer) resultsContainer.innerHTML = '';
  }

  // ---- Get category label ----
  function getCategoryLabel(tags) {
    if (tags.tourism === 'museum' || tags.amenity === 'museum') return tr('explore.category.museum');
    if (tags.tourism === 'hotel' || tags.tourism === 'hostel') return tr('explore.category.hotel');
    if (tags.amenity === 'restaurant' || tags.amenity === 'cafe') return tr('explore.category.restaurant');
    if (tags.tourism === 'viewpoint') return tr('explore.category.viewpoint');
    if (tags.leisure === 'park' || tags.leisure === 'garden') return tr('explore.category.park');
    if (tags.tourism === 'attraction' || tags.tourism === 'artwork') return tr('explore.category.tourism');
    return tr('explore.category.default');
  }

  // ---- Get category icon ----
  function getCategoryIcon(tags) {
    if (tags.tourism === 'museum' || tags.amenity === 'museum') return '🏛️';
    if (tags.tourism === 'hotel' || tags.tourism === 'hostel') return '🏨';
    if (tags.amenity === 'restaurant' || tags.amenity === 'cafe') return '🍽️';
    if (tags.tourism === 'viewpoint') return '🔭';
    if (tags.leisure === 'park' || tags.leisure === 'garden') return '🌳';
    if (tags.tourism === 'attraction' || tags.tourism === 'artwork') return '🏰';
    return '📍';
  }

  // ---- Search nearby POIs via Overpass API ----
  function searchNearbyPOIs(lat, lng, radius) {
    radius = radius || 3000;
    showStatus('explore.loading', false);
    clearPOIMarkers();

    const query = `
      [out:json][timeout:15];
      (
        node["tourism"](around:${radius},${lat},${lng});
        node["leisure"~"park|garden"](around:${radius},${lat},${lng});
        node["amenity"~"restaurant|cafe|museum"](around:${radius},${lat},${lng});
      );
      out body 50;
    `;

    const url = 'https://overpass-api.de/api/interpreter';
    const params = new URLSearchParams({ data: query });

    fetch(url, {
      method: 'POST',
      body: params,
    })
      .then((res) => {
        if (!res.ok) throw new Error('Overpass API error');
        return res.json();
      })
      .then((data) => {
        hideStatus();
        const elements = data.elements || [];

        if (elements.length === 0) {
          showStatus('explore.no.results', false);
          return;
        }

        // Build results list
        if (resultsContainer) {
          const heading = document.createElement('h3');
          heading.className = 'explore-results-heading';
          heading.textContent = tr('explore.results.title');
          resultsContainer.appendChild(heading);
        }

        const list = document.createElement('ul');
        list.className = 'explore-results-list';

        elements.forEach((el) => {
          if (!el.lat || !el.lon) return;
          const tags = el.tags || {};
          const name = tags.name || tags['name:en'] || tags['name:zh'] || '';
          if (!name) return;

          const category = getCategoryLabel(tags);
          const icon = getCategoryIcon(tags);

          // Add marker
          const marker = L.marker([el.lat, el.lon])
            .addTo(map)
            .bindPopup(`<strong>${icon} ${sanitize(name)}</strong><br><small>${sanitize(category)}</small>`);
          poiMarkers.push(marker);

          // Add to results list
          const li = document.createElement('li');
          li.className = 'explore-result-item';
          li.innerHTML = `<span class="explore-result-icon">${icon}</span>
            <div class="explore-result-info">
              <strong>${sanitize(name)}</strong>
              <small>${sanitize(category)}</small>
            </div>`;
          li.addEventListener('click', () => {
            map.setView([el.lat, el.lon], 16);
            marker.openPopup();
          });
          list.appendChild(li);
        });

        if (resultsContainer) resultsContainer.appendChild(list);

        // Fit map to show all markers
        if (poiMarkers.length > 0) {
          const group = L.featureGroup(poiMarkers);
          if (userMarker) group.addLayer(userMarker);
          map.fitBounds(group.getBounds().pad(0.1));
        }
      })
      .catch(() => {
        showStatus('explore.error.search', true);
      });
  }

  // ---- Sanitize text for safe HTML insertion ----
  function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---- Geolocation: Locate Me ----
  if (locateBtn) {
    locateBtn.addEventListener('click', () => {
      if (!navigator.geolocation) {
        showStatus('explore.error.geo', true);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          map.setView([latitude, longitude], 14);

          if (userMarker) userMarker.remove();
          userMarker = L.marker([latitude, longitude], {
            icon: L.divIcon({
              className: 'user-location-icon',
              html: '<div class="user-location-pulse"></div>',
              iconSize: [20, 20],
            }),
          })
            .addTo(map)
            .bindPopup(lang() === 'zh' ? '📍 您的位置' : '📍 Your location')
            .openPopup();

          searchNearbyPOIs(latitude, longitude);
        },
        () => {
          showStatus('explore.error.geo', true);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    });
  }

  // ---- Search via Nominatim (address/place search) ----
  if (searchBtn && searchInput) {
    const doSearch = () => {
      const query = searchInput.value.trim();
      if (!query) return;

      showStatus('explore.loading', false);

      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`;

      fetch(url, {
        headers: { 'Accept-Language': lang() === 'zh' ? 'zh-CN,zh' : 'en' },
      })
        .then((res) => res.json())
        .then((results) => {
          if (!results || results.length === 0) {
            showStatus('explore.no.results', false);
            return;
          }

          const place = results[0];
          const lat = parseFloat(place.lat);
          const lon = parseFloat(place.lon);

          map.setView([lat, lon], 14);

          if (searchMarker) searchMarker.remove();
          searchMarker = L.marker([lat, lon])
            .addTo(map)
            .bindPopup(`<strong>${sanitize(place.display_name)}</strong>`)
            .openPopup();

          searchNearbyPOIs(lat, lon);
        })
        .catch(() => {
          showStatus('explore.error.search', true);
        });
    };

    searchBtn.addEventListener('click', doSearch);
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doSearch();
    });
  }
});
