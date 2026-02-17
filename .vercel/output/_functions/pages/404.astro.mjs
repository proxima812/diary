import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server__GzN6Zez.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B-fhVToY.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u041E\u0448\u0438\u0431\u043A\u0430 404 - \u0442\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442", "description": "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043E\u043D\u0430 \u0431\u044B\u043B\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0430." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-center text-5xl font-bold">Ошибка 404 - такой страницы не существует</h1> ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/pages/404.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/diary-vercel-app/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
