import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
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
  );
}
