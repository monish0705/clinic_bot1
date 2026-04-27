// frontend/src/components/Footer.jsx
import { CLINIC_INFO } from '../config';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main footer */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Clinic Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl">🏥</span>
                            <h3 className="text-lg font-bold text-white">Little Miracles</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            Specialized pediatric and maternal care for your family's health.
                        </p>
                        <div className="pt-4 border-t border-gray-800">
                            <p className="text-sm font-semibold text-white mb-2">
                                Clinic Hours
                            </p>
                            <ul className="text-sm text-gray-400 space-y-1">
                                <li>Mon-Fri: 10:00 AM - 6:00 PM</li>
                                <li>Sat: 10:00 AM - 2:00 PM</li>
                                <li>Sun: Closed</li>
                            </ul>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Quick Links</h3>
                        <ul className="text-sm space-y-2">
                            <li>
                                <a
                                    href="#appointment-form"
                                    className="hover:text-clinic-400 transition-colors"
                                >
                                    → Book Appointment
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="hover:text-clinic-400 transition-colors"
                                >
                                    → Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#doctor"
                                    className="hover:text-clinic-400 transition-colors"
                                >
                                    → Doctor Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-clinic-400 transition-colors"
                                >
                                    → Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Services</h3>
                        <ul className="text-sm space-y-2">
                            <li>→ Child Checkups</li>
                            <li>→ Vaccinations</li>
                            <li>→ Maternal Health</li>
                            <li>→ Health Monitoring</li>
                            <li>→ Parenting Guidance</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Contact Us</h3>
                        <div className="text-sm space-y-3">
                            <div>
                                <p className="text-gray-400 mb-1">📞 Phone/WhatsApp</p>
                                <a
                                    href={`tel:${CLINIC_INFO.phone}`}
                                    className="text-clinic-400 hover:text-clinic-300 font-semibold"
                                >
                                    {CLINIC_INFO.phone}
                                </a>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-1">📍 Address</p>
                                <p className="text-gray-400">
                                    {CLINIC_INFO.address.split(',')[0]}
                                </p>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <a
                                    href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/\D/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl hover:opacity-80 transition-opacity"
                                    title="WhatsApp"
                                >
                                    💬
                                </a>
                                <a
                                    href={`tel:${CLINIC_INFO.phone}`}
                                    className="text-2xl hover:opacity-80 transition-opacity"
                                    title="Call"
                                >
                                    📞
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800"></div>

                {/* Bottom bar */}
                <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-400 text-center md:text-left">
                        <p>
                            © {currentYear} Little Miracles Mother and Child Clinic. All rights
                            reserved.
                        </p>
                        <p className="mt-2">
                            This website is for informational purposes. Please consult the doctor
                            for medical advice.
                        </p>
                    </div>

                    <div className="flex gap-4 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <span className="text-gray-600">•</span>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-950 py-4 px-4 text-center text-xs text-gray-500">
                <p>
                    This website is operated by Little Miracles Clinic. Dr. Prabha S is
                    registered with Medical Council of India.
                </p>
            </div>
        </footer>
    );
}