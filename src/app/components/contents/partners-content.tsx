'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import FerhatSartono from '@/app/assets/ferhat-sartono.png'
import AliZubri from '@/app/assets/ali-zubri.png'
import LizaMashita from '@/app/assets/liza-mashita.png'
import { motion, AnimatePresence } from 'framer-motion'

export default function PartnersContent() {
  const [currentPartner, setCurrentPartner] = useState(0);
  const [direction, setDirection] = useState(0);
  const isFirstRender = useRef(true)

  const partners = [
    {
      name: "Ferhat Sartono",
      title: "Managing partner",
      description:
        <>
          He holds a Bachelor and Master of Law from the University of Indonesia and as a practising lawyer as well as a certified public accountant from the Indonesian Institute of Certified Supreme and administrators. He has pursued advanced studies in arbitration (IAL Paris, WAS Singapore), capital markets, energy and extractive industries at various institutions and management and economic programs at the University of Indonesia, the Executive Institute for Directors (EIOD, SGX and London Stock Exchange), and the Executive Education (Wharton School, expert that was a college friend in legal&apos;s economic, and financial and acquisition, privatization and business law.
          <br /><br />
          He has deep experience in aviation law, having represented airlines in procurement, financing, leasing, and maintenance contracts, as well as in litigation, claims, and accident cases. He has led projects on airline risk mapping and IOSA (IATA Operational Safety Audit) compliance. In addition, he advises Indonesian and international technology companies, including joint ventures, on complex legal and regulatory matters.
        </>,
      expertise: "Specializes in Corporate and Business Law with expertise in aviation, IT, bankruptcy, arbitration, and corporate governance. Educated at University of Indonesia, ICC Paris, SIAC Singapore, and MIT–UI joint program.",
      image: FerhatSartono
    },
    {
      name: "Ali Zahri",
      title: "Partner",
      description:
        <>
          Ali Zahri is a graduate of the Faculty of Law, University of Indonesia, specializing in Criminal and Public Law. He began his career in the airline industry, where he advanced from Claims Officer to General Manager of Litigation. In these roles, he managed air carrier liability and accident claims, oversaw regulatory compliance, and handled negotiations with repair stations and manufacturers. He has also attended international training in insurance and claims, including programs in London, and built strong networks with leading law firms, legal institutions, international brokers, and world-class aviation lawyers.
          <br /><br />
          As a member of the Indonesian Bar Association, Ali has represented clients in civil, private, and commercial disputes, while his strongest expertise lies in criminal and public law. Combining industry knowledge with legal practice, he brings extensive experience in litigation, dispute resolution, and regulatory matters, making him a trusted advisor for clients facing complex legal challenges both in aviation and beyond.
        </>,
      expertise: "Experienced in airline industry claims, litigation, and criminal law. Graduate of University of Indonesia with international training in London. Strong network with insurance brokers, adjusters, and aviation lawyers.",
      image: AliZubri
    },
    {
      name: "Liza Mashita Ramadhania",
      title: "Partner",
      description:
        <>
          Liza Mashita Ramadhania is the Managing Partner of Mashita Law Office with over a decade of experience as a corporate and dispute resolution lawyer. She earned her Bachelor of Law in Business Law from Universitas Gadjah Mada and her Master of Law in Business Law from Universitas Indonesia, two of the country&apos;s most prestigious institutions. A licensed advocate under PERADI, Liza has advised and represented clients across diverse industries, including mining, aviation, and corporate commercial matters, combining legal expertise with strong commercial insight.
          <br /><br />
          Earlier in her career, she distinguished herself academically by representing UGM in international moot court competitions, where she achieved 3rd place in the Asia-Pacific Round of the Foreign Direct Investment International Arbitration Moot, and contributed to the Juris Gentium Law Review. In recognition of her impact and leadership in the legal field, she was named one of Hukumonline&apos;s NeXGen Lawyers 2022, highlighting her role as one of Indonesia&apos;s promising young legal professionals shaping the future of the industry.
        </>,
      expertise: "Specializes in corporate and commercial law, mining, aviation and dispute resolution. Recognized by Hukumonline as a NexGen Lawyer 2022, with a strong track record of delivering practical, client-focused solutions.",
      image: LizaMashita
    },
    {
      name: "L. Wahyuni Yudhosumarto",
      title: "Partner",
      description:
        <>
          L. Wahyuni Yudhosumarto is a Senior Associate at SYS Law Office. She earned her law degree from the Faculty of Law, University of Indonesia, and holds a Master&apos;s degree in Human Resources Management from a graduate program in Jakarta. With a strong academic foundation in both law and management, she brings a multidisciplinary perspective to her practice. Her expertise spans labor and employment law, industrial relations, and family law. She has extensive experience in drafting and negotiating labor agreements, company regulations, and compensation frameworks, as well as representing clients in labor disputes and union negotiations. She also advises on family law matters including marriage, divorce, and inheritance.
          <br /><br />
          In addition, she is experienced in government procurement, offering legal guidance on tender processes and contract negotiations. Her combination of legal knowledge and practical business insight enables her to support clients effectively in both private and public sectors. As Senior Associate, L. Wahyuni advises and represents clients with precision, professionalism, and a strong commitment to legal standards.
        </>,
      expertise: "Focus on labor, industrial relations, family law, and government procurement. Holds a Law degree from University of Indonesia and Master's in Human Resources Management.",
      image: null
    },
    {
      name: "Rudi Yudho Sumarto",
      title: "Partner",
      description:
        <>
          Rudi Yudho Sartono is a law graduate from Universitas Gadjah Mada who brings a unique blend of expertise in legal scholarship and user experience research. During his academic years, he distinguished himself by representing the Faculty of Law in the prestigious Willem C. Vis (East) Moot Court Competition, an international forum that hones advocacy and arbitration skills. His passion for legal studies was further reflected in his contributions to the Juris Gentium Law Review, where he authored articles analyzing complex issues in international maritime and territorial disputes. He also pursued advanced academic research on maritime transport law, with a particular focus on the legal implications of using Letters of Indemnity in the absence of Bills of Lading, highlighting his ability to tackle highly technical and practical legal challenges.
          <br /><br />
          Building on his strong foundation in research and critical analysis, Rudi transitioned into the technology sector, where he applies the same rigor and problem-solving mindset to user experience. Over the past seven years, he has established his career as a UX Researcher, conducting both qualitative and quantitative studies to inform product design and strategy. His work includes impactful contributions to major platforms such as Gojek, where his insights have helped shape digital solutions used by millions. By combining his background in law with his expertise in UX, Rudi offers a rare interdisciplinary perspective, enabling him to bridge complex human, legal, and technological considerations in creating user-centered innovations.
        </>,
      expertise: "a Universitas Gadjah Mada law graduate, represented UGM in the Willem C. Vis (East) Moot Court, published in the Juris Gentium Law Review, and has built 7+ years of UX research experience with leading platforms such as Gojek.",
      image: null
    }
  ]

  const nextPartner = () => {
    setDirection(1);
    setCurrentPartner((prev) => (prev + 1) % partners.length)
  }

  const prevPartner = () => {
    setDirection(-1);
    setCurrentPartner((prev) => (prev - 1 + partners.length) % partners.length)
  }

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (!scrollRef.current) return;

    const activeCard = scrollRef.current.children[currentPartner] as HTMLElement;
    if (activeCard) {
      activeCard.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentPartner]);

  // Animation variants for partner card transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <motion.section
      className="py-20 bg-slate-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        {/* Animated Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">OUR PARTNERS</h2>
          <motion.div
            className="w-24 h-1 bg-[#C7A46C] mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Main Partner Display */}
        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[400px]">
            {/* Partner Image with Animation */}
            <AnimatePresence mode="wait" custom={direction}>
              {partners[currentPartner].image && (
                <motion.div
                  key={`image-${currentPartner}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      className="object-cover rounded-xl shadow-2xl"
                      src={partners[currentPartner].image!}
                      priority
                      alt={partners[currentPartner].name}
                    />
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#C7A46C] rounded-tl-xl" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#C7A46C] rounded-br-xl" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Partner Info with Animation */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`info-${currentPartner}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <motion.span
                  className="text-[#C7A46C] text-sm uppercase tracking-wider font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {partners[currentPartner].title}
                </motion.span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{partners[currentPartner].name}</h3>
                <div className="w-12 h-1 bg-[#C7A46C] mb-4" />
                <p className="text-gray-300 leading-relaxed text-sm md:text-base max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {partners[currentPartner].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Partner Cards Carousel */}
        <motion.div
          ref={scrollRef}
          className="flex gap-4 scroll-smooth overflow-x-auto mb-8 py-4 px-2 scrollbar-hide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              onClick={() => {
                setDirection(index > currentPartner ? 1 : -1);
                setCurrentPartner(index);
              }}
              key={partner.name}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`min-w-[320px] cursor-pointer rounded-xl p-6 bg-[#1B263B] text-white transition-all duration-300 border-2 ${currentPartner === index
                ? "border-[#C7A46C] shadow-lg shadow-[#C7A46C]/20"
                : "border-transparent hover:border-slate-600"
                }`}
            >
              <h3 className="text-lg font-semibold">{partner.name}</h3>
              <p className="text-[#C7A46C] text-sm mt-1">{partner.title}</p>
              <p className="text-sm mt-3 text-gray-400 line-clamp-3">{partner.expertise}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          className="flex justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            onClick={prevPartner}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#C7A46C] hover:bg-[#B08F58] p-3 rounded-full transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {partners.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentPartner ? 1 : -1);
                  setCurrentPartner(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPartner === index
                  ? "bg-[#C7A46C] w-6"
                  : "bg-slate-600 hover:bg-slate-500"
                  }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextPartner}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#C7A46C] hover:bg-[#B08F58] p-3 rounded-full transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}