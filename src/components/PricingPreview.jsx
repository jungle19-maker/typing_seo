import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingPreview = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 rounded-bl-full opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Unlock Your Full Potential
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Get unlimited access to all typing exams, detailed performance analytics, and report generation.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
                    {/* Glossy effect */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 blur-3xl rounded-full -mr-20 -mt-20"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                <Star className="text-yellow-400 fill-yellow-400" />
                                Pro / Premium Access
                            </h3>
                            <p className="text-slate-400 mb-8">Everything you need to crack your exam.</p>

                            <ul className="space-y-4">
                                {[
                                    "Unlimited Typing Exam Practice Sets",
                                    "Real Exam Interface & Rules",
                                    "Detailed Accuracy & WPM Reports",
                                    "Save & Track Progress Lifetime",
                                    "Ad-free Experience"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="bg-blue-500/20 p-1 rounded-full">
                                            <Check size={16} className="text-blue-400" />
                                        </div>
                                        <span className="text-gray-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center md:text-right bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <span className="block text-slate-400 text-sm mb-1 uppercase tracking-wide">Starting from just</span>
                            <div className="text-5xl font-bold text-white mb-2">₹199<span className="text-lg text-slate-400 font-normal">/mo</span></div>
                            <p className="text-slate-400 text-sm mb-6">Cancel anytime</p>

                            <button
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-blue-900/50"
                                onClick={() => window.location.href = 'https://typingfrontend.vercel.app/pricing'}
                            >
                                Get Premium Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPreview;
