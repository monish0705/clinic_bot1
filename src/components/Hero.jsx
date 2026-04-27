// frontend/src/components/Hero.jsx
import { CLINIC_INFO } from '../config';

export default function Hero() {
    const scrollToBooking = () => {
        document.getElementById('appointment-form').scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <section className="hero-gradient py-20 md:py-32 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-clinic-600 font-semibold text-lg">
                                👋 Welcome to
                            </p>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                {CLINIC_INFO.name}
                            </h1>
                        </div>

                        <p className="text-xl text-gray-700 leading-relaxed">
                            Specialized pediatric and maternal care with compassion and
                            expertise. Trusted by families across Bengaluru.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 text-2xl">👨‍⚕️</div>
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {CLINIC_INFO.doctor}
                                    </p>
                                    <p className="text-gray-600">
                                        Pediatric & Maternal Specialist
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 text-2xl">🏥</div>
                                <div>
                                    <p className="font-semibold text-gray-900">Modern Facilities</p>
                                    <p className="text-gray-600">
                                        State-of-the-art equipment and comfortable environment
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 text-2xl">❤️</div>
                                <div>
                                    <p className="font-semibold text-gray-900">Compassionate Care</p>
                                    <p className="text-gray-600">
                                        Personalized attention for every patient
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={scrollToBooking}
                                className="btn-primary inline-flex items-center justify-center"
                            >
                                Book Appointment 📅
                            </button>
                            <a
                                href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/\D/g, '')}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary inline-flex items-center justify-center"
                            >
                                WhatsApp 💬
                            </a>
                        </div>
                    </div>

                    {/* Right side - Image placeholder */}
                    <div className="flex items-center justify-center">
                        <div className="w-full aspect-square bg-gradient-to-br from-clinic-200 to-clinic-100 rounded-2xl shadow-xl flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="text-6xl">👨‍👩‍👧‍👦</div>
                                <p className="text-clinic-700 font-semibold">
                                    Family Care Excellence
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}