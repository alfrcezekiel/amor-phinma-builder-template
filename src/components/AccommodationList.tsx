import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Accommodation {
  id: string;
  name: string;
  description: string;
  address: string;
  photo_url: string;
  type: string;
}

interface AccommodationListProps {
  accommodations: Accommodation[];
}

export function AccommodationList({ accommodations }: AccommodationListProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-3xl font-semibold text-white">
          Hotels & Condominiums
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accommodations.map((accommodation) => (
            <Link
              key={accommodation.id}
              href={`/accommodations/${accommodation.id}`}
            >
              <Card className="overflow-hidden bg-white/15 backdrop-blur-md border border-white/25 transition-all hover:scale-105 hover:shadow-2xl cursor-pointer h-full">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={accommodation.photo_url}
                    alt={accommodation.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1 text-lg text-white">
                    {accommodation.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="line-clamp-2 text-sm text-white/90">
                    {accommodation.description}
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-white/70">Address</p>
                    <p className="text-xs text-white/90">{accommodation.address}</p>
                  </div>
                  <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white capitalize">
                    {accommodation.type}
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
