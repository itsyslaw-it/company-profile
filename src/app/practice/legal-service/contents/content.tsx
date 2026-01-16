"use client";

import Image from "next/image";
import LegalServiceImage from "@/app/assets/legal-service.png";
import NavbarContent from "@/app/components/contents/navbar-content";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building, Plane, Users2, Gavel } from "lucide-react";

export default function LegalServicePage() {
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const services = [
    { icon: Building, title: "Business Establishment", desc: "Company formation and restructuring guidance" },
    { icon: Plane, title: "Aviation Law", desc: "Specialized aviation regulatory and compliance" },
    { icon: Users2, title: "Labor & Family Law", desc: "Employment disputes and family matters" },
    { icon: Gavel, title: "Criminal & Immigration", desc: "Defense and immigration legal services" },
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
            src={LegalServiceImage}
            alt="Legal Service"
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
            <span>Legal Service</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Legal Service
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
                Comprehensive Legal Services
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
                  SYS Law Office provides a comprehensive range of legal services tailored to both corporate entities and individuals. In business establishment and restructuring, the firm assists clients in selecting suitable legal structures, ensuring compliance, and implementing frameworks that support long-term growth. In the area of mergers and acquisitions, the firm conducts due diligence, prepares and reviews transactional documents, and advises throughout negotiations to secure strategic objectives while minimizing risks.
                </motion.p>

                <motion.p variants={itemVariants}>
                  The firm also offers counsel on corporate governance and regulatory compliance, particularly in regulated sectors such as aviation, where licensing, operational approvals, and contractual matters require both precision and technical understanding. Beyond corporate matters, SYS Law Office handles labor disputes, family law, and insolvency, providing practical solutions that balance legal rigor with the protection of client interests.
                </motion.p>

                <motion.p variants={itemVariants}>
                  In addition, the firm has strong expertise in litigation, arbitration, and alternative dispute resolution (ADR). Whether through court proceedings or arbitration forums, SYS Law Office approaches each case with strategic foresight aimed at achieving outcomes that are legally sound and practically effective. For both domestic and international investors, the firm also provides investment consultation, offering guidance on structuring, regulatory approvals, and compliance for sustainable ventures.
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
                onClick={() => router.push("/practice/business-consultation")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-lg hover:border-[#C7A46C] text-gray-600 hover:text-[#C7A46C] transition-all"
              >
                Business Consultation
              </motion.button>

              <motion.button
                onClick={() => router.push("/practice/dispute-resolution")}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(199, 164, 108, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 bg-[#C7A46C] text-white rounded-lg hover:bg-[#B08F58] transition-all"
              >
                <span>Dispute Resolution</span>
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
