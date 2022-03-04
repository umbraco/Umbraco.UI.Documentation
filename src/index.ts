import './app';

import { Router } from '@vaadin/router';


// index.ts
const routes = [
    {
        path: '/',
        component: 'x-app',
        children: [
            {
                path: 'playground',
                component: 'x-playground',
                action: async () => {
                    await import('./playground/playground');
                },
                children: [
                    {
                        path: 'basics',
                        component: 'x-basics',
                        action: async () => {
                            await import('./playground/basics/basics');
                        },
                    },
                    {
                        path: 'build-your-own',
                        component: 'x-build-your-own',
                        action: async () => {
                            await import('./playground/build-your-own/build-your-own');
                        },
                    },
                    {
                        path: 'dialog',
                        component: 'x-dialog-example',
                        action: async () => {
                            await import('./playground/dialog/dialog');
                        },
                    },
                ]
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