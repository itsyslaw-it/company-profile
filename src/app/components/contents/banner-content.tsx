import Image from "next/image"
import HomePageCover from "@/app/assets/homepage-cover.png"

export default function BannerContent() {
  return (
    <section className="relative text-white min-h-screen flex items-center overflow-hidden">
      <Image
        src={HomePageCover}
        alt=""
        fill
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#131D2D] via-[#131D2Dbf] to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl mb-6">
            SARTONO YUDHO SUMARTO
            <span className="block text-5xl md:text-6xl">LAW OFFICE</span>
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