"use client";

import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ClientLayoutProps {
  children: React.ReactNode;
  viewMode?: 'portfolio' | 'terminal';
  onViewModeChange?: (mode: 'portfolio' | 'terminal') => void;
  onChatToggle?: () => void;
  showChatWidget?: boolean;
}

export default function ClientLayout({
  children,
  viewMode = 'portfolio',
  onViewModeChange,
  onChatToggle,
  showChatWidget = false
}: ClientLayoutProps) {
  const [starCount, setStarCount] = useState(100);
  const [isClient, setIsClient] = useState(false);
  
  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
    
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setStarCount(50);
      } else if (width < 1280) {
        setStarCount(100);
      } else {
        setStarCount(150);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate consistent stars array
  const [stars] = useState(() => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      size: Math.random() * 2.5,
      animationDuration: Math.random() * 50 + 10,
      opacity: Math.random() * 0.7 + 0.3,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 10
    }));
  });

  const [lightParticles] = useState(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      animationDuration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      top: Math.random() * 100,
      left: Math.random() * 100
    }));
  });

  const [shootingStars] = useState(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,
      top: Math.random() * 80,
      left: Math.random() * 80 + 10,
      animationDuration: Math.random() * 10 + 15,
      delay: Math.random() * 30
    }));
  });

  // Don't render stars until client-side
  if (!isClient) {
    return (
      <>
        {/* Simplified background for SSR */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 dark:from-black dark:via-gray-950 dark:to-black opacity-90 dark:opacity-100"></div>
        </div>
        
        <div className="relative flex flex-col min-h-screen">
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <main className="flex-grow w-full">
                {children}
              </main>
              {viewMode === 'portfolio' && <Footer />}
              <Toaster position="top-right" />
              {viewMode === 'portfolio' && (
                <div className="fixed bottom-5 right-5 z-40">
                  <ThemeSwitch />
                </div>
              )}
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </div>
      </>
    );
  }

  
  return (
    <>
      {/* Galaxy background with stars - different for light/dark mode */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Background gradient - soft gradient for light, deep black for dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 dark:from-black dark:via-gray-950 dark:to-black opacity-90 dark:opacity-100"></div>
        
        {/* Soft clouds/nebulae effect for light mode */}
        <div className="absolute inset-0 light-clouds opacity-30 hidden md:block"></div>
        
        {/* Animated stars - generated consistently */}
        <div className="stars-container absolute inset-0">
          {/* Stars for dark mode only */}
          {stars.slice(0, starCount).map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white dark:block hidden"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, ${star.opacity * 0.8})`,
                animation: `twinkle ${star.animationDuration}s infinite ease-in-out ${star.delay}s`
              }}
            />
          ))}
          
          {/* Smaller particles for light mode */}
          {lightParticles.map((particle) => (
            <div
              key={`light-particle-${particle.id}`}
              className="absolute rounded-full bg-indigo-200 dark:hidden block"
              style={{
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: 0.4,
                animation: `float ${particle.animationDuration}s infinite ease-in-out ${particle.delay}s`
              }}
            />
          ))}
        </div>
        
        {/* Distant galaxies/nebulae - soft gradients for light, darker for dark */}
        <div className="absolute top-[10%] right-[15%] h-[40vh] w-[40vw] rounded-full 
                      bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-blue-200/30
                      dark:from-gray-800/10 dark:via-gray-900/10 dark:to-gray-800/15
                      blur-3xl"></div>
        
        <div className="absolute top-[60%] left-[10%] h-[45vh] w-[35vw] rounded-full 
                      bg-gradient-to-br from-blue-200/30 via-indigo-200/20 to-purple-200/30
                      dark:from-gray-900/15 dark:via-gray-900/10 dark:to-gray-800/10
                      blur-3xl"></div>
                      
        <div className="absolute -bottom-[10%] right-[30%] h-[50vh] w-[40vw] rounded-full 
                      bg-gradient-to-br from-purple-200/20 via-blue-200/30 to-indigo-200/20
                      dark:from-gray-800/15 dark:via-gray-900/20 dark:to-gray-800/10
                      blur-3xl"></div>
        
        {/* Cosmic dust overlay - different for light and dark */}
        <div className="absolute inset-0 dark:bg-noise bg-noise opacity-[0.02] dark:opacity-[0.05] pointer-events-none"></div>
        
        {/* Shooting stars - only in dark mode for better visibility */}
        {shootingStars.map((star) => (
          <div
            key={`shooting-star-${star.id}`}
            className="absolute w-[150px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-[30deg] hidden dark:block"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: 0,
              animation: `shootingStar ${star.animationDuration}s infinite linear ${star.delay}s`
            }}
          />
        ))}
      </div>
      
      {/* Main content with glass morphism */}
      <div className="relative flex flex-col min-h-screen">
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            
            {/* Main content area - Let page.tsx handle its own layout */}
            <main className="flex-grow w-full">
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
            
            {/* Footer - Only show in portfolio mode */}
            {viewMode === 'portfolio' && <Footer />}

            {/* Toast notifications with theme-aware galaxy styling */}
            <Toaster 
              position="top-right" 
              toastOptions={{
                className: '',
                style: {
                  background: 'var(--toaster-bg, rgba(255, 255, 255, 0.9))',
                  color: 'var(--toaster-color, #333)',
                  border: '1px solid var(--toaster-border, rgba(226, 232, 240, 0.7))',
                  backdropFilter: 'blur(10px)',
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
            
            {/* Theme toggle button - Only show in portfolio mode */}
            {viewMode === 'portfolio' && (
              <div className="fixed bottom-5 right-5 z-40">
                <ThemeSwitch />
              </div>
            )}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </div>
      
      {/* CSS Animations */}
      <style jsx global>{`
        /* Override variables for theme integration */
        :root {
          --toaster-bg: rgba(255, 255, 255, 0.85);
          --toaster-color: #333;
          --toaster-border: rgba(226, 232, 240, 0.7);
        }
        
        .dark {
          --toaster-bg: rgba(23, 25, 35, 0.85);
          --toaster-color: #fff;
          --toaster-border: rgba(255, 255, 255, 0.1);
        }
      
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(15px);
          }
        }
        
        @keyframes shootingStar {
          0% {
            transform: translateX(-200px) translateY(200px) rotate(-30deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          15% {
            transform: translateX(200px) translateY(-200px) rotate(-30deg);
            opacity: 0;
          }
          100% {
            transform: translateX(200px) translateY(-200px) rotate(-30deg);
            opacity: 0;
          }
        }
        
        /* Light mode cloud effect */
        .light-clouds {
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%239C92AC' fill-opacity='0.05' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
        }
        
        /* Create cosmic dust particles */
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        /* Add a subtle text shadow to improve readability on the galaxy background */
        h1, h2, h3, h4, h5, h6 {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}
