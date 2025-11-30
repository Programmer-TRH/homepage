"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#c4a564] mb-12 md:mb-16">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#c4a564] font-semibold text-lg mb-4">
                We&apos;d like to hear from you!
              </h3>
              <p className="text-[#c4a564] text-sm leading-relaxed mb-8">
                If you have any enquiries, want to know more information or just
                want to say hi, please use the contact form or contact us on the
                details below:
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#c4a564] shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800 font-semibold">0208 080 2848</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#c4a564] shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800 font-semibold">
                    info@romanbrothers.co.uk
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-80 rounded-lg overflow-hidden border-2 border-gray-300">
              <iframe
                width="100%"
                height="100%"
                title="We Buy Gold Now Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.3547847037146!2d-0.1767!3d51.5073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b50667a8e9%3A0x12345678!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <p className="text-gray-700 text-sm mb-6">
              Send us a message by using the form below
              <br />
              Please note fields marked with an {"*"} are mandatory
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Name <span className="text-[#c4a564]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4a564] transition text-gray-800"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Email <span className="text-[#c4a564]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4a564] transition text-gray-800"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Subject <span className="text-[#c4a564]">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4a564] transition text-gray-800"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Message <span className="text-[#c4a564]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c4a564] transition text-gray-800"
                />
                <p className="text-gray-500 text-xs mt-2">© 2000 characters</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto bg-[#c4a564] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#b89456] transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
