// ==========================================
// 1. REAL-TIME CLOCK (MANILA + BERLIN)
// ==========================================
function updateClocks() {
    const now = new Date();

    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    };

    document.getElementById("ph-time").textContent =
        now.toLocaleTimeString("en-PH", {
            ...options,
            timeZone: "Asia/Manila"
        });

    document.getElementById("de-time").textContent =
        now.toLocaleTimeString("de-DE", {
            ...options,
            timeZone: "Europe/Berlin"
        });
}

updateClocks();
setInterval(updateClocks, 1000);


// ==========================================
// 2. REAL-TIME WEATHER (OPEN-METEO API)
// ==========================================
async function updateWeather() {
    try {
        const [phRes, deRes] = await Promise.all([
            fetch("https://api.open-meteo.com/v1/forecast?latitude=14.5995&longitude=120.9842&current=temperature_2m"),
            fetch("https://api.open-meteo.com/v1/forecast?latitude=52.5200&longitude=13.4050&current=temperature_2m")
        ]);

        const phData = await phRes.json();
        const deData = await deRes.json();

        document.getElementById("ph-weather").textContent =
            `${Math.round(phData.current.temperature_2m)}°C`;

        document.getElementById("de-weather").textContent =
            `${Math.round(deData.current.temperature_2m)}°C`;

    } catch (err) {
        console.error("Weather fetch failed:", err);

        document.getElementById("ph-weather").textContent = "Offline";
        document.getElementById("de-weather").textContent = "Offline";
    }
}

updateWeather();
setInterval(updateWeather, 600000); // 10 minutes


// ==========================================
// 3. LANGUAGE TRANSLATION SYSTEM
// ==========================================
const translationMatrix = {
    en: {
        title: "Pinoy Eye Witness in Europe",
        subtitle: "Filipino Stories • News • Sports • Community in Europe",
        button: "Explore Engine",
        nav_about: "About",
        nav_services: "Services",
        nav_videos: "Videos",
        nav_contact: "Contact"
    },
    de: {
        title: "Pinoy Augenzeuge in Europa",
        subtitle: "Filipinische Geschichten • Nachrichten • Sport • Gemeinschaft",
        button: "Plattform Öffnen",
        nav_about: "Über Uns",
        nav_services: "Dienste",
        nav_videos: "Videos",
        nav_contact: "Kontakt"
    },
    es: {
        title: "Testigo Ocular Pinoy en Europa",
        subtitle: "Historias Filipinas • Noticias • Deportes • Comunidad",
        button: "Iniciar Motor",
        nav_about: "Acerca De",
        nav_services: "Servicios",
        nav_videos: "Videos",
        nav_contact: "Contacto"
    },
    ja: {
        title: "欧州のフィリピン人目撃者",
        subtitle: "フィリピンの物語 • ニュース • スポーツ",
        button: "開始",
        nav_about: "概要",
        nav_services: "サービス",
        nav_videos: "動画",
        nav_contact: "連絡先"
    },
    zh: {
        title: "欧洲菲律宾目击者",
        subtitle: "菲律宾故事 • 新闻 • 体育 • 欧洲社区",
        button: "开启",
        nav_about: "关于",
        nav_services: "服务",
        nav_videos: "视频",
        nav_contact: "联系"
    }
};

document.getElementById("lang").addEventListener("change", (e) => {
    const lang = e.target.value;
    const selected = translationMatrix[lang];

    if (!selected) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (selected[key]) {
            el.textContent = selected[key];
        }
    });
});


// ==========================================
// 4. FLUID BACKGROUND EFFECT (SVG WAVE)
// ==========================================
let waveOffset = 0.012;
let direction = 1;

function animateWave() {
    const wave = document.querySelector("#cinematic-wave feTurbulence");

    if (wave) {
        waveOffset += 0.00008 * direction;

        if (waveOffset > 0.018) direction = -1;
        if (waveOffset < 0.009) direction = 1;

        wave.setAttribute("baseFrequency", `${waveOffset} 0.04`);
    }

    requestAnimationFrame(animateWave);
}

animateWave();


// ==========================================
// 5. GSAP ANIMATIONS
// ==========================================
gsap.registerPlugin(ScrollTrigger);

document.getElementById("explore-btn")?.addEventListener("click", () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
});

// Card animation
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

// Section title animation
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
