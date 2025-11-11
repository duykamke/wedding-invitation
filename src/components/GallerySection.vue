<template>
  <section class="bg-white py-12 md:py-16">
    <div class="mx-auto max-w-5xl px-6">
      <p class="text-[10px] uppercase tracking-[0.22em] text-green-400">
        {{ $t('gallery.title') }}
      </p>
      <h2 class="mt-2 text-2xl text-green-700 md:text-3xl">
        {{ $t('gallery.subtitle') }}
      </h2>

      <div
        class="mt-6 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <button
          v-for="(image, index) in images"
          :key="index"
          type="button"
          class="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-green-50 shadow-sm shadow-green-100 focus:outline-none focus:ring-2 focus:ring-green-300"
          @click="open(image)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-105"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          ></div>
        </button>
      </div>
    </div>

    <!-- Lightbox overlay -->
    <div
      v-if="active"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4"
      @click.self="close"
    >
      <div class="relative max-h-[90vh] max-w-3xl">
        <button
          type="button"
          class="absolute -right-3 -top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-green-500 shadow"
          @click.stop="close"
        >
          ✕
        </button>
        <img
          :src="active.src"
          :alt="active.alt"
          class="max-h-[90vh] w-full max-w-3xl rounded-2xl object-contain shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    src: "/images/BIN00593.JPG",
    alt: "Pre-wedding moment 1",
  },
  // Add more local images as you add them to /public/images
  {
    src: "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg",
    alt: "Pre-wedding moment 2",
  },
  {
    src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
    alt: "Pre-wedding moment 3",
  },
  {
    src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
    alt: "Pre-wedding moment 4",
  },
];

const active = ref<GalleryImage | null>(null);

const open = (image: GalleryImage) => {
  active.value = image;
};

const close = () => {
  active.value = null;
};
</script>
