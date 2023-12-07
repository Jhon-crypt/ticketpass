import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClientJs from "./components/bootstrapJsClient/bootstrapClient"

export const metadata = {
  title: 'Ticket Pass',
  description: 'Digitizing Tickets On The Blockchain',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <BootstrapClientJs />
    </html>
  )
}
