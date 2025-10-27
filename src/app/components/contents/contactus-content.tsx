export default function ContactUsContent() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map placeholder */}
          {/* <iframe
            className="sm:w-[100px] md:w-full"
            height="250"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5881150996476!2d106.82978248812265!3d-6.2171649997173315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMDEuOCJTIDEwNsKwNDknNDkuMiJF!5e0!3m2!1sen!2sid!4v1494234646152"></iframe> */}
          <iframe
            width="100%"
            height="450"
            loading="lazy"
            src="https://maps.google.com/maps?q=Speedshoelab,+Jl.+Ciomas+II+No.7,+Jakarta&t=&z=17&ie=UTF8&iwloc=&output=embed"
          ></iframe>

          {/* Contact Form */}
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <textarea
                placeholder="Write text here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:border-amber-600"
              ></textarea>
            </div>
            <div>
              <button className="w-full bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}