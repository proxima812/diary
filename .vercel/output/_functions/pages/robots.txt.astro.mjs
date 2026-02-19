export { renderers } from '../renderers.mjs';

const getRobotsTxt = () => `

User-agent: *
Disallow: /
`;
const GET = () => new Response(getRobotsTxt());

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
