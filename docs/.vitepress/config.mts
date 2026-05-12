import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/walmart-ai-workshop/',
  title: "Leading with AI – Walmart",
  description: "Workshop práctico para líderes de Walmart sobre decisiones asistidas por IA",
  lang: 'es-ES',
  themeConfig: {
    logo: '/logo.avif',
    siteTitle: false,
    nav: [
      { text: 'Inicio', link: '/' },
    ],

    sidebar: [
      {
        text: 'Leading with AI – Walmart',
        items: [
          { text: 'Workshop', link: '/leading-with-ai-walmart' }
        ]
      }
    ],

    outline: {
      level: 2,
      label: 'En esta página'
    },

    socialLinks: [],

    footer: {
      message: 'Diseñado para uso educativo.',
      copyright: 'Copyright © 2024 Leading with AI – Walmart'
    }
  }
})
