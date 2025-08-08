import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter() {
    return (
        <span style={{ color: '#2563eb', fontWeight: 'bold' }}>
            <Typewriter
                words={[
                    "WhatsApp Marketing Expert",
                    "Chatbot & CRM Developer",
                    "Full-Stack Developer",
                    "Automation Engineer",
                ]}
                loop={5} // 0 means infinite loop
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </span>
    );
}
