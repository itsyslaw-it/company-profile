import SYSLogo from "@/app/assets/sys-logo.png"
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function NavbarContent() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  return (
    <nav className="bg-[#172336] text-white py-4 h-20 flex items-center">
      <div className="px-6 flex justify-end items-center w-full">
        <Image src={SYSLogo} alt={''} width={200} height={20} className={`fixed top-0 left-20 transition-opacity duration-300 ${isTop ? "opacity-100" : "opacity-0"}`} />
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, 'home')}
            className="hover:text-[#C7A46C] transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="hover:text-[#C7A46C] transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, 'services')}
            className="hover:text-[#C7A46C] transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="hover:text-[#C7A46C] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}