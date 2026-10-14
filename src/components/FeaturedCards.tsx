import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturedCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="overflow-hidden bg-white/15 backdrop-blur-md border border-white/25 shadow-2xl">
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
            alt="Featured"
            className="h-full w-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg text-white">Featured</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-white/90">Dinagyang Festival</p>
        </CardContent>
      </Card>

      <Card className="overflow-hidden bg-white/15 backdrop-blur-md border border-white/25 shadow-2xl">
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80"
            alt="Trending"
            className="h-full w-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg text-white">Trending</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-white/90">Mt. Napulak</p>
        </CardContent>
      </Card>
    </div>
  );
}
