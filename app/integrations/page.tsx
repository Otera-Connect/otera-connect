import AppShell from "../components/AppShell";

const integrations = [
  {
    name: "RCS",
    description: "Connect Rich Communication Services for modern business messaging.",
    status: "Not Connected",
    icon: "▣",
  },
  {
    name: "WhatsApp",
    description: "Connect WhatsApp Business for customer conversations and campaigns.",
    status: "Not Connected",
    icon: "◉",
  },
  {
    name: "SMS",
    description: "Connect SMS providers to send transactional and marketing messages.",
    status: "Not Connected",
    icon: "✉",
  },
  {
    name: "Email",
    description: "Connect email services for business communication and campaigns.",
    status: "Not Connected",
    icon: "@" ,
  },
];

export default function Integrations() {
  return (
    <AppShell>
      <div className="p-6 lg:p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Integrations</h2>
          <p className="mt-1 text-sm text-slate-500">
            Connect communication channels and external services.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl text-orange-500">
                    {integration.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {integration.name}
                    </h3>

                    <span className="mt-1 inline-block text-xs text-slate-400">
                      {integration.status}
                    </span>
                  </div>
                </div>

                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50">
                  Connect
                </button>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                {integration.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
          <h3 className="font-semibold text-slate-900">
            Otera Connect Channel Hub
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Connect your communication channels from one platform.
            Once connected, campaigns, conversations, templates and
            automations can use the selected channels.
          </p>
        </div>
      </div>
    </AppShell>
  );
}