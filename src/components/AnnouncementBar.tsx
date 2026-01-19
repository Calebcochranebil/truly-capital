"use client";

import { LogIn, Briefcase } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1001] bg-forest-deep border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between sm:justify-center gap-4 sm:gap-8 py-2">
          <span className="text-white/70 text-xs sm:text-sm hidden sm:inline">
            Existing client?
          </span>
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="https://tmadvantage.my.site.com/Borrower/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 sm:gap-2 text-white/80 hover:text-gold transition-colors"
            >
              <LogIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Borrower Login</span>
            </a>
            <div className="w-px h-4 bg-white/20" />
            <a
              href="https://tmadvantage.my.site.com/Broker/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 sm:gap-2 text-white/80 hover:text-gold transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Broker Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
