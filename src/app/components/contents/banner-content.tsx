import Image from "next/image"
import HomePageCover from "@/app/assets/homepage-cover.png"

export default function BannerContent() {
  return (
    <section className="relative text-white min-h-screen flex items-center overflow-hidden bg-[#131D2D]">
      {/* Image Container */}
      <div className="absolute h-full md:right-0 w-full md:w-3/4">
        <Image
          src={HomePageCover}
          alt="Law Office Banner"
          className="object-cover h-full"
          priority
        />
      </div>

      {/* kalo small / mobile ilangin kalo md baru munculin */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#131D2D] from-25% via-[#131D2D]/80" />

      {/* Content */}
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
          <button className="bg-[#C7A46C] hover:bg-[#B08F58] text-white cursor-pointer px-8 py-3 text-xl rounded-lg transition-colors font-bold">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  )
}