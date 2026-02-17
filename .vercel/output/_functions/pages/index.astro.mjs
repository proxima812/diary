import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server__GzN6Zez.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B-fhVToY.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const sections = [
    {
      title: "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A\u0438",
      links: [
        { href: "/aa", label: "\u0410\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0435 \u0410\u043B\u043A\u043E\u0433\u043E\u043B\u0438\u043A\u0438" },
        { href: "/an", label: "\u0410\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0435 \u041D\u0430\u0440\u043A\u043E\u043C\u0430\u043D\u044B" },
        { href: "/aa24", label: "\u042F \u0438 \u0410\u0410 24 \u0447\u0430\u0441\u0430" },
        { href: "/aadays", label: "\u0410\u0410 \u0414\u0435\u043D\u044C \u0437\u0430 \u0434\u043D\u0435\u043C" },
        { href: "/alanon", label: "\u0410\u043B-\u0410\u043D\u043E\u043D \u0414\u0435\u043D\u044C \u0437\u0430 \u0414\u043D\u0435\u043C" },
        { href: "/alanonmm", label: "\u0410\u043B-\u0410\u043D\u043E\u043D \u041C\u0443\u0436\u0435\u0441\u0442\u0432\u043E \u041C\u0435\u043D\u044F\u0442\u044C\u0441\u044F" }
      ]
    },
    {
      title: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u0438",
      links: [
        { href: "/calendar", label: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0410\u0410" },
        { href: "/calendar/aa", label: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0410\u0410 (alias)" },
        { href: "/calendar/an", label: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0410\u041D" },
        { href: "/calendar/aa24", label: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u042F \u0438 \u0410\u0410 24 \u0447\u0430\u0441\u0430" },
        { href: "/calendar/aadays", label: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0410\u0410 \u0414\u0435\u043D\u044C \u0437\u0430 \u0434\u043D\u0435\u043C" },
        { href: "/calendar/alanon", label: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0410\u043B-\u0410\u043D\u043E\u043D \u0414\u0435\u043D\u044C \u0437\u0430 \u0414\u043D\u0435\u043C" },
        { href: "/calendar/alanonmm", label: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0410\u043B-\u0410\u043D\u043E\u043D \u041C\u0443\u0436\u0435\u0441\u0442\u0432\u043E \u041C\u0435\u043D\u044F\u0442\u044C\u0441\u044F" }
      ]
    },
    {
      title: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438",
      links: [
        { href: "/privacy", label: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" },
        { href: "/terms", label: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F" },
        { href: "/disclaimer", label: "\u041E\u0442\u043A\u0430\u0437 \u043E\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438" }
      ]
    },
    {
      title: "\u041B\u0438\u0447\u043D\u043E\u0435",
      links: [{ href: "/bookmarks", label: "\u041C\u043E\u0438 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438" }]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A\u0438 \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432", "description": "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A\u0438 \u0410\u0410, \u0410\u041D \u0438 \u0410\u043B-\u0410\u043D\u043E\u043D: \u0440\u0430\u0437\u043C\u044B\u0448\u043B\u0435\u043D\u0438\u044F \u043D\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C, \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u0438 \u0438 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0441\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0438\u043C \u0437\u0430\u043F\u0438\u0441\u044F\u043C.", "keywords": "\u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A\u0438 \u0430\u0430, \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A\u0438 \u0430\u043D, \u0430\u043B-\u0430\u043D\u043E\u043D \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A, \u0440\u0430\u0437\u043C\u044B\u0448\u043B\u0435\u043D\u0438\u044F \u0430\u0430 \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F, \u0434\u0443\u0445\u043E\u0432\u043D\u044B\u0439 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-6 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.25)] sm:p-10"> <div class="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-elevated)] p-5 sm:p-7"> <span class="inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--bg-soft)] px-3 py-1 text-xs font-medium text-[var(--text-main)]">
Ежедневники сообществ
</span> <h1 class="mt-4 text-3xl font-semibold text-[var(--text-main)] sm:text-4xl">
Ежедневники АА, АН и Ал-Анон
</h1> <p class="mt-3 max-w-2xl text-[var(--text-muted)]">
Удобный доступ к записям на каждый день: открывайте нужное сообщество, выбирайте дату и сохраняйте
				в закладки.
</p> </div> <div class="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4"> ${sections.map((section) => renderTemplate`<article class="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-elevated)] p-5"> <h2 class="text-base font-semibold uppercase tracking-wide text-[var(--text-main)]"> ${section.title} </h2> <ul class="mt-4 space-y-2"> ${section.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="flex items-center justify-between rounded-lg border border-[var(--border-soft)] bg-[var(--bg-soft)] px-3 py-2 text-sm text-[var(--text-main)] transition-colors hover:bg-[var(--bg-page)]"> <span>${link.label}</span> <span>→</span> </a> </li>`)} </ul> </article>`)} </div> </section> ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/pages/index.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/diary-vercel-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
