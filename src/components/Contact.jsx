import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Thanks specifically for contacting us! We will get back to you soon.');
        // Add actual submission logic here
    };

    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem' }}>Contact Us</h2>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Have questions, feedback, or collaboration ideas? Feel free to contact us.
                </p>

                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
                            <input
                                type="text"
                                required
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    backgroundColor: 'var(--bg-secondary)',
                                    border: '1px solid var(--bg-card)',
                                    color: 'white'
                                }}
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
                            <input
                                type="email"
                                required
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    backgroundColor: 'var(--bg-secondary)',
                                    border: '1px solid var(--bg-card)',
                                    color: 'white'
                                }}
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Message</label>
                            <textarea
                                required
                                rows="5"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    backgroundColor: 'var(--bg-secondary)',
                                    border: '1px solid var(--bg-card)',
                                    color: 'white'
                                }}
                                placeholder="How can we help?"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                            <Send size={18} /> Send Message
                        </button>
                    </form>
                    {status && <p style={{ marginTop: '1rem', color: 'var(--success)', textAlign: 'center' }}>{status}</p>}
                </div>
            </div>
        </section>
    );
};

export default Contact;
