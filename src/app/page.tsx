import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-8 px-6 py-16">
      <div>
        <p className="text-sm font-medium text-zinc-500">Kikplate plate</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900">
          Next.js SaaS starter
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          App Router, Tailwind, Prisma, PostgreSQL, Docker, and CI defaults. Add
          auth, billing, and your product on top.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/dashboard"
          className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Open dashboard
        </Link>
        <a
          href="https://github.com/kikplate-plates/nextjs-saas-starter"
          className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
          rel="noreferrer"
          target="_blank"
        >
          View repository
        </a>
      </div>
    </main>
  );
}
