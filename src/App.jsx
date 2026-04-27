// frontend/src/App.jsx
import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctor from './components/Doctor';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import './index.css';

function App() {
    useEffect(() => {
        // Set document title
        document.title = 'Little Miracles - Pediatric & Maternal Clinic';

        // Add meta tags for SEO
        const metaTags = [
            {
                name: 'description',
                content:
                    'Little Miracles Mother and Child Clinic - Trusted pediatric and maternal care by Dr. Prabha S in Yelahanka, Bengaluru. Expert child checkups, vaccinations, and maternal health services.',
            },
            {
                name: 'keywords',
                content:
                    'pediatric clinic, child doctor, mother care, vaccination, Bengaluru, Yelahanka, pediatrician',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                property: 'og:title',
                content: 'Little Miracles - Pediatric & Maternal Clinic',
            },
            {
                property: 'og:description',
                content: 'Specialized pediatric and maternal care for your family',
            },
            {
                property: 'og:type',
                content: 'website',
            },
        ];

        metaTags.forEach((tag) => {
            let element = document.querySelector(
                `meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`
            );

            if (!element) {
                element = document.createElement('meta');
                if (tag.name) element.setAttribute('name', tag.name);
                if (tag.property) element.setAttribute('property', tag.property);
                document.head.appendChild(element);
            }

            element.setAttribute('content', tag.content);
        });
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Main content */}
            <main>
                {/* Hero section */}
                <section id="home">
                    <Hero />
                </section>

                {/* Services section */}
                <Services />

                {/* Doctor profile section */}
                <Doctor />

                {/* Appointment booking section */}
                <AppointmentForm />

                {/* Contact section */}
                <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating WhatsApp button */}
            <FloatingWhatsApp />

            {/* Scroll to top button */}
            <ScrollToTopButton />
        </div>
    );
}

/**
 * Scroll to top button component
 */
function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-clinic-600 text-white rounded-full shadow-lg hover:bg-clinic-700 flex items-center justify-center transition-all duration-200 hover:scale-110"
            title="Scroll to top"
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
}



export default App;