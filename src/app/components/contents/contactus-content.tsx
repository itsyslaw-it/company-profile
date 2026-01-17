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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        {/* Animated Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h2>
          <motion.div
            className="w-24 h-1 bg-[#C7A46C] mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get in touch with our team for expert legal consultation and representation.
          </p>
        </motion.div>

        <div className="md:grid md:grid-cols-2 gap-12 flex flex-col">
          {/* Map and Info */}
          <motion.div
            className="flex flex-col text-[#131D2D]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="w-full rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.197798513521!2d106.80961839999999!3d-6.23764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15d853e39f5%3A0xb620838c0ad15f7e!2sJl.%20Ciomas%20III%20No.5%2C%20RT.4%2FRW.1%2C%20Rw.%20Bar.%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012180!5e0!3m2!1sen!2sid!4v1761579378176!5m2!1sen!2sid"
                width="100%"
                height="300"
                className="rounded-xl"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-[#C7A46C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#C7A46C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Office Address</h4>
                  <p className="text-gray-600 text-sm">Jalan Ciomas III No. 5, 12180 Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-[#C7A46C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#C7A46C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600 text-sm">info@syslawnpartner.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C7A46C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#C7A46C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600 text-sm">+62 21 7246 133</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-5 bg-white p-8 rounded-xl shadow-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
              <motion.input
                whileFocus={{
                  scale: 1.01,
                  boxShadow: "0 0 0 3px rgba(199, 164, 108, 0.1)",
                  transition: { duration: 0.2 },
                }}
                type="text"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                className="text-[#131D2D] w-full placeholder-gray-400 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C7A46C] transition-all"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
              <motion.input
                whileFocus={{
                  scale: 1.01,
                  boxShadow: "0 0 0 3px rgba(199, 164, 108, 0.1)",
                  transition: { duration: 0.2 },
                }}
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className="text-[#131D2D] w-full placeholder-gray-400 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C7A46C] transition-all"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
              <motion.input
                whileFocus={{
                  scale: 1.01,
                  boxShadow: "0 0 0 3px rgba(199, 164, 108, 0.1)",
                  transition: { duration: 0.2 },
                }}
                type="text"
                name="subject"
                placeholder="How can we help you?"
                value={form.subject}
                onChange={handleChange}
                className="text-[#131D2D] w-full placeholder-gray-400 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C7A46C] transition-all"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
              <motion.textarea
                whileFocus={{
                  scale: 1.01,
                  boxShadow: "0 0 0 3px rgba(199, 164, 108, 0.1)",
                  transition: { duration: 0.2 },
                }}
                name="message"
                placeholder="Describe your legal matter..."
                value={form.message}
                onChange={handleChange}
                className="text-[#131D2D] w-full placeholder-gray-400 px-4 py-3 border border-gray-200 rounded-lg h-32 resize-none focus:outline-none focus:border-[#C7A46C] transition-all"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                onClick={handleMailto}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(199, 164, 108, 0.3)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full cursor-pointer bg-[#C7A46C] text-white px-6 py-4 rounded-lg hover:bg-[#B08F58] transition-colors font-semibold text-lg"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}
