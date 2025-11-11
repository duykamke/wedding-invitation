<template>
  <section class="bg-light-green-50/90 py-12 md:py-16">
    <div class="mx-auto max-w-4xl px-6 text-center">
      <p class="text-[10px] uppercase tracking-[0.22em] text-green-400">
        {{ $t('dresscode.title') }}
      </p>
      <h2 class="mt-2 text-2xl text-green-700 md:text-3xl">
        {{ $t('dresscode.subtitle') }}
      </h2>

      <div class="mt-6 grid gap-3 text-[9px] md:grid-cols-2 md:text-xs">
        <div
          class="rounded-2xl bg-white p-4 shadow-sm shadow-green-100/80"
        >
          <h3 class="font-semibold text-green-600">{{ $t('dresscode.women') }}</h3>
          <p class="mt-1 text-slate-600 whitespace-pre-line">
            {{ $t('dresscode.womenDescription') }}
          </p>
        </div>
        <div
          class="rounded-2xl bg-white p-4 shadow-sm shadow-green-100/80"
        >
          <h3 class="font-semibold text-green-600">{{ $t('dresscode.men') }}</h3>
          <p class="mt-1 text-slate-600 whitespace-pre-line">
            {{ $t('dresscode.menDescription') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
