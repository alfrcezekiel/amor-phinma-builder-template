import Link from "next/link";

export function CategoryChips() {
  const categories = ["Mountains", "Food", "Festivals", "Hotels", "Condominiums", "Walking Areas", "Nature & Parks"];

  return (
    <div className="mb-12 flex flex-wrap gap-3">
      {categories.map((category) => (
        <Link
          key={category}
          href="/"
          className="cursor-pointer rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md border border-white/25 transition-all hover:bg-white/25"
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
