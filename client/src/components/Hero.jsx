import { motion } from 'framer-motion';

const Hero = ({ data }) => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            {/* Black Hole Video Background Placeholder - using CSS gradient for now if video missing */}
            <div className="absolute top-[-300px] left-0 z-[1] w-full h-full object-cover opacity-50">
                <div className="w-full h-full bg-gradient-to-r from-black via-purple-900 to-black"></div>
            </div>

            <div className="flex flex-col items-center justify-center px-20 mt-40 w-full z-[20]">
                <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] rounded-full"
                    >
                        <h1 className="text-[13px] text-gray-300 px-2">
                            Fullstack Developer Portfolio
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                    >
                        <span>
                            Providing
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                the best{" "}
                            </span>
                            project experience
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg text-gray-400 my-5 max-w-[600px]"
                    >
                        {data?.summary}
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
