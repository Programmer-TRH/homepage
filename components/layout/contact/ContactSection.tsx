import { Phone, Mail } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";

export default function ContactSection() {
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
              <h3 className="text-gray-800 font-semibold text-lg mb-4">
                We&apos;d like to hear from you!
              </h3>
              <p className=" text-gray-700 text-sm leading-relaxed mb-8">
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
                    info@webuygoldnow.co.uk
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2009.2149562630204!2d0.018345422168117752!3d51.4061045710564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1764686354487!5m2!1sen!2sus"
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

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
