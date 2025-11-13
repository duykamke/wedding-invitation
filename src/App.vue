<script setup>
import { ref, reactive, onMounted, onUnmounted, computed, nextTick } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });
const scrollY = ref(0);
const rsvpSubmitted = ref(false);
const countdown = reactive({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});
const scrollContent = ref(null);
const pageHeight = ref(5000);
let timerInterval = null;

const handleScroll = () => {
    scrollY.value = window.scrollY;
};

const calculatePageHeight = () => {
    if (scrollContent.value) {
        const contentHeight = scrollContent.value.clientHeight;
        // Calculate total scrollable area:
        // Initial empty space + content height + extra buffer for viewing footer
        const requiredScroll = 200 + contentHeight / 1.2 + window.innerHeight;
        pageHeight.value = requiredScroll;
    }
};

const updateTimer = () => {
    const targetDate = new Date("2025-12-21T16:30:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdown.hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        countdown.minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60),
        );
        countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculatePageHeight);
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);

    // Wait for DOM and images to settle before calculating height
    nextTick(() => {
        setTimeout(calculatePageHeight, 500);
    });
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", calculatePageHeight);
    clearInterval(timerInterval);
});

// 1. Wrapper Animation (Slide Up + Zoom)
const envelopeWrapperStyle = computed(() => {
    const yOffset = Math.min(scrollY.value * 0.2, 100);
    const zoomStart = 250;
    const zoomEnd = 550;
    let currentScale = 0.6;

    if (scrollY.value <= zoomStart) {
        currentScale = 0.6 + scrollY.value * 0.0002;
    }
    if (scrollY.value > zoomStart) {
        const zoomProgress = Math.min(
            1,
            (scrollY.value - zoomStart) / (zoomEnd - zoomStart),
        );
        const startScale = 0.6 + zoomStart * 0.0002;
        currentScale = startScale + zoomProgress * (1.0 - startScale);
    }
    return {
        transform: `translateY(${yOffset}px) scale(${currentScale})`,
    };
});

// 2. Flap Animation (Open)
const flapStyle = computed(() => {
    const start = 50;
    const end = 250;
    let progress = Math.max(
        0,
        Math.min(1, (scrollY.value - start) / (end - start)),
    );
    return {
        transform: `rotateX(${progress * 180}deg)`,
        zIndex: progress > 0.5 ? 10 : 40,
    };
});

// 3. Wax Seal Fade
const sealStyle = computed(() => {
    const start = 100;
    const end = 250;
    let opacity =
        1 - Math.max(0, Math.min(1, (scrollY.value - start) / (end - start)));
    if (scrollY.value > 400) opacity = 0;
    return {
        opacity: opacity,
        pointerEvents: opacity < 0.1 ? "none" : "auto",
    };
});

// 4. Envelope Shell Fade Out
const envelopeShellStyle = computed(() => {
    const start = 400;
    const end = 600;
    let opacity = 1;
    if (scrollY.value > start) {
        opacity =
            1 -
            Math.max(0, Math.min(1, (scrollY.value - start) / (end - start)));
    }
    return { opacity: opacity };
});

// 5. Clipper Expansion (Allow paper to be seen fully)
const clipperStyle = computed(() => {
    const start = 550;
    let clipBottom = "2px";
    if (scrollY.value > start) clipBottom = "-300%";
    return { clipPath: `inset(-500% 0 ${clipBottom} 0)` };
});

// 6. Paper Moving Up
const paperStyle = computed(() => {
    const start = 200;
    let yMove = 0;
    if (scrollY.value > start) {
        yMove = (scrollY.value - start) * 1.2;
    }
    return { transform: `translateY(-${yMove}px)` };
});

const toggleLanguage = () => {
    locale.value = locale.value === "en" ? "vi" : "en";
};

const submitRSVP = () => {
    rsvpSubmitted.value = true;
};
</script>

