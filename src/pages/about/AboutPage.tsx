export default function AboutPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-12 pt-20 md:pt-20">
            <div className="max-w-6xl w-full text-center md:text-left space-y-6">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-gray-900">
                    About Me
                </h1>

                {/* Short Intro */}
                <p className="text-base text-gray-700 leading-relaxed">
                    Hi, I’m <span className="font-semibold">Muhammad Adnan</span>, a
                    passionate full-stack developer, software engineer, and automation
                    expert. I build <span className="font-medium">web apps</span>,{" "}
                    <span className="font-medium">desktop apps</span>, and{" "}
                    <span className="font-medium">mobile applications</span> with a focus
                    on clean code, scalability, and great user experience.
                </p>
                {/* WhatsApp Expertise */}
                <div className="p-4 border rounded-lg bg-white shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                        💬 WhatsApp Marketing & Automation
                    </h2>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        I specialize in building advanced <strong>WhatsApp chatbots</strong>,
                        marketing automation tools, and complete <strong>WhatsApp CRM systems</strong>
                        for businesses. My solutions help clients:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 mt-2 list-disc list-inside">
                        <li>Send personalized, bulk promotional messages legally & effectively</li>
                        <li>Automate lead capture and follow-up with AI-powered chatbots</li>
                        <li>Integrate WhatsApp with CRM, e-commerce, and support systems</li>
                        <li>Boost customer engagement & sales without manual effort</li>
                    </ul>
                    
                </div>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">
                            🛠 Skills & Expertise
                        </h2>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>Full-Stack Development</li>
                            <li>WhatsApp Marketing Automation</li>
                            <li>Chatbot & CRM Development</li>
                            <li>Custom Automation Tools</li>
                            <li>API Integrations</li>
                        </ul>
                    </div>

                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">
                            🚀 Products & Achievements
                        </h2>
                        <p className="text-sm text-gray-700">
                            Developed multiple software solutions that are actively generating
                            revenue for clients and businesses. My work focuses on delivering
                            real-world results with long-term value.
                        </p>
                    </div>
                </div>

                {/* Experience */}
                <div className="p-4 border rounded-lg bg-white shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                        📌 Experience
                    </h2>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        With years of hands-on experience, I have worked on diverse projects
                        from idea to deployment — delivering robust, user-friendly, and
                        scalable applications.
                    </p>
                </div>

            </div>
        </main>
    );
}
