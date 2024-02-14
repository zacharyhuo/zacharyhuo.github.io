import type { Metadata } from 'next'
import "./globals.css";
import { Inter } from 'next/font/google'
import "@fontsource/whisper";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zhengzuo Huo',
  description: 'Zhengzuo Huo\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
