import { BrowserView, MobileView } from 'react-device-detect';

export default function LandingPageHero() {

    return (

        <>

            <div className="heroImg container" style={{ backgroundImage: "url('headerImg.png')" }}>
                <div className=" mt-3 pt-3">
                    <main className='pb-3'>
                        <div className="px-4 my-5 text-center">
                            <BrowserView>
                                <h1 className="display-1 text-xl fw-bold text-white">Your one-stop shop for your ticket</h1>
                            </BrowserView>
                            <MobileView>
                                <h1 id="text_header" className="hero-title fw-bold text-white">Your one-stop shop for your ticket</h1>
                            </MobileView>
                            <div className="col-lg-9 mb-3 mx-auto">
                                <p id="text_lead" className="hero-content mb-4 text-white">"Unlock Seamless Access to Unforgettable Experiences: Explore Our Comprehensive Ticket Hub". A ticketing platform for events, cinema with wonderful experiences.</p>
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button type="button" className="btn btn-light btn-lg hero-btn px-4 gap-3">Book next ticket</button>
                                    <button type="button" className="btn btn-outline-light btn-lg hero-btn2 px-4">Create an event</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </>

    )

}