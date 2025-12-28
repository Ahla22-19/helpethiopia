"use client"

import { useState } from "react"
const whoWeAreImage = "/ethiopian-medical-professionals-team.jpg"

export default function WhoWeAre() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="bg-bg py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Branding & Navigation Inspiration */}
          <div className="lg:col-span-4 lg:sticky lg:top-10 space-y-12">
            <div className="space-y-4">
              <h3 className="text-blue font-bold tracking-widest text-sm uppercase">About Us</h3>
              <h2 className="text-5xl font-extrabold text-darkblue tracking-tight leading-none">
                How We <br />
                <span className="text-gold">Started</span>
              </h2>
              <p className="text-lightblue text-lg max-w-xs">
                A journey of commitment, from local roots to global impact.
              </p>
            </div>

            <nav className="hidden lg:block space-y-6 border-l border-lightgray/30 pl-8">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="h-[2px] w-8 bg-blue transition-all group-hover:w-12" />
                <span className="text-darkblue font-bold text-sm uppercase tracking-widest">History</span>
              </div>
              <div className="flex items-center gap-4 group opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="h-[2px] w-8 bg-lightgray transition-all group-hover:w-12 group-hover:bg-blue" />
                <span className="text-darkgray font-medium text-sm uppercase tracking-widest">Mission</span>
              </div>
              <div className="flex items-center gap-4 group opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="h-[2px] w-8 bg-lightgray transition-all group-hover:w-12 group-hover:bg-blue" />
                <span className="text-darkgray font-medium text-sm uppercase tracking-widest">Team</span>
              </div>
            </nav>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-8 space-y-10">
            <div className="prose prose-lg max-w-none text-darkgray font-light leading-relaxed space-y-8">
              <p className="text-xl text-darkblue font-medium leading-snug border-l-4 border-blue pl-6 italic">
                HELP Ethiopia was established by a group of medical doctors and other professionals based in Ethiopia,
                together with members of the Ethiopian diaspora, united by a shared commitment to serve their
                communities.
              </p>

              <p>
                The organization originated from a deep desire to address persistent challenges in healthcare delivery.
                Its charity arm, <span className="text-blue font-semibold">Eteye Health Charity</span>, was founded
                through a fund granted in memory of Woizero Yewoinshet Seifu by her family members, who affectionately
                called her{" "}
                <strong className="text-blue font-bold underline decoration-gold decoration-2 underline-offset-4">
                  Eteye
                </strong>
                . As “Eteye” is a term widely used in Ethiopia to express affection, it was adopted as the official name
                of HELP Ethiopia’s charity branch.
              </p>

              <p className="bg-white p-8 rounded-2xl shadow-sm border border-lightgray/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
                The charity initiative was sustained through the generous support of Ethiopians in North America and
                strong local partnerships. While providing care to vulnerable patients has been deeply meaningful, the
                absence of long-term, sustainable healthcare solutions remained a significant challenge.
              </p>

              {isExpanded && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                  <p>
                    Recognizing this need, HELP Ethiopia began leveraging its diverse professional expertise and
                    strategic partnerships to design and implement sustainable solutions. Today, the organization is led
                    by dedicated professionals committed to driving lasting impact across healthcare, education,
                    leadership development, and community empowerment.
                  </p>
                </div>
              )}

              <div className="pt-4">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue text-white rounded-full font-semibold hover:bg-darkblue transition-all shadow-lg hover:shadow-blue/20"
                >
                  {isExpanded ? "View Less" : "Read Our Full Story"}
                  <svg
                    className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
{/* Visual Element */}
<div className="relative mt-8 group">
  <div className="absolute -inset-3 bg-gold/10 rounded-[2.5rem] blur-2xl group-hover:bg-gold/20 transition-all" />
  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-darkblue/5 aspect-video sm:aspect-[16/9]">
    <img
      src={whoWeAreImage || "/placeholder.svg"}
      alt="HELP Ethiopia founding and community engagement"
      className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 transition-all duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-darkblue/70 via-transparent to-transparent opacity-60" />
    <div className="absolute bottom-6 left-6">
      <span className="text-white text-xs font-semibold tracking-widest uppercase bg-blue/50 backdrop-blur-md px-4 py-1.5 rounded-full">
        Our Roots
      </span>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  )
}
