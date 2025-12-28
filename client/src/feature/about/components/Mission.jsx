import { Link } from "react-router-dom";
import { CheckCircle, Eye, Activity, Users } from "phosphor-react";

export default function Service() {
  return (
    <div className="pb-8 md:pb-16 px-6 md:px-12 lg:px-24 xl:px-32 bg-[var(--color-bg)] font-text">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[var(--color-lightgray)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[var(--color-blue)]/20 p-3 rounded-full">
                <CheckCircle size={32} weight="bold" className="text-[var(--color-blue)]" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-darkblue)]">
                Our Mission
              </h2>
            </div>
            <p className="text-[var(--color-darkgray)] mb-4 text-sm md:text-base leading-6 md:leading-relaxed">
              To catalyze sustainable development in Ethiopia by empowering healthcare professionals, driving innovation, and fostering a comprehensive and inclusive healthcare ecosystem.
            </p>
            <p className="text-[var(--color-darkgray)] mb-4 text-sm md:text-base leading-6 md:leading-relaxed">
              Our mission is fueled by the unwavering belief that every individual deserves access to quality healthcare and education, regardless of their circumstances.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[var(--color-lightgray)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[var(--color-blue)]/20 p-3 rounded-full">
                <Eye size={32} weight="bold" className="text-[var(--color-blue)]" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-darkblue)]">
                Our Vision
              </h2>
            </div>
            <p className="text-[var(--color-darkgray)] mb-4 text-sm md:text-base leading-6 md:leading-relaxed">
              We envision a Healthy and Resilient Ethiopia with advanced healthcare infrastructure, a well-trained workforce, streamlined processes, and inclusive healthcare services for all.
            </p>
          </div>

          {/* Our Activities */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[var(--color-lightgray)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[var(--color-blue)]/20 p-3 rounded-full">
                <Activity size={32} weight="bold" className="text-[var(--color-blue)]" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-darkblue)]">
                Our Activities
              </h2>
            </div>
            <p className="text-[var(--color-darkgray)] mb-4 text-sm md:text-base leading-6 md:leading-relaxed">
              At HELP Ethiopia, our diverse activities range from supporting economically disadvantaged individuals to advocating for quality education, enhancing healthcare data registries, and fostering patient-friendly hospital environments.
            </p>
            <Link
              to="/what-we-do"
              className="inline-flex items-center text-[var(--color-blue)] hover:text-[var(--color-darkblue)] font-semibold text-sm md:text-base"
            >
              Learn more about What We Do
            </Link>
          </div>

          {/* Our Team */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[var(--color-lightgray)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[var(--color-blue)]/20 p-3 rounded-full">
                <Users size={32} weight="bold" className="text-[var(--color-blue)]" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-darkblue)]">
                Our Team
              </h2>
            </div>
            <p className="text-[var(--color-darkgray)] mb-4 text-sm md:text-base leading-6 md:leading-relaxed">
              HELP Ethiopia is run by a team of professionals who are passionate and dedicated to making a positive impact in our community.
            </p>
            <Link
              to="/our-team"
              className="inline-flex items-center text-[var(--color-blue)] hover:text-[var(--color-darkblue)] font-semibold text-sm md:text-base"
            >
              Meet our team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
