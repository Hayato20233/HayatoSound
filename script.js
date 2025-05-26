// Variables globales para elementos que persisten entre renderizados
let menuToggle, navLinks, languageSwitcher, modeToggle, body, moonIcon, sunIcon;
let colorPickerToggle, colorOptionsContainer;

// Datos globales de contenido
const contentData = {
    interviews: [
        {
            id: 'brokix-interview',
            titleKey: 'artist1Title',
            descKey: 'artist1Desc',
            videoUrl: 'https://www.youtube.com/watch?v=cag5mBmjKmkx', // Ejemplo
            likes: 1250,
            views: 50000,
        },
        {
            id: 'feid-interview',
            titleKey: 'artist2Title',
            descKey: 'artist2Desc',
            videoUrl: 'https://www.youtube.com/embed/r_PTN2jT2uQ ',
            likes: 2300,
            views: 75000,
        },
        {
            id: 'karolg-interview',
            titleKey: 'artist3Title',
            descKey: 'artist3Desc',
            videoUrl: 'https://www.youtube.com/embed/A8-sWfHj-c4 ',
            likes: 1800,
            views: 60000,
        }
    ],
    podcasts: [
        {
            id: 'trap-evolution-ep1',
            titleKey: 'podcast1Title',
            descKey: 'podcast1Desc',
            videoUrl: 'https://www.youtube.com/watch?v=cag5mBmjKmk',
            likes: 800,
            views: 30000,
        },
        {
            id: 'lyricism-ep2',
            titleKey: 'podcast2Title',
            descKey: 'podcast2Desc',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ ',
            likes: 950,
            views: 35000,
        },
        {
            id: 'latin-music-ep3',
            titleKey: 'podcast3Title',
            descKey: 'podcast3Desc',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ ',
            likes: 1100,
            views: 40000,
        }
    ]
};

