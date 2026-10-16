import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Destination {
  id: string;
  name: string;
  description: string;
  address: string;
  photo_url: string;
  category: string;
}

interface NatureListProps {
  destinations: Destination[];
  visible?: boolean;
  id?: string;
}

export function NatureList({ destinations, visible = false, id }: NatureListProps) {
  const natureDestinations = destinations
    .filter((dest) => dest.category === "nature")
    .slice(0, 6);

  if (!visible || natureDestinations.length === 0) return null;

  return (
    <section id={id} className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-3xl font-semibold text-white">
          Nature & Parks
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {natureDestinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.id}`}
            >
              <Card className="overflow-hidden bg-white/15 backdrop-blur-md border border-white/25 transition-all hover:scale-105 hover:shadow-2xl cursor-pointer h-full">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={destination.photo_url}
                    alt={destination.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1 text-lg text-white">
                    {destination.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="line-clamp-2 text-sm text-white/90">
                    {destination.description}
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-white/70">Address</p>
                    <p className="text-xs text-white/90">{destination.address}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
