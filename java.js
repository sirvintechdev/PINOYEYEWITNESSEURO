function updateLiveClocks() {

    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    };

    document.getElementById("ph-time").textContent =
        new Date().toLocaleTimeString(
            "en-PH",
            {
                ...options,
                timeZone: "Asia/Manila"
            }
        );

    document.getElementById("de-time").textContent =
        new Date().toLocaleTimeString(
            "de-DE",
            {
                ...options,
                timeZone: "Europe/Berlin"
            }
        );
}

updateLiveClocks();
setInterval(updateLiveClocks,1000);
// ==========================================
// 2. LIVE ASYNCHRONOUS WEATHER AGGREGATOR
// ==========================================
async function updateWeatherData() {
    try {
        // Manila Meteorological Fetch
        const phFetch = await fetch('https://api.open-meteo.com/v1/forecast?latitude=14.5995&longitude=120.9842&current_weather=true');
        const phData = await phFetch.json();
        document.getElementById('ph-weather').textContent = `${Math.round(phData.current_weather.temperature)}°C`;

        // Berlin Meteorological Fetch
        const deFetch = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.5200&longitude=13.4050&current_weather=true');
        const deData = await deFetch.json();
        document.getElementById('de-weather').textContent = `${Math.round(deData.current_weather.temperature)}°C`;
    } catch (err) {
        document.getElementById('ph-weather').textContent = "Offline";
        document.getElementById('de-weather').textContent = "Offline";
    }
}
updateWeatherData();
setInterval(updateWeatherData, 600000); // 10-Minute Automatic Cache Refresh Loop

// ==========================================
// 3. INTERNAL LOCAL TRANSLATION DICTIONARY
// ==========================================
const translationMatrix = {
    en: {
        title: "Pinoy Eye Witness in Europe",
        subtitle: "Filipino Stories • News • Sports • Community in Europe",
        button: "Explore Engine",
        nav_about: "About",
        nav_services: "Services",
        nav_videos: "Videos",
        nav_contact: "Contact",
        about_title: "About Us",
        bio_1: "A digital media platform dedicated to sharing Filipino stories across Europe.",
        bio_2: "Led by Sir Vin, we connect communities through real-time storytelling, culture, and lived experiences that bring Filipinos abroad closer together.",
        srv_1_title: "Community News",
        srv_1_desc: "Real-time updates from Filipino communities in Europe.",
        srv_2_title: "Travel Stories",
        srv_2_desc: "Discover Europe through Filipino experiences.",
        srv_3_title: "Video Reports",
        srv_3_desc: "Interviews, documentaries, and events.",
        video_title: "Featured Video",
        contact_title: "Contact Us"
    },
    de: {
        title: "Pinoy Augenzeuge in Europa",
        subtitle: "Filipinische Geschichten • Nachrichten • Sport • Gemeinschaft",
        button: "Plattform Öffnen",
        nav_about: "Über Uns",
        nav_services: "Dienste",
        nav_videos: "Videos",
        nav_contact: "Kontakt",
        about_title: "Über Uns",
        bio_1: "Eine digitale Medienplattform, die Geschichten von Filipinos in ganz Europa teilt.",
        bio_2: "Unter der Leitung von Sir Vin verbinden wir Gemeinschaften durch Echtzeit-Storytelling und Kultur.",
        srv_1_title: "Gemeindenachrichten",
        srv_1_desc: "Aktuelle Updates aus den philippinischen Gemeinden in Europa.",
        srv_2_title: "Reiseberichte",
        srv_2_desc: "Entdecken Sie Europa durch philippinische Augen.",
        srv_3_title: "Videoberichte",
        srv_3_desc: "Interviews, Dokumentationen und Veranstaltungen.",
        video_title: "Ausgewähltes Video",
        contact_title: "Kontakt"
    },
    es: {
        title: "Testigo Ocular Pinoy en Europa",
        subtitle: "Historias Filipinas • Noticias • Deportes • Comunidad en Europa",
        button: "Iniciar Motor",
        nav_about: "Acerca De",
        nav_services: "Servicios",
        nav_videos: "Videos",
        nav_contact: "Contacto",
        about_title: "Sobre Nosotros",
        bio_1: "Plataforma de medios digitales dedicada a compartir historias filipinas en Europa.",
        bio_2: "Dirigido por Sir Vin, conectamos comunidades a través de narraciones en tiempo real y cultura.",
        srv_1_title: "Noticias Comunitarias",
        srv_1_desc: "Actualizaciones en tiempo real de las comunidades filipinas en Europa.",
        srv_2_title: "Historias de Viajes",
        srv_2_desc: "Descubre Europa a través de experiencias filipinas.",
        srv_3_title: "Videorreportajes",
        srv_3_desc: "Entrevistas, documentales y eventos.",
        video_title: "Video Destacado",
        contact_title: "Contacto"
    },
    ja: {
        title: "欧州のフィリピン人目撃者",
        subtitle: "欧州におけるフィリピンの物語 • ニュース • スポーツ • コミュニティ",
        button: "エンジンを起動する",
        nav_about: "概要",
        nav_services: "サービス",
        nav_videos: "動画",
        nav_contact: "連絡先",
        about_title: "私たちについて",
        bio_1: "ヨーロッパ全土のフィリピン人の物語を共有するためのデジタルメディアプラットフォーム。",
        bio_2: "Sir Vinの指導のもと、リアルタイムのストーリーテリング、文化を通じてコミュニティをつなぎます。",
        srv_1_title: "コミュニティニュース",
        srv_1_desc: "欧州のフィリピン人コミュニティからのリアルタイム更新。",
        srv_2_title: "旅行記",
        srv_2_desc: "フィリピン人の視点からヨーロッパを発見する。",
        srv_3_title: "ビデオレポート",
        srv_3_desc: "インタビュー、ドキュメンタリー、イベント。",
        video_title: "注目の動画",
        contact_title: "お問い合わせ"
    },
    zh: {
        title: "欧洲菲律宾目击者",
        subtitle: "菲律宾故事 • 新闻 • 体育 • 欧洲社区",
        button: "开启平台",
        nav_about: "关于",
        nav_services: "服务",
        nav_videos: "视频",
        nav_contact: "联系",
        about_title: "关于我们",
        bio_1: "致力于分享整个欧洲菲律宾人故事的数字媒体平台。",
        bio_2: "在 Sir Vin 的带领下，我们通过实时故事讲述、文化将海外菲律宾人紧密联系在一起。",
        srv_1_title: "社区新闻",
        srv_1_desc: "来自欧洲菲律宾社区的实时动态。",
        srv_2_title: "旅行故事",
        srv_2_desc: "通过菲律宾人的视角探索欧洲。",
        srv_3_title: "视频报道",
        srv_3_desc: "采访、纪录片和活动。",
        video_title: "推荐视频",
        contact_title: "联系我们"
    }
};

