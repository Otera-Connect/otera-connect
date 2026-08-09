import AppShell from "../components/AppShell";

export default function Automations() {
  return (
    <AppShell>
      <div className="p-6 lg:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Automations</h2>
            <p className="mt-1 text-sm text-slate-500">
              Build automated communication workflows for your customers.
            </p>
          </div>

          <button className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">
            + New Automation
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Active Automations</p>
            <p className="mt-3 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Messages Triggered</p>
            <p className="mt-3 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Workflows</p>
            <p className="mt-3 text-3xl font-bold">0</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
            ⚙
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            Automation Engine
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Create workflows that automatically respond to events,
            schedule messages and manage customer journeys.
          </p>
        </div>
      </div>
    </AppShell>
  );
}