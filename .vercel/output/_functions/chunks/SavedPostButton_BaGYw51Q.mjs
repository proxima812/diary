import { c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_aF7gp8kR.mjs';
import 'kleur/colors';
import 'clsx';
import { ssr, ssrHydrationKey, ssrAttribute, escape } from 'solid-js/web';
import { createSignal, createMemo, onMount, onCleanup } from 'solid-js';
import { b as buildHrefFromId, S as SAVED_POSTS_CHANGED_EVENT, l as loadSavedPosts } from './bookmarks_DoypANTB.mjs';

const $$Copy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="copyButton" class="group relative flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-elevated)] p-2.5 text-[var(--text-main)] transition-all duration-200 hover:bg-[var(--bg-soft)] active:scale-95" aria-label="Скопировать текст"> <svg class="w-4 h-4 transition-all duration-300 group-[.copied]:scale-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.43 1.5H8.5095C7.1865 1.5 6.138 1.5 5.31825 1.611C4.47375 1.725 3.7905 1.965 3.252 2.50575C2.71275 3.0465 2.4735 3.73275 2.36025 4.58025C2.25 5.40375 2.25 6.456 2.25 7.78425V12.1627C2.25 13.2937 2.94 14.2628 3.92025 14.6693C3.87 13.9867 3.87 13.0305 3.87 12.234V8.4765C3.87 7.51575 3.87 6.687 3.9585 6.024C4.05375 5.313 4.26825 4.632 4.81875 4.07925C5.36925 3.5265 6.048 3.31125 6.756 3.21525C7.416 3.12675 8.241 3.12675 9.19875 3.12675H11.5013C12.4583 3.12675 13.2818 3.12675 13.9425 3.21525C13.7446 2.70997 13.399 2.27605 12.9508 1.97009C12.5026 1.66412 11.9727 1.5003 11.43 1.5Z" fill="currentColor"></path> <path d="M4.94922 8.5477C4.94922 6.5032 4.94922 5.48095 5.58222 4.8457C6.21447 4.21045 7.23222 4.21045 9.26922 4.21045H11.4292C13.4655 4.21045 14.484 4.21045 15.117 4.8457C15.75 5.48095 15.7492 6.5032 15.7492 8.5477V12.1627C15.7492 14.2072 15.7492 15.2294 15.117 15.8647C14.484 16.4999 13.4655 16.4999 11.4292 16.4999H9.26922C7.23297 16.4999 6.21447 16.4999 5.58222 15.8647C4.94922 15.2294 4.94922 14.2072 4.94922 12.1627V8.5477Z" fill="currentColor"></path> </svg> <!-- success icon --> <svg class="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 scale-0 text-[var(--text-main)] opacity-0
		transition-all duration-300 group-[.copied]:opacity-100 group-[.copied]:scale-100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.285 2l-11.285 11.567-5.285-5.285-3.715 3.718 9 9 15-15.285z"></path> </svg> <span class="absolute -top-7 left-1/2 -translate-x-1/2 rounded-md bg-[var(--text-main)] px-2 py-1 text-xs text-[var(--bg-page)] opacity-0
		transition-all duration-300 pointer-events-none
		group-[.copied]:opacity-100 group-[.copied]:-translate-y-2">
Скопировано!
</span> </button>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/components/Copy.astro", void 0);

var _tmpl$ = ["<button", ' type="button" class="rounded-xl border px-3 py-2 text-sm transition-colors border-[var(--border-soft)] bg-[var(--bg-elevated)] text-[var(--text-main)] hover:bg-[var(--bg-soft)] data-[saved=true]:bg-[var(--text-main)] data-[saved=true]:text-[var(--bg-page)]"', ">", "</button>"];
function SavedPostButton(props) {
  const [isSaved, setIsSaved] = createSignal(false);
  createMemo(() => ({
    id: props.id,
    href: buildHrefFromId(props.id),
    title: props.title,
    desc: props.desc,
    savedAt: Date.now()
  }));
  const sync = () => {
    const exists = loadSavedPosts().some((item) => item?.id === props.id);
    setIsSaved(exists);
  };
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
  return ssr(_tmpl$, ssrHydrationKey(), ssrAttribute("data-saved", escape(isSaved(), true), false) + ssrAttribute("aria-pressed", escape(isSaved(), true), false), isSaved() ? "В закладках" : "В закладки");
}

export { $$Copy as $, SavedPostButton as S };
