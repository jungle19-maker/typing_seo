import React from 'react';

const SEOSection = ({ title, children }) => (
    <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">{title}</h2>
        <div className="text-slate-600 leading-loose text-lg space-y-4">
            {children}
        </div>
    </div>
);

const SEOContent = () => {
    return (
        <section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SEOSection title="Free Typing Practice Online">
                    <p>
                        Looking for the best <strong>free typing practice online</strong>? Our platform offers a complete environment for mastering the keyboard.
                        We provide unlimited access to basic exercises that help you build muscle memory.
                        From home row keys to complex sentences, our guided lessons ensure you type faster with fewer errors.
                    </p>
                </SEOSection>

                <SEOSection title="Hindi Typing Practice Website">
                    <p>
                        For students preparing for government exams, our <strong>Hindi typing practice website</strong> uses standard Unicode layouts (Inscript/Remington).
                        Practice difficult Hindi words and phrases in a real-time environment.
                        We are one of the few platforms offering dedicated support for Hindi typing speed tests and accuracy checks.
                    </p>
                </SEOSection>

                <SEOSection title="Typing Games to Improve Speed">
                    <p>
                        Bored of standard drills? Try our <strong>typing games to improve speed</strong>.
                        Games like Word Rain and Survival Mode force you to type quickly under pressure, simulating real-world high-stakes environments.
                        Gamified learning helps maintain focus and makes daily practice something to look forward to.
                    </p>
                </SEOSection>

                <SEOSection title="Track Typing Speed and Accuracy">
                    <p>
                        You can't improve what you don't measure. effortlessly <strong>track typing speed and accuracy</strong> with our built-in analytics dashboard.
                        See your Words Per Minute (WPM) increase week over week.
                        Identify your problem keys and receive custom recommendations on what to practice next.
                    </p>
                </SEOSection>
            </div>
        </section>
    );
};

export default SEOContent;
