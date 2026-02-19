import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_aF7gp8kR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CnL1bsYt.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Now = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0420\u0430\u0437\u043C\u044B\u0448\u043B\u0435\u043D\u0438\u044F \u0410\u041D \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F", "description": "\u0420\u0430\u0437\u043C\u044B\u0448\u043B\u0435\u043D\u0438\u044F \u0410\u041D" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<input id="dateInput" type="date" value="" class="hidden"> <script>\n		// JS \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430 \u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430\n		window.onload = function () {\n			const currentDate = new Date()\n			const currentDay = ("0" + currentDate.getDate()).slice(-2)\n			const currentMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2)\n			const currentYear = currentDate.getFullYear()\n\n			const dateInput = document.getElementById("dateInput")\n			dateInput.value = currentYear + "-" + currentMonth + "-" + currentDay\n\n			const event = new Event("change")\n			dateInput.dispatchEvent(event)\n		}\n\n		document.getElementById("dateInput").onchange = function () {\n			const enteredDate = new Date(this.value)\n			const enteredDay = ("0" + enteredDate.getDate()).slice(-2)\n			const enteredMonth = ("0" + (enteredDate.getMonth() + 1)).slice(-2)\n\n			const monthNames = [\n				"january",\n				"february",\n				"march",\n				"april",\n				"may",\n				"june",\n				"july",\n				"august",\n				"september",\n				"october",\n				"november",\n				"december",\n			]\n\n			const month = monthNames[enteredDate.getMonth()]\n			const reflection = "an"\n\n			const thinkUrl = `/${reflection}/${month}/daily_`\n			const resultLink = thinkUrl + enteredDay + "-" + enteredMonth\n\n			window.location.href = resultLink\n		}\n	<\/script> '], [" ", '<input id="dateInput" type="date" value="" class="hidden"> <script>\n		// JS \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430 \u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430\n		window.onload = function () {\n			const currentDate = new Date()\n			const currentDay = ("0" + currentDate.getDate()).slice(-2)\n			const currentMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2)\n			const currentYear = currentDate.getFullYear()\n\n			const dateInput = document.getElementById("dateInput")\n			dateInput.value = currentYear + "-" + currentMonth + "-" + currentDay\n\n			const event = new Event("change")\n			dateInput.dispatchEvent(event)\n		}\n\n		document.getElementById("dateInput").onchange = function () {\n			const enteredDate = new Date(this.value)\n			const enteredDay = ("0" + enteredDate.getDate()).slice(-2)\n			const enteredMonth = ("0" + (enteredDate.getMonth() + 1)).slice(-2)\n\n			const monthNames = [\n				"january",\n				"february",\n				"march",\n				"april",\n				"may",\n				"june",\n				"july",\n				"august",\n				"september",\n				"october",\n				"november",\n				"december",\n			]\n\n			const month = monthNames[enteredDate.getMonth()]\n			const reflection = "an"\n\n			const thinkUrl = \\`/\\${reflection}/\\${month}/daily_\\`\n			const resultLink = thinkUrl + enteredDay + "-" + enteredMonth\n\n			window.location.href = resultLink\n		}\n	<\/script> '])), maybeRenderHead()) })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/diary-vercel-app/src/pages/an/now.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/diary-vercel-app/src/pages/an/now.astro";
const $$url = "/an/now";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Now,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