// Traducciones
const translations = {
    en: {
        pageTitle: '🎤 Hayato Sound 🎶',
        interviewsNav: 'Interviews',
        podcastsNav: 'Podcasts',
        artistsNav: 'Artists',
        aboutNav: 'About Us',
        socialNav: 'Social Media',
        heroHeading: 'Your Gateway to Urban Music Culture',
        heroParagraph: 'Dive deep into the world of Trap, Reggaeton, and more with exclusive interviews and captivating podcasts.',
        exploreBtn: 'Explore Interviews',
        interviewsHeading: 'Exclusive Interviews',
        artist1Title: 'Los BrokiX: The Rise of a Trap Star',
        artist1Desc: 'An in-depth conversation about their journey, inspirations, and future projects.',
        artist2Title: 'Reggaeton Royalty: Interview with Feid',
        artist2Desc: 'Uncovering the secrets behind his chart-topping hits and global impact.',
        artist3Title: 'Breaking Boundaries: A Chat with Karol G',
        artist3Desc: 'Exploring her unique sound and genre-bending approach to music.',
        listenNowBtn: 'Watch Now',
        podcastsHeading: 'Our Latest Podcasts',
        podcast1Title: 'The Beat Behind the Streets - Episode 1: Trap\'s Evolution',
        podcast1Desc: 'Tracing the roots and future of trap music with industry experts.',
        podcast2Title: 'Rhythm & Rhyme - Episode 2: The Art of Lyricism',
        podcast2Desc: 'Delving into the lyrical mastery of top urban artists.',
        podcast3Title: 'Global Grooves - Episode 3: Latin Music\'s Global Reach',
        podcast3Desc: 'An exploration of how Latin music is dominating the charts worldwide.',
        artistsHeading: 'Featured Artists',
        artistAProfile: 'Known for their unique fusion of trap and R&B.',
        artistBProfile: 'A rising star in the reggaeton scene.',
        artistCProfile: 'A veteran artist with a diverse musical catalog.',
        aboutHeading: 'About Hayato Sound',
        aboutParagraph: 'Hayato Sound is your premier destination for in-depth insights into the vibrant world of urban music. We bring you closer to your favorite artists through exclusive interviews and thought-provoking podcasts covering Trap, Reggaeton, and various other genres. Our mission is to celebrate the rich culture and diverse sounds that define contemporary music.',
        followUs: 'Follow Us on Social Media',
        backToHome: 'Back to Home',
        chooseTheme: 'Choose Theme Color:',
        greenTheme: 'Green',
        pinkTheme: 'Pastel Pink',
        purpleTheme: 'Pastel Purple',
        bgInputPlaceholder: 'Enter background image URL',
        applyBgBtn: 'Apply',
        footerText: 'All rights reserved.',
    },
    es: {
        pageTitle: '🎤 Hayato Sound 🎶',
        interviewsNav: 'Entrevistas',
        podcastsNav: 'Podcasts',
        artistsNav: 'Artistas',
        aboutNav: 'Sobre Nosotros',
        socialNav: 'Redes Sociales',
        heroHeading: 'Tu Puerta de Entrada a la Cultura Musical Urbana',
        heroParagraph: 'Adéntrate en el mundo del Trap, Reggaeton y más con entrevistas exclusivas y podcasts cautivadores.',
        exploreBtn: 'Ver Entrevistas',
        interviewsHeading: 'Entrevistas Exclusivas',
        artist1Title: 'Los BrokiX: El Ascenso de una Estrella del Trap',
        artist1Desc: 'Una conversación profunda sobre su trayectoria, inspiraciones y futuros proyectos.',
        artist2Title: 'Realeza del Reggaeton: Entrevista con Feid',
        artist2Desc: 'Descubriendo los secretos detrás de sus éxitos y su impacto mundial.',
        artist3Title: 'Rompiendo Límites: Conversación con Karol G',
        artist3Desc: 'Explorando su sonido único y su enfoque musical innovador.',
        listenNowBtn: 'Ver Ahora',
        podcastsHeading: 'Nuestros Últimos Podcasts',
        podcast1Title: 'El Ritmo de las Calles - Episodio 1: La Evolución del Trap',
        podcast1Desc: 'Rastreando las raíces y futuro de la música trap con expertos de la industria.',
        podcast2Title: 'Ritmo y Rima - Episodio 2: El Arte del Liricismo',
        podcast2Desc: 'Profundizando en la maestría lírica de los principales artistas urbanos.',
        podcast3Title: 'Grooves Globales - Episodio 3: El Alcance Mundial de la Música Latina',
        podcast3Desc: 'Una exploración de cómo la música latina domina las listas mundiales.',
        artistsHeading: 'Artistas Destacados',
        artistAProfile: 'Conocidos por su fusión única entre trap y R&B.',
        artistBProfile: 'Una estrella en ascenso en la escena del reggaeton.',
        artistCProfile: 'Un artista veterano con un catálogo musical diverso.',
        aboutHeading: 'Sobre Hayato Sound',
        aboutParagraph: 'Hayato Sound es tu destino principal para obtener información detallada sobre el vibrante mundo de la música urbana. Te acercamos a tus artistas favoritos mediante entrevistas exclusivas y podcasts provocadores que cubren Trap, Reggaeton y varios otros géneros. Nuestra misión es celebrar la rica cultura y los diversos sonidos que definen la música contemporánea.',
        followUs: 'Síguenos en Redes Sociales',
        backToHome: 'Volver al Inicio',
        chooseTheme: 'Elige el Color del Tema:',
        greenTheme: 'Verde',
        pinkTheme: 'Rosa Pastel',
        purpleTheme: 'Morado Pastel',
        bgInputPlaceholder: 'Ingresa la URL de imagen de fondo',
        applyBgBtn: 'Aplicar',
        footerText: 'Todos los derechos reservados.',
    },
    fr: {
        pageTitle: '🎤 Hayato Sound 🎶',
        interviewsNav: 'Interviews',
        podcastsNav: 'Podcasts',
        artistsNav: 'Artistes',
        aboutNav: 'À Propos',
        socialNav: 'Réseaux Sociaux',
        heroHeading: 'Votre Portail vers la Culture Musicale Urbaine',
        heroParagraph: 'Plongez dans le monde du Trap, du Reggaeton et bien plus encore grâce à des interviews exclusives et des podcasts captivants.',
        exploreBtn: 'Explorer les Interviews',
        interviewsHeading: 'Interviews Exclusives',
        artist1Title: 'Los BrokiX : L’Ascension d’une Star du Trap',
        artist1Desc: 'Une conversation approfondie sur leur parcours, leurs inspirations et leurs projets futurs.',
        artist2Title: 'La Royauté du Reggaeton : Entretien avec Feid',
        artist2Desc: 'Découverte des secrets derrière ses tubes classés et son influence mondiale.',
        artist3Title: 'Franchir les Limites : Un Entretien avec Karol G',
        artist3Desc: 'Découverte de son style unique et de son approche musicale transgenre.',
        listenNowBtn: 'Regarder Maintenant',
        podcastsHeading: 'Nos Derniers Podcasts',
        podcast1Title: 'Le Rythme des Rues - Épisode 1 : L’Évolution du Trap',
        podcast1Desc: 'Retraçant les racines et l’avenir de la musique trap avec des experts du secteur.',
        podcast2Title: 'Rythme et Rime - Épisode 2 : L’Art du Lyrisme',
        podcast2Desc: 'Plongée dans la maîtrise lyrique des meilleurs artistes urbains.',
        podcast3Title: 'Grooves Mondiaux - Épisode 3 : La Portée Mondiale de la Musique Latine',
        podcast3Desc: 'Une exploration de la façon dont la musique latine domine les classements mondiaux.',
        artistsHeading: 'Artistes En Vedette',
        artistAProfile: 'Reconnus pour leur fusion unique de trap et de R&B.',
        artistBProfile: 'Une étoile montante dans la scène reggaeton.',
        artistCProfile: 'Un artiste expérimenté au répertoire musical varié.',
        aboutHeading: 'À Propos de Hayato Sound',
        aboutParagraph: 'Hayato Sound est votre destination privilégiée pour des analyses approfondies du monde vibrant de la musique urbaine. Nous vous rapprochons de vos artistes préférés grâce à des interviews exclusives et à des podcasts stimulants couvrant le Trap, le Reggaeton et divers autres genres. Notre mission est de célébrer la riche culture et les sons variés qui définissent la musique contemporaine.',
        followUs: 'Suivez-nous sur les Réseaux Sociaux',
        backToHome: 'Retour à l’Accueil',
        chooseTheme: 'Choisissez la Couleur du Thème :',
        greenTheme: 'Vert',
        pinkTheme: 'Rose Pastel',
        purpleTheme: 'Violet Pastel',
        bgInputPlaceholder: 'Saisissez l’URL de l’image de fond',
        applyBgBtn: 'Appliquer',
        footerText: 'Tous droits réservés.',
    },
    pt: {
        pageTitle: '🎤 Hayato Sound 🎶',
        interviewsNav: 'Entrevistas',
        podcastsNav: 'Podcasts',
        artistsNav: 'Artistas',
        aboutNav: 'Sobre Nós',
        socialNav: 'Redes Sociais',
        heroHeading: 'Seu Portal para a Cultura da Música Urbana',
        heroParagraph: 'Mergulhe no mundo do Trap, Reggaeton e muito mais com entrevistas exclusivas e podcasts envolventes.',
        exploreBtn: 'Explorar Entrevistas',
        interviewsHeading: 'Entrevistas Exclusivas',
        artist1Title: 'Los BrokiX: O Surgimento de uma Estrela do Trap',
        artist1Desc: 'Uma conversa detalhada sobre sua jornada, inspirações e projetos futuros.',
        artist2Title: 'Realeza do Reggaeton: Entrevista com Feid',
        artist2Desc: 'Desvendando os segredos por trás dos seus sucessos e alcance global.',
        artist3Title: 'Quebrando Fronteiras: Um Bate-Papo com Karol G',
        artist3Desc: 'Explorando seu som único e abordagem musical que mistura gêneros.',
        listenNowBtn: 'Assistir Agora',
        podcastsHeading: 'Nossos Últimos Podcasts',
        podcast1Title: 'O Batido das Ruas - Episódio 1: A Evolução do Trap',
        podcast1Desc: 'Traçando as raízes e o futuro da música trap com especialistas do setor.',
        podcast2Title: 'Ritmo & Rima - Episódio 2: A Arte do Lirismo',
        podcast2Desc: 'Investigando a mestria lírica dos principais artistas urbanos.',
        podcast3Title: 'Grooves Globais - Episódio 3: O Alcance Mundial da Música Latina',
        podcast3Desc: 'Uma exploração de como a música latina está dominando as paradas em todo o mundo.',
        artistsHeading: 'Artistas em Destaque',
        artistAProfile: 'Conhecidos pela fusão única de trap e R&B.',
        artistBProfile: 'Uma estrela em ascensão na cena do reggaeton.',
        artistCProfile: 'Um artista veterano com um catálogo musical diversificado.',
        aboutHeading: 'Sobre Hayato Sound',
        aboutParagraph: 'Hayato Sound é o seu destino principal para obter informações profundas sobre o vibrante mundo da música urbana. Aproximamos você de seus artistas favoritos através de entrevistas exclusivas e podcasts instigantes que cobrem Trap, Reggaeton e vários outros gêneros. Nossa missão é celebrar a rica cultura e os sons variados que definem a música contemporânea.',
        followUs: 'Siga-nos nas Redes Sociais',
        backToHome: 'Voltar ao Início',
        chooseTheme: 'Escolha a Cor do Tema:',
        greenTheme: 'Verde',
        pinkTheme: 'Rosa Pastel',
        purpleTheme: 'Roxo Pastel',
        bgInputPlaceholder: 'Insira a URL da imagem de fundo',
        applyBgBtn: 'Aplicar',
        footerText: 'Todos os direitos reservados.',
    }
};

