export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-100">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">Project Name</span>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Build something
            <span className="text-blue-600"> great</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            A production-ready Next.js template with TypeScript, Tailwind CSS, ESLint, Prettier, and
            Cloudflare Pages deployment baked in.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="https://github.com/wezero-studio/template-nextjs"
              className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              View on GitHub
            </a>
            <a
              href="https://github.com/wezero-studio/engineering-standards"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:border-gray-400 hover:text-gray-900"
            >
              Read the SOPs
            </a>
          </div>
        </section>

        <section id="features" className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <h2 className="text-center text-3xl font-bold tracking-tight">What&apos;s included</h2>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-4 text-2xl">{feature.icon}</div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-gray-100">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Start building now</h2>
            <p className="mt-4 text-gray-600">
              Clone this template, run <code className="rounded bg-gray-100 px-2 py-1 text-sm font-mono">bun install</code>,
              and you&apos;re ready to go. Everything is pre-configured so you can focus on your product.
            </p>
            <pre className="mt-8 overflow-x-auto rounded-lg bg-gray-900 p-6 text-left text-sm text-gray-100">
              <code>{`git clone https://github.com/wezero-studio/template-nextjs my-project
cd my-project
bun install
bun run dev`}</code>
            </pre>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-gray-500">
          Built by{" "}
          <a href="https://github.com/wezero-studio" className="text-gray-700 hover:text-gray-900">
            Wezero Studio
          </a>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: "\u26A1",
    title: "Next.js 15 + Turbopack",
    description: "App Router with fast refresh via Turbopack. TypeScript strict mode enabled.",
  },
  {
    icon: "\uD83C\uDFA8",
    title: "Tailwind CSS v4",
    description: "Utility-first styling with automatic class sorting via Prettier plugin.",
  },
  {
    icon: "\u2601\uFE0F",
    title: "Cloudflare Pages",
    description: "Deploy via GitHub Actions with preview URLs on every PR. No account matching needed.",
  },
  {
    icon: "\u2728",
    title: "treefmt + lefthook",
    description: "Unified formatting with pre-commit hooks. Lint, format, and type-check on every commit.",
  },
  {
    icon: "\u2744\uFE0F",
    title: "Nix Dev Environment",
    description: "Reproducible dev shell with flake.nix. One command to get everything you need.",
  },
  {
    icon: "\uD83D\uDD17",
    title: "OpenGraph Ready",
    description: "Pre-configured metadata for rich link previews on Slack, Twitter, and LinkedIn.",
  },
];
