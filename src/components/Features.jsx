import React from 'react';
import { Book, Gamepad2, Languages, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color, highlight }) => (
    <div className={`p-8 rounded-2xl transition-all duration-300 border ${highlight ? 'bg-blue-600 text-white shadow-xl scale-105 ring-4 ring-blue-100' : 'bg-white hover:shadow-lg hover:-translate-y-1 border-slate-100'}`}>
        <div className={`mb-6 p-4 rounded-xl inline-block ${highlight ? 'bg-white/20 text-white' : `bg-${color}-50 text-${color}-600`}`}>
            <Icon size={32} />
        </div>
        <h3 className={`text-xl font-bold mb-3 ${highlight ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
        <p className={`leading-relaxed ${highlight ? 'text-blue-100' : 'text-slate-600'}`}>{description}</p>
    </div>
);

const Features = () => {
    const features = [
        {
            icon: Book,
            title: "Typing Exam Practice",
            description: "Practice real Indian typing exams like Delhi Police, High Court, SSC, and Clerk exams with accurate rules.",
            color: "blue",
            highlight: true
        },
        {
            icon: Gamepad2,
            title: "Typing Games",
            description: "Play Classic, Word Rain, Sentence, and Survival games. Learning to type has never been this fun.",
            color: "purple"
        },
        {
            icon: Languages,
            title: "Hindi & English Typing",
            description: "Native Unicode-based Hindi typing support for competitive exams and regional work.",
            color: "orange"
        },
        {
            icon: TrendingUp,
            title: "Reports & Analytics",
            description: "Track your WPM, accuracy, and detailed progress reports to see your improvement over time.",
            color: "emerald"
        },
        {
            icon: Zap,
            title: "Zero Lag Performance",
            description: "Optimized for speed. No ads during gameplay, just pure fast response times.",
            color: "amber"
        },
        {
            icon: ShieldCheck,
            title: "Structured Learning",
            description: "Progress from basic keys to complex paragraphs with our structured lesson plan.",
            color: "teal"
        }
    ];

    return (
        <section id="features" className="section relative bg-white py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2 block">Why Choose KeySkill?</span>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">master typing</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Whether you are preparing for a government job or just want to improve your speed, we have the right tools for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