<template>
    <div id="app" v-cloak>
        <div :style="{ height: pageHeight + 'px' }"></div>

        <div class="scene-container">
            <div
                class="atmospheric-bg"
                :style="{
                    transform: `translateY(${scrollY * 0.05}px) scale(${1 + scrollY * 0.0002})`,
                }"
            ></div>
            <div class="vignette"></div>

            <div
                v-if="scrollY < 100"
                class="scroll-indicator transition-opacity duration-500"
                :style="{ opacity: scrollY > 50 ? 0 : 0.7 }"
            >
                <p class="uppercase tracking-widest text-sm font-display mb-1">
                    Scroll to Open
                </p>
                <svg
                    class="w-6 h-6 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                </svg>
            </div>

            <button
                @click="toggleLanguage"
                style="pointer-events: auto"
                class="fixed top-6 right-6 z-50 text-white/80 border border-white/30 rounded-full px-4 py-1 hover:bg-white/10 font-display text-xs tracking-widest transition-colors"
            >
                {{
                    locale === "en"
                        ? "Chuyển sang Tiếng Việt"
                        : "Switch to English"
                }}
            </button>

            <div class="envelope-wrapper" :style="envelopeWrapperStyle">
                <div
                    class="env-flap"
                    :style="[flapStyle, envelopeShellStyle]"
                ></div>
                <div class="wax-seal" :style="sealStyle"><span>M</span></div>
                <div class="env-back" :style="envelopeShellStyle"></div>

                <div class="scroll-clipper" :style="clipperStyle">
                    <div
                        class="magic-scroll"
                        :style="paperStyle"
                        ref="scrollContent"
                    >
                        <!-- 1. HERO -->
                        <div class="scroll-section pt-12">
                            <div
                                class="text-sm uppercase tracking-[0.3em] text-accent mb-2 font-display"
                            >
                                {{ t("hero.invitation_phrase") }}
                            </div>
                            <h1
                                class="font-script text-6xl md:text-8xl mb-4 leading-none p-2"
                            >
                                {{ t("names") }}
                            </h1>

                            <div
                                class="border-y border-double border-gold py-4 my-8 w-3/4 mx-auto"
                            >
                                <p class="font-display text-2xl font-bold">
                                    {{ t("hero.date") }}
                                </p>
                                <p class="font-display text-lg">
                                    {{ t("hero.time") }}
                                </p>
                            </div>

                            <div
                                class="flex justify-center gap-6 md:gap-8 my-8"
                            >
                                <div class="countdown-item">
                                    <span class="countdown-num">{{
                                        countdown.days
                                    }}</span>
                                    <span class="countdown-label">{{
                                        t("time.days")
                                    }}</span>
                                </div>
                                <div class="countdown-item">
                                    <span class="countdown-num">{{
                                        countdown.hours
                                    }}</span>
                                    <span class="countdown-label">{{
                                        t("time.hours")
                                    }}</span>
                                </div>
                                <div class="countdown-item">
                                    <span class="countdown-num">{{
                                        countdown.minutes
                                    }}</span>
                                    <span class="countdown-label">{{
                                        t("time.mins")
                                    }}</span>
                                </div>
                                <div class="countdown-item">
                                    <span class="countdown-num">{{
                                        countdown.seconds
                                    }}</span>
                                    <span class="countdown-label">{{
                                        t("time.secs")
                                    }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <!-- 2. COUPLE -->
                        <div class="scroll-section">
                            <h2 class="font-display text-2xl mb-6">
                                {{ $t("couple.title") }}
                            </h2>
                            <div class="grid md:grid-cols-2 gap-12">
                                <div>
                                    <div
                                        class="static-polaroid mx-auto mb-4 w-60 h-80"
                                    >
                                        <img
                                            src="/images/bride.jpg"
                                            class="w-full h-full object-cover grayscale"
                                        />
                                    </div>
                                    <p class="font-script text-3xl mb-2">
                                        Natalia
                                    </p>
                                    <p
                                        class="text-xs uppercase tracking-widest text-accent mb-4"
                                    >
                                        {{ $t("couple.bride") }}
                                    </p>
                                    <p class="text-sm italic opacity-80">
                                        {{ $t("family.bride_parents_title") }}
                                    </p>
                                    <p
                                        class="font-display text-sm font-bold mt-1"
                                    >
                                        {{ $t("family.bride_father") }}
                                    </p>
                                    <p class="font-display text-sm font-bold">
                                        {{ $t("family.bride_mother") }}
                                    </p>
                                </div>
                                <div>
                                    <div
                                        class="static-polaroid mx-auto mb-4 w-60 h-80"
                                    >
                                        <img
                                            src="/images/groom.jpg"
                                            class="w-full h-full object-cover grayscale"
                                        />
                                    </div>
                                    <p class="font-script text-3xl mb-2">
                                        Ngọc Duy
                                    </p>
                                    <p
                                        class="text-xs uppercase tracking-widest text-accent mb-4"
                                    >
                                        {{ $t("couple.groom") }}
                                    </p>
                                    <p class="text-sm italic opacity-80">
                                        {{ $t("family.groom_parents_title") }}
                                    </p>
                                    <p
                                        class="font-display text-sm font-bold mt-1"
                                    >
                                        {{ $t("family.groom_father") }}
                                    </p>
                                    <p class="font-display text-sm font-bold">
                                        {{ $t("family.groom_mother") }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <!-- 3. VENUE -->
                        <div class="scroll-section">
                            <h2 class="font-display text-2xl mb-6">
                                {{ t("venue.title") }}
                            </h2>
                            <div
                                class="relative max-w-sm mx-auto mb-6 p-2 border border-gray-300 bg-white shadow-sm rotate-1"
                            >
                                <img
                                    src="/images/venue.jpg"
                                    alt="Hotel Du Parc"
                                    class="w-full h-48 object-cover filter sepia-[.3]"
                                />
                            </div>
                            <p class="font-display text-xl font-bold">
                                {{ t("hero.venue_name") }}
                            </p>
                            <p class="text-lg opacity-80 mb-4">
                                {{ t("hero.venue_addr") }}
                            </p>
                            <a
                                href="https://maps.app.goo.gl/mhLxiDnSyZvjBHLX9"
                                target="_blank"
                                class="inline-block border-b border-accent text-accent text-sm uppercase tracking-wider pb-1 hover:opacity-70"
                                >{{ t("venue.map_link") }}</a
                            >
                        </div>

                        <div class="divider"></div>

                        <!-- 4. SCHEDULE -->
                        <div class="scroll-section">
                            <h2 class="font-display text-3xl mb-12">
                                {{ t("schedule.title") }}
                            </h2>

                            <div class="relative max-w-2xl mx-auto">
                                <div
                                    class="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px"
                                    style="background-color: var(--accent-gold)"
                                ></div>

                                <div
                                    class="relative flex items-center justify-between md:justify-normal mb-12 w-full"
                                >
                                    <div
                                        class="absolute left-[11px] md:left-1/2 md:-ml-[4px] w-2 h-2 rounded-full bg-accent z-10"
                                        style="
                                            background-color: var(
                                                --accent-primary
                                            );
                                            box-shadow: 0 0 0 4px
                                                var(--color-yellow);
                                        "
                                    ></div>

                                    <div
                                        class="w-full pl-12 md:w-1/2 md:pl-0 md:pr-12 md:text-right text-left"
                                    >
                                        <span
                                            class="font-display text-accent text-xl font-bold block mb-1"
                                            >{{
                                                t("schedule.welcome_time") ||
                                                "17:30"
                                            }}</span
                                        >
                                        <h3 class="font-bold text-lg">
                                            {{ t("schedule.welcome") }}
                                        </h3>
                                        <p class="text-sm italic opacity-70">
                                            {{ t("schedule.welcome_desc") }}
                                        </p>
                                    </div>
                                    <div class="hidden md:block md:w-1/2"></div>
                                </div>

                                <div
                                    class="relative flex items-center justify-between md:justify-normal mb-12 w-full"
                                >
                                    <div
                                        class="absolute left-[11px] md:left-1/2 md:-ml-[4px] w-2 h-2 rounded-full bg-accent z-10"
                                        style="
                                            background-color: var(
                                                --accent-primary
                                            );
                                            box-shadow: 0 0 0 4px
                                                var(--color-yellow);
                                        "
                                    ></div>
                                    <div class="hidden md:block md:w-1/2"></div>
                                    <div
                                        class="w-full pl-12 md:w-1/2 md:pl-12 md:text-left text-left"
                                    >
                                        <span
                                            class="font-display text-accent text-xl font-bold block mb-1"
                                            >{{
                                                t("schedule.ceremony_time") ||
                                                "19:00"
                                            }}</span
                                        >
                                        <h3 class="font-bold text-lg">
                                            {{ t("schedule.ceremony") }}
                                        </h3>
                                        <p class="text-sm italic opacity-70">
                                            {{ t("schedule.ceremony_desc") }}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    class="relative flex items-center justify-between md:justify-normal mb-12 w-full"
                                >
                                    <div
                                        class="absolute left-[11px] md:left-1/2 md:-ml-[4px] w-2 h-2 rounded-full bg-accent z-10"
                                        style="
                                            background-color: var(
                                                --accent-primary
                                            );
                                            box-shadow: 0 0 0 4px
                                                var(--color-yellow);
                                        "
                                    ></div>
                                    <div
                                        class="w-full pl-12 md:w-1/2 md:pl-0 md:pr-12 md:text-right text-left"
                                    >
                                        <span
                                            class="font-display text-accent text-xl font-bold block mb-1"
                                            >{{
                                                t("schedule.party_time") ||
                                                "19:00"
                                            }}</span
                                        >
                                        <h3 class="font-bold text-lg">
                                            {{ t("schedule.party") }}
                                        </h3>
                                        <p class="text-sm italic opacity-70">
                                            {{ t("schedule.party_desc") }}
                                        </p>
                                    </div>
                                    <div class="hidden md:block md:w-1/2"></div>
                                </div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <!-- 5. DRESS CODE -->
                        <div class="scroll-section">
                            <h2 class="font-display text-2xl mb-6">
                                {{ t("dresscode.title") }}
                            </h2>
                            <div
                                class="flex flex-col md:flex-row justify-center gap-8 md:gap-16"
                            >
                                <div
                                    class="bg-white/50 p-6 shadow-sm transform -rotate-1"
                                >
                                    <p
                                        class="font-display font-bold text-accent mb-2"
                                    >
                                        {{ t("dresscode.female") }}
                                    </p>
                                    <ul class="text-sm space-y-2 italic">
                                        <li>Elegant Dress / Gown</li>
                                        <li>Soft & Gentle Colors</li>
                                        <li
                                            class="font-bold text-accent not-italic border border-accent px-2 py-1 inline-block"
                                        >
                                            {{ t("dresscode.no_white") }}
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    class="bg-white/50 p-6 shadow-sm transform rotate-1"
                                >
                                    <p
                                        class="font-display font-bold text-accent mb-2"
                                    >
                                        {{ t("dresscode.male") }}
                                    </p>
                                    <ul class="text-sm space-y-2 italic">
                                        <li>Suit / Shirt & Trousers</li>
                                        <li>Solid Colors</li>
                                        <li>Minimal Patterns</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <!-- 6. RSVP -->
                        <div class="scroll-section pb-8">
                            <h2 class="font-display text-3xl mb-2">R.S.V.P.</h2>
                            <p class="mb-8 text-sm italic opacity-70">
                                {{ t("rsvp.respond_by") }}
                            </p>

                            <form
                                @submit.prevent="submitRSVP"
                                v-if="!rsvpSubmitted"
                                class="max-w-md mx-auto"
                            >
                                <input
                                    type="text"
                                    :placeholder="t('rsvp.name')"
                                    class="rsvp-input"
                                />
                                <div
                                    class="flex justify-center gap-8 my-6 font-display text-sm"
                                >
                                    <label
                                        class="flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="attend"
                                            class="accent-pink"
                                            style="
                                                accent-color: var(
                                                    --accent-primary
                                                );
                                            "
                                        />
                                        {{ t("rsvp.yes") }}
                                    </label>
                                    <label
                                        class="flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="attend"
                                            class="accent-pink"
                                            style="
                                                accent-color: var(
                                                    --accent-primary
                                                );
                                            "
                                        />
                                        {{ t("rsvp.no") }}
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    :placeholder="t('rsvp.message')"
                                    class="rsvp-input"
                                />
                                <button
                                    class="mt-6 px-8 py-2 border border-accent text-accent font-display hover:bg-accent hover:text-white transition-colors uppercase tracking-widest text-sm"
                                >
                                    {{ t("rsvp.button") }}
                                </button>
                            </form>
                            <div v-else class="py-8">
                                <p class="font-script text-4xl text-accent">
                                    Merci Beaucoup!
                                </p>
                                <p class="mt-2 font-display text-sm">
                                    {{ t("rsvp.success_msg") }}
                                </p>
                            </div>
                        </div>

                        <!-- 7. DEDICATED GALLERY SECTION -->
                        <div class="scroll-section pt-4 pb-12">
                            <h2 class="font-display text-3xl mb-8">
                                {{ t("gallery.title") }}
                            </h2>

                            <div class="gallery-grid">
                                <div class="static-polaroid">
                                    <img
                                        src="/images/gallery1.jpg"
                                        alt="Couple Moment 1"
                                    />
                                </div>
                                <div class="static-polaroid">
                                    <img
                                        src="/images/gallery4.jpg"
                                        alt="Rings"
                                    />
                                </div>
                                <div class="static-polaroid">
                                    <img
                                        src="/images/gallery2.jpg"
                                        alt="Flowers"
                                    />
                                </div>
                                <div class="static-polaroid">
                                    <img
                                        src="/images/gallery3.jpg"
                                        alt="Holding Hands"
                                    />
                                </div>
                                <div class="static-polaroid">
                                    <img
                                        src="/images/gallery5.jpg"
                                        alt="Walking Together"
                                    />
                                </div>
                                <div class="static-polaroid">
                                    <img
                                        src="/images/gallery6.jpg"
                                        alt="Dress Detail"
                                    />
                                </div>
                            </div>

                            <p
                                class="mt-12 font-script text-3xl text-accent opacity-60"
                            >
                                See you there...
                            </p>
                        </div>
                    </div>
                </div>

                <div class="env-pocket" :style="envelopeShellStyle"></div>
                <div
                    class="env-pocket-bottom"
                    :style="envelopeShellStyle"
                ></div>
            </div>
        </div>
    </div>
</template>

<style>
/* --- ATMOSPHERE & VARIABLES --- */
:root {
    /* User Palette */
    --color-pink: #c48677;
    --color-light-pink: #d6b59c;
    --color-green: #8fa17c;
    --color-light-green: #bbc5a3;
    --color-yellow: #d7b239;
    --color-light-yellow: #ded7a8;

    /* Component Mapping */
    --paper-color: var(--color-light-yellow);
    --paper-texture: url("https://www.transparenttextures.com/patterns/cream-paper.png");

    /* Ink needs to be darker than the green provided for readability, mixing Green + Black */
    --ink-color: #2f3825; /* Darkened green for readability */

    --accent-gold: var(--color-yellow);
    --accent-primary: var(--color-pink); /* Main accent color */

    --envelope-front: var(--color-light-green);
    --envelope-back: var(--color-green);
    --envelope-inside: var(--color-light-pink);
    --seal-color: var(--color-pink); /* Use primary accent for seal */
}

body {
    background-color: #0f1310;
    margin: 0;
    overflow-x: hidden;
    color: var(--ink-color); /* All text uses this */
    font-family: "Lora", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Hide scrollbar but keep functionality */
body::-webkit-scrollbar {
    width: 8px;
}
body::-webkit-scrollbar-track {
    background: #1a1a1a;
}
body::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
}

/* --- TYPOGRAPHY --- */
.font-script {
    font-family: "Great Vibes", cursive;
    font-weight: 400;
}
.font-display {
    font-family: "Playfair Display", serif;
}

/* --- 3D SCENE --- */
.scene-container {
    perspective: 1200px;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    pointer-events: none;
}

/* --- BACKGROUND --- */
.atmospheric-bg {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    /* High quality couple photo */
    background-image: url("/images/background.jpg");
    background-size: cover;
    background-position: center;
    z-index: 0;
    filter: brightness(0.7) sepia(0.2);
    will-change: transform;
}

.vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, transparent 30%, #0f1310 95%);
    z-index: 1;
    pointer-events: none;
}

/* --- ENVELOPE SYSTEM --- */
.envelope-wrapper {
    position: relative;
    width: 340px;
    height: 240px;
    transform-style: preserve-3d;
    z-index: 20;
    transform-origin: center center;
    backface-visibility: hidden;
}

/* Desktop High Res */
@media (min-width: 768px) {
    .envelope-wrapper {
        width: 700px;
        height: 490px;
    }
}
@media (min-width: 1200px) {
    .envelope-wrapper {
        width: 800px;
        height: 560px;
    }
}

.env-back {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--envelope-back);
    border-radius: 4px;
    box-shadow:
        0 30px 60px rgba(0, 0, 0, 0.9),
        0 0 15px rgba(0, 0, 0, 0.5);
    z-index: 10;
    transition: opacity 0.5s ease;
}

