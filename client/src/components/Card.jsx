import { motion } from 'framer-motion';

const Card = ({ title, subtitle, date, description, tags, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card p-6 rounded-xl transition-all duration-300 group relative overflow-hidden border border-[#2a0e61]"
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{title}</h3>
                        {subtitle && <p className="text-purple-400 font-medium">{subtitle}</p>}
                    </div>
                    {date && <span className="text-slate-400 text-sm mt-2 md:mt-0 bg-[#2a0e61]/50 px-3 py-1 rounded-full border border-[#7042f861]">{date}</span>}
                </div>

                {description && (
                    <div className="text-slate-300 mb-4 space-y-2 text-sm leading-relaxed">
                        {Array.isArray(description) ? (
                            <ul className="list-disc list-inside space-y-1 marker:text-purple-500">
                                {description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{description}</p>
                        )}
                    </div>
                )}

                {tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/20 rounded-full border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Card;
