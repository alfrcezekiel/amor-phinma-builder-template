"use client";

import { useState, useEffect } from "react";
import { createClient as createBrowserClient } from "@/lib/supabase/client";
import { scrollToSection } from "@/lib/utils/scroll";

const categories = [
  { id: "mountain", name: "Mountains & Hiking Spots", emoji: "⛰️" },
  { id: "food", name: "Foods & Dine-ins", emoji: "🍜" },
  { id: "walking", name: "Walking Areas", emoji: "🚶" },
  { id: "festival", name: "Festivals", emoji: "🎉" },
  { id: "nature", name: "Nature & Parks", emoji: "🌳" },
  { id: "heritage", name: "Heritage Sites", emoji: "🏛️" },
  { id: "hotel", name: "Hotels", emoji: "🏨" },
  { id: "condominium", name: "Condominiums", emoji: "🏢" },
];

const categoryImages = {
  mountain: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  food: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
  walking: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  festival: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
  nature: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  heritage: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80",
  hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  condominium: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
};

const locationFilters = [
  { id: "all", label: "All" },
  { id: "iloilo_city", label: "Iloilo City" },
  { id: "iloilo_province", label: "Iloilo Province" },
];

export function CategoryExploreSection() {
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
  const [selectedLocation, setSelectedLocation] = useState("all");
  const supabase = createBrowserClient();

  const categorySectionIds: Record<string, string> = {
    mountain: "mountain-list",
    food: "food-list",
    walking: "walking-list",
    festival: "festival-list",
    nature: "nature-list",
    heritage: "heritage-list",
    hotel: "accommodation-list",
    condominium: "accommodation-list",
  };

  useEffect(() => {
    const fetchCategoryCounts = async () => {
      const counts: Record<string, number> = {};

      // Fetch destination categories
      let destQuery = supabase.from("destinations").select("category, location");
      if (selectedLocation !== "all") {
        destQuery = destQuery.eq("location", selectedLocation);
      }
      const { data: destData } = await destQuery;

      if (destData) {
        destData.forEach((dest) => {
          counts[dest.category] = (counts[dest.category] || 0) + 1;
        });
      }

      // Fetch accommodation types
      const { data: accData } = await supabase.from("accommodations").select("type");
      if (accData) {
        accData.forEach((acc) => {
          counts[acc.type] = (counts[acc.type] || 0) + 1;
        });
      }

      setCategoryCounts(counts);
    };

    fetchCategoryCounts();
  }, [supabase, selectedLocation]);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-fraunces">
            What do you want to explore?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-inter">
            Discover diverse destinations across Iloilo—from mountains and food spots to festivals and heritage sites.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1">
            {locationFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedLocation(filter.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedLocation === filter.id
                    ? "bg-white text-teal-900"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const count = categoryCounts[category.id] || 0;
            const imageUrl = categoryImages[category.id as keyof typeof categoryImages];
            const sectionId = categorySectionIds[category.id];

            return (
              <div
                key={category.id}
                className="relative group overflow-hidden rounded-2xl h-48 cursor-pointer"
                onClick={() => {
                  if (sectionId) {
                    scrollToSection(sectionId);
                  }
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="text-4xl mb-2">{category.emoji}</div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {count} place{count !== 1 ? "s" : ""} →
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