.scroll-clipper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    pointer-events: none;
}

.env-flap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: var(--envelope-front);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    transform-origin: top;
    z-index: 40;
    transition: opacity 0.5s ease;
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.3));
    backface-visibility: hidden;
}

.env-flap::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--envelope-inside);
    z-index: -1;
    backface-visibility: visible;
}

.env-pocket {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 30;
    pointer-events: none;
    transition: opacity 0.5s ease;
}
.env-pocket::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: var(--envelope-front);
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    filter: brightness(0.95);
}
.env-pocket::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: var(--envelope-front);
    clip-path: polygon(100% 0, 100% 100%, 0 50%);
    filter: brightness(0.95);
}
.env-pocket-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: var(--envelope-front);
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
    z-index: 31;
    filter: brightness(1.05);
    transition: opacity 0.5s ease;
}

.wax-seal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 60px;
    height: 60px;
    background: radial-gradient(
        circle at 30% 30%,
        var(--accent-primary),
        #a16b5e
    ); /* Using accent-primary (pink) */
    border-radius: 50%;
    box-shadow:
        2px 4px 10px rgba(0, 0, 0, 0.5),
        inset 2px 2px 5px rgba(255, 255, 255, 0.2);
    z-index: 41;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #5a2e26;
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    font-weight: bold;
    border: 2px dashed rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: opacity 0.5s;
}

