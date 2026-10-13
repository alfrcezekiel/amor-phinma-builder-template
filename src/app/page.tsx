import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  // Test the connection by querying the destinations table
  const { data: destinations, error } = await supabase
    .from("destinations")
    .select("*")
    .limit(5);

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-4 py-12 sm:py-20">
      <header className="flex flex-col gap-3">
        <p className="text-lg font-semibold tracking-tight">
          Team Amor Builder
        </p>
        <span className="inline-flex w-fit items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          PHINMA AI Builder Workshop
        </span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Supabase Connection Test
        </h1>
      </header>

      <div className="flex flex-col gap-4">
        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-900">
            <p className="font-semibold">Connection failed</p>
            <p className="text-sm">{error.message}</p>
          </div>
        ) : (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-900">
            <p className="font-semibold">Connection successful!</p>
            <p className="text-sm">
              Found {destinations?.length || 0} destinations in the database.
            </p>
          </div>
        )}

        {destinations && destinations.length > 0 && (
          <div className="rounded-lg border p-4">
            <p className="mb-2 font-semibold">Sample data:</p>
            <pre className="text-xs">
              {JSON.stringify(destinations, null, 2)}
            </pre>
          </div>
        )}
      </div>

      <footer className="mt-auto border-t border-border pt-6 text-sm text-muted-foreground">
        One user. One job. Demoable in three minutes.
      </footer>
    </main>
  );
}
