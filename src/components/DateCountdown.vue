<template>
  <section class="bg-white/80 py-12 md:py-16">
    <div class="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
      <p class="text-xs uppercase tracking-[0.25em] text-green-400">
        {{ $t('countdown.title') }}
      </p>
      <h2 class="mt-2 text-3xl text-green-700 md:text-4xl">
        {{ $t('hero.date') }}
      </h2>
      <p class="mt-1 text-xs text-slate-500">
        {{ $t('countdown.ceremony') }}
      </p>

      <div
        class="mt-6 flex w-full flex-wrap items-center justify-center gap-3 text-[10px] md:gap-5 md:text-xs"
      >
        <div
          v-for="unit in units"
          :key="unit.label"
          class="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-green-50/90 shadow-sm shadow-green-100 md:h-20 md:w-20"
        >
          <span class="text-lg font-semibold text-green-600 md:text-2xl">
            {{ unit.value }}
          </span>
          <span class="mt-1 text-[9px] uppercase tracking-[0.16em] text-green-400">
            {{ $t(`countdown.${unit.label.toLowerCase()}`) }}
          </span>
        </div>
      </div>

      <p class="mt-5 max-w-xl text-[10px] text-slate-500 md:text-xs italic">
        {{ $t('countdown.description') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useNow } from "@vueuse/core";

const weddingDate = new Date("2025-12-21T17:30:00+07:00").getTime();
const now = useNow();

const diff = computed(() => {
  const ms = Math.max(weddingDate - now.value.getTime(), 0);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return { days, hours, minutes, seconds };
});

const units = computed(() => [
  { label: "Days", value: diff.value.days },
  { label: "Hours", value: diff.value.hours },
  { label: "Minutes", value: diff.value.minutes },
  { label: "Seconds", value: diff.value.seconds },
]);
</script>
