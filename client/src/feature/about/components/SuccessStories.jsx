export default function SuccessStories() {
  return (
    <section className="bg-gradient-to-b from-yellow-50 to-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Success <span className="text-yellow-500">Stories</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Real stories of hope, healing, and transformation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-yellow-300 transform sm:-translate-x-1/2"></div>

          {/* Timeline Items with Patient Photos */}
          <div className="space-y-8 sm:space-y-12">
            {/* Story 1 */}
            <div className="relative flex items-start sm:items-center">
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg transform sm:-translate-x-1/2 z-10"></div>
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-12 sm:text-right">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 sm:border-l-0 sm:border-r-4 border-yellow-500">
                  <img
                    src="/ethiopian-patient-smiling-after-receiving-healthca.jpg"
                    alt="Patient success story"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Abebe's Journey to Health</h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      After receiving treatment at our mobile clinic, Abebe recovered from a chronic illness and
                      returned to work, supporting his family once again.
                    </p>
                    <span className="text-xs text-yellow-600 font-semibold">Healthcare Program</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="relative flex items-start sm:items-center">
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg transform sm:-translate-x-1/2 z-10"></div>
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pl-12 sm:ml-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-yellow-500">
                  <img
                    src="/ethiopian-young-woman-student-studying-with-books.jpg"
                    alt="Student success story"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Meron's Educational Dream</h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      Through our scholarship program, Meron completed her nursing degree and now serves her community
                      as a healthcare professional.
                    </p>
                    <span className="text-xs text-yellow-600 font-semibold">Education Program</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="relative flex items-start sm:items-center">
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg transform sm:-translate-x-1/2 z-10"></div>
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-12 sm:text-right">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 sm:border-l-0 sm:border-r-4 border-yellow-500">
                  <img
                    src="/ethiopian-family-smiling-together-happy.jpg"
                    alt="Family success story"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Tewodros' New Beginning</h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      Our vocational training helped Tewodros start his own business, providing stable income for his
                      family of six.
                    </p>
                    <span className="text-xs text-yellow-600 font-semibold">Economic Empowerment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
