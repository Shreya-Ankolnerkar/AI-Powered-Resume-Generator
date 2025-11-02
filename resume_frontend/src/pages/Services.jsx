import React from "react";

function Services() {
  return (
    <div className="bg-base-100">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="card-title mb-2">AI Resume Generation</h3>
                <p>
                  Automatically craft professional resumes with AI-powered
                  recommendations tailored to your profile.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="card-title mb-2">Custom Templates</h3>
                <p>
                  Access beautifully designed templates that highlight your
                  skills and experience.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="card-title mb-2">ATS Optimization</h3>
                <p>
                  Ensure your resume is structured to pass Applicant Tracking
                  Systems and reach recruiters directly.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="card-title mb-2">Job Role Targeting</h3>
                <p>
                  Generate resumes tailored for specific industries and job
                  positions worldwide.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="card-title mb-2">Quick Export</h3>
                <p>
                  Instantly download your resume in PDF format for easy sharing
                  with recruiters.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="card-title mb-2">Career Guidance</h3>
                <p>
                  Get AI tips on improving your resume content and boosting your
                  chances of landing interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;







