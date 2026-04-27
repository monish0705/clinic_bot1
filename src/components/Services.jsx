// frontend/src/components/Services.jsx
export default function Services() {
    const services = [
        {
            icon: '👶',
            title: 'Child Checkups',
            description:
                'Comprehensive health assessments from newborn to adolescent stage. Regular growth monitoring and developmental milestones tracking.',
        },
        {
            icon: '💊',
            title: 'Vaccinations',
            description:
                'Complete vaccination schedule following government guidelines. Safe, effective immunization programs for children.',
        },
        {
            icon: '🤰',
            title: 'Maternal Health',
            description:
                'Prenatal care, postnatal support, and lactation guidance. Holistic maternal wellness programs.',
        },
        {
            icon: '📋',
            title: 'Health Monitoring',
            description:
                'Regular weight, height, and developmental assessments. Early detection and management of health concerns.',
        },
        {
            icon: '👨‍🏫',
            title: 'Parenting Guidance',
            description:
                'Expert advice on childcare, nutrition, hygiene, and child development. Personalized parenting support.',
        },
        {
            icon: '🏥',
            title: 'Minor Treatments',
            description:
                'Management of common childhood illnesses and minor medical conditions. Proper clinical care in a safe environment.',
        },
    ];

    return (
        <section className="py-20 px-4 bg-gray-50" id="services">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-600">
                        Comprehensive pediatric and maternal care under one roof
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="card hover:shadow-xl transition-shadow">
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional info */}
                <div className="mt-16 bg-clinic-50 border border-clinic-200 rounded-lg p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Latest Technology + Personalized Care
                    </h3>
                    <p className="text-gray-700 max-w-3xl mx-auto">
                        We combine modern medical technology with compassionate, personalized
                        care. Every child is unique, and we believe healthcare should be too.
                        Our clinic is equipped with state-of-the-art facilities to ensure the
                        best possible outcomes for your family.
                    </p>
                </div>
            </div>
        </section>
    );
}