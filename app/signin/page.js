import Link from "next/link"

export default function SignIn() {

    return (

        <>

            <div className="container mt-5">
                <h1>Sign in</h1>
                <p className="lead">
                    <Link href="/signup/account-type">Go to sign Up</Link>
                </p>
            </div>

        </>

    )

}