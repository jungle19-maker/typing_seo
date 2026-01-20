import React, { useState } from 'react';
import { Menu, X, Keyboard } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar" style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container navbar-container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                height: '70px'
            }}>
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 'bold', fontSize: '1.5rem' }}>
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <Keyboard size={24} className="text-blue-600" />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">KeySkill</span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#features" className="nav-link font-medium text-slate-600 hover:text-blue-600 transition-colors">Features</a>
                    <a href="#overview" className="nav-link font-medium text-slate-600 hover:text-blue-600 transition-colors">Overview</a>
                    <a href="#exams" className="nav-link font-medium text-slate-600 hover:text-blue-600 transition-colors">Exams</a>
                    <button
                        className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                        onClick={() => window.location.href = 'https://typingfrontend.vercel.app/'}
                    >
                        Get Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'none' }}>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--text-primary)' }}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (placeholder style) */}
            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav >
    );
};

export default Navbar;
