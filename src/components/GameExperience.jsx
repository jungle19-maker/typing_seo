import React from 'react';
import { Target, Trophy, Clock, Zap } from 'lucide-react';

const GameExperience = () => {
    return (
        <section className="section" style={{
            backgroundColor: 'var(--bg-primary)',
            backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.05) 0%, transparent 20%)'
        }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
                    Immersive Typing Experience
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                <Zap className="text-accent" size={24} style={{ color: 'var(--accent-primary)' }} />
                                <h3 style={{ fontSize: '1.25rem' }}>Smooth Gameplay</h3>
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Experience zero-latency typing. Our engine is optimized for high-performance input handling, ensuring every keystroke is registered instantly.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                <Target className="text-accent" size={24} style={{ color: 'var(--accent-primary)' }} />
                                <h3 style={{ fontSize: '1.25rem' }}>Beginner to Advanced</h3>
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Start with single keys and progress to complex paragraphs. Custom difficulty levels adapt to your increasing speed.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                <Trophy className="text-accent" size={24} style={{ color: 'var(--accent-primary)' }} />
                                <h3 style={{ fontSize: '1.25rem' }}>Survival & Speed Modes</h3>
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Challenge yourself with Survival Mode where speed keeps you alive, or Race Mode to sprint against the clock.
                            </p>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'var(--bg-card)',
                        height: '300px',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Placeholder for Game UI Image */}
                        <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                            <Zap size={64} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                            <p>Interactive Game Demo Preview</p>
                        </div>

                        {/* Decorative glow */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '200px',
                            height: '200px',
                            background: 'var(--accent-primary)',
                            filter: 'blur(80px)',
                            opacity: 0.1
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameExperience;
