// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    srcDir: 'src/', // корень
    dir: { // маршруты
        pages: 'app/routes',
        layouts: 'app/layouts'
    },
    alias: {
        '@app': 'src/app', // корень инициализации приложения
        '@pages': 'src/pages', // страницы по маршрутам
        '@features': 'src/features', // реализуемые функции
        '@entities': 'src/entities', // бизнес-модели и их UI
        '@shared': 'src/shared', // общие модули, утилиты, дизайн
        '@widgets': 'src/widgets', // крупные UI‑блоки (шапки, меню, секции страниц)
        '@assets': 'src/app/assets', // стили
    },
    css: ['~/app/assets/styles/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "~/app/assets/styles/global/index.scss" as *;`,
                },
            },
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru'
            },
            title: 'Детский центр "Эврика"',
            meta: [
                { name: 'description', content: 'Детский центр развития.' }
            ]
        }
    },
    nitro: {
        routeRules: { // Использовать кеширование на стороне браузера на сутки
            '/fonts/**': { headers: { 'cache-control': 'public, max-age=86400' } },
            '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=86400, immutable' } },
            '/images/**': { headers: { 'cache-control': 'public, max-age=86400, immutable' } },
            '/sprite/**': { headers: { 'cache-control': 'public, max-age=86400, immutable' } },
        },
    },
})