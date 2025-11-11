<template>
  <section class="bg-white py-12 md:py-16">
    <div class="mx-auto max-w-5xl px-6">
      <p class="text-[10px] uppercase tracking-[0.22em] text-green-400">
        {{ $t('couple.title') }}
      </p>
      <h2 class="mt-2 text-2xl text-green-700 md:text-3xl">
        {{ $t('couple.subtitle') }}
      </h2>

      <div class="mt-8 grid gap-8 md:grid-cols-2">
        <div class="space-y-4 text-center">
          <div class="aspect-[3/4] w-[400px] max-w-fit mx-auto overflow-hidden rounded-2xl bg-green-100 shadow-md">
            <img
              src="/images/bride.jpg"
              alt="Bride photo"
              class="h-full w-full object-cover"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
            />
          </div>
          <div class="space-y-2 text-xs leading-relaxed text-slate-700 md:text-sm">
            <h3 class="font-[FzManstein] text-2xl text-green-700">{{ $t('couple.bride.name') }}</h3>
            <p class="text-xs text-slate-700">
              {{ $t('couple.bride.parents') }}
            </p>
            <p class="text-xs text-slate-700">
              {{ $t('couple.bride.origin') }}
            </p>
            <p class="text-xs text-slate-700">
              {{ $t('couple.bride.description') }}
            </p>
          </div>
        </div>

        <div class="space-y-4 text-center">
          <div class="aspect-[3/4] w-[400px] max-w-fit mx-auto overflow-hidden rounded-2xl bg-green-100 shadow-md">
            <img
              src="/images/groom.jpg"
              alt="Groom photo"
              class="h-full w-full object-cover"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
            />
          </div>
          <div class="space-y-2 text-xs leading-relaxed text-slate-700 md:text-sm">
            <h3 class="font-[FzManstein] text-2xl text-green-700">{{ $t('couple.groom.name') }}</h3>
            <p class="text-xs text-slate-700">
              {{ $t('couple.groom.parents') }}
            </p>
            <p class="text-xs text-slate-700">
              {{ $t('couple.groom.origin') }}
            </p>
            <p class="text-xs text-slate-700">
              {{ $t('couple.groom.description') }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-8 rounded-3xl bg-green-50/80 p-5 text-[10px] leading-relaxed text-green-700 shadow-sm md:text-xs"
      >
        {{ $t('couple.invitation') }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
