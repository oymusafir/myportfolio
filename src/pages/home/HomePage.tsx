import { Link } from "react-router-dom";
import TypeWriter from "./components/TypeWriter";
import { Github, Linkedin } from "lucide-react";
import profilePic from "../../assets/profile.webp"

export default function HomePage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-12 pt-20 md:pt-0">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Image First on Mobile */}
                <div className="flex justify-center order-1 md:order-2">
                    <div className="relative">
                        <Link to={"/"}>
                            <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-30 transition"></div>
                            <img
                                src={profilePic}
                                alt="Muhammad Adnan"
                                className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-white shadow-2xl transition-transform hover:scale-105 hover:rotate-1"
                            />
                        </Link>
                    </div>
                </div>

                {/* Text Section */}
                <div className="space-y-6 text-center md:text-left order-2 md:order-1">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Hey, I’m{" "}
                        <span className="text-blue-600">Muhammad Adnan</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-700">
                        A passionate <TypeWriter /> crafting modern web apps, automation tools, WhatsApp chatbots & CRMs
                        and scalable solutions with clean code & great user experience.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {["React", "Python", "Node.js", "Tailwind", "Automation", "Next.js", "MongoDB", "Supabase", "React Native", "Playwright"]
                            .map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                            href="https://github.com/oymusafir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
                        >
                            <Github className="w-5 h-5" /> GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/oymusafir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-2.5 rounded-lg hover:bg-blue-50 transition"
                        >
                            <Linkedin className="w-5 h-5" /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
