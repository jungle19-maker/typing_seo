import React from 'react';
import { Shield, BookOpen, UserCheck, Keyboard } from 'lucide-react';

const ExamCard = ({ title, agency, description }) => (
    <div className="bg-white border border-slate-100 p-8 rounded-2xl hover:shadow-xl hover:border-indigo-200 transition-all group relative overflow-hidden h-full flex flex-col">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
            <Shield size={80} className="text-indigo-600" />
        </div>

        <div className="mb-6 relative z-10 flex-1">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">{agency}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>

        <div className="border-t border-slate-100 pt-5 mt-auto relative z-10">
            <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md"><Keyboard size={14} className="text-indigo-500" /> 30-45 WPM</span>
                <span className="flex items-center gap-1.5 bg-green-50 px-2 py-1 rounded-md text-green-700"><UserCheck size={14} className="text-green-500" /> 95%+ Acc.</span>
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
        <section id="exams" className="py-20 lg:py-24 bg-white relative">
            {/* Background elements to connect with Hero */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#fdf4ff] to-white opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        Prepare for <span className="text-indigo-600 decoration-4 decoration-indigo-200 underline-offset-4 underline">Real Exams</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Don't just practice random words. Train on authentic exam interfaces with the exact rules you'll face on test day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {exams.map((exam, index) => (
                        <ExamCard key={index} {...exam} />
                    ))}
                </div>

                <div className="mt-16 lg:mt-20 text-center">
                    <button
                        className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all shadow-slate-200 border border-slate-700"
                        onClick={() => window.location.href = 'https://typingfrontend.vercel.app/exams'}
                    >
                        Explore All 20+ Exams
                    </button>
                    <p className="text-slate-500 mt-4 text-sm font-medium">TRUSTED BY 50,000+ ASPIRANTS</p>
                </div>
            </div>
        </section>
    );
};

export default IndianGovernmentExams;
