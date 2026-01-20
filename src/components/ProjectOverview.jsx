import React from 'react';

const ProjectOverview = () => {
    return (
        <section id="overview" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>What is KeySkill?</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        KeySkill is a next-generation <strong>online typing practice website</strong> designed to help students, developers, and professionals improve their typing speed and accuracy.
                        Whether you are learning to type for the first time or looking to boost your WPM (Words Per Minute), our platform offers a comprehensive solution.
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Unlike traditional tools, we provide both <strong>English and Hindi typing practice</strong>, making it the perfect choice for government exam aspirants and regional language users.
                    </p>
                    <p style={{ fontSize: '1.1rem' }}>
                        Typing speed matters. In today's digital age, saving seconds on every sentence translates to hours saved every year. Start your journey to becoming a touch typing expert today.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;
