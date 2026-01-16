"use client";

import Image from "next/image";
import DisputeResolutionImage from "@/app/assets/dispute-resolution.png";
import NavbarContent from "@/app/components/contents/navbar-content";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Scale, FileText, Users, Shield } from "lucide-react";

export default function DisputeResolutionPage() {
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
    { icon: Scale, title: "Litigation", desc: "Strategic court representation in civil and criminal matters" },
    { icon: FileText, title: "Arbitration", desc: "Alternative dispute resolution through arbitration forums" },
    { icon: Users, title: "Negotiation", desc: "Settlement negotiations to minimize conflict and costs" },
    { icon: Shield, title: "Defense", desc: "Comprehensive criminal defense and protection" },
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
            src={DisputeResolutionImage}
            alt="Dispute Resolution"
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
            <span>Dispute Resolution</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Dispute Resolution
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
                Comprehensive Legal Resolution
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
                  The dispute resolution practice of SYS Law Office covers a wide range
                  of civil and criminal matters. The firm represents clients in
                  litigation before courts of law as well as arbitration and other
                  alternative dispute resolution forums. Its work includes handling
                  disputes involving contractual breaches, corporate disagreements,
                  property rights, labor conflicts, and criminal defense, among others.
                </motion.p>

                <motion.p variants={itemVariants}>
                  While fully prepared to pursue litigation where required, the firm
                  maintains a focus on strategic settlement and resolution. In many
                  instances, SYS Law Office seeks to resolve disputes in a manner that
                  minimizes prolonged conflict, reduces cost exposure, and preserves
                  ongoing relationships between the parties. This approach reflects the
                  office&apos;s view that legal disputes are not only legal matters but also
                  practical challenges requiring solutions that safeguard long-term
                  interests.
                </motion.p>

                <motion.p variants={itemVariants}>
                  The firm has been involved in complex litigation and arbitration
                  proceedings, where cases often involve multiple jurisdictions,
                  overlapping contractual frameworks, or extensive evidentiary records.
                  Its experience in such matters allows the firm to manage proceedings
                  efficiently while maintaining precision in both procedural and
                  substantive law.
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
                onClick={() => router.push("/practice/legal-service")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-lg hover:border-[#C7A46C] text-gray-600 hover:text-[#C7A46C] transition-all"
              >
                Legal Service
              </motion.button>

              <motion.button
                onClick={() => router.push("/practice/business-consultation")}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(199, 164, 108, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 bg-[#C7A46C] text-white rounded-lg hover:bg-[#B08F58] transition-all"
              >
                <span>Business Consultation</span>
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
