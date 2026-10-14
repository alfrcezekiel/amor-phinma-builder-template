"use client";

import { createClient as createBrowserClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { CategoryChips } from "@/components/CategoryChips";
import { FeaturedCards } from "@/components/FeaturedCards";
import { AboutIloilo } from "@/components/AboutIloilo";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DestinationList } from "@/components/DestinationList";
import { AccommodationList } from "@/components/AccommodationList";
import { DockNavbar } from "@/components/DockNavbar";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  const [destinations, setDestinations] = useState<any[]>([]);
  const [accommodations, setAccommodations] = useState<any[]>([]);
  const supabase = createBrowserClient();

  useEffect(() => {
    const fetchDestinations = async () => {
      const { data } = await supabase
        .from("destinations")
        .select("*")
        .order("name");
      if (data) setDestinations(data);
    };
    const fetchAccommodations = async () => {
      const { data } = await supabase
        .from("accommodations")
        .select("*")
        .order("name");
      if (data) setAccommodations(data);
    };
    fetchDestinations();
    fetchAccommodations();
  }, [supabase]);

  return (
    <main className="min-h-screen">
      <section id="explore" className="min-h-screen">
        <HeroSection>
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <SearchBar />
            <div id="categories">
              <CategoryChips />
            </div>
            <FeaturedCards />
          </div>
        </HeroSection>
      </section>

      <section className="bg-linear-to-br from-teal-900 to-emerald-800">
        <div id="about">
          <AboutIloilo />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
      </section>

      <DestinationList destinations={destinations} />

      <AccommodationList accommodations={accommodations} />

      <DockNavbar />
      <ScrollToTop />

      <footer className="border-t border-white/20 bg-teal-900 py-8 text-center text-sm text-white/70">
        One user. One job. Demoable in three minutes.
      </footer>
    </main>
  );
}