// Función para mostrar mensajes personalizados
function displayMessage(message) {
    const overlay = document.createElement('div');
    overlay.className = 'message-box-overlay active';
    overlay.innerHTML = `
        <div class="message-box">
            <p>${message}</p>
            <button id="msg-ok">OK</button>
        </div>`;
    document.body.appendChild(overlay);
    document.getElementById('msg-ok').addEventListener('click', () => {
        overlay.remove();
    });
}

// Obtener variables CSS
function getCssVar(varName) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

// Generar imágenes placeholder
function getPlaceholderUrl(width, height, text) {
    const primary = getCssVar('--primary-color').replace('#', '');
    const accent = getCssVar('--accent-color').replace('#', '');
    return `https://placehold.co/ ${width}x${height}/${primary}/${accent}?text=${encodeURIComponent(text)}`;
}

// Actualizar traducción estática (encabezado, navegación, pie)
function updateHeaderAndNavTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Título de página
    document.title = t.pageTitle;
    document.querySelector('title').textContent = t.pageTitle;
    document.querySelector('header h1').innerHTML = t.pageTitle;

    // Enlaces de navegación por ID (más seguro)
    const navLinks = {
        '#interviews': 'interviewsNav',
        '#podcasts': 'podcastsNav',
        '#artists': 'artistsNav',
        '#about': 'aboutNav',
        '#contact': 'socialNav'
    };

    for (const [id, key] of Object.entries(navLinks)) {
        const link = document.querySelector(`a[href="${id}"]`);
        if (link && t[key]) {
            link.textContent = t[key];
        }
    }

    // Elementos con data-i18n en header y footer
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Pie de página
    document.querySelector('footer p').innerHTML = `© 2025 🎤 Hayato Sound 🎶. ${t.footerText}`;
}

