import Link from "next/link"

export default function PersonalSignUp() {

    return (

        <>

            <div className="container mt-5">
                <h1>Personal Signup</h1>
                <p className="lead">
                    <Link href="/signup/business">Business Sign Up</Link>
                </p>
            </div>

        </>

    )

}