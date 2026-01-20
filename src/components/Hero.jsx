import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32 text-center bg-[linear-gradient(135deg,_#eef2ff_0%,_#f0f9ff_50%,_#fdf4ff_100%)]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-8 animate-fade-in-up">
                    <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-sm text-indigo-600 text-sm font-semibold hover:scale-105 transition-transform cursor-default">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        #1 Choice for Government Exam Aspirants
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 drop-shadow-sm">
                    Master Typing for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 pb-2">
                        Real Government Exams
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                    Practice actual exam patterns for SSC, High Court, Delhi Police & more.
                    Improve speed & accuracy in English & Hindi.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3 shadow-lg shadow-indigo-200 w-full sm:w-auto justify-center"
                        onClick={() => document.getElementById('exams').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Try Typing Exams
                        <ArrowRight size={22} className="inline-block" />
                    </button>
                    <button
                        className="px-10 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md flex items-center gap-3 w-full sm:w-auto justify-center"
                        onClick={() => window.location.href = 'https://typingfrontend.vercel.app/'}
                    >
                        <Play size={22} fill="currentColor" className="text-indigo-500" />
                        Start Free Practice
                    </button>
                </div>

                {/* Visual indicator of platform usage/trust if needed or just decorative */}
                <div className="mt-16 flex justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Add logos or stats here if available later */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