// Aplicar traducciones completas
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Actualiza encabezado, navegación y elementos estáticos
    updateHeaderAndNavTranslations(lang);

    // Si estamos en una página de detalle, recargamos con el nuevo idioma
    const detailPage = document.getElementById('detail-page');
    if (detailPage) {
        const title = detailPage.querySelector('.detail-title')?.textContent;
        let item = null;

        // Buscar el elemento por título traducido
        for (const key in translations) {
            item = [...contentData.interviews, ...contentData.podcasts].find(
                i => translations[key][i.titleKey] === title
            );
            if (item) break;
        }

        if (item) {
            renderDetailPage(item, translations);
        } else {
            renderHomePage();
        }
    } else {
        renderHomePage();
    }
}

// Cambiar modo claro/oscuro
function updateModeIcons(isLightMode) {
    moonIcon.classList.toggle('active-icon', !isLightMode);
    sunIcon.classList.toggle('active-icon', isLightMode);
}

// Aplicar tema de color
function applyTheme(colorTheme) {
    body.classList.remove('pink-theme', 'purple-theme');
    if (colorTheme === 'pink') body.classList.add('pink-theme');
    else if (colorTheme === 'purple') body.classList.add('purple-theme');

    localStorage.setItem('selectedColorTheme', colorTheme);

    document.querySelectorAll('.color-button').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`${colorTheme}-theme-btn`);
    if (activeBtn) activeBtn.classList.add('active');

    updateHeroBackground();

    document.querySelectorAll('.card img, .artist-profile img').forEach(img => {
        const altText = img.alt;
        img.src = getPlaceholderUrl(img.width || 300, img.height || 200, altText);
    });
}

