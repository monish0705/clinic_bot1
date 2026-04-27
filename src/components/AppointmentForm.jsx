// frontend/src/components/AppointmentForm.jsx
import { useState } from 'react';
import axios from 'axios';
import { API_URL, CLINIC_INFO } from '../config';

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(null);

    // Get today's date in YYYY-MM-DD format
    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    // Get next 30 days
    const getMaxDate = () => {
        const date = new Date();
        date.setDate(date.getDate() + 30);
        return date.toISOString().split('T')[0];
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            setMessage('Please enter your name');
            setSuccess(false);
            return false;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
            setMessage('Please enter a valid 10-digit phone number');
            setSuccess(false);
            return false;
        }

        if (!formData.date) {
            setMessage('Please select a date');
            setSuccess(false);
            return false;
        }

        if (!formData.time) {
            setMessage('Please select a time');
            setSuccess(false);
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setMessage(null);

        try {
            const response = await axios.post(
                `${API_URL}/api/book-appointment`,
                {
                    name: formData.name.trim(),
                    phone: formData.phone.replace(/\D/g, ''),
                    date: formData.date,
                    time: formData.time,
                    source: 'Website',
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.data.success) {
                setSuccess(true);
                setMessage(
                    `✅ Appointment confirmed! ${response.data.message}\n\nSlot: ${formData.date} at ${formData.time}`
                );

                // Reset form
                setFormData({
                    name: '',
                    phone: '',
                    date: '',
                    time: '',
                });

                // Scroll to message
                setTimeout(() => {
                    document
                        .querySelector('.appointment-message')
                        ?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            } else {
                setSuccess(false);
                setMessage(
                    response.data.message ||
                    'Booking failed. Please try again or contact via WhatsApp.'
                );
            }
        } catch (error) {
            console.error('Booking error:', error);

            if (error.response?.data?.message) {
                setMessage(error.response.data.message);
            } else if (error.response?.status === 409) {
                setMessage(
                    'You already have an active booking. Please cancel it first to book a new appointment.'
                );
            } else {
                setMessage(
                    '❌ System issue. Please book via WhatsApp or call us directly.'
                );
            }
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 px-4 bg-white" id="appointment-form">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Book Your Appointment
                    </h2>
                    <p className="text-xl text-gray-600">
                        Easy online booking with instant confirmation
                    </p>
                </div>

                {/* Message display */}
                {message && (
                    <div
                        className={`appointment-message mb-8 p-6 rounded-lg border-2 whitespace-pre-line ${success
                                ? 'bg-green-50 border-green-200 text-green-800'
                                : 'bg-red-50 border-red-200 text-red-800'
                            }`}
                    >
                        <p className="font-semibold">{message}</p>
                        {success && (
                            <p className="text-sm mt-4 text-gray-700">
                                The clinic has been notified via WhatsApp. You will receive
                                confirmation shortly.
                            </p>
                        )}
                    </div>
                )}

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="form-input"
                                disabled={loading}
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Phone Number *
                            </label>
                            <div className="flex gap-2">
                                <span className="flex items-center px-4 bg-gray-100 rounded-lg border border-gray-300 text-gray-600 font-semibold">
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="10-digit number"
                                    className="form-input flex-grow"
                                    maxLength="10"
                                    disabled={loading}
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                We'll send appointment details via WhatsApp to this number
                            </p>
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Preferred Date *
                            </label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                min={getTodayDate()}
                                max={getMaxDate()}
                                className="form-input"
                                disabled={loading}
                            />
                        </div>

                        {/* Time */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Preferred Time *
                            </label>
                            <select
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="form-input"
                                disabled={loading}
                            >
                                <option value="">Select a time</option>
                                {[
                                    '10:00',
                                    '10:15',
                                    '10:30',
                                    '10:45',
                                    '11:00',
                                    '11:15',
                                    '11:30',
                                    '11:45',
                                    '12:00',
                                    '12:15',
                                    '12:30',
                                    '14:00',
                                    '14:15',
                                    '14:30',
                                    '14:45',
                                    '15:00',
                                    '15:15',
                                    '15:30',
                                    '15:45',
                                    '16:00',
                                    '16:15',
                                    '16:30',
                                    '16:45',
                                    '17:00',
                                    '17:15',
                                    '17:30',
                                    '17:45',
                                ].map((t) => (
                                    <option key={t} value={t}>
                                        {new Date(`2024-01-01T${t}`).toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full btn-primary flex items-center justify-center gap-2 ${loading ? 'opacity-75 cursor-not-allowed' : ''
                                }`}
                        >
                            {loading ? (
                                <>
                                    <svg className="spinner h-5 w-5" viewBox="0 0 24 24">
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="none"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                    Booking...
                                </>
                            ) : (
                                <>✅ Confirm Appointment</>
                            )}
                        </button>

                        <p className="text-xs text-gray-500 text-center">
                            By booking, you agree to our terms. We'll contact you via WhatsApp
                            for confirmation.
                        </p>
                    </form>

                    {/* Right side - Info */}
                    <div className="space-y-8">
                        <div className="card bg-clinic-50 border border-clinic-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Why Book Online?
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Instant booking confirmation</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>No waiting on call</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>WhatsApp reminders sent</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>24/7 booking available</span>
                                </li>
                            </ul>
                        </div>

                        <div className="card">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Still have questions?
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Reach out to us directly via WhatsApp or give us a call.
                            </p>
                            <div className="space-y-3">
                                <a
                                    href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/\D/g, '')}?text=Hi,%20I%20have%20a%20question%20about%20appointments`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary w-full text-center"
                                >
                                    WhatsApp Us 💬
                                </a>
                                <a
                                    href={`tel:${CLINIC_INFO.phone}`}
                                    className="btn-ghost w-full text-center"
                                >
                                    Call: {CLINIC_INFO.phone}
                                </a>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <p className="text-sm text-yellow-800">
                                <strong>⏰ Note:</strong> Appointments are booked in 15-minute
                                slots. If your preferred time is unavailable, the next available
                                slot will be assigned.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}