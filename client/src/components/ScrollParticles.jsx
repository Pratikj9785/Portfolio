import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollParticles = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollDir, setScrollDir] = useState("down"); // "up" or "down"
    const lastScrollY = useRef(0);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine direction
            if (currentScrollY > lastScrollY.current) {
                setScrollDir("down");
            } else if (currentScrollY < lastScrollY.current) {
                setScrollDir("up");
            }

            lastScrollY.current = currentScrollY;
            setIsScrolling(true);

            // Clear existing timeout
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // Set timeout to stop animation when scrolling stops
            scrollTimeout.current = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    const particleVariants = {
        initial: (dir) => ({
            y: dir === "down" ? "-100vh" : "100vh",
            opacity: 0
        }),
        animate: (dir) => ({
            y: dir === "down" ? "100vh" : "-100vh",
            opacity: [0, 1, 0],
            transition: {
                duration: Math.random() * 1.5 + 0.5,
                repeat: Infinity,
                delay: Math.random() * 0.2,
                ease: "linear",
            },
        }),
    };

    return (
        <AnimatePresence mode="wait">
            {isScrolling && (
                <motion.div
                    key={scrollDir} // Re-mount when direction changes to switch flow immediately
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-20 pointer-events-none"
                >
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={`scroll-particle-${i}`}
                            custom={scrollDir}
                            variants={particleVariants}
                            initial="initial"
                            animate="animate"
                            className="absolute w-0.5 h-0.5 bg-[#b49bff] rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollParticles;
