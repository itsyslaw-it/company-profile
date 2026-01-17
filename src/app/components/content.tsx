'use client'

import React from 'react'
import BannerContent from './contents/banner-content'
import PracticalAreaContent from './contents/practical-area-content'
import NavbarContent from './contents/navbar-content'
import AboutUsContent from './contents/aboutus-content'
import PartnersContent from './contents/partners-content'
import ContactUsContent from './contents/contactus-content'
import Footer from './Footer'

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
      <Footer />
    </div>
  )
}