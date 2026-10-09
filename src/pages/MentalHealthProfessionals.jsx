import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/cards/Hero";

const MentalHealthProfessionals = () => {
  return (
    <div className="overflow-hidden">
      <Hero
        compact
        eyebrow="Professionals"
        title="Sign up for mental health professionals"
        subtitle="Join a network of clinicians, counselors, and practitioners advancing trauma-informed, rights-based responses to digital harm."
      />

      <section className="page-section-white pt-32 md:pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="form-surface">
            <h2 className="text-3xl font-display font-bold text-secondary-900">
              Professional registration
            </h2>
            <p className="mt-4 text-secondary-600">
              Share your area of expertise and the kinds of collaborations you
              are interested in. We will contact you about partnerships,
              workshops, and referral pathways.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Professional role
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Psychologist, counselor, social worker..."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Country
                  </label>
                  <input type="text" className="input" placeholder="Nigeria" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Areas of focus
                </label>
                <textarea
                  rows="5"
                  className="input"
                  placeholder="Digital wellbeing, trauma-informed care, content moderation, youth mental health, advocacy, etc."
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <button type="button" className="btn-primary">
                  Submit
                </button>
                <Link to="/community-care" className="btn-outline">
                  Back to community
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalHealthProfessionals;
