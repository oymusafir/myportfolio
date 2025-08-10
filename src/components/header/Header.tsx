import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import profilePic from '../../assets/profile.webp'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className={`py-4 px-6 fixed w-full max-w-[1400px] z-50 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            <div className="flex justify-between items-center">
                {/* Left Section: Logo + Name */}
                <Link to={"/"}>
                    <div className="flex items-center gap-2">
                        <img src={profilePic} className="h-8 w-8 rounded-full" alt="Logo" />
                        <div className="font-bold text-lg">Muhammad Adnan</div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center justify-between font-medium">
                    <Link to="/" className="hover:text-blue-500 transition">Home</Link>
                    <Link to="/about" className="hover:text-blue-500 transition">About</Link>
                    <Link to="/projects" className="hover:text-blue-500 transition">Projects</Link>
                </nav>

                {/* Right Section */}
                <div className="hidden md:flex gap-4">
                    <a href="https://www.linkedin.com/in/oymusafir/" title="Visit my LinkedIn profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
                        <Linkedin size={22} />
                    </a>
                    <a href="https://github.com/oymusafir" title="Visit my GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
                        <Github size={22} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded hover:bg-gray-100"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden mt-3 bg-white shadow-lg rounded-lg p-4 space-y-3">
                    <Link to="/" className="block hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" className="block hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/projects" className="block hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <div className="flex gap-4 pt-2 border-t">
                        <a href="https://www.linkedin.com/in/oymusafir/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
                            <Linkedin size={22} />
                        </a>
                        <a href="https://github.com/oymusafir" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
                            <Github size={22} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
