import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section relative overflow-hidden" style={{
            padding: '10rem 0 6rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #fefce8 100%)'
        }}>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container relative z-10">
                <div style={{ marginBottom: '2rem' }}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-600 text-sm font-semibold animate-fade-in-up">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        #1 Typing Practice Platform
                    </span>
                </div>

                <h1 className="hero-title text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                    Typing Practice & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                        Exam Preparation
                    </span>
                    <br />in English & Hindi
                </h1>

                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Practice typing games, master real exam patterns, and improve speed & accuracy with our professional typing tutor.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                        className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 shadow-blue-200"
                        onClick={() => window.location.href = 'https://typingfrontend.vercel.app/'}
                    >
                        <Play size={24} fill="currentColor" />
                        Start Free Practice
                    </button>
                    <button
                        className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md"
                        onClick={() => document.getElementById('exams').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Try Typing Exams
                        <ArrowRight size={20} className="ml-2 inline-block" />
                    </button>
                </div>

                {/* Visual indicator of platform usage/trust if needed or just decorative */}
                <div className="mt-16 flex justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Add logos or stats here if available later */}
                </div>
            </div>
        </section >
    );
};

export default Hero;
