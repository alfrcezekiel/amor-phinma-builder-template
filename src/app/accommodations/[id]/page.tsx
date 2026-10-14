import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AccommodationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: accommodation, error } = await supabase
    .from("accommodations")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !accommodation) {
    return (
      <main className="min-h-screen bg-linear-to-br from-blue-900 to-indigo-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-2xl font-semibold text-white">
            Accommodation not found
          </h1>
          {error && (
            <p className="mt-2 text-sm text-white/70">
              Error: {error.message}
            </p>
          )}
          <Link href="/">
            <Button className="mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-900 to-indigo-800">
      {/* Full-width Cover Photo */}
      <div className="relative h-[60vh] w-full">
        <img
          src={accommodation.photo_url}
          alt={accommodation.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-blue-900/80 to-transparent" />

        {/* Overlay Controls */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <Link href="/">
            <Button
              variant="ghost"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white"
            >
              ← Back to Home
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white"
            >
              ♥
            </Button>
            <Button
              variant="ghost"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white"
            >
              ⤴ Share
            </Button>
          </div>
        </div>

        {/* Glass Title Card */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="mx-auto max-w-6xl">
            <Card className="bg-white/15 backdrop-blur-xl border border-white/25 p-6 shadow-2xl">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white capitalize">
                  {accommodation.type}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {accommodation.name}
              </h1>
              <p className="text-white/90 mb-2">
                📍 {accommodation.address}
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Two-column Layout */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">About</h2>
              <p className="text-white/90 leading-relaxed">
                {accommodation.description}
              </p>
            </section>

            {/* Contact Information Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Information
              </h2>
              <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-white/70">Address</p>
                    <p className="text-white">{accommodation.address}</p>
                  </div>
                  {accommodation.phone && (
                    <div>
                      <p className="text-sm font-medium text-white/70">Phone</p>
                      <p className="text-white">{accommodation.phone}</p>
                    </div>
                  )}
                  {accommodation.email && (
                    <div>
                      <p className="text-sm font-medium text-white/70">Email</p>
                      <p className="text-white">{accommodation.email}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>

            {/* Reviews Section (placeholder for future) */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Reviews</h2>
              <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                <CardContent className="p-6">
                  <p className="text-white/70">
                    Reviews coming soon! Sign up to be notified when we launch
                    user reviews.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Contact Actions Card */}
              <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                <CardHeader>
                  <CardTitle className="text-white">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {accommodation.phone && (
                    <Button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white">
                      Call {accommodation.phone}
                    </Button>
                  )}
                  {accommodation.email && (
                    <Button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white">
                      Email {accommodation.email}
                    </Button>
                  )}
                  <Button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Type Card */}
              <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                <CardHeader>
                  <CardTitle className="text-white">Accommodation Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white capitalize">{accommodation.type}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
