import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/index.vue";
import i18n from "../i18n";

const routes = [{ path: "/", component: HomeView }];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const lang = to.query.lang as "en" | "vi";
    const supportedLocales = ["en", "vi"]; // Define your supported locales

    if (lang && supportedLocales.includes(lang)) {
        i18n.global.locale = lang; // Set i18n locale
    } else if (
        !from.query.lang ||
        !supportedLocales.includes(from.query.lang as "en" | "vi")
    ) {
        // Fallback: Set default if no valid lang in current route
        i18n.global.locale = "en";
        // Optionally redirect or update query to default
        if (!to.query.lang) {
            next({
                ...to,
                query: { ...to.query, lang: "en" },
            });
            return;
        }
    }

    next();
});

export default router;
