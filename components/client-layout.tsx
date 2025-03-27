"use client";

import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientLayout({
  children,
}) {
  return (
    <>
      {/* Subtle noise texture overlay */}
      <div className="fixed inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03] pointer-events-none"></div>
      
      {/* Main background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Primary gradient blob */}
        <div className="absolute -top-[10%] right-[5%] h-[50vh] w-[70vw] rounded-full 
                        bg-gradient-to-br from-blue-50/40 via-purple-50/40 to-pink-50/40 
                        dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 
                        blur-3xl opacity-60 animate-blob"></div>
        
        {/* Secondary gradient blobs */}
        <div className="absolute top-[60%] -left-[10%] h-[40vh] w-[60vw] rounded-full 
                        bg-gradient-to-br from-green-50/30 via-teal-50/30 to-blue-50/30 
                        dark:from-green-950/20 dark:via-teal-950/20 dark:to-blue-950/20 
                        blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        
        <div className="absolute top-[40%] left-[30%] h-[45vh] w-[40vw] rounded-full 
                        bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-red-50/30 
                        dark:from-amber-950/20 dark:via-orange-950/20 dark:to-red-950/20 
                        blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.015] dark:opacity-[0.03]"></div>
      </div>
      
      {/* Page content */}
      <div className="relative flex flex-col min-h-screen">
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* Sticky header with glass effect */}
            <div className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800 shadow-sm">
              <Header />
            </div>
            
            {/* Main content area */}
            <main className="flex-grow pt-20 pb-20 px-4 sm:px-6 mx-auto w-full max-w-7xl">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </main>
            
            {/* Footer */}
            <Footer />

            {/* Toast notifications with themed styling */}
            <Toaster 
              position="top-right" 
              toastOptions={{
                style: {
                  background: 'var(--toaster-bg, #fff)',
                  color: 'var(--toaster-color, #333)',
                  border: '1px solid var(--toaster-border, #e2e8f0)',
                  fontSize: '0.875rem',
                  borderRadius: '0.5rem',
                },
                success: {
                  iconTheme: {
                    primary: '#10B981',
                    secondary: '#ECFDF5',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#EF4444',
                    secondary: '#FEF2F2',
                  },
                }
              }}
            />
            
            {/* Theme toggle button */}
            <div className="fixed bottom-5 right-5 z-40">
              <ThemeSwitch />
            </div>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </div>
    </>
  );
}