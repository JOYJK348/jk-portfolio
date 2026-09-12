const WHATSAPP_NUMBER = "919080558130"; // India (+91) prefix
const WHATSAPP_MESSAGE = "Hi Jay! I'd like to discuss a project with you.";

const WhatsAppButton = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
        >
            {/* Tooltip label */}
            <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none">
                Chat on WhatsApp
            </span>

            {/* Button */}
            <div className="relative w-14 h-14 rounded-full shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                style={{ background: "#25D366" }}
            >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: "#25D366" }} />

                {/* WhatsApp SVG icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-8 h-8 fill-white"
                >
                    <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.643 4.885 1.867 7.01L2 30l7.18-1.84A13.93 13.93 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.47a11.44 11.44 0 0 1-5.83-1.594l-.417-.248-4.26 1.09 1.117-4.14-.272-.427A11.45 11.45 0 0 1 4.53 16.003c0-6.33 5.144-11.473 11.473-11.473 6.33 0 11.473 5.144 11.473 11.473 0 6.33-5.144 11.467-11.473 11.467zm6.29-8.593c-.344-.172-2.038-1.005-2.354-1.12-.316-.114-.546-.172-.776.173-.23.344-.888 1.12-1.09 1.35-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.77-1.71-1.023-.912-1.714-2.038-1.914-2.382-.2-.344-.02-.53.15-.7.154-.153.344-.4.516-.6.172-.2.23-.344.344-.573.115-.23.058-.43-.03-.6-.085-.172-.776-1.87-1.063-2.562-.28-.67-.563-.58-.776-.59-.2-.01-.43-.012-.66-.012-.23 0-.6.086-.916.43-.315.344-1.205 1.178-1.205 2.87s1.234 3.33 1.405 3.56c.172.23 2.428 3.71 5.88 5.203.822.355 1.463.567 1.963.726.824.263 1.574.226 2.166.137.66-.099 2.038-.833 2.325-1.638.287-.805.287-1.494.2-1.638-.086-.144-.316-.23-.66-.402z" />
                </svg>
            </div>
        </a>
    );
};

export default WhatsAppButton;
