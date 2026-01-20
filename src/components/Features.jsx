import React from 'react';
import { Book, Gamepad2, Languages, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color, highlight, bullets }) => (
    <div className={`p-8 rounded-[2rem] transition-all duration-300 border relative overflow-hidden group ${highlight ? 'bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-2xl scale-105 ring-4 ring-indigo-50 lg:col-span-1 lg:row-span-2 flex flex-col justify-center' : 'bg-white hover:shadow-xl hover:-translate-y-1 border-slate-100 hover:border-indigo-100'}`}>

        {/* Background Blob for Highlight Card */}
        {highlight && (
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        )}

        <div className={`mb-6 p-4 rounded-2xl inline-block ${highlight ? 'bg-white/20 text-white backdrop-blur-md shadow-inner' : `bg-${color}-50 text-${color}-600 group-hover:scale-110 transition-transform`}`}>
            <Icon size={highlight ? 40 : 32} />
        </div>

        <h3 className={`font-bold mb-4 ${highlight ? 'text-3xl text-white' : 'text-xl text-slate-800'}`}>{title}</h3>
        <p className={`leading-relaxed mb-8 ${highlight ? 'text-indigo-100 text-lg' : 'text-slate-600'}`}>{description}</p>

        {bullets && (
            <ul className="space-y-4">
                {bullets.map((bullet, idx) => (
                    <li key={idx} className={`flex items-start gap-3 text-sm font-medium ${highlight ? 'text-white' : 'text-slate-700'}`}>
                        <div className={`mt-1 rounded-full p-1 ${highlight ? 'bg-indigo-500/50 ring-1 ring-white/30' : 'bg-slate-100'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${highlight ? 'bg-white' : `bg-${color}-500`}`}></div>
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
            title: "Real Exam Practice",
            description: "The most authentic exam simulation available. Practice exactly like the real test environment to kill exam anxiety.",
            color: "blue",
            highlight: true,
            bullets: [
                "Delhi Police HCM & SSC Patterns",
                "High Court & Clerk Exams",
                "Strict Formatting & Backspace Rules",
                "Real-time Speed & Accuracy Analytics"
            ]
        },
        {
            icon: Gamepad2,
            title: "Gamified Learning",
            description: "Gamify your learning with 4 distinct modes designed to break boredom and build muscle memory.",
            color: "purple",
            bullets: ["Word Rain", "Survival Mode", "Sentence Chase"]
        },
        {
            icon: Languages,
            title: "Hindi & English",
            description: "Full Unicode support for Mangal Inscript, Kruti Dev and more layouts specific to Indian exams.",
            color: "orange",
            bullets: ["Remington Gail", "Inscript Layout", "Dual Language Support"]
        },
        {
            icon: TrendingUp,
            title: "Smart Analytics",
            description: "Detailed insights into your weak keys and speed progression over time.",
            color: "emerald",
            bullets: ["WPM Graphs", "Accuracy Heatmaps", "Daily Goals"]
        },
        {
            icon: ShieldCheck,
            title: "Structured Learning",
            description: "Zero to Hero. Step-by-step lessons for complete beginners to touch typing.",
            color: "teal",
            bullets: ["Touch Typing Basics", "Finger Placement", "Muscle Memory"]
        },
        {
            icon: Zap,
            title: "Zero Lag Engine",
            description: "Instant feedback engine optimized for low-end devices. No bloat.",
            color: "amber",
            bullets: ["No Ads in Game", "Lightweight", "Instant Load"]
        }
    ];

    return (
        <section id="features" className="relative bg-white py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 animate-fade-in-up">
                    <span className="text-indigo-600 font-bold tracking-wide uppercase text-xs mb-4 block">Why Choose KeySkill?</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        More Than Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Typing</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        We built KeySkill specifically for aspirants who need to clear government typing exams.
                        <br className="hidden md:block" /> No generic practice, just real results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
