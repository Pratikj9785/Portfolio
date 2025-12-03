import { motion } from 'framer-motion';

const Button = ({ children, onClick, href, variant = 'primary', className }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group cursor-pointer z-20";
    const variants = {
        primary: "bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/20",
        outline: "border border-[#7042f861] text-purple-200 hover:bg-purple-500/10 hover:border-purple-400",
        ghost: "text-slate-300 hover:text-white hover:bg-white/5"
    };

    const Component = href ? motion.a : motion.button;
    const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

    return (
        <Component
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {/* Shine Effect */}
            {variant === 'primary' && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
            )}
            <span className="relative z-20 flex items-center gap-2">{children}</span>
        </Component>
    );
};

export default Button;
