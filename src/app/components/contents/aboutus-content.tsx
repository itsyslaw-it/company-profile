'use client'

import Image from 'next/image'
import AboutMe from '@/app/assets/aboutme-picture.png'
import { motion } from 'framer-motion'

export default function AboutUsContent() {
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

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" as const }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  }

  return (
    <motion.section
      id="about"
      className="py-20 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-6">
        {/* Animated Title */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">ABOUT US</h2>
          <motion.div
            className="w-24 h-1 bg-[#C7A46C] mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="w-full flex md:justify-end gap-12 relative"
          variants={containerVariants}
        >
          {/* Text Content */}
          <motion.div
            variants={textVariants}
            whileHover={{
              x: -10,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="md:absolute relative md:left-[8%] top-2/12 h-fit w-full md:w-[45%] bg-[#131D2D] md:bg-transparent text-white md:bg-gradient-to-r md:from-[#131D2D] md:via-[#131D2D]/95 md:to-black/30 p-10 rounded-lg md:rounded-none"
          >
            {/* Decorative accent */}
            <motion.div
              className="w-16 h-1 bg-[#C7A46C] mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />

            <motion.p
              className="leading-relaxed mb-6 text-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
              }}
            >
              Founded in 2003, SYS Law Office has consistently provided superior
              and reliable legal services across a wide spectrum of practice
              areas. The firm operates with an emphasis on delivering swift and
              insightful solutions both corporate and individual clients for
              various legal matters including but not limited to corporate
              advisory and transactional matters, dispute resolutions, and a
              range of services that address the operational need of modern
              business establishments and personal legal requirements.
            </motion.p>

            <motion.p
              className="leading-relaxed text-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }
              }}
            >
              Trusted with close attention to our esteemed like, ensuring that
              clients receive advice and representation grounded in legal
              excellence and commercial understanding.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mt-8 pt-6 border-t border-white/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } }
              }}
            >
              <div>
                <span className="text-3xl font-bold text-[#C7A46C]">20+</span>
                <p className="text-sm text-gray-300 mt-1">Years Experience</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-[#C7A46C]">500+</span>
                <p className="text-sm text-gray-300 mt-1">Cases Handled</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            whileHover={{
              x: 10,
              scale: 1.02,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Decorative frame */}
              <motion.div
                className="absolute -top-4 -right-4 w-full h-full border-2 border-[#C7A46C]/30 rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              <Image
                src={AboutMe}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-2xl relative z-10"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}