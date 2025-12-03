import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const Achievements = ({ data }) => {
    if (!data) return null;

    return (
        <SectionWrapper id="achievements" className="bg-slate-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-gradient">Achievements</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group"
                    >
                        {/* Shining Effect Background */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                        <div className="relative glass-card p-6 rounded-2xl h-full flex flex-col md:flex-row gap-6 items-center">
                            {item.image && (
                                <div className="w-full md:w-1/3 shrink-0 overflow-hidden rounded-lg border border-slate-700">
                                    <img
                                        src={`http://localhost:5173${item.image}`} // Assuming dev server port, in prod this should be relative
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => { e.target.style.display = 'none'; }} // Fallback if image fails
                                    />
                                </div>
                            )}

                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                <div className="text-sky-400 font-bold text-xl mb-1">{item.metric}</div>
                                {item.subMetric && <div className="text-sky-300/80 font-medium mb-3">{item.subMetric}</div>}
                                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Achievements;
