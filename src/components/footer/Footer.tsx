import { Github, Laptop, Linkedin, Mail, MessageCircleDashedIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 text-black">
                <Link to={"/"}>
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <Laptop size={24} /> Muhammad Adnan
                    </h2>
                </Link>
                <div className="flex gap-4">
                    <a href="https://wa.me/923424590618" title="Chat with me on WhatsApp" target="_blank" rel="noreferrer" className="hover:text-gray-700">
                        <MessageCircleDashedIcon size={24} />
                    </a>
                    <a href="mailto:oymusafir@gmail.com" title="Send me an email" className="hover:text-gray-700">
                        <Mail size={24} />
                    </a>
                    <a href="https://linkedin.com/in/oymusafir" target="_blank" title="Visit my LinkedIn profile" rel="noreferrer" className="hover:text-gray-700">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/oymusafir" target="_blank" title="Visit my GitHub" rel="noreferrer" className="hover:text-gray-700">
                        <Github size={24} />
                    </a>

                </div>
            </div>
        </footer >
    );
}
