import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className }) => {
    return (
        <section id={id} className={`sticky top-0 min-h-screen w-full flex flex-col justify-center backdrop-blur-md bg-slate-900/40 border-t border-slate-700/30 overflow-hidden ${className || ''}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-center">
                <div className="w-full h-full flex flex-col justify-center">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper;
