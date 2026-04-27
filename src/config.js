// frontend/src/config.js
/**
 * Frontend configuration
 * Load API URL from environment variables
 */

const API_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:5000';

const CLINIC_INFO = {
    name: 'Little Miracles Mother and Child Clinic',
    doctor: 'Dr. Prabha S',
    address: 'First Floor, Amma Appa Complex, Kogilu Main Rd, Yelahanka, Bengaluru',
    phone: '06363110471',
    whatsapp: '06363110471',
    email: 'contact@littlemiracles.clinic',
    hours: {
        weekdays: '10:00 AM - 6:00 PM',
        saturday: '10:00 AM - 2:00 PM',
        sunday: 'Closed',
    },
    mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4175238595447!2d77.55862!3d13.14166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ceb50000001%3A0x1234567890!2sAmma%20Appa%20Complex%2C%20Kogilu!5e0!3m2!1sen!2sin!4v1234567890',
};

export { API_URL, CLINIC_INFO };