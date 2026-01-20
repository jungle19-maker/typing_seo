import React, { useState, useEffect } from 'react';
import { Menu, X, Keyboard } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-indigo-50/50' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
                    <div className="p-2 bg-indigo-50 rounded-xl group-hover:bg-indigo-100 transition-colors">
                        <Keyboard size={24} className="text-indigo-600" />
                    </div>
                    <span className="text-xl font-bold text-slate-900 tracking-tight">
                        Key<span className="text-indigo-600">Skill</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {['Features', 'Exams', 'Overview'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all hover:after:w-full"
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                        onClick={() => window.location.href = 'https://typingfrontend.vercel.app/'}
                    >
                        Get Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-[72px] left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl py-6 px-6 flex flex-col gap-4 animate-fade-in-down">
                    {['Features', 'Exams', 'Overview'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-slate-600 font-medium py-3 border-b border-slate-50 hover:text-indigo-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        className="w-full bg-indigo-600 text-white px-6 py-3.5 rounded-xl font-bold mt-2 shadow-lg shadow-indigo-200"
                        onClick={() => window.location.href = 'https://typingfrontend.vercel.app/'}
                    >
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
