<template>
  <section class="bg-light-green-50/90 py-12 md:py-16">
    <div class="mx-auto max-w-4xl px-6">
      <p class="text-[10px] uppercase tracking-[0.22em] text-green-400">
        {{ $t('schedule.title') }}
      </p>
      <h2 class="mt-2 text-2xl text-green-700 md:text-3xl">
        {{ $t('schedule.subtitle') }}
      </h2>
      <p class="mt-2 text-[10px] text-slate-600 md:text-xs max-w-2xl">
        {{ $t('schedule.description') }}
      </p>

      <div class="mt-8 space-y-4 text-[10px] md:text-xs">
        <!-- Tea Ceremony -->
        <div class="rounded-2xl bg-white p-5 shadow-sm shadow-green-100/80 border border-green-100/60">
          <div class="flex flex-col sm:flex-row sm:items-center gap-3">
            <div class="flex-shrink-0">
              <span class="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full font-semibold">
                {{ $t('schedule.morning.time') }}
              </span>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-green-700 text-lg">{{ $t('schedule.morning.event') }}</h3>
              <p class="mt-1 text-slate-600">{{ $t('schedule.morning.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Wedding Ceremony -->
        <div class="rounded-2xl bg-white p-5 shadow-sm shadow-green-100/80 border border-green-100/60">
          <div class="flex flex-col sm:flex-row sm:items-center gap-3">
            <div class="flex-shrink-0">
              <span class="inline-block px-3 py-1 bg-green-500 text-white rounded-full font-semibold">
                {{ $t('schedule.afternoon.time') }}
              </span>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-green-700 text-lg">{{ $t('schedule.afternoon.event') }}</h3>
              <p class="mt-1 text-slate-600">{{ $t('schedule.afternoon.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Reception -->
        <div class="rounded-2xl bg-white p-5 shadow-sm shadow-green-100/80 border border-green-100/60">
          <div class="flex flex-col sm:flex-row sm:items-center gap-3">
            <div class="flex-shrink-0">
              <span class="inline-block px-3 py-1 bg-pink-200 text-pink-700 rounded-full font-semibold">
                {{ $t('schedule.evening.time') }}
              </span>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-green-700 text-lg">{{ $t('schedule.evening.event') }}</h3>
              <p class="mt-1 text-slate-600">{{ $t('schedule.evening.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>