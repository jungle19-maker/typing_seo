import React, { useState } from 'react';
import { Menu, X, Keyboard } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-[100] border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <Keyboard size={26} className="text-blue-600" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        KeySkill
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-slate-600 font-medium hover:text-blue-600 transition-colors">Features</a>
                    <a href="#exams" className="text-slate-600 font-medium hover:text-blue-600 transition-colors">Exams</a>
                    <a href="#overview" className="text-slate-600 font-medium hover:text-blue-600 transition-colors">Overview</a>
                    <button
                        className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all transform hover:-translate-y-0.5"
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
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-[72px] left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-6 flex flex-col gap-4 animate-fade-in-down">
                    <a href="#features" className="text-slate-600 font-medium py-2 border-b border-slate-50" onClick={() => setIsOpen(false)}>Features</a>
                    <a href="#exams" className="text-slate-600 font-medium py-2 border-b border-slate-50" onClick={() => setIsOpen(false)}>Exams</a>
                    <a href="#overview" className="text-slate-600 font-medium py-2 border-b border-slate-50" onClick={() => setIsOpen(false)}>Overview</a>
                    <button
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold mt-2"
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
