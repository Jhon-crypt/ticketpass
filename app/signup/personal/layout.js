import './component/style.css'
export const metadata = {
    title: 'Personal Signup | Ticket Pass',
    description: 'Digitizing Tickets On The Blockchain',
  }
  
  export default function PersonalAccountLayout({ children }) {
    return (
      <html lang="en">
        <body style={{ backgroundImage: "url('/personalBG.png')"}}>{children}</body>
      </html>
    )
  }
  