import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/cards/Hero";
import { siteContent } from "../data/content";

const CommunityCare = () => {
  return (
    <div className="overflow-hidden">
      <Hero
        compact
        eyebrow="Community"
        title="Join our community of care"
        subtitle="A supportive network for advocates, care workers, researchers, and community members building safer and healthier digital spaces."
      />

      <section className="page-section-white pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {siteContent.communityCare?.highlights?.map((item) => (
              <div
                key={item.title}
                className="card-hover rounded-2xl border border-secondary-200 bg-white p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary-600">
                  {item.label}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-secondary-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-secondary-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-secondary-900 p-8 md:p-12 text-white">
            <h3 className="text-3xl font-display font-bold">
              Be part of the care ecosystem
            </h3>
            <p className="mt-4 max-w-2xl text-white/80">
              Receive updates, event invitations, peer learning opportunities,
              and practical resources for wellbeing, digital safety, and
              advocacy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Sign up
              </Link>
              <Link to="/mental-health-professionals" className="btn-secondary">
                For professionals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityCare;
