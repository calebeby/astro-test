import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import * as severed from 'severed'

export default defineConfig({
  integrations: [preact()],
  vite: {
    plugins: [severed.vitePlugin()],
  },
})
