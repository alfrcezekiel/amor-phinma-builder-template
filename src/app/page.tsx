"use client";

import { createClient as createBrowserClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { CategoryChips } from "@/components/CategoryChips";
import { FeaturedCards } from "@/components/FeaturedCards";
import { DestinationList } from "@/components/DestinationList";
import { DockNavbar } from "@/components/DockNavbar";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  const [destinations, setDestinations] = useState<any[]>([]);
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
  }, [supabase]);

  return (
    <main className="min-h-screen">
      <HeroSection>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <SearchBar />
          <CategoryChips />
          <FeaturedCards />
        </div>
      </HeroSection>

      <DestinationList destinations={destinations} />

      <DockNavbar />
      <ScrollToTop />

      <footer className="border-t border-white/20 bg-teal-900 py-8 text-center text-sm text-white/70">
        One user. One job. Demoable in three minutes.
      </footer>
    </main>
  );
}
