'use client'

import React from 'react'
import BannerContent from './contents/banner-content'
import PracticalAreaContent from './contents/practical-area-content'
import NavbarContent from './contents/navbar-content'
import AboutUsContent from './contents/aboutus-content'
import PartnersContent from './contents/partners-content'
import ContactUsContent from './contents/contactus-content'

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
      <ContactUsContent />

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