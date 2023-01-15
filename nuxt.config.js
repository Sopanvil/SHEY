export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'shey',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    axios: {
        // baseURL: process.env.BASE_URL,
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/static/styles/main.scss', '@/static/styles/fonts/font.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: './plugins/vue-concise-slider.js', mode: 'client' }, './plugins/vuelidate.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        [
            'nuxt-mail',
            {
                message: {
                    to: process.env.EMAIL,
                },
                smtp: {
                    host: 'smtp.mail.ru',
                    port: 465,
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.EMAIL_PASS,
                    },
                },
            },
        ],
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build

    builds: [],
};
