import AppShell from "../components/AppShell";

export default function Inbox() {
  return (
    <AppShell>
      <div className="p-6 lg:p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Inbox</h2>
          <p className="mt-1 text-sm text-slate-500">
            Manage customer conversations across connected channels.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
            ◉
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            Unified Inbox
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Your conversations from RCS, WhatsApp, SMS and Email
            will appear here.
          </p>
        </div>
      </div>
    </AppShell>
  );
}