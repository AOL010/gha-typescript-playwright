import {defineConfig} from '@playwright/test';

export default defineConfig({
    reporter: [
        ['html']
    ],
    use: {
        headless: true,
        screenshot: 'on',
        video: 'on',
    },
});
