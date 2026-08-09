import AppShell from "../components/AppShell";

export default function Campaigns() {
  return (
    <AppShell>
      <div className="p-6 lg:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Campaigns</h2>
            <p className="mt-1 text-sm text-slate-500">
              Create, manage and track your customer communication campaigns.
            </p>
          </div>

          <button className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">
            + New Campaign
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Active Campaigns</p>
            <p className="mt-3 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Messages Delivered</p>
            <p className="mt-3 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Conversions</p>
            <p className="mt-3 text-3xl font-bold">0</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
            ✦
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            Campaign Management
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Your campaigns will appear here. You&apos;ll be able to create
            campaigns, select audiences, choose communication channels and
            track results.
          </p>
        </div>
      </div>
    </AppShell>
  );
}