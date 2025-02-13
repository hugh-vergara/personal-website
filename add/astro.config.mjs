import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: `@import 'bootstrap/dist/css/bootstrap.min.css';`
              }
          }
      }
  },

  integrations: [preact()]
});