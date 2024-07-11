import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ToastProvider from "@/providers/ToastProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "ByteSmith Code",
    description: "We create beautiful websites for small businesses.",
}

// TODO: Consider a drak/ light mode button
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <title>ByteSmith Code</title>
                <meta
                    name="description"
                    content="We create beautiful websites for small businesses."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="container m-auto px-4 pt-4 flex-grow">
                    <ToastProvider>{children}</ToastProvider>
                </main>
                <Footer />
            </body>
        </html>
    )
}
