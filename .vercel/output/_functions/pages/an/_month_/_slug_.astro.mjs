import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_aF7gp8kR.mjs';
import 'kleur/colors';
import { S as SavedPostButton, $ as $$Copy } from '../../../chunks/SavedPostButton_BaGYw51Q.mjs';
import { a as an } from '../../../chunks/an_BqBTXY0G.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_CnL1bsYt.mjs';
import { marked } from 'marked';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://diary365.vercel.app");
const prerender = false;
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug, month } = Astro2.params;
  const monthPosts = an[month];
  const entry = monthPosts?.[slug];
  const dayKey = entry ? Object.keys(entry)[0] : null;
  const postData = dayKey ? entry[dayKey] : null;
  if (!postData) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u0420\u0430\u0437\u043C\u044B\u0448\u043B\u0435\u043D\u0438\u044F \u0410\u041D - ${postData.title}`, "description": "\u0420\u0430\u0437\u043C\u044B\u0448\u043B\u0435\u043D\u0438\u044F \u0410\u041D ", "keywords": "\u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A\u0438 \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432, \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A \u0430\u0430, \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A \u0430\u043D, \u0430\u043B-\u0430\u043D\u043E\u043D \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col gap-12 mx-auto max-w-4xl"> <div class="flex items-center justify-between"> <h3 class="border-l-2 border-[var(--border-soft)] pl-3 text-base font-medium text-[var(--text-muted)] md:text-lg">
Размышления АН
</h3> <div class="flex items-center gap-2"> ${renderComponent($$result2, "SavedPostButton", SavedPostButton, { "client:load": true, "id": `an-${month}-${slug}`, "title": postData.title, "desc": postData.desc, "client:component-hydration": "load", "client:component-path": "@/components/SavedPostButton.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Copy", $$Copy, {})} </div> </div> <div class="-mx-2 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] md:mx-0"> <div class="rounded-2xl p-2"> <div class="grid grid-cols-1 gap-6 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-elevated)] p-6 md:p-10"> <div class="mb-8"> <h1 class="mb-4 text-[var(--text-main)] text-3xl md:text-5xl font-bold"> ${postData.title} </h1> <p class="border-l-2 border-[var(--border-soft)] pl-3 text-[var(--text-muted)]"> <span id="postDesc">${postData.desc}</span> </p> </div> <article id="postContent" class="prose prose-lg max-w-none xl:prose-xl">${unescapeHTML(marked(postData.content))}</article> </div> </div> </div> </main>` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/pages/an/[month]/[slug].astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/diary-vercel-app/src/pages/an/[month]/[slug].astro";
const $$url = "/an/[month]/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
