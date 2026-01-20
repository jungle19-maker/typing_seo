import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 py-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">

                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 text-slate-800">KeySkill</h3>
                    <p className="text-slate-500">Master the art of typing.</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Github size={24} /></a>
                    <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
                </div>

                <div className="text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} KeySkill Project. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
