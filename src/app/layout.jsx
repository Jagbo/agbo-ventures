import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - AGBO Ventures',
    default: 'AGBO Ventures - Building the Future of African Innovation',
  },
  description: 'AGBO Ventures builds innovative products that solve real consumer problems across Africa. From crowdfunding platforms to property management and social apps.',
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
