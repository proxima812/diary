import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server__GzN6Zez.mjs';
import 'kleur/colors';
import { b as buildAvailableSlugs, c as countAvailableEntries, $ as $$ReflectionCalendar } from '../../chunks/calendar_1RNRTTq5.mjs';
import { a as aa24hours } from '../../chunks/aa24hours_SWDMy25V.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B-fhVToY.mjs';
export { renderers } from '../../renderers.mjs';

const $$Aa24 = createComponent(($$result, $$props, $$slots) => {
  const availableSlugs = buildAvailableSlugs(aa24hours);
  const entriesCount = countAvailableEntries(availableSlugs);
  const title = "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u042F \u0438 \u0410\u0410 24 \u0447\u0430\u0441\u0430";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ReflectionCalendar", $$ReflectionCalendar, { "basePath": "aa24", "title": title, "entriesCount": entriesCount, "availableSlugs": availableSlugs })} ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/pages/calendar/aa24.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/diary-vercel-app/src/pages/calendar/aa24.astro";
const $$url = "/calendar/aa24";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Aa24,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
