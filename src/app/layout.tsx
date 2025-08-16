import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meeting Notes Summarizer',
  description: 'AI-powered meeting notes summarizer and sharer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
