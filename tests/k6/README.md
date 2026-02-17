# k6 load tests for Vercel Free

Install k6 (macOS):

```bash
brew install k6
```

## 100 concurrent users, with cache

```bash
bun run k6:tabs:100
```

## 100 concurrent users, cache bypass (worst-case)

```bash
bun run k6:tabs:100:bypass
```

## Custom target

```bash
BASE_URL="https://your-project.vercel.app" bun run k6:tabs:100
```

Notes:
- `CACHE_MODE=edge` reuses the same URLs to let Vercel/edge cache warm up.
- `CACHE_MODE=bypass` adds a cache-busting query and `no-cache` headers.
- The scenario includes a warm-up phase, then a steady 100 VU tab-switch pattern.
