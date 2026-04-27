// frontend/src/components/Doctor.jsx
import { CLINIC_INFO } from '../config';

export default function Doctor() {
    return (
        <section className="py-20 px-4 bg-white" id="doctor">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Meet Your Doctor
                    </h2>
                    <p className="text-xl text-gray-600">
                        Experienced pediatric and maternal specialist with years of
                        dedicated service
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Doctor card */}
                    <div className="md:col-span-2 card">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-40 h-40 bg-gradient-to-br from-clinic-300 to-clinic-200 rounded-full flex items-center justify-center text-6xl shadow-lg">
                                    👨‍⚕️
                                </div>
                            </div>

                            <div className="flex-grow space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                        {CLINIC_INFO.doctor}
                                    </h3>
                                    <p className="text-clinic-600 font-semibold text-lg">
                                        Pediatric & Maternal Specialist
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            Qualifications
                                        </h4>
                                        <ul className="text-gray-700 space-y-1">
                                            <li>✓ MBBS - Government Medical College</li>
                                            <li>✓ MD Pediatrics - Specialist Certification</li>
                                            <li>✓ 10+ years clinical experience</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            Expertise
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                'Neonatal Care',
                                                'Vaccination',
                                                'Growth Tracking',
                                                'Maternal Health',
                                                'Childcare Guidance',
                                            ].map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-clinic-100 text-clinic-700 rounded-full text-sm font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick info card */}
                    <div className="card bg-clinic-50 border border-clinic-200">
                        <h4 className="text-xl font-bold text-gray-900 mb-6">
                            Why Choose Us?
                        </h4>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex gap-3">
                                <span className="text-2xl flex-shrink-0">🎯</span>
                                <span>
                                    <strong>Focused Care</strong> - Specialized pediatric services
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-2xl flex-shrink-0">⏰</span>
                                <span>
                                    <strong>Time Efficient</strong> - Minimal wait times
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-2xl flex-shrink-0">💉</span>
                                <span>
                                    <strong>Preventive Care</strong> - Vaccination programs
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-2xl flex-shrink-0">🤝</span>
                                <span>
                                    <strong>Family Support</strong> - Parenting guidance included
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}