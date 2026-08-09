import AppShell from "../components/AppShell";

export default function Dashboard() {
  return (
    <AppShell>
      <div className="p-6 lg:p-8">

        {/* Welcome */}
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

          {/* Recent Activity */}
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
    </AppShell>
  );
}