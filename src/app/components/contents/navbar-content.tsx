"use client";

import SYSLogo from "@/app/assets/sys-logo.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  className?: string;
}

export default function NavbarContent({ className }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    if (pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/#${targetId}`);
    }
  };

  return (
    <nav
      className={`bg-[#172336] text-white py-4 h-20 flex items-center ${className} sticky top-0 z-50`}
    >
      <div className="px-6 flex justify-end items-center w-full">
        <Image
          src={SYSLogo}
          alt=""
          width={200}
          height={20}
          className="fixed top-0 left-20 transition-opacity duration-300"
        />
        <div className="hidden md:flex space-x-6">
          {["home", "about", "services", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleSmoothScroll(e, section)}
              className="hover:text-[#C7A46C] transition-colors capitalize"
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