/* --- THE MAGIC SCROLL (Content) --- */
.magic-scroll {
    position: absolute;
    top: 10px;
    left: 5%;
    width: 90%;
    padding: 2rem 3rem 8rem 3rem;
    background-color: var(--paper-color);
    background-image: var(--paper-texture);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transform: translateZ(0);
    pointer-events: auto;
}

.magic-scroll::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent);
    pointer-events: none;
}

.scroll-section {
    margin-bottom: 4rem;
    text-align: center;
    opacity: 0.95;
}
.divider {
    height: 1px;
    width: 60px;
    background: var(--accent-gold);
    margin: 2rem auto;
    opacity: 0.5;
}

/* Custom Text Colors for this Palette */
.text-accent {
    color: var(--accent-primary);
}
.text-gold {
    color: var(--accent-gold);
}
.border-gold {
    border-color: var(--accent-gold);
}
.border-accent {
    border-color: var(--accent-primary);
}
.bg-accent {
    background-color: var(--accent-primary);
}

/* Countdown Box */
.countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 60px;
}
.countdown-num {
    font-size: 1.5rem;
    font-family: "Playfair Display", serif;
    color: var(--accent-primary);
    font-weight: bold;
}
.countdown-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 4px;
}

/* Static Grid Gallery */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}
@media (min-width: 640px) {
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (min-width: 1024px) {
    .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.static-polaroid {
    background: white;
    padding: 12px 12px 35px 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: rotate(0deg);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}
.static-polaroid:hover {
    transform: scale(1.02) rotate(1deg);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    z-index: 10;
}
.static-polaroid img {
    width: 100%;
    object-fit: cover;
    filter: sepia(0.2) contrast(0.9);
}

/* Rotate slighty for random feel */
.static-polaroid:nth-child(odd) {
    transform: rotate(-1deg);
}
.static-polaroid:nth-child(even) {
    transform: rotate(1deg);
}
.static-polaroid:nth-child(3n) {
    transform: rotate(0.5deg);
}

.static-polaroid:hover:nth-child(odd) {
    transform: scale(1.02) rotate(0deg);
}

.rsvp-input {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--ink-color);
    width: 100%;
    padding: 8px;
    margin-bottom: 1rem;
    font-family: "Lora", serif;
    font-size: 1.2rem;
    text-align: center;
    color: var(--ink-color);
}
.rsvp-input:focus {
    outline: none;
    border-color: var(--accent-gold);
}
.rsvp-input::placeholder {
    color: var(--ink-color);
    opacity: 0.6;
}

.scroll-indicator {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    z-index: 100;
    text-align: center;
    opacity: 0.7;
    animation: bounce 2s infinite;
}
@keyframes bounce {
    0%,
    100% {
        transform: translate(-50%, 0);
    }
    50% {
        transform: translate(-50%, 10px);
    }
}

@media (max-width: 768px) {
    .magic-scroll {
        padding: 1.5rem 1rem 6rem 1rem;
    }
    h1 {
        font-size: 3rem !important;
    }
    h2 {
        font-size: 2rem !important;
    }
}

[v-cloak] {
    display: none;
}
</style>
