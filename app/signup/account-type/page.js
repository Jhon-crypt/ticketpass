'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

import Link from "next/link"
import './component/style.css'

export default function AccountType() {

    const router = useRouter();
    const [selectedAccountType, setSelectedAccountType] = useState('');

    const handleAccountType = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        // Add your logic for form submission here
        //console.log('Selected Account Type:', selectedAccountType);

        if(selectedAccountType === "Individual"){
            router.push("/signup/personal")
        }else{
            router.push("/signup/business")
        }
    };

    const handleRadioChange = (value) => {
        setSelectedAccountType(value);
    };


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
                            <form className="p-3 p-md-4 border rounded-3 bg-body-tertiary" onSubmit={handleAccountType}>
                                <div className='credit-flex mb-4'>
                                    <img className='creditImg' src="/creditLogo.svg" />
                                    <div className='creditContent'>1/3</div>
                                </div>
                                <div className="form-group mb-3">
                                    <h2 className="text-purple account-title pb-0 mb-0">Choose account type</h2>
                                    <div className='account-setup'>Don’t have an account yet? <Link href='/signup' className='cre-account'>Create account</Link></div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <img src='/userIcon.svg' alt="user icon" /><span className="user-info">Individual</span>
                                            </div>
                                            <div className="radio">
                                                {/* Step 5: Use onChange event on radio inputs */}
                                                <input
                                                    type="radio"
                                                    name="accountType"
                                                    value="Individual"
                                                    onChange={() => handleRadioChange('Individual')}
                                                    checked={selectedAccountType === 'Individual'}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="pt-3 accountImg">                 
                                            <img src="/IndividualImg.jpeg" className="imgStyle"/>
                                            <div className="accountImg-content" style={{ position: "" }}>
                                                <a href="#">Learn about Individual</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <img src='/userIcon.svg' alt="user icon" /><span className="user-info">Business</span>
                                            </div>
                                            <div className="radio">
                                                <input
                                                    type="radio"
                                                    name="accountType"
                                                    value="Business"
                                                    onChange={() => handleRadioChange('Business')}
                                                    checked={selectedAccountType === 'Business'}
                                                />
                                            </div>
                                        </div>
                                        <div className="pt-3 accountImg">                 
                                            <img src="/businessImg.jpeg" className="imgStyle"/>
                                            <div className="accountImg-content" style={{ position: "" }}>
                                                <a href="#">Learn about business</a>
                                            </div>
                                        </div>
                                    </div>
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