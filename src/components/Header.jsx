// frontend/src/components/Header.jsx
import { useState } from 'react';
import { CLINIC_INFO } from '../config';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'Doctor', href: '#doctor' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo/Brand */}
                <div className="flex items-center gap-2">
                    <div className="text-3xl">🏥</div>
                    <div className="hidden sm:block">
                        <h1 className="text-lg font-bold text-gray-900">
                            Little Miracles
                        </h1>
                        <p className="text-xs text-gray-600">Pediatric & Maternal Care</p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-700 hover:text-clinic-600 font-semibold transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA Buttons - Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href={`tel:${CLINIC_INFO.phone}`}
                        className="btn-ghost"
                    >
                        📞 {CLINIC_INFO.phone}
                    </a>
                    <a
                        href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm"
                    >
                        WhatsApp 💬
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                mobileMenuOpen
                                    ? 'M6 18L18 6M6 6l12 12'
                                    : 'M4 6h16M4 12h16M4 18h16'
                            }
                        />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block text-gray-700 hover:text-clinic-600 font-semibold py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-gray-200 space-y-3">
                        <a
                            href={`tel:${CLINIC_INFO.phone}`}
                            className="block btn-secondary text-center"
                        >
                            📞 Call: {CLINIC_INFO.phone}
                        </a>
                        <a
                            href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block btn-primary text-center"
                        >
                            WhatsApp 💬
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}