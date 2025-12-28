// src/feature/whatwedo/components/SimpleHero.jsx
const SimpleHero = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-8 left-8 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-8 right-8 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-6 left-16 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ fontFamily: "var(--font-text)" }}>
  <span style={{ color: "var(--color-blue)" }}>About</span> <span style={{ color: "var(--color-darkblue)" }}>HELP Ethiopia</span>
</h1>

          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="space-y-5 text-base text-darkgray" style={{ fontFamily: "var(--font-text)" }}>
              <p className="text-sm md:text-lg leading-7 md:leading-9">
                HELP Ethiopia is a multidisciplinary non-profit organization that has been registered and accorded legal personality in Ethiopia with registry number 5623. Committed to improving healthcare, we collaborate with local and international stakeholders to address neglected areas of health service delivery and training. We also have a dedicated charity program targeting economically disadvantaged groups of our society- Ye&apos;Eteye Health Charity. Furthermore, we advocate for quality education, leadership and collaboration as a tool for sustainable healthcare and societal development. Hence the name &quot;HELP&quot; which stands for Health, Education, Leadership and Partnership.
              </p>
            </div>
            
            {/* Pill tags at the bottom */}
            <div className="mt-8 pt-6 border-t border-lightgray flex flex-wrap justify-center gap-3">
              <span className="bg-gold text-darkblue px-4 py-1.5 rounded-full font-medium text-sm">Health</span>
              <span className="bg-blue text-gold px-4 py-1.5 rounded-full font-medium text-sm">Education</span>
              <span className="bg-darkblue text-gold px-4 py-1.5 rounded-full font-medium text-sm">Leadership</span>
              <span className="bg-lightgray text-darkblue px-4 py-1.5 rounded-full font-medium text-sm">Partnership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