document.getElementById('lang').addEventListener('change', (e) => {
    const selected = translationMatrix[e.target.value];
    if (!selected) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (selected[key]) {
            el.textContent = selected[key];
        }
    });
});

// ==========================================
// 4. DIGITAL FLUID FLAG INTERFACE OVERLAY
// ==========================================
let waveOffset = 0.012;
let ascending = true;

function dynamicFilterWave() {
    const targetFilter = document.querySelector('#cinematic-wave feTurbulence');
    if (targetFilter) {
        if (ascending) {
            waveOffset += 0.00008;
            if (waveOffset > 0.018) ascending = false;
        } else {
            waveOffset -= 0.00008;
            if (waveOffset < 0.009) ascending = true;
        }
        targetFilter.setAttribute('baseFrequency', `${waveOffset} 0.04`);
    }
    requestAnimationFrame(dynamicFilterWave);
}
requestAnimationFrame(dynamicFilterWave);

// ==========================================
// 5. GSAP CINEMATIC INTERACTIVE TIMELINES
// ==========================================
gsap.registerPlugin(ScrollTrigger);

document.getElementById('explore-btn').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Stagger Card Reveal Entry Animation
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".grid-layout",
        start: "top 85%"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    ease: "power4.out"
});

// Section Title Glint Entry
gsap.from(".section-title", {
    scrollTrigger: {
        trigger: ".content-wrapper",
        start: "top 90%"
    },
    x: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
});
function updateClocks() {
    const now = new Date();

    document.getElementById("ph-time").textContent =
        now.toLocaleTimeString("en-PH", {
            timeZone: "Asia/Manila",
            hour12: false
        });

    document.getElementById("de-time").textContent =
        now.toLocaleTimeString("de-DE", {
            timeZone: "Europe/Berlin",
            hour12: false
        });
}

updateWeather();
setInterval(updateWeather, 600000); // every 10 minutes


document.getElementById("lang").addEventListener("change", function () {
    const lang = this.value;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;

        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
});
async function updateWeather() {

    try {

        const [phRes,deRes] = await Promise.all([

            fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=14.5995&longitude=120.9842&current=temperature_2m"
            ),

            fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.405&current=temperature_2m"
            )

        ]);

        const ph = await phRes.json();
        const de = await deRes.json();

        document.getElementById("ph-weather").textContent =
            `${Math.round(ph.current.temperature_2m)}°C`;

        document.getElementById("de-weather").textContent =
            `${Math.round(de.current.temperature_2m)}°C`;

    }
    catch(err){

        document.getElementById("ph-weather").textContent =
            "Offline";

        document.getElementById("de-weather").textContent =
            "Offline";
    }
}

updateWeather();
setInterval(updateWeather,600000);
