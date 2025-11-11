<template>
  <section class="relative overflow-hidden">
    <!-- Hero background image -->
    <div
      class="relative z-0 flex min-h-[90vh] items-center justify-center bg-cover bg-center bg-fixed"
      style="background-image: url('/images/hero.jpg');"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-green-50/95"></div>

      <div
        ref="heroRef"
        class="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white"
        :style="heroStyle"
      >
        <p class="mb-2 text-xs tracking-[0.2em] uppercase text-green-200/90">
          {{ $t('hero.invitation') }}
        </p>
        <h1
          class="font-[FzManstein] text-5xl leading-tight tracking-wide drop-shadow-md sm:text-6xl md:text-7xl"
        >
          {{ $t('hero.couple') }}
        </h1>
        <p class="mt-4 text-sm uppercase tracking-[0.2em] text-green-100/90">
          {{ $t('hero.date') }} • {{ $t('hero.location') }}
        </p>
        <p class="mt-6 max-w-xl text-sm text-green-50/95">
          {{ $t('hero.invitationText') }}
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs">
          <a
            href="#rsvp"
            class="rounded-full bg-green-500 px-8 py-3 font-semibold tracking-wide text-green-50 shadow-lg shadow-green-900/30 transition hover:-translate-y-0.5 hover:bg-green-600"
          >
            {{ $t('hero.rsvpButton') }}
          </a>
          <a
            href="#venue"
            class="rounded-full bg-white/10 px-7 py-3 font-medium text-green-100 backdrop-blur-md transition hover:bg-white/20"
          >
            {{ $t('hero.venueDetails') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useWindowScroll } from "@vueuse/core";

const heroRef = ref<HTMLElement | null>(null);
const { y } = useWindowScroll();

const heroStyle = computed(() => {
  const offset = (y.value || 0) * 0.15;
  const opacity = Math.max(1 - (y.value || 0) / 600, 0.85);
  return {
    transform: `translateY(${offset * -0.25}px)`,
    opacity: `${opacity}`,
  };
});
</script>

<style scoped>
</style>
