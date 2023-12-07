import Link from "next/link"

export default function Events() {

    return (

        <>

            <div className="container mt-5">
                <h1>Events</h1>
                <p className="lead">
                    <Link href="/events-details">Go to Events Details</Link>
                </p>
            </div>

        </>

    )

}