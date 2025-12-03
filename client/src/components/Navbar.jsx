import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-[#030014]/50 backdrop-blur-md border-b border-[#7042f861] shadow-lg shadow-[#2a0e61]/50 px-4 md:px-10">
            <div className="w-full h-16 flex flex-row items-center justify-between m-auto">
                <a href="#" className="h-auto w-auto flex flex-row items-center">
                    <span className="font-bold ml-[10px] text-gray-300 text-xl">
                        {data?.name || "Pratik Jain"}
                    </span>
                </a>

                <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        {links.map((link) => (
                            <a key={link.name} href={link.href} className="cursor-pointer hover:text-[#b49bff] transition">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-[#030014] border-b border-[#7042f861]"
                >
                    <div className="px-6 py-4 space-y-4">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-slate-300 hover:text-[#b49bff]"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
