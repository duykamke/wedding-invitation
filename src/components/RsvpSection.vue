<template>
  <section class="bg-white py-12 md:py-16">
    <div class="mx-auto max-w-xl px-6">
      <p class="text-[10px] uppercase tracking-[0.22em] text-green-400">
        {{ $t('rsvp.title') }}
      </p>
      <h2 class="mt-2 text-2xl text-green-700 md:text-3xl">
        {{ $t('rsvp.subtitle') }}
      </h2>
      <p class="mt-2 text-[10px] text-slate-600 md:text-xs">
        {{ $t('rsvp.description') }}
      </p>

      <form
        class="mt-6 space-y-4 text-[10px] md:text-xs"
        @submit.prevent="handleSubmit"
      >
        <div>
          <label class="block text-slate-700">{{ $t('rsvp.name') }}</label>
          <input
            v-model="form.name"
            type="text"
            required
            class="mt-1 w-full rounded-xl border border-green-100 bg-green-50/40 px-3 py-2 text-xs text-slate-800 outline-none ring-green-200/60 focus:border-green-300 focus:ring"
          />
        </div>

        <div>
          <label class="block text-slate-700">{{ $t('rsvp.guests') }}</label>
          <input
            v-model.number="form.guests"
            type="number"
            min="1"
            max="10"
            required
            class="mt-1 w-full rounded-xl border border-green-100 bg-green-50/40 px-3 py-2 text-xs text-slate-800 outline-none ring-green-200/60 focus:border-green-300 focus:ring"
          />
        </div>

        <div class="flex flex-wrap gap-3">
          <label class="flex items-center gap-2">
            <input
              type="radio"
              value="yes"
              v-model="form.attending"
              class="h-3 w-3 text-green-500"
            />
            <span>{{ $t('rsvp.attending') }}</span>
          </label>
          <label class="flex items-center gap-2">
            <input
              type="radio"
              value="no"
              v-model="form.attending"
              class="h-3 w-3 text-green-500"
            />
            <span>{{ $t('rsvp.notAttending') }}</span>
          </label>
        </div>

        <div v-if="form.attending === 'no'">
          <label class="block text-slate-700">{{ $t('rsvp.wishes') }}</label>
          <textarea
            v-model="form.message"
            rows="3"
            :placeholder="$t('rsvp.wishesPlaceholder')"
            class="mt-1 w-full resize-none rounded-xl border border-green-100 bg-green-50/40 px-3 py-2 text-xs text-slate-800 outline-none ring-green-200/60 focus:border-green-300 focus:ring"
          ></textarea>
        </div>

        <div v-else>
          <label class="block text-slate-700">{{ $t('rsvp.messageOptional') }}</label>
          <textarea
            v-model="form.message"
            rows="2"
            :placeholder="$t('rsvp.messagePlaceholder')"
            class="mt-1 w-full resize-none rounded-xl border border-green-100 bg-green-50/40 px-3 py-2 text-xs text-slate-800 outline-none ring-green-200/60 focus:border-green-300 focus:ring"
          ></textarea>
        </div>

        <p v-if="error" class="text-[9px] text-green-500">
          {{ error }}
        </p>
        <p v-if="success" class="text-[9px] text-emerald-500">
          {{ $t('rsvp.success') }}
        </p>

        <button
          type="submit"
          :disabled="submitting"
          class="mt-2 inline-flex items-center justify-center rounded-full bg-green-500 px-7 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-green-50 shadow-md shadow-green-200 transition hover:-translate-y-0.5 hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span v-if="!submitting">{{ $t('rsvp.submitButton') }}</span>
          <span v-else>{{ $t('rsvp.submitting') }}</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface RsvpForm {
  name: string;
  guests: number | null;
  attending: "yes" | "no" | "";
  message: string;
}

const form = reactive<RsvpForm>({
  name: "",
  guests: null,
  attending: "",
  message: "",
});

const submitting = ref(false);
const success = ref(false);
const error = ref("");

const handleSubmit = async () => {
  error.value = "";
  success.value = false;

  if (!form.name || !form.guests || !form.attending) {
    error.value = t('rsvp.error');
    return;
  }

  submitting.value = true;

  try {
    // TODO: Replace with real API integration
    console.log("RSVP submission", { ...form });
    success.value = true;
  } catch (e) {
    error.value = t('rsvp.errorGeneric');
  } finally {
    submitting.value = false;
  }
};
</script>
