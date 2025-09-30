'use client'

import React, { useState } from 'react'
import { Scale, Gavel, Building, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import BannerContent from './contents/banner-content'
import PracticalAreaContent from './contents/practical-area-content'
import SYSLogo from "@/app/assets/sys-logo.png"
import Image from 'next/image'

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
      <nav className="bg-[#172336] text-white py-4 h-20 flex items-center">
        <div className="px-6 flex justify-end items-center w-full">
          <Image src={SYSLogo} alt={''} width={200} height={20} className="fixed top-0 left-20" />
          <div className="hidden md:flex space-x-6">
            <a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className="hover:text-[#C7A46C] transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="hover:text-[#C7A46C] transition-colors"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="hover:text-[#C7A46C] transition-colors"
            >
              Services
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="hover:text-[#C7A46C] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <BannerContent />
      
      {/* Practice Areas */}
      <PracticalAreaContent />

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
          <div className="text-sm text-gray-400">
            <p>
              © 2025 - SYS LAW OFFICE. All Rights Reserved. DISCLAIMER: The choice of legal representation is an important decision and should not be based solely on written materials. The information provided herein by SYS Law Office is for general informational purposes only and does not constitute formal legal advice. Accessing this site or its content does not create an attorney–client relationship. An attorney–client relationship with SYS Law Office is established only upon the execution of a written agreement signed by both the client and the firm. Any references to prior matters or outcomes are specific to those cases and do not constitute a guarantee of future results. Legal outcomes depend on the unique circumstances of each case. Individuals are encouraged to seek direct consultation with a qualified attorney regarding their particular situation. SYS Law Office is based in Jakarta, Indonesia, and this site is not intended to solicit or advertise legal services in jurisdictions where the firm is not authorized to practice law. The firm may, when deemed appropriate, collaborate with other law offices or professionals in Indonesia and abroad in the handling of legal matters.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Just install lucide-react if you don't have it:
// npm install lucide-react