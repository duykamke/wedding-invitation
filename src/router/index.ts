import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/:locale',
      name: 'localized-home',
      component: App
    }
  ]
})

// Navigation guard to handle language detection from URL
router.beforeEach((to) => {
  const locale = to.params.locale as string
  if (locale && (locale === 'en' || locale === 'vi')) {
    // Store the locale in localStorage for persistence
    localStorage.setItem('locale', locale)
  }
})

export default router