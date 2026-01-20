import React from 'react';

const ProjectOverview = () => {
    return (
        <section className="py-20 lg:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-900">What is KeySkill?</h2>
                <div className="max-w-3xl mx-auto text-center text-slate-600 space-y-6 text-lg leading-relaxed">
                    <p>
                        KeySkill is a next-generation <strong>online typing practice website</strong> designed to help students, developers, and professionals improve their typing speed and accuracy.
                        Whether you are learning to type for the first time or looking to boost your WPM (Words Per Minute), our platform offers a comprehensive solution.
                    </p>
                    <p>
                        Unlike traditional tools, we provide both <strong>English and Hindi typing practice</strong>, making it the perfect choice for government exam aspirants and regional language users.
                    </p>
                    <p>
                        Typing speed matters. In today's digital age, saving seconds on every sentence translates to hours saved every year. Start your journey to becoming a touch typing expert today.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;
