import { c as createComponent$1, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aF7gp8kR.mjs';
import 'kleur/colors';
import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal, onMount, onCleanup, Show, For } from 'solid-js';
import { S as SAVED_POSTS_CHANGED_EVENT, b as buildHrefFromId, l as loadSavedPosts } from '../chunks/bookmarks_DoypANTB.mjs';
import { $ as $$Layout } from '../chunks/Layout_CnL1bsYt.mjs';
export { renderers } from '../renderers.mjs';

var _tmpl$ = ["<div", ' class="flex justify-center sm:justify-end"><button type="button" class="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-elevated)] px-4 py-2 text-sm text-[var(--text-main)] transition-colors hover:bg-[var(--bg-soft)]">Очистить закладки</button></div>'], _tmpl$2 = ["<div", ' class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">', "</div>"], _tmpl$3 = ["<div", ' class="flex flex-col gap-6">', "</div>"], _tmpl$4 = ["<p", ' class="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)] p-6 text-center text-[var(--text-muted)]">Пока нет сохраненных ежедневников.</p>'], _tmpl$5 = ["<p", ' class="mt-2 text-sm text-[var(--text-muted)]">', "</p>"], _tmpl$6 = ["<article", ' class="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)] p-4"><h2 class="text-lg font-semibold text-[var(--text-main)]">', "</h2><!--$-->", '<!--/--><div class="mt-4 flex items-center gap-4 text-sm"><a', ' class="text-[var(--text-main)] underline underline-offset-4">Читать</a><button type="button" class="text-[var(--text-muted)] underline underline-offset-4">Удалить</button></div></article>'];
function SavedPosts() {
  const [items, setItems] = createSignal([]);
  const sync = () => setItems(loadSavedPosts());
  onMount(() => {
    sync();
    window.addEventListener("storage", sync);
    document.addEventListener(SAVED_POSTS_CHANGED_EVENT, sync);
  });
  onCleanup(() => {
    if (typeof window === "undefined") return;
    window.removeEventListener("storage", sync);
    document.removeEventListener(SAVED_POSTS_CHANGED_EVENT, sync);
  });
  return ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(Show, {
    get when() {
      return items().length > 0;
    },
    get fallback() {
      return ssr(_tmpl$4, ssrHydrationKey());
    },
    get children() {
      return [ssr(_tmpl$, ssrHydrationKey()), ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent(For, {
        get each() {
          return items();
        },
        children: (item) => ssr(_tmpl$6, ssrHydrationKey(), escape(item.title), escape(createComponent(Show, {
          get when() {
            return item.desc;
          },
          get children() {
            return ssr(_tmpl$5, ssrHydrationKey(), escape(item.desc));
          }
        })), ssrAttribute("href", escape(item.href, true) || escape(buildHrefFromId(item.id), true), false))
      })))];
    }
  })));
}

const $$Bookmarks = createComponent$1(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A\u043E\u0432", "description": "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u0410\u0410, \u0410\u041D \u0438 \u0410\u043B-\u0410\u043D\u043E\u043D \u0432 \u0432\u0430\u0448\u0435\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435.", "keywords": "\u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A\u043E\u0432, \u0430\u0430 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438, \u0430\u043D \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto flex w-full max-w-6xl flex-col gap-6"> <section class="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-6 sm:p-10"> <h1 class="text-3xl font-semibold text-[var(--text-main)] sm:text-4xl">Закладки</h1> <p class="mt-3 text-[var(--text-muted)]">Сохраненные записи доступны только в этом браузере и на этом устройстве.</p> <div class="mt-8"> ${renderComponent($$result2, "SavedPosts", SavedPosts, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/SavedPosts.tsx", "client:component-export": "default" })} </div> </section> </main> ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/pages/bookmarks.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/diary-vercel-app/src/pages/bookmarks.astro";
const $$url = "/bookmarks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Bookmarks,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
