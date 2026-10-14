import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: destination, error } = await supabase
    .from("destinations")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !destination) {
    console.error("Error fetching destination:", error);
    return (
      <main className="min-h-screen bg-gradient-to-br from-teal-900 to-emerald-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-2xl font-semibold text-white">
            Destination not found
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
    <main className="min-h-screen bg-gradient-to-br from-teal-900 to-emerald-800">
      {/* Full-width Cover Photo */}
      <div className="relative h-[60vh] w-full">
        <img
          src={destination.photo_url}
          alt={destination.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent" />

        {/* Overlay Controls */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <Link href="/">
            <Button
              variant="ghost"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white"
            >
              ← Back to Mountains
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
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                  Moderate
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                  Day hike
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {destination.name}
              </h1>
              <p className="text-white/90 mb-2">
                📍 {destination.address}
              </p>
              <p className="text-white/90">★ 4.7 (128 reviews)</p>
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
                {destination.description}
              </p>
            </section>

            {/* Quick Facts Grid */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Quick Facts
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                  <CardContent className="p-4">
                    <p className="text-2xl mb-1">⛰</p>
                    <p className="text-sm font-medium text-white/70">Elevation</p>
                    <p className="text-white">1,200m</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                  <CardContent className="p-4">
                    <p className="text-2xl mb-1">⏱</p>
                    <p className="text-sm font-medium text-white/70">Duration</p>
                    <p className="text-white">4-6 hours</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                  <CardContent className="p-4">
                    <p className="text-2xl mb-1">📏</p>
                    <p className="text-sm font-medium text-white/70">Distance</p>
                    <p className="text-white">8.5 km</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                  <CardContent className="p-4">
                    <p className="text-2xl mb-1">🥾</p>
                    <p className="text-sm font-medium text-white/70">Difficulty</p>
                    <p className="text-white">Moderate</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Location Card */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Location</h2>
              <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-white/70">Address</p>
                    <p className="text-white">{destination.address}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/70">Coordinates</p>
                    <p className="text-white">
                      {destination.latitude}° N, {destination.longitude}° E
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reviews Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Reviews</h2>
              <div className="space-y-4">
                <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white font-medium">
                        JD
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-white">John Doe</p>
                          <div className="flex text-yellow-400">
                            ★★★★★
                          </div>
                        </div>
                        <p className="text-sm text-white/70 mb-2">
                          2 days ago
                        </p>
                        <p className="text-white/90">
                          Amazing hike! The trail was well-maintained and the
                          views at the summit were breathtaking. Highly
                          recommend for nature lovers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white font-medium">
                        MS
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-white">Maria Santos</p>
                          <div className="flex text-yellow-400">
                            ★★★★☆
                          </div>
                        </div>
                        <p className="text-sm text-white/70 mb-2">
                          1 week ago
                        </p>
                        <p className="text-white/90">
                          Great experience! The trail can be challenging for
                          beginners but worth it. Bring plenty of water and
                          wear good hiking shoes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white font-medium">
                        RL
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-white">Roberto Lopez</p>
                          <div className="flex text-yellow-400">
                            ★★★★★
                          </div>
                        </div>
                        <p className="text-sm text-white/70 mb-2">
                          2 weeks ago
                        </p>
                        <p className="text-white/90">
                          Perfect weekend getaway! The sunrise view from the
                          top is absolutely stunning. Will definitely come back.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Map Card */}
              <Card className="bg-white/15 backdrop-blur-md border border-white/25 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-teal-800/50 flex items-center justify-center">
                    <p className="text-white/70">Map placeholder</p>
                  </div>
                  <div className="p-4 space-y-2">
                    <Button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white">
                      Expand
                    </Button>
                    <Button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white">
                      Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Coordinates Card */}
              <Card className="bg-white/15 backdrop-blur-md border border-white/25">
                <CardHeader>
                  <CardTitle className="text-white">Coordinates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white">
                    {destination.latitude}° N, {destination.longitude}° E
                  </p>
                  <Button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white">
                    Copy
                  </Button>
                  <Button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white">
                    Get directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
