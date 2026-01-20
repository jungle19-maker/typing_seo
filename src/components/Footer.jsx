import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--bg-secondary)', padding: '3rem 0', borderTop: '1px solid var(--bg-card)' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>KeySkill</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Master the art of typing.</p>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}><Github size={24} /></a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}><Linkedin size={24} /></a>
                </div>

                <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    <p>&copy; {new Date().getFullYear()} KeySkill Project. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
