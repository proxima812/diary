import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_aF7gp8kR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CnL1bsYt.mjs';
export { renderers } from '../renderers.mjs';

const $$Bot = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u0432 Telegram-\u0431\u043E\u0442", "description": "\u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u0437\u0430\u043A\u0440\u044B\u0442, \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442\u0435 \u0432 Telegram-\u0431\u043E\u0442\u0430.", "indexRobots": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto max-w-2xl px-4 py-16 text-center"> <h1 class="text-3xl font-semibold text-[var(--text-main)]">Переход в Telegram-бота</h1> <p class="mt-4 text-[var(--text-muted)]">
Веб-версия закрыта. Ссылку на Telegram-бота добавим сюда.
</p> </main> ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/pages/bot.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/diary-vercel-app/src/pages/bot.astro";
const $$url = "/bot";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Bot,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
