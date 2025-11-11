<template>
  <section class="bg-light-green-50/80 py-12 md:py-16">
    <div class="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[1.4fr_minmax(0,1fr)] md:items-center">
      <div>
        <p class="text-[10px] uppercase tracking-[0.22em] text-green-400">
          {{ $t('venue.title') }}
        </p>
        <h2 class="mt-2 text-2xl text-green-700 md:text-3xl">
          {{ $t('venue.name') }}
        </h2>
        <p class="mt-3 text-xs leading-relaxed text-slate-600 md:text-sm">
          {{ $t('venue.details') }}
        </p>
        <div class="mt-4 text-xs text-slate-600">
          <p>{{ $t('venue.address') }}</p>
        </div>
        <a
          href="https://maps.app.goo.gl/thWtX5xZqM6dr3WK7"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-5 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-green-50 shadow-md shadow-green-200 transition hover:-translate-y-0.5 hover:bg-green-600"
        >
          {{ $t('venue.map') }}
        </a>
      </div>

      <div class="relative h-52 overflow-hidden rounded-3xl bg-slate-200 shadow-lg md:h-64">
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('/images/venue.webp');"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
