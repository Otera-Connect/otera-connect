import AppShell from "../components/AppShell";

export default function Billing() {
  return (
    <AppShell>
      <div className="p-6 lg:p-8">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">Billing</h2>
            <p className="mt-1 text-sm text-slate-500">
              Manage your Otera Connect subscription and usage.
            </p>
          </div>

          <button className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">
            Upgrade Plan
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Current Plan</p>
            <p className="mt-3 text-2xl font-bold">Free</p>
            <p className="mt-1 text-sm text-slate-400">
              Starter access
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Messages Used</p>
            <p className="mt-3 text-2xl font-bold">0</p>
            <p className="mt-1 text-sm text-slate-400">
              This billing period
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Amount Due</p>
            <p className="mt-3 text-2xl font-bold">₹0</p>
            <p className="mt-1 text-sm text-slate-400">
              No payment required
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8">
          <h3 className="text-lg font-semibold">
            Subscription & Usage
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Your subscription, communication usage, invoices and payment
            history will appear here.
          </p>

          <div className="mt-6 rounded-xl bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                Monthly Message Usage
              </span>

              <span className="text-sm text-slate-500">
                0 / 1,000
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-0 rounded-full bg-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}