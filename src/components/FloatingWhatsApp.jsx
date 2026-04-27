// frontend/src/components/FloatingWhatsApp.jsx
import { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../config';

export default function FloatingWhatsApp() {
    const [showMenu, setShowMenu] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    // Hide button when scrolled to top
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappNumber = CLINIC_INFO.whatsapp.replace(/\D/g, '');

    const quickMessages = [
        {
            label: 'Book Appointment',
            message: 'Hi, I would like to book an appointment',
        },
        {
            label: 'General Inquiry',
            message: 'Hi, I have a question about your services',
        },
        {
            label: 'Emergency',
            message: 'Hi, I need urgent medical assistance',
        },
    ];

    const handleWhatsApp = (message) => {
        const encodedMessage = encodeURIComponent(message);
        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
            '_blank'
        );
        setShowMenu(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-40">
            {/* Menu items */}
            {showMenu && (
                <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl p-4 w-64 animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <p className="text-sm font-semibold text-gray-900 mb-3">
                        Choose your message:
                    </p>
                    <div className="space-y-2">
                        {quickMessages.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleWhatsApp(item.message)}
                                className="w-full text-left px-3 py-2 rounded-lg hover:bg-clinic-50 text-sm text-gray-700 hover:text-clinic-600 transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <div className="border-t border-gray-200 mt-3 pt-3">
                        <button
                            onClick={() => setShowMenu(false)}
                            className="w-full text-center text-xs text-gray-500 hover:text-gray-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Main button */}
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="relative w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex items-center justify-center text-white text-3xl hover:text-4xl"
                title="Chat on WhatsApp"
                aria-label="Open WhatsApp chat"
            >
                💬
                {/* Animated pulse ring */}
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25"></div>
            </button>

            {/* Tooltip */}
            {!showMenu && (
                <div className="absolute -left-48 bottom-4 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none animate-in fade-in slide-in-from-right-2 duration-300">
                    💬 Book appointment via WhatsApp
                    <div className="absolute -right-1 top-3 w-2 h-2 bg-gray-900 transform rotate-45"></div>
                </div>
            )}
        </div>
    );
}