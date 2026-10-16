"use client";

import { createClient as createBrowserClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { CategoryChips } from "@/components/CategoryChips";
import { FeaturedCards } from "@/components/FeaturedCards";
import { AboutIloilo } from "@/components/AboutIloilo";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CategoryExploreSection } from "@/components/CategoryExploreSection";
import { MountainList } from "@/components/MountainList";
import { FoodList } from "@/components/FoodList";
import { WalkingList } from "@/components/WalkingList";
import { FestivalList } from "@/components/FestivalList";
import { NatureList } from "@/components/NatureList";
import { HeritageList } from "@/components/HeritageList";
import { AccommodationList } from "@/components/AccommodationList";
import { Footer } from "@/components/Footer";
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

  const handleCategorySelect = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <CategoryExploreSection onCategorySelect={handleCategorySelect} />
      </section>

      <section className="bg-linear-to-br from-teal-900 to-emerald-800">
        <MountainList
          destinations={destinations}
          id="mountain-list"
        />
        <FoodList
          destinations={destinations}
          id="food-list"
        />
        <WalkingList
          destinations={destinations}
          id="walking-list"
        />
        <FestivalList
          destinations={destinations}
          id="festival-list"
        />
        <NatureList
          destinations={destinations}
          id="nature-list"
        />
        <HeritageList
          destinations={destinations}
          id="heritage-list"
        />

        <div id="accommodation-list">
          <AccommodationList accommodations={accommodations} />
        </div>
      </section>

      <DockNavbar />
      <ScrollToTop />

      <Footer />
    </main>
  );
}
