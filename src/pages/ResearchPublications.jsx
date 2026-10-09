import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/cards/Hero";
import { siteContent } from "../data/content";

const ResearchPublications = () => {
  return (
    <div className="overflow-hidden">
      <Hero
        compact
        eyebrow="Research"
        title="Research publications"
        subtitle="Evidence, practice notes, and policy resources shaping digital rights and mental wellbeing across Africa and the global platform economy."
      />

      <section className="page-section-white pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteContent.researchPublications?.map((publication) => (
              <article
                key={publication.title}
                className="card-hover rounded-2xl border border-secondary-200 bg-white p-6"
              >
                <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-primary-700">
                  {publication.type}
                </span>
                <h2 className="mt-4 text-2xl font-semibold text-secondary-900">
                  {publication.title}
                </h2>
                <p className="mt-3 text-secondary-600 leading-relaxed">
                  {publication.description}
                </p>
                <div className="mt-5 flex items-center justify-between text-sm text-secondary-500">
                  <span>{publication.year}</span>
                  <span>{publication.location}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-secondary-200 bg-secondary-50 p-8 md:p-10">
            <h3 className="text-3xl font-display font-bold text-secondary-900">
              Request a collaboration or briefing
            </h3>
            <p className="mt-3 max-w-2xl text-secondary-600">
              We partner with institutions, researchers, and advocacy groups to
              develop evidence-based resources and community-centered programs.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Contact us
              </Link>
              <Link to="/partners" className="btn-outline">
                View partners
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPublications;
