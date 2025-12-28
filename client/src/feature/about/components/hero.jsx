// src/feature/whatwedo/components/SimpleHero.jsx
const SimpleHero = () => {
  return (
    <section className="relative pt-16 pb-20 bg-[var(--color-bg)] overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--color-blue)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-12 right-0 w-72 h-72 bg-[var(--color-gold)] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-12 left-16 w-72 h-72 bg-[var(--color-darkblue)] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: "var(--font-text)" }}>
            <span style={{ color: "var(--color-blue)" }}>About</span> <span style={{ color: "var(--color-darkblue)" }}>HELP Ethiopia</span>
          </h1>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-[var(--color-lightgray)]">
            <p className="text-[var(--color-darkgray)] text-base md:text-lg leading-7 md:leading-9 mb-4" style={{ fontFamily: "var(--font-text)" }}>
              HELP Ethiopia is a multidisciplinary non-profit organization registered in Ethiopia with registry number 5623. Committed to improving healthcare, we collaborate with local and international stakeholders to address neglected areas of health service delivery and training. We also run a dedicated charity program targeting economically disadvantaged groups—Ye&apos;Eteye Health Charity. Furthermore, we advocate for quality education, leadership, and collaboration as tools for sustainable healthcare and societal development. Hence the name &quot;HELP&quot;, which stands for Health, Education, Leadership, and Partnership.
            </p>

            {/* Pill tags */}
            <div className="mt-8 pt-6 border-t border-[var(--color-lightgray)] flex flex-wrap justify-center gap-3">
              <span className="bg-[var(--color-gold)] text-[var(--color-darkblue)] px-4 py-1.5 rounded-full font-medium text-sm">Health</span>
              <span className="bg-[var(--color-blue)] text-[var(--color-gold)] px-4 py-1.5 rounded-full font-medium text-sm">Education</span>
              <span className="bg-[var(--color-darkblue)] text-[var(--color-gold)] px-4 py-1.5 rounded-full font-medium text-sm">Leadership</span>
              <span className="bg-[var(--color-lightgray)] text-[var(--color-darkblue)] px-4 py-1.5 rounded-full font-medium text-sm">Partnership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
