"use client";

import Image from "next/image";
import BusinessConsultationImage from "@/app/assets/business-consultation.png";
import NavbarContent from "@/app/components/contents/navbar-content";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase, FileCheck, Building2, Globe } from "lucide-react";

export default function BusinessConsultationPage() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const services = [
    { icon: Briefcase, title: "Contract Drafting", desc: "Comprehensive contract preparation and negotiation" },
    { icon: FileCheck, title: "Compliance", desc: "Regulatory compliance and corporate governance" },
    { icon: Building2, title: "Corporate Advisory", desc: "Strategic guidance for business operations" },
    { icon: Globe, title: "IP & IT Law", desc: "Intellectual property and technology legal matters" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarContent />

      {/* Hero Section with Parallax */}
      <motion.section
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image with Ken Burns effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            className="w-full h-full object-cover"
            fill
            src={BusinessConsultationImage}
            alt="Business Consultation"
            priority
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#131D2D]/70 via-[#131D2D]/60 to-[#131D2D]/80" />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span
              className="hover:text-[#C7A46C] cursor-pointer transition-colors"
              onClick={() => router.push("/")}
            >
              Home
            </span>
            <span>/</span>
            <span className="text-[#C7A46C]">Practice Areas</span>
            <span>/</span>
            <span>Business & Consultation</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Business & Consultation
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-[#C7A46C] mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Main Content Card */}
            <motion.div
              className="md:col-span-2 bg-white rounded-2xl shadow-xl p-8 md:p-10"
              variants={itemVariants}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
                variants={itemVariants}
              >
                Strategic Business Legal Support
              </motion.h2>

              <motion.div
                className="w-16 h-1 bg-[#C7A46C] mb-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <motion.p variants={itemVariants}>
                  SYS Law Office offers structured legal support to businesses throughout their operational lifecycle. The firm assists in the drafting, reviewing, and negotiating of contracts and agreements, including joint ventures, loan agreements, franchise and licensing arrangements, as well as mergers and acquisitions. Each document is prepared with careful attention to compliance, enforceability, and the alignment of obligations between parties.
                </motion.p>

                <motion.p variants={itemVariants}>
                  In addition to transactional support, the firm provides advisory services on regulatory compliance and day-to-day operational issues, ensuring that businesses adhere to prevailing legal requirements while maintaining efficiency in their activities. This encompasses guidance on corporate governance, statutory obligations, and the management of risks associated with regulatory oversight.
                </motion.p>

                <motion.p variants={itemVariants}>
                  The firm also possesses recognized expertise in specialized legal domains, including intellectual property, aviation law, and information technology law. This capability allows SYS Law Office to support industries that require precise legal insight into technical and rapidly evolving sectors. By addressing issues such as intellectual property protection, regulatory matters in aviation operations, and compliance in IT systems and digital platforms, the firm provides comprehensive legal oversight across diverse fields of practice.
                </motion.p>
              </div>
            </motion.div>

            {/* Services Sidebar */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
            >
              <motion.h3
                className="text-xl font-bold text-gray-800 mb-4"
                variants={itemVariants}
              >
                Our Services
              </motion.h3>

              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-xl p-5 shadow-lg cursor-pointer transition-all border border-gray-100 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C7A46C]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#C7A46C]/20 transition-colors">
                      <service.icon className="w-6 h-6 text-[#C7A46C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-[#C7A46C] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <motion.section
        className="py-8 bg-white border-t border-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.button
              onClick={() => router.push("/")}
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-gray-600 hover:text-[#C7A46C] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>

            <div className="flex gap-4">
              <motion.button
                onClick={() => router.push("/practice/dispute-resolution")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-lg hover:border-[#C7A46C] text-gray-600 hover:text-[#C7A46C] transition-all"
              >
                Dispute Resolution
              </motion.button>

              <motion.button
                onClick={() => router.push("/practice/legal-service")}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(199, 164, 108, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 bg-[#C7A46C] text-white rounded-lg hover:bg-[#B08F58] transition-all"
              >
                <span>Legal Service</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
