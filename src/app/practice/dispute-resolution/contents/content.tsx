"use client";

import Image from "next/image";
import DisputeResolutionImage from "@/app/assets/dispute-resolution.png";
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
          src={DisputeResolutionImage}
          alt=""
        />
      </div>
      <NavbarContent className="z-30 w-full" />
      <h1 className="text-[#131D2D] z-40 text-[40px] font-bold mt-9 mb">
        Dispute Resolution
      </h1>

      <div className="flex flex-col p-10 bg-white/80 z-40 w-3/4 mt-9 text-[#131D2D] gap-10">
        <span className="text-lg">
          The dispute resolution practice of SYS Law Office covers a wide range
          of civil and criminal matters. The firm represents clients in
          litigation before courts of law as well as arbitration and other
          alternative dispute resolution forums. Its work includes handling
          disputes involving contractual breaches, corporate disagreements,
          property rights, labor conflicts, and criminal defense, among others.
        </span>
        <span className="text-lg">
          While fully prepared to pursue litigation where required, the firm
          maintains a focus on strategic settlement and resolution. In many
          instances, SYS Law Office seeks to resolve disputes in a manner that
          minimizes prolonged conflict, reduces cost exposure, and preserves
          ongoing relationships between the parties. This approach reflects the
          office’s view that legal disputes are not only legal matters but also
          practical challenges requiring solutions that safeguard long-term
          interests.
        </span>
        <span className="text-lg">
          The firm has been involved in complex litigation and arbitration
          proceedings, where cases often involve multiple jurisdictions,
          overlapping contractual frameworks, or extensive evidentiary records.
          Its experience in such matters allows the firm to manage proceedings
          efficiently while maintaining precision in both procedural and
          substantive law.
        </span>
      </div>

      <div className="w-full flex items-center justify-center mt-9 bg-white py-16">
        <button className="rounded w-fit border-2 border-gray-500 p-2 cursor-pointer" onClick={(() => router.push("/practice/business-consultation"))}>
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
