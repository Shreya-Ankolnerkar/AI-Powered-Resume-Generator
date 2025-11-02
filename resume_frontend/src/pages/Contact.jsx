import React from "react";

function Contact() {
  return (
    <div className="bg-base-100">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Have questions or suggestions? We’d love to hear from you.  
            Fill out the form below and our team will get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <div className="max-w-xl mx-auto card bg-base-200 shadow-xl">
            <div className="card-body">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full"
                ></textarea>
                <button className="btn btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>

          {/* Extra Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body text-center">
                <div className="text-4xl mb-2">📧</div>
                <h3 className="font-bold text-lg mb-1">Email Support</h3>
                <p>Reach us anytime at <span className="font-semibold">support@aigenresume.com</span></p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-md">
              <div className="card-body text-center">
                <div className="text-4xl mb-2">⏰</div>
                <h3 className="font-bold text-lg mb-1">Support Hours</h3>
                <p>Available Monday to Friday, 9 AM – 6 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;





