import React from 'react';
import { Target, Trophy, Clock, Zap } from 'lucide-react';

const GameExperience = () => {
    return (
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(6,182,212,0.05)_0%,transparent_20%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-900">
                    Immersive Typing Experience
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-12">
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <Zap className="text-blue-600" size={28} />
                                <h3 className="text-2xl font-bold text-slate-800">Smooth Gameplay</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Experience zero-latency typing. Our engine is optimized for high-performance input handling, ensuring every keystroke is registered instantly.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <Target className="text-blue-600" size={28} />
                                <h3 className="text-2xl font-bold text-slate-800">Beginner to Advanced</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Start with single keys and progress to complex paragraphs. Custom difficulty levels adapt to your increasing speed.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <Trophy className="text-blue-600" size={28} />
                                <h3 className="text-2xl font-bold text-slate-800">Survival & Speed Modes</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Challenge yourself with Survival Mode where speed keeps you alive, or Race Mode to sprint against the clock.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-3xl h-[400px] border border-slate-800 relative overflow-hidden flex items-center justify-center shadow-2xl">
                        {/* Placeholder for Game UI Image */}
                        <div className="text-center text-slate-500 relative z-10">
                            <Zap size={64} className="mx-auto mb-4 opacity-20" />
                            <p className="font-medium tracking-wide">Interactive Game Demo Preview</p>
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameExperience;
