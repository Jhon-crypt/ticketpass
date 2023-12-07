import Link from "next/link"

export default function Events() {

    return (

        <>

            <div className="container mt-5">
                <h1>Events Details</h1>
                <p className="lead">
                    <Link href="/event">Go to Events</Link>
                </p>
            </div>

        </>

    )

}