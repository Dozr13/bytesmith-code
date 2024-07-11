export default function Services() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 py-10">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Services</h1>
                    <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                        At ByteSmith Code, we offer a range of services designed to help your business succeed online. From custom website design to ongoing maintenance, we&apos;ve got you covered.
                    </p>
                </div>
            </section>
            <section className="bg-gray-100 dark:bg-gray-800 py-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {["Custom Website Design", "Responsive Web Development", "SEO Optimization", "E-commerce Solutions", "Website Maintenance"].map((service) => (
                            <div key={service} className="bg-white dark:bg-gray-700 p-6 rounded shadow hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service}</h3>
                                <p className="text-gray-600 dark:text-gray-300">Professional and personalized service tailored to your needs.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 py-12">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                        How We Work
                    </h2>
                    <div className="mx-8 lg:mx-16">
                        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                            Our process is designed to be collaborative and transparent. We work closely with you to understand your needs and deliver a solution that exceeds your expectations.
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                            <li>Initial Consultation</li>
                            <li>Design and Development</li>
                            <li>Review and Feedback</li>
                            <li>Launch and Support</li>
                        </ol>
                    </div>
                </div>
            </section>
        </>
    )
}
