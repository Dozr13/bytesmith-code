export default function Home() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 py-10">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Welcome to ByteSmith Code</h1>
                    <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                        At ByteSmith Code, we specialize in creating beautiful, functional websites for small businesses.
                    </p>
                    <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                        Whether you&apos;re starting from scratch or looking to improve your existing website, we have the skills and experience to help your business shine online.
                    </p>
                    <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded mt-4">Get Started Today</a>
                </div>
            </section>
            <section className="bg-gray-100 dark:bg-gray-800 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Our Services</h2>
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
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">What Our Clients Say</h2>
                    <div className="space-y-4">
                        <blockquote className="p-4 italic border-l-4 bg-neutral-100 dark:bg-gray-800 text-neutral-600 dark:text-neutral-300 border-neutral-500 dark:border-neutral-400 quote">
                            &quot;ByteSmith Code transformed our outdated website into a modern, user-friendly platform. Our customers love it!&quot;
                            <span className="block text-right font-bold text-gray-900 dark:text-white">- Jane Doe, Local Bakery</span>
                        </blockquote>
                        <blockquote className="p-4 italic border-l-4 bg-neutral-100 dark:bg-gray-800 text-neutral-600 dark:text-neutral-300 border-neutral-500 dark:border-neutral-400 quote">

                            &quot;The team at ByteSmith Code was amazing to work with. They understood our needs and delivered a fantastic website.&quot;
                        </blockquote>
                    </div>
                </div>
            </section>
        </>
    )
}