import { ReactNode } from 'react'

import './global.css'
export const metadata = {
  title: 'Countdown',
  description: 'A countdown app for productivity that helps users stay focused',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
