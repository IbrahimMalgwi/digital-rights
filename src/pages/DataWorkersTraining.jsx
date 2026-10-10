import React from "react";
import Hero from "../components/cards/Hero";

const DataWorkersTraining = () => {
  return (
    <div className="overflow-hidden">
      <Hero
        compact
        eyebrow="Data Worker Training"
        title="DIGITAL RIGHTS AND MENTAL HEALTH INITIATIVE - PEER SUPPORT TRAINING"
        subtitle="An exclusive, structured learning programme for data workers"
      />

      <section className="page-section-white pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="max-w-4xl text-lg text-secondary-600 leading-relaxed">
            The training works like a specialized academy built for data workers
            such as content moderators, AI Annotators, and data labelers. It is
            not a general mental-health course. It is designed around the
            pressures of data work and gives participants skills they can use on
            themselves and with colleagues.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-secondary-200 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-secondary-900">
                Purpose and aims
              </h2>
              <ul className="mt-4 list-disc space-y-4 pl-5 text-secondary-600 leading-relaxed">
                <li>Equip data workers with practical Psychological First Aid skills.</li>
                <li>Build trauma-informed coping mechanisms and emotional regulation techniques.</li>
                <li>Prepare participants to recognize risk, set boundaries and refer colleagues to professional help.</li>
                <li>Create a trained network of peer supporters who can care for colleagues at work and in their communities.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-secondary-200 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-secondary-900">
                Who can join
              </h2>
              <p className="mt-4 text-secondary-600 leading-relaxed">
                Participation is restricted to data workers who face unique
                workplace stressors, such as constant exposure to graphic or
                disturbing online content, strict quotas, and precarious working
                conditions.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-secondary-900 p-8 md:p-12 text-white">
            <h2 className="text-3xl font-display font-bold">
              Digital Rights and Mental Health Initiative Africa.
            </h2>
            <div className="mt-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfb1GOFCFgmeXJiaXrFqtVye8HnPrnunh4Zdko-FsXE1NtULA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply for peer support training
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataWorkersTraining;
