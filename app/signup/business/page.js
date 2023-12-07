import Link from "next/link"

export default function BusinessSignUp() {

    return (

        <>

            <div className="container mt-5">
                <h1>Business Signup</h1>
                <p className="lead">
                    <Link href="/signup/personal">Personal Sign Up</Link>
                </p>
            </div>

        </>

    )

}