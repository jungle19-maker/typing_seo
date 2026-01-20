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
        <section id="contact" className="py-20 lg:py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">Contact Us</h2>
                <p className="text-center text-slate-600 mb-12 text-lg">
                    Have questions, feedback, or collaboration ideas? Feel free to contact us.
                </p>

                <div className="max-w-xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-slate-700">Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-slate-700">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-slate-700">Message</label>
                            <textarea
                                required
                                rows="5"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                                placeholder="How can we help?"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 hover:-translate-y-1 transition-all flex justify-center items-center gap-2">
                            <Send size={20} /> Send Message
                        </button>
                    </form>
                    {status && <p className="mt-4 text-green-600 font-medium text-center bg-green-50 py-2 rounded-lg">{status}</p>}
                </div>
            </div>
        </section>
    );
};

export default Contact;
