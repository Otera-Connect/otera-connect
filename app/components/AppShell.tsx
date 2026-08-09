import Link from "next/link";

const navigation = [
  { icon: "▦", label: "Dashboard", href: "/dashboard" },
  { icon: "◉", label: "Inbox", href: "/inbox" },
  { icon: "♙", label: "Contacts", href: "/contacts" },
  { icon: "✦", label: "Campaigns", href: "/campaigns" },
  { icon: "⚙", label: "Automations", href: "/automations" },
  { icon: "▤", label: "Templates", href: "/templates" },
  { icon: "◒", label: "Analytics", href: "/analytics" },
  { icon: "₹", label: "Billing", href: "/billing" },
  { icon: "◎", label: "Integrations", href: "/integrations" },
];

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white md:flex">

          {/* Brand */}
          <div className="flex h-20 items-center border-b border-slate-200 px-6">
            <div>
              <div className="text-xl font-bold tracking-tight">
                Otera<span className="text-orange-500"> Connect</span>
              </div>

              <div className="mt-0.5 text-xs text-slate-400">
                Business Communication
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-6">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Workspace
            </p>

            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-orange-50 hover:text-orange-600"
                >
                  <span className="flex h-7 w-7 items-center justify-center text-base">
                    {item.icon}
                  </span>

                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* User */}
          <div className="border-t border-slate-200 p-4">
            <div className="flex items-center gap-3 rounded-xl p-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                O
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  Otera Admin
                </p>

                <p className="truncate text-xs text-slate-400">
                  Administrator
                </p>
              </div>
            </div>
          </div>

        </aside>

        {/* Main Area */}
        <section className="flex min-w-0 flex-1 flex-col">

          {/* Header */}
          <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">

            <div>
              <h1 className="text-xl font-semibold">
                Otera Connect
              </h1>

              <p className="text-sm text-slate-400">
                Business Communication Platform
              </p>
            </div>

            <div className="flex items-center gap-4">

              <Link
                href="/campaigns"
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                + New Campaign
              </Link>

              <div className="hidden h-9 w-px bg-slate-200 sm:block" />

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
                O
              </div>

            </div>
          </header>

          {/* Page Content */}
          <div className="flex-1 overflow-auto">
            {children}
          </div>

        </section>
      </div>
    </main>
  );
}