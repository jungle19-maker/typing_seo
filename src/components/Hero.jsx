import React from 'react';
import { Play, ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-32 text-center bg-white">
            {/* Abstract Background Overlay */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50/50 rounded-[100%] blur-[80px] -z-10 mix-blend-multiply opacity-60"></div>
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-10 animate-fade-in-up">
                    <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-700 text-sm font-semibold hover:shadow-md hover:border-indigo-200 transition-all cursor-default">
                        <span className="flex h-2.5 w-2.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
                        </span>
                        Trusted by 50,000+ Government Aspirants
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 mb-8 drop-shadow-sm leading-tight">
                    Master Typing for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-x">
                        Real Exams
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                    Practice actual exam patterns for <span className="text-slate-900 font-semibold">SSC, High Court, Delhi Police</span> & more.
                    Improve speed & accuracy in English & Hindi.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <button
                        className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center gap-3 shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-slate-300 hover:-translate-y-1 w-full sm:w-auto justify-center overflow-hidden"
                        onClick={() => document.getElementById('exams').scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Start Exam Practice
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    <button
                        className="group px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:border-indigo-200 hover:bg-indigo-50/30 transition-all shadow-sm hover:shadow-lg flex items-center gap-3 w-full sm:w-auto justify-center"
                        onClick={() => window.location.href = 'https://typingfrontend.vercel.app/'}
                    >
                        <Play size={20} fill="currentColor" className="text-indigo-600 group-hover:scale-110 transition-transform" />
                        Free Practice
                    </button>
                </div>

                <div className="mt-16 flex items-center justify-center gap-8 text-sm font-semibold text-slate-500 opacity-80">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={18} className="text-emerald-500" />
                        <span>Exam Compliant Rules</span>
                    </div>
                    <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={18} className="text-emerald-500" />
                        <span>Zero Lag Performance</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
