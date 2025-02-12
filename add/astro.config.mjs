import { defineConfig } from 'astro/config';

export default defineConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import 'bootstrap/dist/css/bootstrap.min.css';`
                }
            }
        }
    }
});
