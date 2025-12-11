export default function Story() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Our <span className="text-yellow-500">Story</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            A journey of compassion, dedication, and transformative impact
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* The Beginning Card */}
          <div className="group bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border border-yellow-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Beginning</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Founded by passionate Ethiopian diaspora professionals who recognized the critical need for comprehensive
              community development programs.
            </p>
          </div>

          {/* Growth Card */}
          <div className="group bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border border-yellow-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Growing Impact</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Expanded our reach to multiple regions across Ethiopia, establishing mobile health clinics and vocational
              training centers.
            </p>
          </div>

          {/* Today Card */}
          <div className="group bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Today & Beyond</h3>
            <p className="text-sm text-white leading-relaxed">
              We continue to innovate and expand our programs, leveraging technology and partnerships to create
              sustainable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
