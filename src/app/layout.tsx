import type { Metadata } from "next";
// import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrolling from "@/components/Smooth-scrolling";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Footer } from "@/components/layout/footer";
import { PopupProvider } from "@/context/popup-context";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Support Lives & Make an Impact | Charity Platform",
  description: "Join us in making a difference. Donate, volunteer, or partner with us to support communities in need. 100% transparent and impact-driven charity platform.",
  keywords: [
    "donate to charity online",
    "support local communities", 
    "charity donation platform",
    "nonprofit fundraising tools",
    "volunteer opportunities",
    "make an impact today",
    "transparent donation platform",
    "help people in need"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased body">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <PopupProvider>
            <main>
              <Analytics />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <DotPattern
                  className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                  )}
                />
              </div>
              <SmoothScrolling>
                <Navbar />
                {children}
                <Footer />
              </SmoothScrolling>
            </main>
          </PopupProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}