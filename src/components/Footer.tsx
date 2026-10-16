import { Logo } from "@/components/Logo";
import { scrollToSection } from "@/lib/utils/scroll";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/20 bg-linear-to-br from-teal-900 to-emerald-800 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="mb-3">
              <Logo width={160} height={52} />
            </div>
            <p className="text-sm text-white/80">
              Your gateway to discovering the best of Iloilo City and Iloilo Province.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("explore")}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  About Iloilo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("categories")}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Explore
                </button>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <p className="text-sm text-white/80">
              © {currentYear} Lakat Iloilo. All rights reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-xs text-white/60">
            Built with ❤️ for travelers exploring Iloilo
          </p>
        </div>
      </div>
    </footer>
  );
}
