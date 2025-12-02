import RequestForm from "@/components/forms/request-form";

export default function Contact() {
  return (
    <section className="bg-[#1b242d] py-16 md:py-24" id="request">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Looking to sell your gold for instant cash?
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Fill in the details below and we&apos;ll get back to you
        </p>

        <RequestForm />
      </div>
    </section>
  );
}
