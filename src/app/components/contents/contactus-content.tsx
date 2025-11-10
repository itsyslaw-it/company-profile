"use client"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactUsContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleMailto = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { name, email, subject, message } = form

    const mailtoLink = `mailto:ferhat.sartono@syslawnpartner.com?cc=info@syslawnpartner.com&subject=${encodeURIComponent(
      subject || "Contact from SYS Law Website"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`

    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
        <div className="md:grid md:grid-cols-2 gap-12 flex flex-col">
          <div className="flex flex-col text-[#131D2D]">
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.197798513521!2d106.80961839999999!3d-6.23764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15d853e39f5%3A0xb620838c0ad15f7e!2sJl.%20Ciomas%20III%20No.5%2C%20RT.4%2FRW.1%2C%20Rw.%20Bar.%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012180!5e0!3m2!1sen!2sid!4v1761579378176!5m2!1sen!2sid"
                width="100%"
                height="350"
                className="rounded-lg"
              />
            </div>
            <hr className="my-4 w-full" />
            <div className="flex flex-col w-full">
              <span>Jalan Ciomas III No. 5, 12180 Indonesia</span>
              <span>info@syslawoffice.co.id • +62 21 1234 5678</span>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <motion.input
                whileFocus={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full placeholder-[#131D2D]/50 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <motion.input
                whileFocus={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full placeholder-[#131D2D]/50 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <motion.input
                whileFocus={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full placeholder-[#131D2D]/50 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <motion.textarea
                whileFocus={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                name="message"
                placeholder="Write text here..."
                value={form.message}
                onChange={handleChange}
                className="w-full placeholder-[#131D2D]/50 px-4 py-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <motion.button
                onClick={handleMailto}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="w-full cursor-pointer bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
