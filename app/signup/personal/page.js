
// import Link from "next/link"
// import './component/style.css'

export default function PersonalSignUp() {

    return (

        <>
         <div>

<div className='container pt-2'>

    <a class="" href="#">

        <img src="/logo.png" />

    </a>
</div>
<div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5">
    <div className="col-lg-7 text-center text-lg-start">
        {/* <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}
    </div>
    <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-3 p-md-4 border rounded-3 bg-body-tertiary">
        <div className='credit-flex mb-4'>
            <img className='creditImg' src="/creditLogo.svg"/>
            <div className='creditContent'>2/3</div>
        </div>
        <div className="form-group mb-3">
            <h2 className="text-purple account-title pb-0 mb-0">Personal information</h2>
            <div className='account-setup'>Tell us about your business.</div>
        </div>
        
        <div className="form-floating mb-3 py-0">
            <input type="text" className="form-control py-0" id="floatingInput" placeholder="First Name" />
            <label for="floatingInput">First Name</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" />
            <label for="floatingInput">Last Name</label>
        </div>
        
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Repeat Password" />
            <label for="floatingPassword">Repeat Password</label>
        </div>
        
        <button className="w-100 next-btn text-white" type="submit">Next</button>
        </form>
    </div>
    </div>
</div>
</div>

        </>

    )

}

