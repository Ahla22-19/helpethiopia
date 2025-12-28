import { Users, Globe, Student, FirstAid } from "phosphor-react"

const Impact = () => {
  const stats = [
    {
      icon: <Users size={32} weight="fill" />,
      number: "50,000+",
      label: "Lives Impacted",
    },
    {
      icon: <Globe size={32} weight="fill" />,
      number: "120+",
      label: "Communities Served",
    },
    {
      icon: <Student size={32} weight="fill" />,
      number: "5,000+",
      label: "Students Supported",
    },
    {
      icon: <FirstAid size={32} weight="fill" />,
      number: "30+",
      label: "Health Centers",
    },
  ]

  return (
    <section className="relative w-full py-16 overflow-hidden flex items-center justify-center font-text">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div className="absolute inset-0 z-0 bg-darkblue/75 bg-gradient-to-r from-darkblue/90 via-darkblue/70 to-darkblue/90" />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6">
        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gold mb-1">
            Our Impact
          </h2>
          <p className="text-white/90 text-sm sm:text-base font-semibold tracking-wide">
            Transforming lives and communities across Ethiopia
          </p>
        </div>

        <div className="py-8 px-6 sm:px-12 border-y border-white/10 bg-white/5 backdrop-blur-[2px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center justify-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3 group">
                <div className="text-gold drop-shadow-[0_2px_8px_rgba(255,222,89,0.3)] transform transition-transform group-hover:scale-110 duration-300">
                  {stat.icon}
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-white text-3xl sm:text-4xl font-bold tracking-tight drop-shadow-md">
                    {stat.number}
                  </div>
                  <div className="text-gold/90 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mt-1 drop-shadow-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
