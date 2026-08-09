const navigation = [
  { icon: "▦", label: "Dashboard", active: true },
  { icon: "◉", label: "Inbox" },
  { icon: "♙", label: "Contacts" },
  { icon: "✦", label: "Campaigns" },
  { icon: "⚙", label: "Automations" },
  { icon: "▤", label: "Templates" },
  { icon: "◒", label: "Analytics" },
  { icon: "₹", label: "Billing" },
  { icon: "◎", label: "Integrations" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white md:flex">

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

          <nav className="flex-1 px-3 py-6">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Workspace
            </p>

            <div className="space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.label}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    item.active
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="flex h-7 w-7 items-center justify-center text-base">
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

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

          <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
            <div>
              <h1 className="text-xl font-semibold">
                Dashboard
              </h1>
              <p className="text-sm text-slate-400">
                Welcome to Otera Connect
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
                + New Campaign
              </button>

              <div className="hidden h-9 w-px bg-slate-200 sm:block" />

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
                O
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="flex-1 overflow-auto p-6 lg:p-8">

            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Good morning, Partner 👋
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Here&apos;s what&apos;s happening with your communication today.
              </p>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">
                  Total Contacts
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-3xl font-bold">0</p>
                  <span className="text-xs font-medium text-slate-400">
                    Contacts
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">
                  Messages Sent
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-3xl font-bold">0</p>
                  <span className="text-xs font-medium text-slate-400">
                    This month
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">
                  Campaigns
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-3xl font-bold">0</p>
                  <span className="text-xs font-medium text-slate-400">
                    Active
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">
                  Conversations
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-3xl font-bold">0</p>
                  <span className="text-xs font-medium text-slate-400">
                    Open
                  </span>
                </div>
              </div>

            </div>

            {/* Main Panels */}
            <div className="mt-6 grid gap-6 lg:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">

                <div>
                  <h3 className="font-semibold">
                    Recent Activity
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Your latest communication activity will appear here.
                  </p>
                </div>

                <div className="flex min-h-64 items-center justify-center">
                  <div className="text-center">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                      ◌
                    </div>

                    <p className="mt-4 font-medium text-slate-700">
                      No activity yet
                    </p>

                    <p className="mt-1 max-w-sm text-sm text-slate-400">
                      Connect your first communication channel to start
                      sending and receiving messages.
                    </p>

                  </div>
                </div>

              </div>

              {/* Quick Actions */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <h3 className="font-semibold">
                  Quick Actions
                </h3>

                <div className="mt-5 space-y-3">

                  <button className="w-full rounded-xl border border-slate-200 p-4 text-left transition hover:border-orange-200 hover:bg-orange-50">
                    <p className="font-medium">
                      Add Contacts
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Import or create customers
                    </p>
                  </button>

                  <button className="w-full rounded-xl border border-slate-200 p-4 text-left transition hover:border-orange-200 hover:bg-orange-50">
                    <p className="font-medium">
                      Create Campaign
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Reach your customers
                    </p>
                  </button>

                  <button className="w-full rounded-xl border border-slate-200 p-4 text-left transition hover:border-orange-200 hover:bg-orange-50">
                    <p className="font-medium">
                      Connect Channel
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      RCS, WhatsApp, SMS or Email
                    </p>
                  </button>

                </div>

              </div>

            </div>

          </div>
        </section>
      </div>
    </main>
  );
}