"use client";

import React from "react";

const iconClass = "h-5 w-5 transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:scale-105";

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href="https://www.facebook.com/munxagency1"
        target="_blank"
        rel="noreferrer"
        className="group rounded-full p-2 bg-transparent hover:bg-white/5"
        aria-label="Facebook"
      >
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M22 12.07C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.07c0 4.99 3.66 9.12 8.44 9.91v-7.02H8.9v-2.9h1.42V9.09c0-1.4.83-2.18 2.1-2.18.61 0 1.25.11 1.25.11v1.38h-.71c-.7 0-.92.44-.92.89v1.07h1.57l-.25 2.9h-1.32v7.02c4.78-.79 8.44-4.92 8.44-9.91z" />
        </svg>
      </a>

      <a
        href="https://wa.me/01205080344"
        target="_blank"
        rel="noreferrer"
        className="group rounded-full p-2 bg-transparent hover:bg-white/5"
        aria-label="WhatsApp"
      >
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.88 11.88 0 0012 .12 11.88 11.88 0 003.48 3.48 11.88 11.88 0 00.12 12c0 2.07.54 4.05 1.56 5.8L.12 24l6.44-1.62A11.88 11.88 0 0012 23.88c5.27 0 9.78-3.65 10.88-8.7a11.88 11.88 0 00-2.36-11.7zM12 21.12a9.06 9.06 0 01-4.7-1.3l-.33-.2-3.82.96.98-3.73-.21-.38A9.06 9.06 0 012.88 12 9.12 9.12 0 1112 21.12zM17.3 14.9c-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.58.13-.17.26-.66.85-.81 1.03-.15.17-.3.2-.56.07-.26-.13-1.12-.41-2.13-1.33-.79-.7-1.32-1.56-1.48-1.82-.16-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.39-.8-1.9-.21-.5-.43-.43-.58-.44-.15-.02-.32-.02-.49-.02s-.45.06-.69.32c-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.73c.13.17 1.86 2.84 4.52 3.98 2.66 1.14 2.66.76 3.14.72.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.07-.11-.26-.17-.53-.3z" />
        </svg>
      </a>

      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="group opacity-60 cursor-not-allowed rounded-full p-2 bg-transparent"
        aria-label="Instagram (not linked)"
        title="Instagram not connected yet"
      >
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A4.8 4.8 0 1016.8 13 4.8 4.8 0 0012 8.2zm0 7.9A3.1 3.1 0 1115.1 13 3.1 3.1 0 0112 16.1zM18.7 6.1a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z" />
        </svg>
      </a>
    </div>
  );
}

export default SocialIcons;
