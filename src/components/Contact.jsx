// frontend/src/components/Contact.jsx
import { CLINIC_INFO } from '../config';

export default function Contact() {
    return (
        <section className="py-20 px-4 bg-gray-50" id="contact">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600">
                        Visit us or contact us for more information
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Address */}
                        <div className="card">
                            <div className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">📍</div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        Our Location
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {CLINIC_INFO.address}
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=Amma+Appa+Complex+Kogilu+Yelahanka+Bengaluru"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-clinic-600 hover:text-clinic-700 font-semibold mt-3 inline-block"
                                    >
                                        View on Google Maps →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="card">
                            <div className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">📞</div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        Phone & WhatsApp
                                    </h3>
                                    <p className="text-gray-700 mb-3">
                                        <a
                                            href={`tel:${CLINIC_INFO.phone}`}
                                            className="text-clinic-600 hover:underline font-semibold"
                                        >
                                            {CLINIC_INFO.phone}
                                        </a>
                                    </p>
                                    <a
                                        href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/\D/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary text-sm inline-block"
                                    >
                                        Open WhatsApp →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="card">
                            <div className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">⏰</div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                                        Clinic Hours
                                    </h3>
                                    <div className="space-y-2 text-gray-700">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday:</span>
                                            <span className="font-semibold">10:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday:</span>
                                            <span className="font-semibold">10:00 AM - 2:00 PM</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>Sunday:</span>
                                            <span className="font-semibold">Closed</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-4">
                                        Emergency? Call anytime - we're here for you.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="card bg-clinic-50 border border-clinic-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Quick Links
                            </h3>
                            <div className="space-y-2">
                                <a
                                    href="#appointment-form"
                                    className="block text-clinic-600 hover:text-clinic-700 font-semibold"
                                >
                                    → Book Appointment
                                </a>
                                <a
                                    href="#services"
                                    className="block text-clinic-600 hover:text-clinic-700 font-semibold"
                                >
                                    → View Services
                                </a>
                                <a
                                    href="#doctor"
                                    className="block text-clinic-600 hover:text-clinic-700 font-semibold"
                                >
                                    → Meet Doctor
                                </a>
                                <a
                                    href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/\D/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-clinic-600 hover:text-clinic-700 font-semibold"
                                >
                                    → WhatsApp Support
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="card p-0 overflow-hidden h-full">
                        <iframe
                            src={CLINIC_INFO.mapEmbed}
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Little Miracles Clinic Location"
                            className="w-full h-full"
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 bg-gradient-to-r from-clinic-600 to-clinic-700 rounded-lg p-12 text-white text-center">
                    <h3 className="text-3xl font-bold mb-4">Ready to Book?</h3>
                    <p className="text-lg mb-8 opacity-90">
                        Scroll up and book your appointment now. We're looking forward to
                        seeing you!
                    </p>
                    <button
                        onClick={() =>
                            document.getElementById('appointment-form').scrollIntoView({
                                behavior: 'smooth',
                            })
                        }
                        className="bg-white text-clinic-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                    >
                        Book Now 📅
                    </button>
                </div>
            </div>
        </section>
    );
}