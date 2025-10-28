"use client";

import Image from "next/image";
import BusinessConsultation from "@/app/assets/business-consultation.png";
import NavbarContent from "@/app/components/contents/navbar-content";
import { useRouter } from "next/navigation";

export default function DisputeResolutionPage() {
  const router = useRouter();
  return (
    <div className="relative flex flex-col min-h-screen items-center w-full">
      <div className="absolute top-0 left-0 w-full h-full min-h-screen -z-10">
        <Image
          className="w-full h-full object-cover"
          width={1920}
          height={100}
          src={BusinessConsultation}
          alt=""
        />
      </div>
      <NavbarContent className="z-30 w-full" />
      <h1 className="text-white z-40 text-[40px] font-bold mt-9 mb">
        Business & Consultation
      </h1>
      
      <div className="flex flex-col p-10 bg-white/80 z-40 w-1/2 mt-9 text-[#131D2D] gap-10">
        <span className="text-lg">
          SYS Law Office offers structured legal support to businesses throughout their operational lifecycle. The firm assists in the drafting, reviewing, and negotiating of contracts and agreements, including joint ventures, loan agreements, franchise and licensing arrangements, as well as mergers and acquisitions. Each document is prepared with careful attention to compliance, enforceability, and the alignment of obligations between parties.
        </span>
        <span className="text-lg">
          In addition to transactional support, the firm provides advisory services on regulatory compliance and day-to-day operational issues, ensuring that businesses adhere to prevailing legal requirements while maintaining efficiency in their activities. This encompasses guidance on corporate governance, statutory obligations, and the management of risks associated with regulatory oversight.
        </span>
        <span className="text-lg">
          The firm also possesses recognized expertise in specialized legal domains, including intellectual property, aviation law, and information technology law. This capability allows SYS Law Office to support industries that require precise legal insight into technical and rapidly evolving sectors. By addressing issues such as intellectual property protection, regulatory matters in aviation operations, and compliance in IT systems and digital platforms, the firm provides comprehensive legal oversight across diverse fields of practice.
        </span>
      </div>

      <div className="w-full flex items-center justify-center mt-9 gap-5 bg-white py-5">
        <button className="rounded w-fit border-2 border-gray-500 p-2 cursor-pointer" onClick={(() => router.push("/practice/dispute-resolution"))}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none">
            <path d="M14.6875 23.1251L1.25 12.1876L14.6875 1.25006" stroke="#131D2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="rounded w-fit border-2 border-gray-500 p-2 cursor-pointer" onClick={(() => router.push("/practice/legal-service"))}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none">
            <path d="M1.25 1.25006L14.6875 12.1876L1.25 23.1251" stroke="#131D2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <footer className="bg-slate-900 text-white py-8 z-30 w-full">
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
