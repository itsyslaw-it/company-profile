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
  return (
    <section className="relative text-white min-h-[600px] flex items-center overflow-hidden bg-[#131D2D]">
      <div className="absolute h-full md:right-0 flex">
        <Image
          width={750}
          height={500}
          src={HomePageCover}
          alt="Law Office Banner"
          className="object-cover h-full"
          priority
        />
      </div>

      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#131D2D] from-15% via-[#131D2D]/80" /> */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#131D2D] from-40% via-[#131D2D]/90 via-70% to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl mb-6 font-serif">
            SARTONO YUDHO SUMARTO
            <span className="block text-5xl md:text-6xl mt-2">LAW OFFICE</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300 italic">
            &quot;Established to deliver precise legal counsel on litigation, advisory, and
            contractual matters across diverse fields of law.&quot;
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }} onClick={(() => handleClickContact())}
            className="bg-[#C7A46C] hover:bg-[#B08F58] text-white cursor-pointer px-8 py-3 text-xl rounded-lg transition-colors font-bold">
            CONTACT US
          </motion.button>
        </div>
      </div>
    </section>
  )
}