import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - AGBO Ventures',
    default: 'AGBO Ventures - Building the future of African innovation',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/Fonts/WEB/css/switzer.css"
        />
      </head>
      <body className="text-gray-950 antialiased">
        {children}
      </body>
    </html>
  )
}
