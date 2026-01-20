import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingPreview = () => {
    return (
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 rounded-bl-full opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Unlock Your Full Potential
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Get unlimited access to all typing exams, detailed performance analytics, and report generation.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl text-white relative overflow-hidden border border-slate-700">
                    {/* Glossy effect */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-indigo-500 to-purple-500 opacity-20 blur-[100px] rounded-full -mr-20 -mt-20"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="flex-1">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-500/30">
                                Most Popular Choice
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                                Pro / Premium Access
                            </h3>
                            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                                Unlock professional tools designed to help you clear your typing speed test in one go.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Unlimited Typing Exam Practice Sets",
                                    "Real Exam Interface (SSC/Court/Police)",
                                    "Advanced Accuracy Reports & Heatmaps",
                                    "Lifetime Progress Tracking",
                                    "Priority Support & No Ads"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <div className="bg-indigo-500/20 p-1.5 rounded-full group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                            <Check size={16} className="text-indigo-400 group-hover:text-white" />
                                        </div>
                                        <span className="text-slate-200 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center md:text-right bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md w-full md:w-auto">
                            <span className="block text-slate-400 text-sm mb-2 uppercase tracking-wide font-semibold">Limited Time Offer</span>
                            <div className="text-6xl font-extrabold text-white mb-2 tracking-tight">₹199<span className="text-xl text-slate-400 font-normal ml-1">/mo</span></div>
                            <p className="text-indigo-300 text-sm mb-8 font-medium">No hidden fees. Cancel anytime.</p>

                            <button
                                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-indigo-900/50 hover:shadow-indigo-900/80 hover:-translate-y-1"
                                onClick={() => window.location.href = 'https://typingfrontend.vercel.app/pricing'}
                            >
                                Get Premium Now
                            </button>
                            <p className="mt-4 text-xs text-slate-500">Secure payment via UPI/Cards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPreview;