// Actualizar fondo del hero
function updateHeroBackground() {
    const input = document.getElementById('bgImageUrl');
    const savedBg = localStorage.getItem('heroBg');
    const theme = localStorage.getItem('selectedColorTheme') || 'dark';
    const isLight = body.classList.contains('light-mode');

    let defaultBg = '';
    if (theme === 'dark') {
        defaultBg = isLight
            ? "url('https://placehold.co/1600x600/F0F0F0/00704A?text=Hayato+Sound ')"
            : "url('https://placehold.co/1600x600/0A0A0A/00A86B?text=Hayato+Sound ')";
    } else if (theme === 'pink') {
        defaultBg = isLight
            ? "url('https://placehold.co/1600x600/FFFFFF/FF69B4?text=Hayato+Sound ')"
            : "url('https://placehold.co/1600x600/0A0A0A/FF69B4?text=Hayato+Sound ')";
    } else if (theme === 'purple') {
        defaultBg = isLight
            ? "url('https://placehold.co/1600x600/F0F8FF/8A2BE2?text=Hayato+Sound ')"
            : "url('https://placehold.co/1600x600/0A0A0A/8A2BE2?text=Hayato+Sound ')";
    }

    document.documentElement.style.setProperty('--hero-bg-image', savedBg ? `url('${savedBg}')` : defaultBg);
    if (input && savedBg) input.value = savedBg;
}

// Renderizar detalle de contenido
function renderDetailPage(item, translations) {
    const lang = languageSwitcher.value;
    item.views++;
    const main = document.querySelector('main');
    main.innerHTML = `
        <section id="detail-page" class="content-section">
            <div class="container">
                <button id="back-to-home" class="btn-small">← ${translations[lang].backToHome}</button>
                <h2 class="detail-title">${translations[lang][item.titleKey]}</h2>
                <div class="video-container">
                    <iframe src="${item.videoUrl}" allowfullscreen></iframe>
                </div>
                <p class="detail-description">${translations[lang][item.descKey]}</p>
                <div class="interaction-bar">
                    <button class="interaction-btn">❤️ <span id="like-count">${item.likes}</span></button>
                    <span class="view-count">👁️ <span id="view-count">${item.views}</span></span>
                </div>
            </div>
        </section>`;
    document.getElementById('back-to-home').addEventListener('click', renderHomePage);
    document.querySelector('.interaction-btn').addEventListener('click', () => {
        item.likes++;
        document.getElementById('like-count').textContent = item.likes;
    });
}

