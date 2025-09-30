import Image from "next/image"
import Gavel from "@/app/assets/logos/gavel.png"
import CourtHouse from "@/app/assets/logos/court-house.png"
import Scale from "@/app/assets/logos/scale.png"

export default function PracticalAreaContent() {
  const practicalContentArr = [
    {
      title: "Dispute Resolution",
      text: <p>We resolve civil and commercial disputes to suit our client&apos;s commercial objectives through arbitration and strategic litigation.</p>,
      image: Gavel
    },
    {
      title: "Business & Consultation",
      text: <p>We draft, review, and negotiate appropriate documentation and provide legal guidance on compliance, intellectual property, and corporate IT law.</p>,
      image: Scale
    },
    {
      title: "Legal Service",
      text: <p>We assist with business establishments and compliance with expertise in corporate, aviation, labor, family, criminal, and immigration law.</p>,
      image: CourtHouse
    },

  ]
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">OUR PRACTICE AREAS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {practicalContentArr.map((e, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow min-h-[608px] flex flex-col justify-between">
              <div className="blok">
                <div className="flex justify-center mb-6 min-h-[200px]">
                  <Image src={e.image} alt={""} className="object-contain" />
                </div>
                <h3 className="text-3xl font-bold mb-5 text-gray-800 text-center">{e.title}</h3>
                {e.text}
              </div>
              <button className="text-right cursor-pointer w-full text-[#C7A46C] hover:text-[#B08F58] font-semibold text-xl">
                See detail →
              </button>
            </div>

          ))}

        </div>
      </div>
    </section>
  )
}