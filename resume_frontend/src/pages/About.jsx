import React from "react";

function About() {
  return (
    <div className="bg-base-100">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Info Card */}
            <div className="card bg-base-200 shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Transforming Resumes with AI
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our <span className="font-bold">AI Powered Resume Generator</span> 
                helps job seekers create professional, ATS-optimized resumes in just a few clicks. 
                We combine modern templates with intelligent AI suggestions, so you can focus on 
                landing your dream job instead of formatting documents.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you’re starting your career or moving up, our tool ensures 
                your resume is tailored, impactful, and ready to impress recruiters.
              </p>
            </div>

            {/* Right Side - Feature Highlights in Cards */}
            <div className="grid gap-6">
              <div className="card bg-base-100 border shadow-md p-6">
                <h4 className="text-xl font-semibold mb-2">⚡ Quick & Smart</h4>
                <p>AI auto-suggestions make resume creation faster and easier.</p>
              </div>

              <div className="card bg-base-100 border shadow-md p-6">
                <h4 className="text-xl font-semibold mb-2">📑 Professional Templates</h4>
                <p>Choose from modern, recruiter-approved designs.</p>
              </div>

              <div className="card bg-base-100 border shadow-md p-6">
                <h4 className="text-xl font-semibold mb-2">🎯 Job-Focused</h4>
                <p>Customize resumes for specific industries and roles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;




