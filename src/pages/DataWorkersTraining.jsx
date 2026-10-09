import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/cards/Hero";

const DataWorkersTraining = () => {
  return (
    <div className="overflow-hidden">
      <Hero
        compact
        eyebrow="Training"
        title="Data workers peer support training sign up"
        subtitle="Build skills in peer support, wellbeing practices, and collective care for workers navigating digital labor and platform-related stress."
      />

      <section className="page-section-white pt-32 md:pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="form-surface">
            <h2 className="text-3xl font-display font-bold text-secondary-900">
              Reserve your place
            </h2>
            <p className="mt-4 text-secondary-600">
              This training supports data workers with practical tools for peer
              listening, emotional regulation, stress management, and collective
              support systems.
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
                    Email
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Country
                  </label>
                  <input type="text" className="input" placeholder="Country" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Preferred language
                  </label>
                  <select className="input bg-white">
                    <option>English</option>
                    <option>French</option>
                    <option>Hausa</option>
                    <option>Arabic</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  What support do you need most?
                </label>
                <textarea
                  rows="5"
                  className="input"
                  placeholder="Share your context, needs, or questions for the training."
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfb1GOFCFgmeXJiaXrFqtVye8HnPrnunh4Zdko-FsXE1NtULA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Join training
                </a>
                <Link to="/community-care" className="btn-outline">
                  View community care
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataWorkersTraining;
