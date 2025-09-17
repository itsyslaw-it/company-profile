// app/law-office/page.tsx (or wherever you want to place this component)

// app/page.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Scale, Gavel, Building, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  const [currentPartner, setCurrentPartner] = useState(0)

  const partners = [
    {
      name: "Ferhat Sartono",
      title: "Managing partner",
      description: "He holds a Bachelor and Master of Law from the University of Indonesia and as a practising lawyer as well as a certified public accountant from the Indonesian Institute of Certified Supreme and administrators. He has pursued advanced studies in arbitration (IAL Paris, WAS Singapore), capital markets, energy and extractive industries at various institutions and management and economic programs at the University of Indonesia, the Executive Institute for Directors (EIOD, SGX and London Stock Exchange), and the Executive Education (Wharton School, expert that was a college friend in legal's economic, and financial and acquisition, privatization and business law.",
      expertise: "Specializes in Corporate and Business Law with expertise in aviation, IT, bankruptcy, arbitration, and corporate restructuring. Graduate of University of Indonesia, ICC Paris, SIAC Singapore, and MIT-IU joint program."
    },
    {
      name: "Ali Zubri",
      title: "Partner",
      description: "Experienced in airline industry claims, litigation, and criminal law. Graduate of University of Indonesia with advanced studies from London. Strong network with insurance brokers, adjusters, and aviation lawyers.",
      expertise: "Expert in aviation law, insurance claims, and criminal litigation with extensive international experience."
    }
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const nextPartner = () => {
    setCurrentPartner((prev) => (prev + 1) % partners.length)
  }

  const prevPartner = () => {
    setCurrentPartner((prev) => (prev - 1 + partners.length) % partners.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-amber-600 px-2 py-1 text-sm font-bold">SYS</div>
            <span className="text-sm">LAW OFFICE</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className="hover:text-amber-400 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="hover:text-amber-400 transition-colors"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="hover:text-amber-400 transition-colors"
            >
              Services
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="hover:text-amber-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20">
          <Scale size={400} className="text-amber-600" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              SARTONO YUDHIO SUMARTO
              <span className="block text-3xl md:text-4xl mt-2">LAW OFFICE</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 italic">
              &quot;Established to deliver precise legal counsel on litigation, advisory, and 
              contractual matters across diverse fields of law.&quot;
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">OUR PRACTICE AREAS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dispute Resolution */}
            <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Gavel className="w-16 h-16 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Dispute Resolution</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We resolve civil and commercial disputes to suit our client&apos;s commercial objectives through arbitration and strategic litigation.
              </p>
              <button className="text-amber-600 hover:text-amber-700 font-semibold border-b border-amber-600 hover:border-amber-700 transition-colors">
                See detail →
              </button>
            </div>

            {/* Business & Consultation */}
            <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Scale className="w-16 h-16 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Business & Consultation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We draft, review, and negotiate appropriate documentation and provide legal guidance on compliance, intellectual property, and corporate IT law.
              </p>
              <button className="text-amber-600 hover:text-amber-700 font-semibold border-b border-amber-600 hover:border-amber-700 transition-colors">
                See detail →
              </button>
            </div>

            {/* Legal Service */}
            <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Building className="w-16 h-16 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Legal Service</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We assist with business establishments and compliance with expertise in corporate, aviation, labor, family, criminal, and immigration law.
              </p>
              <button className="text-amber-600 hover:text-amber-700 font-semibold border-b border-amber-600 hover:border-amber-700 transition-colors">
                See detail →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">ABOUT US</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2003, SYS Law Office has consistently provided superior 
                and reliable legal services across a wide spectrum of practice 
                areas. The firm operates with an emphasis on delivering swift and 
                insightful solutions both corporate and individual clients for 
                various legal matters including but not limited to corporate 
                advisory and transactional matters, dispute resolutions, and a 
                range of services that address the operational need of modern 
                business establishments and personal legal requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Trusted with close attention to our esteemed like, ensuring that 
                clients receive advice and representation grounded in legal 
                excellence and commercial understanding.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-8 shadow-lg">
                <div className="flex justify-center">
                  <Scale className="w-32 h-32 text-amber-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">OUR PARTNER</h2>
          
          {/* Main Partner Display */}
          <div className="bg-slate-800 rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-amber-600 w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold mb-6">
                  {partners[currentPartner].name.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{partners[currentPartner].name}</h3>
                <p className="text-amber-400 mb-4">{partners[currentPartner].title}</p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {partners[currentPartner].description}
                </p>
              </div>
            </div>
          </div>

          {/* Partner Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">{partner.name}</h4>
                <p className="text-amber-400 mb-3">{partner.title}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {partner.expertise}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4">
            <button 
              onClick={prevPartner}
              className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextPartner}
              className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Map placeholder */}
            <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                <p className="text-gray-600">Jalan Gatang Pal No. 1, 12840 Indonesia</p>
                <p className="text-gray-600">+62821559xxOffice: +62 21 7524 3829</p>
              </div>
            </div>

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
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg transition-colors font-semibold">
                Send Mail
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">
              © 2024 SYS Law Office. All rights reserved. The information contained on this website is not intended as and does not constitute legal advice. All information, content, and materials available on this site are for general informational purposes only.
            </p>
            <p>
              Information on this website may not constitute the most up-to-date legal or other information. The content on this website contains links to other third party websites. Such links are only for the convenience of the reader, user or browser.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Just install lucide-react if you don't have it:
// npm install lucide-react