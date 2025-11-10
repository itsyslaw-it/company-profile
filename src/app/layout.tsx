import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "./globals.css";

const playfair = Playfair({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sartono Yudho Sumarto Law Office',
  description: 'Established to deliver precise legal counsel on litigation, advisory, and contractual matters across diverse fields of law.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  )
}
