import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrollingToTop, setIsScrollingToTop] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        setIsScrollingToTop(true);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        const checkScroll = setInterval(() => {
            if (window.scrollY === 0) {
                setIsScrollingToTop(false);
                clearInterval(checkScroll);
            }
        }, 100);

        // Safety timeout in case scroll gets interrupted
        setTimeout(() => {
            setIsScrollingToTop(false);
            clearInterval(checkScroll);
        }, 3000);
    };

    const particleVariants = {
        initial: { y: 10, opacity: 0 },
        animate: (i) => ({
            y: -20,
            opacity: [0, 1, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
            },
        }),
    };

    const fullScreenParticleVariants = {
        initial: { y: "100vh", opacity: 0 },
        animate: (i) => ({
            y: "-100vh",
            opacity: [0, 1, 0],
            transition: {
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 0.5,
                ease: "linear",
            },
        }),
    };

    return (
        <>
            <AnimatePresence>
                {isScrollingToTop && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] pointer-events-none"
                    >
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={`fs - particle - ${i} `}
                                custom={i}
                                variants={fullScreenParticleVariants}
                                initial="initial"
                                animate="animate"
                                className="absolute w-1 h-1 bg-[#b49bff] rounded-full"
                                style={{
                                    left: `${Math.random() * 100}% `,
                                    width: `${Math.random() * 3 + 1} px`,
                                    height: `${Math.random() * 3 + 1} px`,
                                }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#030014]/20 backdrop-blur-md border border-[#7042f861] shadow-lg shadow-[#2a0e61]/50 group hover:shadow-[#2a0e61]/80 transition-shadow overflow-hidden"
                        aria-label="Scroll to top"
                    >
                        {/* Particles */}
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={particleVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="absolute w-1 h-1 bg-[#b49bff] rounded-full"
                                    style={{ left: `${50 + (i - 1) * 20}% ` }}
                                />
                            ))}
                        </div>

                        {/* Arrow Icon */}
                        <svg
                            className="w-6 h-6 text-[#b49bff] group-hover:scale-110 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScrollToTop;
