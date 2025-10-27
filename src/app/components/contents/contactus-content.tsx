export default function ContactUsContent() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map placeholder */}
          <div className="flex flex-col text-[#131D2D]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.197798513521!2d106.80961839999999!3d-6.23764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15d853e39f5%3A0xb620838c0ad15f7e!2sJl.%20Ciomas%20III%20No.5%2C%20RT.4%2FRW.1%2C%20Rw.%20Bar.%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012180!5e0!3m2!1sen!2sid!4v1761579378176!5m2!1sen!2sid"
            width="450"
            height="300"
          />
          <hr className="my-4 w-[450px]" />
          <span>Jalan Ciomas III No. 5, 12180 Indonesia</span>
          <span>info@syslawoffice.co.id • +62 21 1234 5678</span>
          </div>
          {/* Contact Form */}
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full placeholder-[#131D2D] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 placeholder-[#131D2D] py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full placeholder-[#131D2D] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <textarea
                placeholder="Write text here..."
                className="w-full placeholder-[#131D2D] px-4 py-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:border-amber-600"
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