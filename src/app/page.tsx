"use client";

import { createClient as createBrowserClient } from "@/lib/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [destinations, setDestinations] = useState<any[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const supabase = createBrowserClient();

  useEffect(() => {
    const fetchDestinations = async () => {
      const { data } = await supabase
        .from("destinations")
        .select("*")
        .order("name");
      if (data) setDestinations(data);
    };
    fetchDestinations();

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [supabase]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen bg-gradient-to-br from-teal-800 via-emerald-700 to-green-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Iloilo sunset"
            className="h-full w-full object-cover opacity-40"
          />
          {/* Dark teal green gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/60 via-emerald-800/60 to-green-700/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Lakat na, Iloilo.
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90">
            Discover the beauty of Iloilo City and Province. From mountain
            peaks to cultural treasures, your adventure awaits.
          </p>

          {/* Glass Search Bar */}
          <div className="mb-6 rounded-xl bg-white/15 backdrop-blur-lg border border-white/25 p-4 shadow-2xl">
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  placeholder="Where to?"
                  className="bg-transparent border-white/40 text-white placeholder:text-white/70"
                />
              </div>
              <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white">
                Explore
              </Button>
            </div>
          </div>

          {/* Category Chips */}
          <div className="mb-12 flex flex-wrap gap-3">
            {["Mountains", "Food", "Festivals", "Hotels"].map((category) => (
              <Link
                key={category}
                href="/"
                className="cursor-pointer rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md border border-white/25 transition-all hover:bg-white/25"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Floating Glass Cards */}
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
        </div>
      </section>

      {/* Destinations List Section */}
      <section className="bg-gradient-to-br from-teal-900 to-emerald-800 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-3xl font-semibold text-white">
            Mountain & Hiking Destinations
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
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
                    <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white capitalize">
                      {destination.category}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dock-style Navbar */}
      <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/25 px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-6">
          <div className="text-lg font-bold text-white">Lakat Iloilo</div>
          <div className="h-6 w-px bg-white/25" />
          <div className="flex gap-4 text-sm font-medium text-white/90">
            <span className="cursor-pointer hover:text-white">Explore</span>
            <span className="cursor-pointer hover:text-white">Categories</span>
            <span className="cursor-pointer hover:text-white">Features</span>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 p-3 text-white shadow-2xl transition-all hover:bg-white/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      )}

      <footer className="border-t border-white/20 bg-teal-900 py-8 text-center text-sm text-white/70">
        One user. One job. Demoable in three minutes.
      </footer>
    </main>
  );
}
