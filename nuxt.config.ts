export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'src/', // корень
  dir: {
    // маршруты
    pages: 'app/routes',
    layouts: 'app/layouts',
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
      build: {
          cssCodeSplit: false // объеденяем все стили в один css, чтобы запрос был один
      },
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
      // инфо для SEO
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Детский центр "Эврика"',
      meta: [{ name: 'description', content: 'Детский центр развития.' }],
      link: [
        // предзагрузка шрифтов
        {
          rel: 'preload',
          href: '/fonts/BlissPro-Light.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
            'data-font-display': 'swap'
        },
        {
          rel: 'preload',
          href: '/fonts/BlissPro-Medium.woff',
          as: 'font',
          type: 'font/woff',
          crossorigin: '',
            'data-font-display': 'swap'
        },
        {
          rel: 'preload',
          href: '/fonts/Montserrat-SemiBold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
            'data-font-display': 'swap'
        },
          { // предзагрузка для разработки
              rel: 'preconnect',
              href: 'http://localhost:3000'
          },
      ],
    },
  },
  nitro: {
      compressPublicAssets: true,
    routeRules: {
      // Использовать кеширование на стороне браузера на год
      '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000' } },
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/sprite/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    },
      // minify: true, // Минификация HTML
  },
});