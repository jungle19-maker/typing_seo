import React from 'react';
import { Book, Gamepad2, Languages, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color, highlight, bullets }) => (
    <div className={`p-8 rounded-3xl transition-all duration-300 border ${highlight ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl scale-105 ring-4 ring-blue-100/50 md:col-span-2 lg:col-span-1 lg:row-span-2' : 'bg-white hover:shadow-xl hover:-translate-y-1 border-slate-100 hover:border-blue-100'}`}>
        <div className={`mb-6 p-4 rounded-2xl inline-block ${highlight ? 'bg-white/20 text-white backdrop-blur-sm' : `bg-${color}-50 text-${color}-600`}`}>
            <Icon size={highlight ? 40 : 32} />
        </div>
        <h3 className={`font-bold mb-4 ${highlight ? 'text-2xl text-white' : 'text-xl text-slate-800'}`}>{title}</h3>
        <p className={`leading-relaxed mb-6 ${highlight ? 'text-blue-100 text-lg' : 'text-slate-600'}`}>{description}</p>

        {bullets && (
            <ul className="space-y-3">
                {bullets.map((bullet, idx) => (
                    <li key={idx} className={`flex items-center gap-3 text-sm font-medium ${highlight ? 'text-white' : 'text-slate-700'}`}>
                        <div className={`rounded-full p-1 ${highlight ? 'bg-blue-500/30' : 'bg-slate-100'}`}>
                            <div className={`w-2 h-2 rounded-full ${highlight ? 'bg-white' : `bg-${color}-500`}`}></div>
                        </div>
                        {bullet}
                    </li>
                ))}
            </ul>
        )}
    </div>
);

const Features = () => {
    const features = [
        {
            icon: Book,
            title: "Typing Exam Practice",
            description: "The most authentic exam simulation available. Practice exactly like the real test environment.",
            color: "blue",
            highlight: true,
            bullets: [
                "Delhi Police HCM & SSC Patterns",
                "High Court & Clerk Exams",
                "Strict Formatting & Backspace Rules",
                "Real-time Speed & Accuracy"
            ]
        },
        {
            icon: Gamepad2,
            title: "Typing Games",
            description: "Gamify your learning with 4 distinct modes designed to break boredom.",
            color: "purple",
            bullets: ["Word Rain", "Survival Mode", "Sentence Chase"]
        },
        {
            icon: Languages,
            title: "Hindi & English",
            description: "Full Unicode support for Mangal Inscript, Kruti Dev and more.",
            color: "orange",
            bullets: ["Remington Gail", "Inscript Layout", "Dual Language Support"]
        },
        {
            icon: TrendingUp,
            title: "Smart Analytics",
            description: "Detailed insights into your weak keys and speed progression.",
            color: "emerald",
            bullets: ["WPM Graphs", "Accuracy Heatmaps", "Daily Goals"]
        },
        {
            icon: ShieldCheck,
            title: "Structured Learning",
            description: "Zero to Hero. Step-by-step lessons for complete beginners.",
            color: "teal",
            bullets: ["Touch Typing Basics", "Finger Placement", "Muscle Memory"]
        },
        {
            icon: Zap,
            title: "Zero Lag",
            description: "Instant feedback engine optimized for low-end devices.",
            color: "amber",
            bullets: ["No Ads in Game", "Lightweight", "Instant Load"]
        }
    ];

    return (
        <section id="features" className="relative bg-slate-50 py-20 lg:py-24 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 animate-fade-in-up">
                    <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3 block">Why Choose KeySkill?</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        More Than Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Typing Practice</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        We built KeySkill specifically for aspirants who need to clear government typing exams.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
