'use client'

import Image from "next/image"
import Gavel from "@/app/assets/logos/gavel.png"
import CourtHouse from "@/app/assets/logos/court-house.png"
import Scale from "@/app/assets/logos/scale.png"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function PracticalAreaContent() {
  const router = useRouter()

  const practicalContentArr = [
    {
      title: "Dispute Resolution",
      text: <p className="text-gray-600">We resolve civil and commercial disputes to suit our client&apos;s commercial objectives through arbitration and strategic litigation.</p>,
      image: Gavel,
      route: "practice/dispute-resolution"
    },
    {
      title: "Business & Consultation",
      text: <p className="text-gray-600">We draft, review, and negotiate appropriate documentation and provide legal guidance on compliance, intellectual property, and corporate IT law.</p>,
      image: Scale,
      route: "practice/business-consultation"
    },
    {
      title: "Legal Service",
      text: <p className="text-gray-600">We assist with business establishments and compliance with expertise in corporate, aviation, labor, family, criminal, and immigration law.</p>,
      image: CourtHouse,
      route: "practice/legal-service"
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  }

  return (
    <motion.section
      id="services"
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-6">
        {/* Animated Title */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 inline-block"
          >
            OUR PRACTICE AREAS
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#C7A46C] mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {practicalContentArr.map((e, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 },
              }}
              onClick={() => router.push(e.route!)}
              className="cursor-pointer bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all min-h-[550px] flex flex-col justify-between border border-gray-100 group"
            >
              <div className="block">
                {/* Icon container with hover effect */}
                <motion.div
                  className="flex justify-center mb-8 min-h-[180px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    {/* Decorative circle behind icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C7A46C]/10 to-[#C7A46C]/5 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image src={e.image} alt={e.title} className="object-contain relative z-10" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center group-hover:text-[#C7A46C] transition-colors duration-300">
                  {e.title}
                </h3>

                {/* Description */}
                <div className="text-center">
                  {e.text}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={(e) => { e.stopPropagation(); router.push(practicalContentArr[index].route!) }}
                className="mt-6 w-full text-center cursor-pointer text-[#C7A46C] hover:text-white font-semibold text-lg py-3 rounded-lg border-2 border-[#C7A46C] hover:bg-[#C7A46C] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See detail
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}