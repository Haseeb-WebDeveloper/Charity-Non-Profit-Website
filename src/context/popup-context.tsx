"use client";

import { createContext, useContext, useState } from "react";
import { ContactPopup } from "@/components/layout/contact-popup";

interface PopupContextType {
  openContactForm: () => void;
  closeContactForm: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <PopupContext.Provider value={{ openContactForm, closeContactForm }}>
      {children}
      <ContactPopup isOpen={isContactFormOpen} onClose={closeContactForm} />
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
} 