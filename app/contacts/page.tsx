import AppShell from "../components/AppShell";

export default function Contacts() {
  return (
    <AppShell>
      <div className="p-6 lg:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Contacts</h2>
            <p className="mt-1 text-sm text-slate-500">
              Manage your customers and business contacts.
            </p>
          </div>

          <button className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">
            + Add Contact
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
            ♙
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            Contact Management
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Your customer database will appear here. You&apos;ll be able
            to import, organize and manage contacts.
          </p>
        </div>
      </div>
    </AppShell>
  );
}