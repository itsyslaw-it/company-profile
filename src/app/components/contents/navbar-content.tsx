"use client";

import SYSLogo from "@/app/assets/sys-logo.png";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

interface Props {
  className?: string;
}

export default function NavbarContent({ className }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`bg-[#172336] text-white py-4 h-20 flex items-center ${className} sticky top-0 z-50`}
    >
      <div className="px-6 flex justify-between items-center w-full">
        <div
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src={SYSLogo}
            alt="SYS Law Office Logo"
            width={200}
            height={20}
            className="fixed top-0 left-20 transition-opacity duration-300"
          />
        </div>

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

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={`absolute top-20 left-0 w-full bg-[#172336] flex flex-col items-center space-y-4 py-4 md:hidden border-t border-[#1f2b3f] ${isMenuOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-5 opacity-0 pointer-events-none"}`}>
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
      )}
    </nav>
  );
}
