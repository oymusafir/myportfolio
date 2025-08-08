export default function ErrorPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 pt-20 md:pt-20 text-center">
            <div className="text-6xl mb-6 animate-bounce" aria-hidden="true">
                😒
            </div>
            <h1 className="text-2xl font-extrabold mb-4 text-gray-900">
                Lost? Or just testing if I’m paying attention?
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mb-8 leading-relaxed">
                Either way, don’t worry — I won’t tell anyone. Let me get you back on track before you start crying like a lost baby!
            </p>
            <a
                href="/"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
                Take Me Home
            </a>
        </main>
    );
}
