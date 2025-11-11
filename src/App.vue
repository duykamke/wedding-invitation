<template>
  <div class="min-h-screen bg-green-50 text-slate-800">
    <!-- Navigation -->
    <header
      class="fixed inset-x-0 top-0 z-40 border-b border-white/40 bg-white/70 backdrop-blur-xl"
    >
      <nav
        class="mx-auto flex max-w-6xl flex-col items-center px-4 py-3 text-sm font-medium text-slate-700"
      >
        <div class="flex items-baseline gap-2 mb-3">
          <span class="tracking-[0.25em] uppercase text-[10px] text-pink-400">
            {{ $t('hero.invitation') }}
          </span>
          <span class="font-[FzManstein] text-lg italic text-pink-700">
            {{ $t('nav.couple') }}
          </span>
        </div>
        <div class="hidden gap-6 md:flex items-center">
          <a href="#hero" class="uppercase tracking-[0.16em] text-[10px] hover:text-green-500 transition-colors">{{ $t('nav.home') }}</a>
          <a href="#date" class="uppercase tracking-[0.16em] text-[10px] hover:text-green-500 transition-colors">{{ $t('nav.date') }}</a>
          <a href="#location" class="uppercase tracking-[0.16em] text-[10px] hover:text-green-500 transition-colors">{{ $t('nav.venue') }}</a>
          <a href="#schedule" class="uppercase tracking-[0.16em] text-[10px] hover:text-green-500 transition-colors">{{ $t('nav.schedule') }}</a>
          <a href="#dresscode" class="uppercase tracking-[0.16em] text-[10px] hover:text-green-500 transition-colors">{{ $t('nav.dresscode') }}</a>
          <a href="#couple" class="uppercase tracking-[0.16em] text-[10px] hover:text-green-500 transition-colors">{{ $t('nav.about') }}</a>
          <a href="#rsvp" class="uppercase tracking-[0.16em] text-[10px] hover:text-green-500 transition-colors">{{ $t('nav.rsvp') }}</a>
          <a href="#gallery" class="uppercase tracking-[0.16em] text-[10px] hover:text-green-500 transition-colors">{{ $t('nav.gallery') }}</a>

          <!-- Language Switcher -->
          <div class="flex items-center gap-1 ml-6 pl-6 border-l border-green-200">
            <button
              @click="changeLanguage('en')"
              :class="[
                'px-2 py-1 text-[10px] rounded-lg transition-colors',
                $i18n.locale === 'en'
                  ? 'bg-green-500 text-white'
                  : 'hover:bg-green-100 text-slate-600'
              ]"
            >
              EN
            </button>
            <button
              @click="changeLanguage('vi')"
              :class="[
                'px-2 py-1 text-[10px] rounded-lg transition-colors',
                $i18n.locale === 'vi'
                  ? 'bg-green-500 text-white'
                  : 'hover:bg-green-100 text-slate-600'
              ]"
            >
              VI
            </button>
          </div>
        </div>
      </nav>
    </header>

    <main class="pt-24">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="date" class="scroll-mt-24">
        <DateCountdown />
      </section>

      <section id="location" class="scroll-mt-24">
        <VenueSection />
      </section>

      <section id="schedule" class="scroll-mt-24">
        <ScheduleSection />
      </section>

      <section id="dresscode" class="scroll-mt-24">
        <DresscodeSection />
      </section>

      <section id="couple" class="scroll-mt-24">
        <CoupleAndFamilies />
      </section>

      <section id="rsvp" class="scroll-mt-24">
        <RsvpSection />
      </section>
    </main>

    <section id="gallery" class="scroll-mt-24">
      <GallerySection />
    </section>

    <footer
      class="border-t border-green-100/80 bg-green-50/80 py-6 text-center text-xs text-slate-500"
    >
      <p>
        <span class="uppercase tracking-[0.16em] text-[9px] text-pink-400">With love,</span>
        <span class="italic text-pink-600">A &amp; B</span>
      </p>
      <p class="mt-1">We look forward to celebrating with you.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import HeroSection from "@/components/HeroSection.vue";
import DateCountdown from "@/components/DateCountdown.vue";
import VenueSection from "@/components/VenueSection.vue";
import ScheduleSection from "@/components/ScheduleSection.vue";
import CoupleAndFamilies from "@/components/CoupleAndFamilies.vue";
import GallerySection from "@/components/GallerySection.vue";
import DresscodeSection from "@/components/DresscodeSection.vue";
import RsvpSection from "@/components/RsvpSection.vue";

const { locale } = useI18n();

const changeLanguage = (lang: string) => {
  locale.value = lang;
  // Update URL to reflect language change
  if (lang === 'en') {
    history.pushState(null, '', '/');
  } else {
    history.pushState(null, '', `/${lang}`);
  }
};
</script>
