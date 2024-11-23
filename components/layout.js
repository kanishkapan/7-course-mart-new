import { Microma } from 'next/font/google'

const microma = Microma({ 
  weight: ['400'],
  subsets: ['latin'] 
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={microma.className}>
      <body>{children}</body>
    </html>
  )
}