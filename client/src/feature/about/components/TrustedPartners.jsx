const TrustedPartners = () => {
  const partners = [
    {
      name: "Global Health Initiative",
      logo: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="45" stroke="#EAB308" strokeWidth="3" fill="white" />
          <path d="M50 25L55 40H70L58 48L63 63L50 55L37 63L42 48L30 40H45L50 25Z" fill="#EAB308" />
          <text x="50" y="80" textAnchor="middle" fill="#4B5563" fontSize="10" fontWeight="bold">
            GHI
          </text>
        </svg>
      ),
      description: "Supporting healthcare infrastructure and medical training programs across Ethiopia since 2010",
      color: "blue",
    },
    {
      name: "Education for All Foundation",
      logo: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <rect x="10" y="30" width="80" height="50" rx="5" stroke="#EAB308" strokeWidth="3" fill="white" />
          <path d="M25 45H75M25 55H75M25 65H60" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="20" r="8" fill="#EAB308" />
          <text x="50" y="93" textAnchor="middle" fill="#4B5563" fontSize="9" fontWeight="bold">
            EFA
          </text>
        </svg>
      ),
      description: "Partnering to provide educational resources, teacher training, and scholarship opportunities",
      color: "yellow",
    },
    {
      name: "Addis Ababa University",
      logo: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <rect x="5" y="5" width="90" height="90" rx="8" fill="white" stroke="#EAB308" strokeWidth="2.5" />
          <path d="M50 20L60 45H75L63 55L68 80L50 65L32 80L37 55L25 45H40L50 20Z" fill="#2563EB" />
          <rect x="35" y="50" width="30" height="35" fill="#EAB308" />
          <rect x="40" y="55" width="5" height="8" fill="white" />
          <rect x="55" y="55" width="5" height="8" fill="white" />
          <rect x="40" y="68" width="5" height="8" fill="white" />
          <rect x="55" y="68" width="5" height="8" fill="white" />
          <rect x="47" y="75" width="6" height="10" fill="white" />
          <text x="50" y="96" textAnchor="middle" fill="#2563EB" fontSize="8" fontWeight="bold">
            AAU
          </text>
        </svg>
      ),
      description:
        "Collaborating on medical research, student exchange programs, and academic excellence in healthcare education",
      color: "blue",
    },
    {
      name: "Tikur Anbesa Hospital",
      logo: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="44" fill="white" stroke="#2563EB" strokeWidth="2.5" />
          <path d="M50 25 L50 50 L75 50 L50 75 L50 50 L25 50 L50 25" fill="#EAB308" />
          <circle cx="50" cy="50" r="12" fill="#2563EB" />
          <path d="M50 42V58M42 50H58" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <text x="50" y="95" textAnchor="middle" fill="#2563EB" fontSize="7" fontWeight="bold">
            TIKUR ANBESA
          </text>
        </svg>
      ),
      description:
        "Partnering on specialized medical training, patient referrals, and advanced healthcare delivery systems",
      color: "yellow",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Our Trusted <span className="text-yellow-500">Partners</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Working together with leading organizations to amplify our impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-white border-2 ${
                partner.color === "blue"
                  ? "border-blue-300 hover:border-blue-500"
                  : "border-yellow-300 hover:border-yellow-400"
              } rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex justify-center mb-6">{partner.logo}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{partner.name}</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-gray-600 text-base mb-5">Interested in partnering with us?</p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default TrustedPartners
