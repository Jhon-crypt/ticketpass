import Link from "next/link"

export default function AccountType() {

    return (

        <>

            <div className="container mt-5">
                <h1>Account Type</h1>
                <p className="lead">
                    <Link href="/signup/business">Business Sign Up</Link>
                </p>
            </div>

        </>

    )

}