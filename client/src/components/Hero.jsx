import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ data }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(10);

    const toRotate = ["Pratik Jain", "a Full Stack Developer", "a Problem Solver", "Competitive Programmer"];
    const period = 1000; // Reduced pause period

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, typingSpeed);

        return () => clearInterval(ticker);
    }, [text, isDeleting]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setTypingSpeed(prev => prev / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTypingSpeed(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(200); // Faster pause before typing next
        } else {
            setTypingSpeed(30); // Faster typing speed
        }
    };

    return (
        <div className="relative flex flex-col w-full h-[85vh]" id="about-me">
            {/* Background Video */}
            <div className="absolute top-0 left-0 z-[1] w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-90 mix-blend-overlay"
                >
                    <source src="/assets/5453622-uhd_3840_2160_24fps.mp4" type="video/mp4" />
                    {/* Fallback to image if video fails */}
                    <img
                        src="/assets/city_landscape.png"
                        alt="City Landscape"
                        className="w-full h-full object-cover"
                    />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/60 to-[#030014]"></div>
            </div>

            <div className="flex flex-col items-center justify-center h-full w-full z-[20] px-4">
                <div className="flex flex-col gap-5 justify-center items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="py-[1px]"
                    >
                        {/* Empty top container as requested by user's previous edit style */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-6 mt-[100px] text-5xl md:text-6xl font-bold text-white w-auto h-auto min-h-[100px]"
                    >
                        <span>
                            Hi, I'm
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 block md:inline md:ml-4">
                                {text}
                                <span className="border-r-4 border-cyan-500 ml-1 animate-pulse"></span>
                            </span>
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg text-white/80 mix-blend-overlay font-medium max-w-[600px]"
                    >
                        Full Stack Engineer with a passion for Agentic AI and modern web development.
                    </motion.p>

                    <motion.a
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        href="#projects"
                        className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 border border-purple-500/50"
                    >
                        Learn More!
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
