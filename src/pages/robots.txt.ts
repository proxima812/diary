import type { APIRoute } from "astro"

const getRobotsTxt = () => `

User-agent: *
Disallow: /
`

export const GET: APIRoute = () => new Response(getRobotsTxt())