// Renderizar página principal
function renderHomePage() {
    const lang = languageSwitcher.value;
    const t = translations[lang];
    const interviewsHtml = contentData.interviews.map(i => `
        <article class="card">
            <img src="${getPlaceholderUrl(300, 200, t[i.titleKey])}" alt="${t[i.titleKey]}">
            <h4>${t[i.titleKey]}</h4>
            <p>${t[i.descKey]}</p>
            <a href="#" class="btn-small listen-now-btn" data-content-id="${i.id}" data-content-type="interview">${t.listenNowBtn}</a>
        </article>`).join('');

    const podcastsHtml = contentData.podcasts.map(p => `
        <article class="card">
            <img src="${getPlaceholderUrl(300, 200, t[p.titleKey])}" alt="${t[p.titleKey]}">
            <h4>${t[p.titleKey]}</h4>
            <p>${t[p.descKey]}</p>
            <a href="#" class="btn-small listen-now-btn" data-content-id="${p.id}" data-content-type="podcast">${t.listenNowBtn}</a>
        </article>`).join('');

    const artistsHtml = `
        <div class="artist-grid">
            <div class="artist-profile"><img src="${getPlaceholderUrl(150, 150, 'Los BrokiX')}"><h4>Los BrokiX</h4><p>${t.artistAProfile}</p></div>
            <div class="artist-profile"><img src="${getPlaceholderUrl(150, 150, 'Feid')}"><h4>Feid</h4><p>${t.artistBProfile}</p></div>
            <div class="artist-profile"><img src="${getPlaceholderUrl(150, 150, 'Karol G')}"><h4>Karol G</h4><p>${t.artistCProfile}</p></div>
        </div>`;

    document.querySelector('main').innerHTML = `
        <section id="hero" class="hero-section">
            <div class="container">
                <div class="hero-content">
                    <h2>${t.heroHeading}</h2>
                    <p>${t.heroParagraph}</p>
                    <a href="#interviews" class="btn">${t.exploreBtn}</a>
                </div>
            </div>
        </section>
        <section id="interviews" class="content-section">
            <div class="container"><h3>🎤 ${t.interviewsHeading}</h3><div class="grid-container">${interviewsHtml}</div></div>
        </section>
        <section id="podcasts" class="content-section bg-secondary">
            <div class="container"><h3>🎧 ${t.podcastsHeading}</h3><div class="grid-container">${podcastsHtml}</div></div>
        </section>
        <section id="artists" class="content-section">
            <div class="container"><h3><span class="animated-star">🌟</span> ${t.artistsHeading}</h3>${artistsHtml}</div>
        </section>
        <section id="about" class="content-section bg-secondary">
            <div class="container"><h3>${t.aboutHeading}</h3><p>${t.aboutParagraph}</p></div>
        </section>
        <section id="contact" class="content-section">
            <div class="container">
                <h3>${t.followUs}</h3>
                <div class="social-icons">
                    <a href="https://instagram.com " target="_blank" class="social-icon-link"><img src="assets/images/insta logo.jpg" onerror="this.onerror=null;this.src='${getPlaceholderUrl(55,55,'IG')}';"></a>
                    <a href="https://youtube.com " target="_blank" class="social-icon-link"><img src="assets/images/Youtube_logo.png" onerror="this.onerror=null;this.src='${getPlaceholderUrl(55,55,'YT')}';"></a>
                    <a href="https://tiktok.com " target="_blank" class="social-icon-link"><img src="assets/images/tiktok-main-logo-vertical-1.png" onerror="this.onerror=null;this.src='${getPlaceholderUrl(55,55,'TK')}';"></a>
                </div>
            </div>
        </section>`;

    attachHomePageEventListeners();
    updateHeroBackground();
}

