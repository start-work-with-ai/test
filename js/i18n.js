/* ===================================================
   Wanderly — Internationalization (i18n)
   Supports English (en) and Chinese (zh)
   =================================================== */

const translations = {
  en: {
    // Navigation
    'nav.tours': 'Tours',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.explore': 'Explore Nearby',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Explore the World with\u00a0Expert\u00a0Guides',
    'hero.subtitle': 'Immersive, locally-led tours that turn every trip into a story worth telling.',
    'hero.cta': 'Browse Tours',

    // Tours
    'tours.title': 'Popular Tours',
    'tours.subtitle': 'Hand-picked experiences loved by travelers worldwide.',
    'tours.badge.bestseller': 'Best Seller',
    'tours.badge.new': 'New',
    'tours.badge.adventure': 'Adventure',
    'tours.badge.popular': 'Popular',
    'tours.badge.nature': 'Nature',
    'tours.badge.cultural': 'Cultural',
    'tours.paris.title': 'Paris Walking Tour',
    'tours.paris.meta': '📍 Paris, France',
    'tours.paris.duration': '⏱ 3 hours',
    'tours.paris.desc': 'Stroll through charming arrondissements, discover hidden courtyards, and hear the stories behind iconic landmarks.',
    'tours.rome.title': 'Rome History & Food Tour',
    'tours.rome.meta': '📍 Rome, Italy',
    'tours.rome.duration': '⏱ 4 hours',
    'tours.rome.desc': 'Taste authentic Roman cuisine while exploring ancient ruins and Renaissance architecture with a local historian.',
    'tours.andes.title': 'Andes Hiking Expedition',
    'tours.andes.meta': '📍 Cusco, Peru',
    'tours.andes.duration': '⏱ 2 days',
    'tours.andes.desc': 'Trek through breathtaking mountain trails, visit remote villages, and camp under the stars in the Peruvian highlands.',
    'tours.tokyo.title': 'Tokyo After Dark',
    'tours.tokyo.meta': '📍 Tokyo, Japan',
    'tours.tokyo.duration': '⏱ 3 hours',
    'tours.tokyo.desc': 'Experience the neon-lit energy of Shinjuku, Shibuya, and hidden izakayas with a local nightlife expert.',
    'tours.bali.title': 'Bali Rice Terrace Walk',
    'tours.bali.meta': '📍 Ubud, Bali',
    'tours.bali.duration': '⏱ 5 hours',
    'tours.bali.desc': 'Wander through emerald-green rice paddies, meet local farmers, and enjoy a traditional Balinese lunch.',
    'tours.marrakech.title': 'Marrakech Medina Discovery',
    'tours.marrakech.meta': '📍 Marrakech, Morocco',
    'tours.marrakech.duration': '⏱ 4 hours',
    'tours.marrakech.desc': 'Navigate the vibrant souks, visit palaces and mosques, and uncover centuries of Moroccan craft traditions.',
    'tours.price.person': '/ person',
    'tours.book': 'Book Now',

    // About
    'about.title': 'Why Wanderly?',
    'about.desc': 'We connect curious travelers with passionate, certified local guides who know every hidden gem. Every tour is crafted to be small-group, immersive, and genuinely memorable.',
    'about.local.title': '🌍 Local Expertise',
    'about.local.desc': 'Guides born and raised in the destinations they lead.',
    'about.small.title': '👥 Small Groups',
    'about.small.desc': 'Maximum 12 travelers for a personal experience.',
    'about.fair.title': '💰 Fair Pricing',
    'about.fair.desc': 'No hidden fees — guides keep 85% of the booking price.',
    'about.reviews.title': '⭐ Verified Reviews',
    'about.reviews.desc': 'Every review comes from a confirmed booking.',

    // Testimonials
    'testimonials.title': 'What Travelers Say',
    'testimonials.subtitle': 'Real stories from our community of explorers.',
    'testimonials.1.text': '\u201cOur guide Luca made Rome feel like home. We ate at places we\u2019d never have found on our own. Absolutely magical.\u201d',
    'testimonials.1.name': 'Sarah M.',
    'testimonials.1.tour': 'Rome History & Food Tour',
    'testimonials.2.text': '\u201cThe Andes trek was the highlight of my year. The guide\u2019s knowledge of the terrain and culture was incredible.\u201d',
    'testimonials.2.name': 'James T.',
    'testimonials.2.tour': 'Andes Hiking Expedition',
    'testimonials.3.text': '\u201cWanderly makes it so easy to find quality tours. I\u2019ve booked three trips already and each one exceeded expectations.\u201d',
    'testimonials.3.name': 'Aiko K.',
    'testimonials.3.tour': 'Tokyo After Dark',

    // Explore Nearby (Map)
    'explore.title': 'Explore Nearby',
    'explore.subtitle': 'Discover tourism resources around your current location.',
    'explore.locate': '📍 Locate Me',
    'explore.search': '🔍 Search Nearby',
    'explore.search.placeholder': 'Search a place or address…',
    'explore.loading': 'Searching nearby attractions…',
    'explore.no.results': 'No tourism resources found nearby. Try a different location.',
    'explore.error.geo': 'Unable to get your location. Please enable location services.',
    'explore.error.search': 'Search failed. Please try again.',
    'explore.category.tourism': 'Attraction',
    'explore.category.museum': 'Museum',
    'explore.category.hotel': 'Hotel',
    'explore.category.restaurant': 'Restaurant',
    'explore.category.viewpoint': 'Viewpoint',
    'explore.category.park': 'Park',
    'explore.category.default': 'Point of Interest',
    'explore.results.title': 'Nearby Attractions',
    'explore.user.location': '📍 Your location',

    // Contact
    'contact.title': 'Ready to Explore?',
    'contact.desc': 'Fill out the form and we\u2019ll match you with the perfect guide. Or reach out directly \u2014 we\u2019d love to hear from you.',
    'contact.form.name': 'Full Name',
    'contact.form.name.placeholder': 'Jane Doe',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'jane@example.com',
    'contact.form.tour': 'Interested In',
    'contact.form.tour.default': 'Select a tour\u2026',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us about your trip\u2026',
    'contact.form.submit': 'Send Inquiry',
    'contact.form.success': 'Thank you! We\u2019ll get back to you within 24 hours.',
    'contact.form.error': 'Please fill in all required fields.',

    // Footer
    'footer.brand': 'Connecting travelers with the world\u2019s best local guides since 2024.',
    'footer.quick': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.copy': '\u00a9 2024 Wanderly. All rights reserved.',

    // Language
    'lang.switch': '中文',
  },

  zh: {
    // Navigation
    'nav.tours': '旅游路线',
    'nav.about': '关于我们',
    'nav.testimonials': '旅客评价',
    'nav.explore': '探索周边',
    'nav.contact': '联系我们',

    // Hero
    'hero.title': '与专业导游一起\u00a0探索世界',
    'hero.subtitle': '沉浸式的本地导览体验，让每一次旅行都成为值得讲述的故事。',
    'hero.cta': '浏览路线',

    // Tours
    'tours.title': '热门旅游路线',
    'tours.subtitle': '精选全球旅行者喜爱的体验。',
    'tours.badge.bestseller': '最畅销',
    'tours.badge.new': '新品',
    'tours.badge.adventure': '冒险',
    'tours.badge.popular': '热门',
    'tours.badge.nature': '自然',
    'tours.badge.cultural': '文化',
    'tours.paris.title': '巴黎徒步之旅',
    'tours.paris.meta': '📍 法国巴黎',
    'tours.paris.duration': '⏱ 3小时',
    'tours.paris.desc': '漫步迷人的街区，探索隐秘的庭院，聆听标志性地标背后的故事。',
    'tours.rome.title': '罗马历史与美食之旅',
    'tours.rome.meta': '📍 意大利罗马',
    'tours.rome.duration': '⏱ 4小时',
    'tours.rome.desc': '在当地历史学家的带领下，品尝正宗的罗马美食，探索古代遗迹和文艺复兴建筑。',
    'tours.andes.title': '安第斯山脉徒步探险',
    'tours.andes.meta': '📍 秘鲁库斯科',
    'tours.andes.duration': '⏱ 2天',
    'tours.andes.desc': '穿越令人叹为观止的山间小径，拜访偏远村庄，在秘鲁高原的星空下露营。',
    'tours.tokyo.title': '东京夜游',
    'tours.tokyo.meta': '📍 日本东京',
    'tours.tokyo.duration': '⏱ 3小时',
    'tours.tokyo.desc': '在本地夜生活达人的带领下，感受新宿、涩谷的霓虹灯能量和隐秘居酒屋。',
    'tours.bali.title': '巴厘岛梯田漫步',
    'tours.bali.meta': '📍 巴厘岛乌布',
    'tours.bali.duration': '⏱ 5小时',
    'tours.bali.desc': '穿行翠绿的稻田，与当地农民交流，享受传统巴厘岛午餐。',
    'tours.marrakech.title': '马拉喀什老城探秘',
    'tours.marrakech.meta': '📍 摩洛哥马拉喀什',
    'tours.marrakech.duration': '⏱ 4小时',
    'tours.marrakech.desc': '穿梭于热闹的集市，参观宫殿和清真寺，揭开摩洛哥数百年手工艺传统。',
    'tours.price.person': '/ 人',
    'tours.book': '立即预订',

    // About
    'about.title': '为什么选择 Wanderly？',
    'about.desc': '我们将好奇的旅行者与热情、专业的当地导游联系在一起，他们了解每一个隐藏的宝藏。每条路线都精心设计，小团出行，沉浸式体验，真正令人难忘。',
    'about.local.title': '🌍 本地专业知识',
    'about.local.desc': '导游在目的地出生长大。',
    'about.small.title': '👥 小团出行',
    'about.small.desc': '最多12位旅行者，享受个性化体验。',
    'about.fair.title': '💰 公平定价',
    'about.fair.desc': '无隐藏费用——导游获得85%的预订收入。',
    'about.reviews.title': '⭐ 真实评价',
    'about.reviews.desc': '每条评价都来自已确认的预订。',

    // Testimonials
    'testimonials.title': '旅客心声',
    'testimonials.subtitle': '来自我们探索者社区的真实故事。',
    'testimonials.1.text': '\u201c导游卢卡让罗马有了家的感觉。我们在自己永远找不到的地方用餐。绝对神奇。\u201d',
    'testimonials.1.name': 'Sarah M.',
    'testimonials.1.tour': '罗马历史与美食之旅',
    'testimonials.2.text': '\u201c安第斯山徒步是我今年的亮点。导游对地形和文化的了解令人难以置信。\u201d',
    'testimonials.2.name': 'James T.',
    'testimonials.2.tour': '安第斯山脉徒步探险',
    'testimonials.3.text': '\u201cWanderly 让找到优质旅游变得如此简单。我已经预订了三次旅行，每次都超出预期。\u201d',
    'testimonials.3.name': 'Aiko K.',
    'testimonials.3.tour': '东京夜游',

    // Explore Nearby (Map)
    'explore.title': '探索周边',
    'explore.subtitle': '发现您当前位置周围的旅游资源。',
    'explore.locate': '📍 定位我的位置',
    'explore.search': '🔍 搜索周边',
    'explore.search.placeholder': '搜索地点或地址…',
    'explore.loading': '正在搜索附近景点…',
    'explore.no.results': '附近未找到旅游资源，请尝试其他位置。',
    'explore.error.geo': '无法获取您的位置，请开启定位服务。',
    'explore.error.search': '搜索失败，请重试。',
    'explore.category.tourism': '景点',
    'explore.category.museum': '博物馆',
    'explore.category.hotel': '酒店',
    'explore.category.restaurant': '餐厅',
    'explore.category.viewpoint': '观景台',
    'explore.category.park': '公园',
    'explore.category.default': '兴趣点',
    'explore.results.title': '附近景点',
    'explore.user.location': '📍 您的位置',

    // Contact
    'contact.title': '准备好探索了吗？',
    'contact.desc': '填写表单，我们将为您匹配最合适的导游。或直接联系我们——我们很乐意收到您的来信。',
    'contact.form.name': '姓名',
    'contact.form.name.placeholder': '张三',
    'contact.form.email': '邮箱',
    'contact.form.email.placeholder': 'zhangsan@example.com',
    'contact.form.tour': '感兴趣的路线',
    'contact.form.tour.default': '选择一条路线…',
    'contact.form.message': '留言',
    'contact.form.message.placeholder': '告诉我们您的旅行计划…',
    'contact.form.submit': '发送咨询',
    'contact.form.success': '感谢您！我们将在24小时内回复您。',
    'contact.form.error': '请填写所有必填字段。',

    // Footer
    'footer.brand': '自2024年起，连接旅行者与全球最优秀的本地导游。',
    'footer.quick': '快速链接',
    'footer.legal': '法律信息',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.cookies': 'Cookie 政策',
    'footer.copy': '\u00a9 2024 Wanderly. 保留所有权利。',

    // Language
    'lang.switch': 'English',
  },
};

/**
 * Get the current language, defaulting to 'en'.
 * @returns {'en' | 'zh'}
 */
function getCurrentLang() {
  return localStorage.getItem('wanderly-lang') || 'en';
}

/**
 * Get a translated string by key.
 * @param {string} key
 * @param {'en' | 'zh'} [lang]
 * @returns {string}
 */
function t(key, lang) {
  const currentLang = lang || getCurrentLang();
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

/**
 * Apply translations to all elements with [data-i18n] attributes.
 * Supports data-i18n (textContent) and data-i18n-placeholder.
 * @param {'en' | 'zh'} lang
 */
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) el.textContent = t(key, lang);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) el.placeholder = t(key, lang);
  });

  // Update the html lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

/**
 * Toggle between English and Chinese.
 */
function toggleLanguage() {
  const current = getCurrentLang();
  const next = current === 'en' ? 'zh' : 'en';
  localStorage.setItem('wanderly-lang', next);
  applyTranslations(next);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const lang = getCurrentLang();
  applyTranslations(lang);

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      toggleLanguage();
    });
  }
});
