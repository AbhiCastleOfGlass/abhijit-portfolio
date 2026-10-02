"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleSenzuClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 7) {
      setShowEasterEgg(true);

      // Auto dismiss after 5 seconds
      setTimeout(() => {
        setShowEasterEgg(false);
        setClickCount(0);
      }, 5000);
    }
  };

  const getDragonBalls = () => {
    if (clickCount === 0) return "Need a Senzu Bean? Click here.";
    if (clickCount >= 7) return "🫘 Full power restored! Make your wish!";

    return `${'🟠'.repeat(clickCount)} ${clickCount} Dragon Balls found... ${7 - clickCount} more to go!`;
  };

  return (
    <footer className="border-t border-border py-12 text-center relative">
      <div className="container mx-auto px-6">
        <p className="text-sm text-muted-foreground mb-4">
          &copy; {new Date().getFullYear()} Abhijit Ghosh. Forged with precision.
        </p>

        <button
          onClick={handleSenzuClick}
          className={`text-sm select-none transition-colors duration-300 ${
            showEasterEgg ? 'text-green-500 font-medium' : 'text-muted-foreground hover:text-primary cursor-pointer'
          }`}
        >
          {getDragonBalls()}
        </button>
      </div>

      {/* Global cursor override for easter egg */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.style
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {`
              body, a, button, .cursor-pointer {
                cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='14' r='8' fill='%23eab308' opacity='0.8'/%3E%3Ccircle cx='7' cy='12' r='5' fill='%23eab308' opacity='0.6'/%3E%3Ccircle cx='17' cy='12' r='5' fill='%23eab308' opacity='0.6'/%3E%3C/svg%3E") 12 12, auto !important;
              }
            `}
          </motion.style>
        )}
      </AnimatePresence>
    </footer>
  );
}