import './app';

import { Router } from '@vaadin/router';


// index.ts
const routes = [
    {
        path: '/',
        component: 'x-app',
        children: [
            {
                path: 'basic',
                component: 'x-basic',
                action: async () => {
                    await import('./basic/basic');
                },
            },
            {
                path: 'about',
                component: 'x-about',
                action: async () => {
                    await import('./about/about');
                },
            },
        ]
    },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);