import Link from "next/link"

export default function SelectTicket() {

    return (

        <>

            <div className="container mt-5">
                <h1>Select Ticket</h1>
                <p className="lead">
                    <Link href="/ticket-picked">Go to Picked Tickets</Link>
                </p>
            </div>

        </>

    )

}