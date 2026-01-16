'use client'

import Image from "next/image"
import HomePageCover from "@/app/assets/homepage-cover.png"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function BannerContent() {
  const router = useRouter();
  const handleClickContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push("/#contact");
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.8 }
    }
  }

  return (
    <section id="home" className="relative text-white min-h-[600px] flex items-center overflow-hidden bg-[#131D2D]">
      {/* Background Image with subtle zoom animation */}
      <motion.div
        className="absolute h-full md:right-0 flex"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          width={750}
          height={500}
          src={HomePageCover}
          alt="Law Office Banner"
          className="object-cover h-full"
          priority
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#131D2D] from-40% via-[#131D2D]/90 via-70% to-transparent" />

      {/* Floating decorative element */}
      <motion.div
        className="absolute top-20 right-[30%] w-32 h-32 border border-[#C7A46C]/20 rounded-full hidden md:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
      <motion.div
        className="absolute bottom-20 right-[25%] w-16 h-16 border border-[#C7A46C]/30 rounded-full hidden md:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl mb-6 font-serif"
            variants={itemVariants}
          >
            SARTONO YUDHO SUMARTO
            <motion.span
              className="block text-5xl md:text-6xl mt-2"
              variants={itemVariants}
            >
              LAW OFFICE
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl mb-8 text-gray-300 italic"
            variants={itemVariants}
          >
            &quot;Established to deliver precise legal counsel on litigation, advisory, and
            contractual matters across diverse fields of law.&quot;
          </motion.p>

          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(199, 164, 108, 0.3)",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleClickContact()}
            className="bg-[#C7A46C] hover:bg-[#B08F58] text-white cursor-pointer px-8 py-3 text-xl rounded-lg transition-colors font-bold"
          >
            CONTACT US
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}