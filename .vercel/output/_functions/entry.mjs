import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BUJzoe8p.mjs';
import { manifest } from './manifest_BTSDMHpF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/aa/now.astro.mjs');
const _page3 = () => import('./pages/aa/_month_/_slug_.astro.mjs');
const _page4 = () => import('./pages/aa.astro.mjs');
const _page5 = () => import('./pages/aa24/now.astro.mjs');
const _page6 = () => import('./pages/aa24/_month_/_slug_.astro.mjs');
const _page7 = () => import('./pages/aa24.astro.mjs');
const _page8 = () => import('./pages/aadays/now.astro.mjs');
const _page9 = () => import('./pages/aadays/_month_/_slug_.astro.mjs');
const _page10 = () => import('./pages/aadays.astro.mjs');
const _page11 = () => import('./pages/alanon/now.astro.mjs');
const _page12 = () => import('./pages/alanon/_month_/_slug_.astro.mjs');
const _page13 = () => import('./pages/alanon.astro.mjs');
const _page14 = () => import('./pages/alanonmm/now.astro.mjs');
const _page15 = () => import('./pages/alanonmm/_month_/_slug_.astro.mjs');
const _page16 = () => import('./pages/alanonmm.astro.mjs');
const _page17 = () => import('./pages/an/now.astro.mjs');
const _page18 = () => import('./pages/an/_month_/_slug_.astro.mjs');
const _page19 = () => import('./pages/an.astro.mjs');
const _page20 = () => import('./pages/bookmarks.astro.mjs');
const _page21 = () => import('./pages/bot.astro.mjs');
const _page22 = () => import('./pages/calendar/aa.astro.mjs');
const _page23 = () => import('./pages/calendar/aa24.astro.mjs');
const _page24 = () => import('./pages/calendar/aadays.astro.mjs');
const _page25 = () => import('./pages/calendar/alanon.astro.mjs');
const _page26 = () => import('./pages/calendar/alanonmm.astro.mjs');
const _page27 = () => import('./pages/calendar/an.astro.mjs');
const _page28 = () => import('./pages/calendar.astro.mjs');
const _page29 = () => import('./pages/disclaimer.astro.mjs');
const _page30 = () => import('./pages/privacy.astro.mjs');
const _page31 = () => import('./pages/robots.txt.astro.mjs');
const _page32 = () => import('./pages/terms.astro.mjs');
const _page33 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/aa/now.astro", _page2],
    ["src/pages/aa/[month]/[slug].astro", _page3],
    ["src/pages/aa/index.astro", _page4],
    ["src/pages/aa24/now.astro", _page5],
    ["src/pages/aa24/[month]/[slug].astro", _page6],
    ["src/pages/aa24/index.astro", _page7],
    ["src/pages/aadays/now.astro", _page8],
    ["src/pages/aadays/[month]/[slug].astro", _page9],
    ["src/pages/aadays/index.astro", _page10],
    ["src/pages/alanon/now.astro", _page11],
    ["src/pages/alanon/[month]/[slug].astro", _page12],
    ["src/pages/alanon/index.astro", _page13],
    ["src/pages/alanonmm/now.astro", _page14],
    ["src/pages/alanonmm/[month]/[slug].astro", _page15],
    ["src/pages/alanonmm/index.astro", _page16],
    ["src/pages/an/now.astro", _page17],
    ["src/pages/an/[month]/[slug].astro", _page18],
    ["src/pages/an/index.astro", _page19],
    ["src/pages/bookmarks.astro", _page20],
    ["src/pages/bot.astro", _page21],
    ["src/pages/calendar/aa.astro", _page22],
    ["src/pages/calendar/aa24.astro", _page23],
    ["src/pages/calendar/aadays.astro", _page24],
    ["src/pages/calendar/alanon.astro", _page25],
    ["src/pages/calendar/alanonmm.astro", _page26],
    ["src/pages/calendar/an.astro", _page27],
    ["src/pages/calendar/index.astro", _page28],
    ["src/pages/disclaimer.astro", _page29],
    ["src/pages/privacy.astro", _page30],
    ["src/pages/robots.txt.ts", _page31],
    ["src/pages/terms.astro", _page32],
    ["src/pages/index.astro", _page33]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "0d9e6a92-47fa-4b3c-8080-45efa8c8e0d9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
