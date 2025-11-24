"use client";

export default function GoogleDefinition() {
  return (
    <article className="max-w-3xl w-full bg-white border border-gray-200 shadow-sm rounded-xl p-6 lg:p-8 text-gray-900">
      <header className="flex flex-row items-start justify-between gap-0">
        <div className="flex-1">
          <div className="flex items-baseline gap-3">
            <h1 className="text-3xl lg:text-4xl font-medium leading-tight focus:outline-none">
              Alex Ruddell
            </h1>

            <span className="text-sm text-gray-600 ml-2">
              /ˈalɪks ɹˈʌdɛl/
            </span>
          </div>

          <div className="mt-3">
            <span className="inline-block text-sm text-gray-700 bg-gray-100 border border-gray-200 px-3 py-1 rounded-md">
              proper noun
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => {
              // Perform basic TTS (if available)
              if (typeof window !== "undefined" && "speechSynthesis" in window) {
                try {
                  const u = new SpeechSynthesisUtterance("Alex Ruddell");
                  window.speechSynthesis.cancel();
                  window.speechSynthesis.speak(u);
                } catch { 
                  // Failed, do nothing.
                }
              }
            }}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 8a5 5 0 010 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-gray-500 font-semibold select-none mt-1">•</div>
          <div className="flex-1">
            <p className="text-base text-gray-900">
              A New Zealand-based software engineer with strong technical design and development skills
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-gray-500 font-semibold select-none mt-1">•</div>
          <div className="flex-1">
            <p className="text-base text-gray-900">
              An extroverted people-person passionate about all things people, culture, &amp; sustainable software development
            </p>
            <p className="mt-2 text-sm text-gray-600 italic">
              I'm one of the most positive and excited software engineers you've ever met!
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-gray-500 font-semibold select-none mt-1">•</div>
          <div className="flex-1">
            <p className="text-base text-gray-900">
              Currently powering the next generation of snowsports with Intouch Technology Group
            </p>
            <p className="mt-2 text-sm text-gray-600 italic">
              Find out more at <a href="https://www.intouchelevate.com/" target="_blank">intouchelevate.com</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-6 border-t border-gray-100 pt-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-sm text-gray-500 mr-2">Synonyms:</span>
            <div className="text-sm text-gray-700">
              snowboarder, runner, outdoor enthusiast
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <a
            href="#about-section"
            className="text-gray-600 hover:underline"
          >
            Find out more...
          </a>
        </div>
      </footer>
    </article>
  );
}
