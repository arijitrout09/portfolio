import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 py-3 backdrop-blur-md"
          : "border-b border-transparent py-6"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 md:flex md:justify-between"
      >
        <a href="#home" className="display min-w-0 truncate text-2xl italic">
          Arijit<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.slice(0, 5).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
          >
            Contact Me
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-5 mt-3 space-y-1 rounded-3xl border border-border bg-card p-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
