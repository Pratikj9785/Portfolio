import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const Skills = ({ data }) => {
    if (!data) return null;

    const categories = [
        { title: 'Languages', items: data.languages },
        { title: 'Frameworks & Databases', items: data.frameworks },
        { title: 'Knowledge Base', items: data.knowledge }
    ];

    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-gradient">Skills</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-6 rounded-xl"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {category.items.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-sm text-slate-300 bg-slate-800 rounded-full border border-slate-700 hover:border-sky-500 hover:text-sky-400 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
