import Image from 'next/image'
import AboutMe from '@/app/assets/aboutme-picture.png'

export default function AboutUsContent() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">ABOUT US</h2>
        <div className="w-full flex md:justify-end gap-12 relative">
          <div className="md:absolute relative md:left-[10%] top-2/12 h-fit w-full md:w-1/2 bg-[#131D2D] md:bg-transparent text-white md:bg-gradient-to-r md:from-[#131D2D] md:via-[#131D2D]/90 md:to-black/30 p-8">
            <p className="leading-relaxed mb-6">
              Founded in 2003, SYS Law Office has consistently provided superior
              and reliable legal services across a wide spectrum of practice
              areas. The firm operates with an emphasis on delivering swift and
              insightful solutions both corporate and individual clients for
              various legal matters including but not limited to corporate
              advisory and transactional matters, dispute resolutions, and a
              range of services that address the operational need of modern
              business establishments and personal legal requirements.
            </p>
            <p className="leading-relaxed">
              Trusted with close attention to our esteemed like, ensuring that
              clients receive advice and representation grounded in legal
              excellence and commercial understanding.
            </p>
          </div>
          <div className="hidden md:block">
            <Image
              src={AboutMe}
              alt="About Us Image"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}