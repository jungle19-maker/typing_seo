import React from 'react';
import { Shield, UserCheck, Keyboard, ArrowUpRight, ArrowRight } from 'lucide-react';

const ExamCard = ({ title, agency, description }) => (
    <div className="group relative bg-white border border-slate-100 p-8 rounded-3xl hover:border-indigo-100 transition-all duration-300 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.05)] flex flex-col h-full overflow-hidden">
        {/* Subtle Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
            <Shield size={100} className="text-indigo-600" />
        </div>

        <div className="mb-6 relative z-10 flex-1">
            <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100/50">{agency}</span>
                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-indigo-500 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {description}
            </p>
        </div>

        <div className="border-t border-slate-50 pt-5 mt-auto relative z-10">
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5"><Keyboard size={14} className="text-indigo-500" /> 30-45 WPM</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="flex items-center gap-1.5 text-emerald-600"><UserCheck size={14} className="text-emerald-500" /> 95%+ Acc.</span>
            </div>
        </div>
    </div>
);

const IndianGovernmentExams = () => {
    const exams = [
        {
            title: "Delhi Police HCM",
            agency: "Delhi Police",
            description: "Strict full mistakes & half mistakes rules. Restricted backspace usage as per official guidelines."
        },
        {
            title: "Allahabad High Court",
            agency: "NTA / High Court",
            description: "Complex legal passage typing. Judgement writing format practice with high accuracy requirements."
        },
        {
            title: "SSC CGL / CHSL",
            agency: "Staff Selection Comm.",
            description: "Standard 2000 key depressions formatting. Paragraph based typing with moderate difficulty."
        },
        {
            title: "Court Clerk",
            agency: "District Courts",
            description: "State-specific district court exams. Often requires legacy Hindi font layouts like Remington."
        },
        {
            title: "RRB NTPC",
            agency: "Railway Board",
            description: "Non-stop 10 minute typing test. Focus on consistent speed without pause."
        },
        {
            title: "State PSC Exams",
            agency: "PSC Boards",
            description: "LDC and UDC exams for Rajasthan, UP, MP and Bihar with varying speed limits."
        }
    ];

    return (
        <section id="exams" className="py-24 lg:py-32 bg-slate-50/50 relative">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 lg:mb-24 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Prepare for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Real Exams</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Don't just practice random words. Train on <span className="font-semibold text-slate-800">authentic exam interfaces</span> with the exact rules you'll face on test day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {exams.map((exam, index) => (
                        <ExamCard key={index} {...exam} />
                    ))}
                </div>

                <div className="mt-16 lg:mt-24 text-center">
                    <button
                        className="group bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto"
                        onClick={() => window.location.href = 'https://typingfrontend.vercel.app/exams'}
                    >
                        Explore All 20+ Exams
                        <ArrowRight size={20} className="text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                    </button>
                    <p className="text-slate-400 mt-6 text-xs font-semibold tracking-wider uppercase">Trusted by 50,000+ Aspirants</p>
                </div>
            </div>
        </section>
    );
};

export default IndianGovernmentExams;
