import Link from "next/link"
import BootstrapClientJs from "./components/bootstrapJsClient/bootstrapClient"

export default function Home() {
  return (
    <>

      <div className="container mt-5">
        <h1>Home</h1>
        <p className="lead">
          <Link href="/signin">Go to sign in</Link>
        </p>
        <p className="lead">
          <Link href="/events">Events</Link>
        </p>
        <p className="lead">
          <Link href="/ticket">Tickets</Link>
        </p>
      </div>

    </>
  )
}
