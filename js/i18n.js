/* ===================================================
   Wanderly — Internationalization (i18n)
   Supports English (en) and Chinese (zh)
   =================================================== */

const translations = {
  en: {
    // Navigation
    'nav.tours': 'Tours',
    'nav.routes': 'Routes',
    'nav.about': 'About',
    'nav.reviews': 'Reviews',
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
    'tours.hongkong.title': 'Hong Kong Highlights Tour',
    'tours.hongkong.meta': '📍 Hong Kong, China',
    'tours.hongkong.duration': '⏱ 5 hours',
    'tours.hongkong.desc': 'Discover the dazzling skyline from Victoria Peak, ride the iconic Star Ferry across the harbour, and explore vibrant street markets and temples.',
    'tours.price.person': '/ person',
    'tours.book': 'Book Now',

    // Routes
    'routes.title': 'Travel Routes & Introductions',
    'routes.subtitle': 'Detailed itineraries to help you plan your perfect adventure.',
    'routes.itinerary': 'Itinerary',
    'routes.paris.title': 'Paris Walking Tour Route',
    'routes.paris.intro': 'Discover the romance and history of Paris on foot. This carefully curated route takes you from iconic landmarks to hidden gems only locals know about.',
    'routes.paris.distance': '📏 Total: 5.2 km',
    'routes.paris.time': '⏱ Duration: 3 hours',
    'routes.paris.difficulty': '💪 Difficulty: Easy',
    'routes.paris.stop1.name': 'Eiffel Tower',
    'routes.paris.stop1.desc': '— Start your journey at the iconic iron tower with panoramic city views.',
    'routes.paris.stop2.name': 'Champ de Mars',
    'routes.paris.stop2.desc': '— Stroll through beautiful gardens with a backdrop of the Eiffel Tower.',
    'routes.paris.stop3.name': 'Seine River Walk',
    'routes.paris.stop3.desc': '— Walk along the scenic riverbank past historic bridges and bookstalls.',
    'routes.paris.stop4.name': 'Louvre Museum',
    'routes.paris.stop4.desc': '— Marvel at the glass pyramid and world-famous art collection.',
    'routes.paris.stop5.name': 'Notre-Dame Cathedral',
    'routes.paris.stop5.desc': '— End at this Gothic masterpiece on Île de la Cité.',
    'routes.rome.title': 'Rome History & Food Route',
    'routes.rome.intro': 'Combine ancient history with culinary delights on this unforgettable Rome tour. Taste authentic cuisine while exploring millennia of civilization.',
    'routes.rome.distance': '📏 Total: 6.8 km',
    'routes.rome.time': '⏱ Duration: 4 hours',
    'routes.rome.difficulty': '💪 Difficulty: Easy',
    'routes.rome.stop1.name': 'Colosseum',
    'routes.rome.stop1.desc': '— Begin at the ancient amphitheater, a symbol of Imperial Rome.',
    'routes.rome.stop2.name': 'Roman Forum',
    'routes.rome.stop2.desc': '— Walk through the heart of ancient Roman public life.',
    'routes.rome.stop3.name': 'Trastevere District',
    'routes.rome.stop3.desc': '— Enjoy authentic Roman pasta and gelato in this charming neighborhood.',
    'routes.rome.stop4.name': 'Pantheon',
    'routes.rome.stop4.desc': '— Admire the perfectly preserved ancient temple and its magnificent dome.',
    'routes.rome.stop5.name': 'Trevi Fountain',
    'routes.rome.stop5.desc': '— End by tossing a coin into the baroque masterpiece.',
    'routes.tokyo.title': 'Tokyo After Dark Route',
    'routes.tokyo.intro': 'Experience Tokyo\'s electric nightlife scene. From neon-lit streets to intimate izakayas, discover the city that never sleeps.',
    'routes.tokyo.distance': '📏 Total: 4.5 km',
    'routes.tokyo.time': '⏱ Duration: 3 hours',
    'routes.tokyo.difficulty': '💪 Difficulty: Easy',
    'routes.tokyo.stop1.name': 'Shibuya Crossing',
    'routes.tokyo.stop1.desc': '— Start at the world\'s busiest pedestrian crossing as it lights up at night.',
    'routes.tokyo.stop2.name': 'Shinjuku Golden Gai',
    'routes.tokyo.stop2.desc': '— Explore narrow alleys filled with tiny, themed bars.',
    'routes.tokyo.stop3.name': 'Kabukicho District',
    'routes.tokyo.stop3.desc': '— Experience the vibrant entertainment district with dazzling neon lights.',
    'routes.tokyo.stop4.name': 'Hidden Izakayas',
    'routes.tokyo.stop4.desc': '— Savor local snacks and sake in authentic Japanese-style pubs.',
    'routes.tokyo.stop5.name': 'Tokyo Tower Night View',
    'routes.tokyo.stop5.desc': '— End with a breathtaking panoramic view of the illuminated cityscape.',
    'routes.hongkong.title': 'Hong Kong Highlights Route',
    'routes.hongkong.intro': 'Explore the vibrant fusion of East and West in Hong Kong. From soaring skyscrapers to ancient temples, bustling markets to tranquil harbours, this route showcases the best of Asia\'s World City.',
    'routes.hongkong.distance': '📏 Total: 8.5 km',
    'routes.hongkong.time': '⏱ Duration: 5 hours',
    'routes.hongkong.difficulty': '💪 Difficulty: Moderate',
    'routes.hongkong.stop1.name': 'Victoria Peak',
    'routes.hongkong.stop1.desc': '— Begin with a scenic Peak Tram ride for breathtaking panoramic views of the city skyline and harbour.',
    'routes.hongkong.stop2.name': 'Star Ferry Harbour Crossing',
    'routes.hongkong.stop2.desc': '— Enjoy the iconic ferry ride across Victoria Harbour with stunning waterfront scenery.',
    'routes.hongkong.stop3.name': 'Temple Street Night Market',
    'routes.hongkong.stop3.desc': '— Immerse yourself in the vibrant atmosphere of street food stalls, fortune tellers, and local vendors.',
    'routes.hongkong.stop4.name': 'Wong Tai Sin Temple',
    'routes.hongkong.stop4.desc': '— Visit this iconic Taoist temple known for its beautiful architecture and fortune-telling traditions.',
    'routes.hongkong.stop5.name': 'Tsim Sha Tsui Promenade',
    'routes.hongkong.stop5.desc': '— End with the spectacular Symphony of Lights show over the harbour skyline.',

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

    // Reviews
    'reviews.title': 'Traveler Reviews',
    'reviews.subtitle': 'Share your experience and read what fellow travelers have to say.',
    'reviews.form.heading': 'Write a Review',
    'reviews.form.name': 'Your Name',
    'reviews.form.name.placeholder': 'Your name',
    'reviews.form.tour': 'Tour Taken',
    'reviews.form.tour.default': 'Select a tour\u2026',
    'reviews.form.rating': 'Rating',
    'reviews.form.text': 'Your Review',
    'reviews.form.text.placeholder': 'Share your experience\u2026',
    'reviews.form.submit': 'Submit Review',
    'reviews.form.success': 'Thank you for your review! It has been published.',
    'reviews.form.error': 'Please fill in all fields and select a rating.',
    'reviews.list.heading': 'Recent Reviews',
    'reviews.empty': 'No reviews yet. Be the first to share your experience!',
    'reviews.default.1.text': 'The Paris walking tour was absolutely magical! Our guide knew every hidden corner and shared fascinating stories. Highly recommend!',
    'reviews.default.2.text': 'Great combination of history and food in Rome. The pasta in Trastevere was unforgettable. Only wish it was a bit longer!',
    'reviews.default.3.text': 'Tokyo at night is incredible! The guide took us to amazing izakayas we would never have found on our own. A must-do experience!',
    'reviews.default.4.text': 'Hong Kong is a city of contrasts and our guide captured it all perfectly. The Peak views were stunning, Temple Street was a sensory overload, and the harbour light show was the perfect ending!',

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
    'nav.routes': '路线详情',
    'nav.about': '关于我们',
    'nav.reviews': '旅客评价',
    'nav.testimonials': '旅客心声',
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
    'tours.hongkong.title': '香港精华之旅',
    'tours.hongkong.meta': '📍 中国香港',
    'tours.hongkong.duration': '⏱ 5小时',
    'tours.hongkong.desc': '从太平山顶欣赏迷人天际线，乘坐标志性的天星小轮穿越维多利亚港，探索充满活力的街市和古庙。',
    'tours.price.person': '/ 人',
    'tours.book': '立即预订',

    // Routes
    'routes.title': '旅游路线与介绍',
    'routes.subtitle': '详细行程安排，帮您规划完美冒险之旅。',
    'routes.itinerary': '行程安排',
    'routes.paris.title': '巴黎徒步路线',
    'routes.paris.intro': '步行探索巴黎的浪漫与历史。这条精心策划的路线带您从标志性地标到只有当地人知道的隐秘宝藏。',
    'routes.paris.distance': '📏 全程：5.2 公里',
    'routes.paris.time': '⏱ 时长：3 小时',
    'routes.paris.difficulty': '💪 难度：轻松',
    'routes.paris.stop1.name': '埃菲尔铁塔',
    'routes.paris.stop1.desc': '— 从标志性的铁塔开始，享受全景城市风光。',
    'routes.paris.stop2.name': '战神广场',
    'routes.paris.stop2.desc': '— 在以埃菲尔铁塔为背景的美丽花园中漫步。',
    'routes.paris.stop3.name': '塞纳河畔漫步',
    'routes.paris.stop3.desc': '— 沿着风景优美的河岸走过历史悠久的桥梁和书摊。',
    'routes.paris.stop4.name': '卢浮宫',
    'routes.paris.stop4.desc': '— 欣赏玻璃金字塔和世界闻名的艺术收藏。',
    'routes.paris.stop5.name': '巴黎圣母院',
    'routes.paris.stop5.desc': '— 在西岱岛上的哥特式杰作处结束旅程。',
    'routes.rome.title': '罗马历史与美食路线',
    'routes.rome.intro': '在这次难忘的罗马之旅中，将古代历史与美食体验完美结合。品尝正宗美食的同时探索数千年的文明。',
    'routes.rome.distance': '📏 全程：6.8 公里',
    'routes.rome.time': '⏱ 时长：4 小时',
    'routes.rome.difficulty': '💪 难度：轻松',
    'routes.rome.stop1.name': '罗马斗兽场',
    'routes.rome.stop1.desc': '— 从古代圆形竞技场开始，这是帝国罗马的象征。',
    'routes.rome.stop2.name': '罗马广场',
    'routes.rome.stop2.desc': '— 穿行于古罗马公共生活的中心。',
    'routes.rome.stop3.name': '特拉斯提弗列区',
    'routes.rome.stop3.desc': '— 在这个迷人的街区享受正宗罗马意面和冰淇淋。',
    'routes.rome.stop4.name': '万神殿',
    'routes.rome.stop4.desc': '— 欣赏保存完好的古代神殿及其宏伟穹顶。',
    'routes.rome.stop5.name': '许愿池',
    'routes.rome.stop5.desc': '— 向巴洛克杰作投一枚硬币，许下心愿。',
    'routes.tokyo.title': '东京夜游路线',
    'routes.tokyo.intro': '体验东京的电气夜生活。从霓虹灯闪烁的街道到私密的居酒屋，探索这座不夜城。',
    'routes.tokyo.distance': '📏 全程：4.5 公里',
    'routes.tokyo.time': '⏱ 时长：3 小时',
    'routes.tokyo.difficulty': '💪 难度：轻松',
    'routes.tokyo.stop1.name': '涩谷十字路口',
    'routes.tokyo.stop1.desc': '— 从世界上最繁忙的人行横道开始，感受夜晚灯光。',
    'routes.tokyo.stop2.name': '新宿黄金街',
    'routes.tokyo.stop2.desc': '— 探索充满小型主题酒吧的狭窄巷弄。',
    'routes.tokyo.stop3.name': '歌舞伎町',
    'routes.tokyo.stop3.desc': '— 体验充满耀眼霓虹灯的活力娱乐区。',
    'routes.tokyo.stop4.name': '隐秘居酒屋',
    'routes.tokyo.stop4.desc': '— 在正宗日式酒馆中品尝当地小吃和清酒。',
    'routes.tokyo.stop5.name': '东京塔夜景',
    'routes.tokyo.stop5.desc': '— 以令人叹为观止的璀璨夜景全景结束旅程。',
    'routes.hongkong.title': '香港精华路线',
    'routes.hongkong.intro': '探索香港东西方文化的精彩融合。从高耸入云的摩天大楼到古老庙宇，从热闹非凡的街市到宁静的海港，这条路线展现亚洲国际都会的最佳风貌。',
    'routes.hongkong.distance': '📏 全程：8.5 公里',
    'routes.hongkong.time': '⏱ 时长：5 小时',
    'routes.hongkong.difficulty': '💪 难度：适中',
    'routes.hongkong.stop1.name': '太平山顶',
    'routes.hongkong.stop1.desc': '— 乘坐山顶缆车，欣赏城市天际线和海港的壮丽全景。',
    'routes.hongkong.stop2.name': '天星小轮维港穿越',
    'routes.hongkong.stop2.desc': '— 乘坐标志性渡轮穿越维多利亚港，欣赏迷人的海滨风光。',
    'routes.hongkong.stop3.name': '庙街夜市',
    'routes.hongkong.stop3.desc': '— 沉浸在街头小吃摊、算命师和本地摊贩的热闹氛围中。',
    'routes.hongkong.stop4.name': '黄大仙祠',
    'routes.hongkong.stop4.desc': '— 参观这座以精美建筑和求签传统闻名的道教庙宇。',
    'routes.hongkong.stop5.name': '尖沙咀海滨长廊',
    'routes.hongkong.stop5.desc': '— 以维港上空壮观的"幻彩咏香江"灯光秀完美收尾。',

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

    // Reviews
    'reviews.title': '旅客评价',
    'reviews.subtitle': '分享您的体验，阅读其他旅行者的评价。',
    'reviews.form.heading': '撰写评价',
    'reviews.form.name': '您的姓名',
    'reviews.form.name.placeholder': '您的姓名',
    'reviews.form.tour': '参加的旅游',
    'reviews.form.tour.default': '选择一条路线…',
    'reviews.form.rating': '评分',
    'reviews.form.text': '您的评价',
    'reviews.form.text.placeholder': '分享您的体验…',
    'reviews.form.submit': '提交评价',
    'reviews.form.success': '感谢您的评价！已成功发布。',
    'reviews.form.error': '请填写所有字段并选择评分。',
    'reviews.list.heading': '最新评价',
    'reviews.empty': '暂无评价。成为第一个分享体验的人！',
    'reviews.default.1.text': '巴黎徒步之旅绝对是梦幻般的体验！导游了解每一个隐秘的角落，分享了迷人的故事。强烈推荐！',
    'reviews.default.2.text': '罗马的历史与美食结合得非常棒。特拉斯提弗列区的意面令人难忘。只希望时间能再长一点！',
    'reviews.default.3.text': '东京的夜晚太不可思议了！导游带我们去了自己永远找不到的绝妙居酒屋。必去的体验！',
    'reviews.default.4.text': '香港是一座充满对比的城市，我们的导游完美地诠释了这一切。太平山顶的景色令人惊叹，庙街是一场感官盛宴，维港灯光秀是完美的结尾！',

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
