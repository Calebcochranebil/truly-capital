"use client";

import { useState, useEffect } from "react";
import PopupForm from "./PopupForm";

interface PopupTriggerProps {
  delaySeconds?: number;
}

export default function PopupTrigger({ delaySeconds = 10 }: PopupTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (hasSeenPopup) return;

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("hasSeenPopup", "true");
    }, delaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [delaySeconds]);

  return <PopupForm isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
