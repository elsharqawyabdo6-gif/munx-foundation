import Link from "next/link";
import { SocialIcons } from "@/components/ui/social-icons";
import ThemeToggle from "@/components/ui/theme-toggle";

const links = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function NavbarShell() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex flex-col items-start leading-none select-none">
          <div className="flex items-center gap-2">
            <span className="h-[4px] w-6 bg-[#b45cff] rounded-full transition-all duration-500 group-hover:w-8 group-hover:bg-[#7b3cff]"></span>
            <span className="text-xl font-extrabold tracking-tight text-white font-sans">
              MUN<span className="text-[#b45cff] transition-colors duration-500 group-hover:text-[#7b3cff]">X</span>
            </span>
          </div>
          <span className="text-[8px] font-semibold tracking-[0.45em] text-[#d5c3ff]/70 self-end mt-0.5 mr-[1px]">
            AGENCY
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-3 flex items-center text-sm text-muted-foreground">
          <div className="hidden sm:flex items-center gap-3">
            <SocialIcons />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
