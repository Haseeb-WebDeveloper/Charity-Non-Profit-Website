"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! We'll be in touch soon.",
      });
      form.reset();
      setIsSubmitted(true);

      // Open Calendly in new tab and show success message
      // window.open("https://calendly.com/rateourjob/30min", "_blank");

    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-card rounded-2xl p-8 border text-foreground shadow-xl overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 hover:bg-foreground/5 rounded-full transition-colors"
            >
              <X className="size-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Thanks for submitting the free trail access.</h2>
                <p className="text-lg text-muted-foreground">
                  You Need to Book a Free Demo Call. Please click here to{" "}
                  <Link href="https://calendly.com/rateourjob/30min"
                    target="_blank"
                    className="text-primary underline"
                  >book a free demo call with our team.</Link>
                </p>
              </div>
            ) : (
              <>
                {/* Form Header */}
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold mb-2">Get Started Free</h2>
                  <p className="text-muted-foreground">
                    Get Your First 10 Reviews Totally Free
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Business Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="business" className="text-sm font-medium">
                        Business Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        required
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                        placeholder="Your Business Name"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium">
                      Business Website <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      placeholder="https://example.com"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
                      placeholder="Any additional information..."
                    />
                  </div>

                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${submitStatus.type === "success"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                        }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full cursor-pointer"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get Started Free"}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}