import Link from "next/link"

export default function Tickets() {

    return (

        <>

            <div className="container mt-5">
                <h1>Tickets</h1>
                <p className="lead">
                    <Link href="/select-ticket">Go to Select Tickets</Link>
                </p>
            </div>

        </>

    )

}