import AppShell from "../components/AppShell";

export default function Analytics() {
  return (
    <AppShell>
      <div className="p-6 lg:p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Analytics</h2>
          <p className="mt-1 text-sm text-slate-500">
            Measure communication performance and customer engagement.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Messages Sent</p>
            <p className="mt-3 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Delivered</p>
            <p className="mt-3 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Read</p>
            <p className="mt-3 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Response Rate</p>
            <p className="mt-3 text-3xl font-bold">0%</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
            ◒
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            Communication Analytics
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Performance charts, delivery metrics, campaign results and
            customer engagement insights will appear here.
          </p>
        </div>
      </div>
    </AppShell>
  );
}