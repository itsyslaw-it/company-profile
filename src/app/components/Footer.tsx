'use client'

import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <motion.footer
            className="bg-slate-900 text-white py-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-6">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-slate-700">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-[#C7A46C]">SYS LAW OFFICE</h3>
                        <p className="text-gray-400 text-sm mt-1">Excellence in Legal Practice</p>
                    </div>
                    <div className="flex gap-4">
                        <motion.a
                            href="#home"
                            className="text-gray-400 hover:text-[#C7A46C] transition-colors text-sm"
                            whileHover={{ y: -2 }}
                        >
                            Home
                        </motion.a>
                        <motion.a
                            href="#about"
                            className="text-gray-400 hover:text-[#C7A46C] transition-colors text-sm"
                            whileHover={{ y: -2 }}
                        >
                            About
                        </motion.a>
                        <motion.a
                            href="#services"
                            className="text-gray-400 hover:text-[#C7A46C] transition-colors text-sm"
                            whileHover={{ y: -2 }}
                        >
                            Services
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="text-gray-400 hover:text-[#C7A46C] transition-colors text-sm"
                            whileHover={{ y: -2 }}
                        >
                            Contact
                        </motion.a>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="text-xs text-gray-500 leading-relaxed">
                    <p>
                        © 2025 - SYS LAW OFFICE. All Rights Reserved. DISCLAIMER: The choice of legal representation is an important decision and should not be based solely on written materials. The information provided herein by SYS Law Office is for general informational purposes only and does not constitute formal legal advice. Accessing this site or its content does not create an attorney–client relationship. An attorney–client relationship with SYS Law Office is established only upon the execution of a written agreement signed by both the client and the firm. Any references to prior matters or outcomes are specific to those cases and do not constitute a guarantee of future results. Legal outcomes depend on the unique circumstances of each case. Individuals are encouraged to seek direct consultation with a qualified attorney regarding their particular situation. SYS Law Office is based in Jakarta, Indonesia, and this site is not intended to solicit or advertise legal services in jurisdictions where the firm is not authorized to practice law. The firm may, when deemed appropriate, collaborate with other law offices or professionals in Indonesia and abroad in the handling of legal matters.
                    </p>
                </div>
            </div>
        </motion.footer>
    )
}
