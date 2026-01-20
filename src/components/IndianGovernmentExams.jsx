import React from 'react';
import { Shield, BookOpen, UserCheck, Keyboard } from 'lucide-react';

const ExamCard = ({ title, agency, description }) => (
    <div className="bg-white border border-slate-100 p-8 rounded-2xl hover:shadow-xl hover:border-blue-200 transition-all group relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Shield size={64} className="text-blue-600" />
        </div>
        <div className="flex items-start justify-between mb-6 relative z-10">
            <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">{agency}</span>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{title}</h3>
            </div>
        </div>
        <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
            {description}
        </p>
        <div className="flex items-center text-sm text-slate-500 gap-4 border-t border-slate-100 pt-4 relative z-10">
            <span className="flex items-center gap-2"><Keyboard size={16} className="text-blue-500" /> 30-40 WPM</span>
            <span className="flex items-center gap-2"><UserCheck size={16} className="text-teal-500" /> High Accuracy</span>
        </div>
    </div>
);

const IndianGovernmentExams = () => {
    const exams = [
        {
            title: "Delhi Police HCM",
            agency: "Delhi Police",
            description: "Specialized typing test for Head Constable Ministerial post. Focus on strict formatting and speed."
        },
        {
            title: "Allahabad High Court",
            agency: "NTA / High Court",
            description: "High-stakes typing test for Review Officer posts. Requires excellent English typing skills."
        },
        {
            title: "SSC CGL / CHSL Typing",
            agency: "Staff Selection Commission",
            description: "Practice for the most popular central government typing test. Strict formatting apply."
        },
        {
            title: "Court Clerk Typing",
            agency: "District Courts",
            description: "Various state district court exams requiring specific local language or English typing."
        },
        {
            title: "RRB NTPC Typing",
            agency: "Railway Board",
            description: "Prepare for Railway Junior Accounts Assistant and Senior Clerk jobs simulated environment."
        },
        {
            title: "State PSC Exams",
            agency: "PSC Boards",
            description: "Covering Rajasthan, MP, UP, and Bihar state typing exams for LDC and clerical posts."
        }
    ];

    return (
        <section id="exams" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Prepare for Real Typing Exams
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Practice real exam-pattern typing tests with time limits,
                        accuracy rules, and detailed reports.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exams.map((exam, index) => (
                        <ExamCard key={index} {...exam} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all shadow-blue-200"
                        onClick={() => window.location.href = 'https://typingfrontend.vercel.app/'}
                    >
                        Practice Typing Exams Now
                    </button>
                    <p className="text-slate-500 mt-4 text-sm">Join thousands of successful candidates</p>
                </div>
            </div>
        </section>
    );
};

export default IndianGovernmentExams;
