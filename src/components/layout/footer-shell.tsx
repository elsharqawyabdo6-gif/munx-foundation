export function FooterShell() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="group flex flex-col items-start leading-none select-none">
          <div className="flex items-center gap-2">
            <span className="h-[4px] w-6 bg-[#b45cff] rounded-full transition-all duration-500 group-hover:w-8 group-hover:bg-[#7b3cff]"></span>
            <span className="text-xl font-extrabold tracking-tight text-white font-sans">
              MUN<span className="text-[#b45cff] transition-colors duration-500 group-hover:text-[#7b3cff]">X</span>
            </span>
          </div>
          <span className="text-[8px] font-semibold tracking-[0.45em] text-[#d5c3ff]/70 self-end mt-0.5 mr-[1px]">
            AGENCY
          </span>
        </div>
        <div className="flex flex-col gap-3 lg:items-end">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.24em] text-[#d5c3ff]/70">LUXURY AI CREATIVE AGENCY</span>
            <div className="text-xs text-[#d5c3ff]/70">|</div>
            <a href="https://www.facebook.com/munxagency1" target="_blank" rel="noreferrer" className="text-xs hover:text-foreground">Facebook</a>
            <a href="https://wa.me/01205080344" target="_blank" rel="noreferrer" className="text-xs hover:text-foreground">WhatsApp</a>
          </div>
          <p className="text-xs text-[#d5c3ff]/40">© 2026 MUNX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
