import React from "react";
import Hero from "../components/cards/Hero";

const MentalHealthCommunityCare = () => {
  return (
    <div className="overflow-hidden">
      <Hero
        compact
        eyebrow="Community of Care"
        title="Mental Health Community of Care"
        subtitle="An open, inclusive ecosystem for everyone"
      />

      <section className="page-section-white pt-32 md:pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-8 text-secondary-600">
            <p className="text-lg leading-8">
              The Community of Care is a broad, ongoing social and support hub
              that brings together the wider technology and human-rights
              ecosystem. It is a place to talk, connect, learn and act together.
            </p>
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary-900">
                Purpose and aims
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 leading-7">
                <li>Build a safe, sustainable space for dialogue, community care, cross-industry networking and joint advocacy.</li>
                <li>Reduce mental-health stigma in the tech sector.</li>
                <li>Connect workers with peer support, mental-health information, and legal and clinical resources.</li>
                <li>Keep worker wellbeing visible in conversations on responsible AI, decent work and digital rights.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary-900">
                Who can join
              </h2>
              <p className="mt-4 leading-7">
                Anyone interested in the wellbeing of data workers, including:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6 leading-7">
                <li>Data workers themselves, including training graduates</li>
                <li>Civil society and digital-rights advocates</li>
                <li>AI researchers and technology leaders</li>
                <li>Policymakers and regulators</li>
                <li>Legal experts and worker-rights organizations</li>
                <li>Mental-health professionals and community leaders</li>
                <li>Donors and development partners</li>
              </ul>
            </div>
          </div>
          <div className="form-surface">
            <h2 className="text-3xl font-display font-bold text-secondary-900">
              Join the Community of Care
            </h2>
            <p className="mt-4 text-secondary-600">
              Connect with the wider community to talk, learn and act together
              in support of data worker wellbeing.
            </p>

            <form
              action="https://formsubmit.co/3c18f07d99b10e35cc2415e67824330c"
              method="POST"
              className="mt-8 space-y-6"
            >
              <input type="hidden" name="_subject" value="Mental Health Community of Care registration" />
              <input type="hidden" name="_template" value="table" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-secondary-700 mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    autoComplete="name"
                    className="input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="input"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-secondary-700 mb-2">
                    Country
                  </label>
                  <input type="text" id="country" name="country" required autoComplete="country-name" className="input" placeholder="Country" />
                </div>
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-secondary-700 mb-2">
                    Preferred language
                  </label>
                  <select id="language" name="language" className="input bg-white">
                    <option>English</option>
                    <option>French</option>
                    <option>Hausa</option>
                    <option>Arabic</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="supportNeeds" className="block text-sm font-medium text-secondary-700 mb-2">
                  Occupation / affiliation
                </label>
                <textarea
                  id="supportNeeds"
                  name="supportNeeds"
                  rows="5"
                  className="input"
                  placeholder="Share your occupation or affiliation and your interest in the community."
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <button type="submit" className="btn-primary">
                  Join the community
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalHealthCommunityCare;
