export function DockNavbar() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/25 px-6 py-3 shadow-2xl w-auto min-w-[300px] md:min-w-[400px]">
      <div className="flex items-center gap-6">
        <div className="text-base font-bold text-white">Lakat Iloilo</div>
        <div className="h-6 w-px bg-white/25" />
        <div className="flex gap-4 text-sm font-medium text-white/90">
          <span className="cursor-pointer hover:text-white">Explore</span>
          <span className="cursor-pointer hover:text-white">Categories</span>
          <span className="cursor-pointer hover:text-white">Features</span>
        </div>
      </div>
    </nav>
  );
}
