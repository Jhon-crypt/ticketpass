import './component/style.css'
export const metadata = {
    title: 'Business Signup | Ticket Pass',
    description: 'Digitizing Tickets On The Blockchain',
  }
  
  export default function BusinessAccountLayout({ children }) {
    return (
      <html lang="en">
        <body style={{ backgroundImage: "url('/businessBG.png')"}}>{children}</body>
      </html>
    )
  }
  