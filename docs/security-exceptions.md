# Security exceptions

Documented `pnpm audit` findings that are *temporarily* unpatched, with the
reason and the planned remediation date. Each entry must be removed (or
re-documented) on every dependency-bump PR.

Source of truth: `pnpm audit --audit-level=moderate` against the lockfile.

---

## Open

### `next` — GHSA-26hh-7cqf-hhc6 (high)

- **Package**: `next@15.5.16`
- **Advisory**: Middleware / Proxy bypass in App Router applications via
  segment-prefetch routes (incomplete-fix follow-up).
- **Fixed in**: `next@15.5.18` (backport tag).
- **Why deferred**: `15.5.18` was published 2026-05-10. Our `.npmrc` enforces
  `min-release-age=7` so freshly-published packages cannot land in the
  lockfile until they've cooled for a week. The bump is scheduled for
  **2026-05-17** (7 days after publish), at which point a follow-up PR will
  `pnpm update next@15.5.18 eslint-config-next@15.5.18` and remove this entry.
- **Risk note**: The exploit requires a Middleware-driven proxy bypass route.
  This site does not currently ship App Router Middleware — `middleware.ts`
  is absent from the project root. The vulnerability is not exploitable in
  our current deployment surface.

### `postcss` — GHSA-qx2v-qp2m-jg93 (moderate)

- **Package**: `postcss@<8.5.10` (transitive via `next`)
- **Advisory**: XSS via unescaped `</style>` in CSS Stringify Output.
- **Fixed in**: `postcss@>=8.5.10`.
- **Why deferred**: `postcss` is a transitive of `next`. Pinning the
  transitive directly would create a maintenance burden; bumping `next` to
  `15.5.18` (see above) will pick up a patched `postcss` automatically.
- **Risk note**: Affects build-time CSS stringification, not runtime user
  input. No attacker-controlled CSS is processed by our build pipeline.

---

## Resolved

_(none yet — append below as exceptions are cleared)_
