import Form from "@/components/Form"

export default function Contact() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 py-10">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h1>
                    <p className="text-lg mx-4 mb-4 text-gray-700 dark:text-gray-300">
                        We&apos;d love to hear from you! Whether you have a question about our services or need a consultation, feel free to reach out.
                    </p>
                </div>
            </section>
            <section className="bg-gray-100 dark:bg-gray-800 py-12">
                <div className="container mx-auto">
                    <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                        <Form />
                    </div>
                </div>
            </section>
        </>
    )
}
