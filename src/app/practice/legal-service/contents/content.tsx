"use client";

import Image from "next/image";
import DisputeResolutionImage from "@/app/assets/legal-service.png";
import NavbarContent from "@/app/components/contents/navbar-content";
import { useRouter } from "next/navigation";

export default function DisputeResolutionPage() {
  const router = useRouter();
  return (
    <div className="relative flex flex-col min-h-screen items-center w-full">
      <Image
        className="absolute top-0 left-0 w-full h-[887px] object-cover"
        width={1920}
        height={887}
        src={DisputeResolutionImage}
        alt=""
      />
      <NavbarContent className="z-30 w-full" />
      <h1 className="text-[#131D2D] z-40 text-[40px] font-bold mt-9 mb">
        Legal Service
      </h1>

      <div className="flex flex-col p-10 bg-white/80 z-40 w-3/4 mt-9 text-[#131D2D] gap-10">
        <span className="text-lg">
          SYS Law Office provides a comprehensive range of legal services tailored to both corporate entities and individuals. In business establishment and restructuring, the firm assists clients in selecting suitable legal structures, ensuring compliance, and implementing frameworks that support long-term growth. In the area of mergers and acquisitions, the firm conducts due diligence, prepares and reviews transactional documents, and advises throughout negotiations to secure strategic objectives while minimizing risks.
        </span>
        <span className="text-lg">
          The firm also offers counsel on corporate governance and regulatory compliance, particularly in regulated sectors such as aviation, where licensing, operational approvals, and contractual matters require both precision and technical understanding. Beyond corporate matters, SYS Law Office handles labor disputes, family law, and insolvency, providing practical solutions that balance legal rigor with the protection of client interests.
        </span>
        <span className="text-lg">
          In addition, the firm has strong expertise in litigation, arbitration, and alternative dispute resolution (ADR). Whether through court proceedings or arbitration forums, SYS Law Office approaches each case with strategic foresight aimed at achieving outcomes that are legally sound and practically effective. For both domestic and international investors, the firm also provides investment consultation, offering guidance on structuring, regulatory approvals, and compliance for sustainable ventures.
        </span>
        <span className="text-lg">
          Through these services, SYS Law Office ensures clarity and stability in navigating legal complexities, reinforcing its role as a dependable partner across a wide spectrum of legal needs.
        </span>
      </div>

      <div className="w-full flex items-center justify-center my-9">
        <button className="rounded w-fit border-2 border-gray-500 p-2 cursor-pointer" onClick={(() => router.push("/practice/business-consultation"))}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none">
            <path d="M14.6875 23.1251L1.25 12.1876L14.6875 1.25006" stroke="#131D2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <footer className="bg-slate-900 text-white py-8 z-30 w-full mt-auto">
        <div className="container mx-auto px-6">
          <div className="text-sm text-gray-400">
            <p>
              © 2025 - SYS LAW OFFICE. All Rights Reserved. DISCLAIMER: The
              choice of legal representation is an important decision and should
              not be based solely on written materials. The information provided
              herein by SYS Law Office is for general informational purposes
              only and does not constitute formal legal advice. Accessing this
              site or its content does not create an attorney–client
              relationship. An attorney–client relationship with SYS Law Office
              is established only upon the execution of a written agreement
              signed by both the client and the firm. Any references to prior
              matters or outcomes are specific to those cases and do not
              constitute a guarantee of future results. Legal outcomes depend on
              the unique circumstances of each case. Individuals are encouraged
              to seek direct consultation with a qualified attorney regarding
              their particular situation. SYS Law Office is based in Jakarta,
              Indonesia, and this site is not intended to solicit or advertise
              legal services in jurisdictions where the firm is not authorized
              to practice law. The firm may, when deemed appropriate, collaborate
              with other law offices or professionals in Indonesia and abroad in
              the handling of legal matters.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
