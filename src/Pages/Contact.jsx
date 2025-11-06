import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((f) => ({ ...f, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up EmailJS / Formspree / API here
    console.log("Form submitted:", form);
  };

  return (
    <div className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto flex flex-col py-12 px-4 md:px-8 min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#33CCCC]">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
          Have questions or want to collaborate? Fill out the form or reach out using the details below.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-lg">
            <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 p-3 block w-full text-white border border-gray-700 rounded-md bg-gray-800 focus:border-[#33CCCC] focus:ring-[#33CCCC] outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 p-3 block w-full text-white border border-gray-700 rounded-md bg-gray-800 focus:border-[#33CCCC] focus:ring-[#33CCCC] outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 p-3 block w-full text-white border border-gray-700 rounded-md bg-gray-800 focus:border-[#33CCCC] focus:ring-[#33CCCC] outline-none"
                  placeholder="Your message here..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#33CCCC] text-black font-medium py-2 px-4 rounded-md shadow hover:bg-[#28a5a5] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-lg flex flex-col space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#33CCCC]">Contact Info</h3>
              <div className="flex gap-2 items-start mb-3 text-gray-300">
                <MapPin className="text-[#33CCCC] w-5 h-5" />
                <p>Paris, France</p>
              </div>
              <div className="flex gap-2 items-center mb-3 text-gray-300">
                <Phone className="text-[#33CCCC] w-5 h-5" />
                <p>+33 7 58 24 02 93</p>
              </div>
              <div className="flex gap-2 items-center text-gray-300">
                <Mail className="text-[#33CCCC] w-5 h-5" />
                <a
                  href="mailto:konakalla.ksatish@gmail.com"
                  className="underline decoration-[#33CCCC]/40 hover:decoration-[#33CCCC]"
                >
                  konakalla.ksatish@gmail.com
                </a>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77816172839!2d2.2646339183829105!3d48.85893848467352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sen!2sfr!4v1762459531897!5m2!1sen!2sfr"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