// Event listeners
function handleMainContentClick(e) {
    const applyBtn = e.target.closest('#applyBg');
    if (applyBtn) {
        const input = document.getElementById('bgImageUrl');
        const url = input.value.trim();
        if (url) {
            localStorage.setItem('heroBg', url);
        } else {
            localStorage.removeItem('heroBg');
        }
        updateHeroBackground();
        return;
    }

    const listenBtn = e.target.closest('.listen-now-btn');
    if (listenBtn) {
        e.preventDefault();
        const id = listenBtn.dataset.contentId;
        const type = listenBtn.dataset.contentType;
        const item = type === 'interview'
            ? contentData.interviews.find(i => i.id === id)
            : contentData.podcasts.find(p => p.id === id);
        if (item) renderDetailPage(item, translations);
    }
}

function attachHomePageEventListeners() {
    document.querySelectorAll('nav ul li a, .hero-section .btn').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                window.scrollTo({
                    top: targetEl.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
                navLinks.classList.remove('active');
            }
        });
    });

    const main = document.querySelector('main');
    main.removeEventListener('click', handleMainContentClick);
    main.addEventListener('click', handleMainContentClick);

    document.querySelectorAll('.floating-color-picker .color-button').forEach(btn => {
        btn.removeEventListener('click', handleColorButtonClick);
        btn.addEventListener('click', handleColorButtonClick);
    });
}

function handleColorButtonClick(e) {
    const btn = e.target.closest('.color-button');
    if (btn) applyTheme(btn.dataset.theme);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    menuToggle = document.querySelector('.menu-toggle');
    navLinks = document.querySelector('.nav-links');
    languageSwitcher = document.getElementById('language-switcher');
    modeToggle = document.getElementById('mode-toggle');
    body = document.body;
    moonIcon = document.querySelector('.mode-toggle-container .mode-icon:first-child');
    sunIcon = document.querySelector('.mode-toggle-container .mode-icon:last-child');
    colorPickerToggle = document.getElementById('color-picker-toggle');
    colorOptionsContainer = document.getElementById('color-options-container');

    const browserLang = navigator.language.split('-')[0];
    const initialLang = translations[browserLang] ? browserLang : 'en';
    if (languageSwitcher) languageSwitcher.value = initialLang;

    renderHomePage();
    updateHeaderAndNavTranslations(initialLang);

    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', e => applyTranslations(e.target.value));
    }

    if (modeToggle) {
        modeToggle.addEventListener('change', () => {
            const isLight = modeToggle.checked;
            body.classList.toggle('light-mode', isLight);
            localStorage.setItem('isLightMode', isLight);
            updateModeIcons(isLight);
            updateHeroBackground();
            document.querySelectorAll('.card img, .artist-profile img').forEach(img => {
                const altText = img.alt;
                img.src = getPlaceholderUrl(img.naturalWidth || 300, img.naturalHeight || 200, altText);
            });
        });

        const savedIsLight = localStorage.getItem('isLightMode');
        if (savedIsLight !== null) {
            modeToggle.checked = savedIsLight === 'true';
            body.classList.toggle('light-mode', modeToggle.checked);
        } else {
            modeToggle.checked = false;
            body.classList.remove('light-mode');
        }
        updateModeIcons(modeToggle.checked);
    }

    if (colorPickerToggle && colorOptionsContainer) {
        colorPickerToggle.addEventListener('click', e => {
            e.stopPropagation();
            colorOptionsContainer.classList.toggle('active');
        });
        document.addEventListener('click', e => {
            if (!colorPickerToggle.contains(e.target) && !colorOptionsContainer.contains(e.target)) {
                colorOptionsContainer.classList.remove('active');
            }
        });
    }

    const savedTheme = localStorage.getItem('selectedColorTheme');
    applyTheme(savedTheme || 'dark');
    updateHeroBackground();
});

function startColorPickerVibration() {
    if (!colorPickerToggle) return;

    const vibrateButton = () => {
        colorPickerToggle.classList.remove('vibrate');
        void colorPickerToggle.offsetWidth; // Reiniciar animación
        colorPickerToggle.classList.add('vibrate');

        setTimeout(() => {
            colorPickerToggle.classList.remove('vibrate');
        }, 600);
    };

    setInterval(vibrateButton, 5000); // Cada 5 segundos
}

// Llama esta función al final de DOMContentLoaded
startColorPickerVibration();