'use client'

import React from 'react'
import { MapPin } from 'lucide-react'
import BannerContent from './contents/banner-content'
import PracticalAreaContent from './contents/practical-area-content'
import NavbarContent from './contents/navbar-content'
import AboutUsContent from './contents/aboutus-content'
import PartnersContent from './contents/partners-content'

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavbarContent />

      {/* Hero Section */}
      <BannerContent />

      {/* Practice Areas */}
      <PracticalAreaContent />

      {/* About Us */}
      <AboutUsContent />

      {/* Partners Section */}
      <PartnersContent />

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