import Link from "next/link"

const Footer = () => (
    <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
            <div className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div className="mt-4">
                &copy; {new Date().getFullYear()} ByteSmith Code. All rights reserved.
            </div>
        </div>
    </footer>
)

export default Footer