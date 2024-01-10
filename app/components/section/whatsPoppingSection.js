import Link from "next/link"

export default function WhatsPoppingSection() {

    return (

        <>

            <div className="container pt-5 pb-5" id="custom-cards">
                <h2 className="pb-2 pt-3 border-bottom text-purple features-title text-center">What's Popping</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-2 mb-3 mt-3">
                    <div className="col col-md-6" style={{ height: "400px", position: "relative" }} >
                        <div
                            className="overflow-hidden  rounded-4"
                            style={{
                                height: "100%",
                                backgroundImage: "url('eventImg.jpeg')",

                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="feature-content" style={{ position: "" }}>

                                <div className="mb-3">
                                    <h1 className="display-5 hero-title fw-bold text-white">Event</h1>
                                    <div className="col-lg-10">
                                        <p className="hero-content mb-4 text-white text-start">New offers daily, would you like to get notified?</p>
                                    </div>
                                    <div className="feature-button">

                                        <Link href="/events/Event" className="btn btn-lg hero-btn2" style={{ background: "#6A3CB5" }}>Browse Event</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-6" style={{ height: "400px", position: "relative" }} >
                        <div
                            className="overflow-hidden  rounded-4"
                            style={{
                                height: "100%",
                                backgroundImage: "url('movieImg.jpeg')",
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="feature-content" style={{ position: "" }}>

                                <div className="mb-3">
                                    <h1 className="display-5 hero-title fw-bold text-white">Movies</h1>
                                    <div className="col-lg-10">
                                        <p className="hero-content mb-4 text-white text-start">New offers daily, would you like to get notified?</p>
                                    </div>
                                    <div className="feature-button">

                                    <Link href="/events/Movies" className="btn btn-lg hero-btn2" style={{ background: "#6A3CB5" }}>Browse Movies</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-6" style={{ height: "400px", position: "relative" }} >
                        <div
                            className="overflow-hidden  rounded-4"
                            style={{
                                height: "100%",
                                backgroundImage: "url('sportImg.jpeg')",
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="feature-content" style={{ position: "" }}>

                                <div className="mb-3">
                                    <h1 className="display-5 hero-title fw-bold text-white">Sports</h1>
                                    <div className="col-lg-10">
                                        <p className="hero-content mb-4 text-white text-start">New offers daily, would you like to get notified?</p>
                                    </div>
                                    <div className="feature-button">

                                    <Link href="/events/Sports" className="btn btn-lg hero-btn2" style={{ background: "#6A3CB5" }}>Browse Sports</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="d-grid gap-2 browse-div d-sm-flex justify-content-sm-center pt-3">
                    <button type="button" className="btn btn-outline-purple btn-lg px-4" id="browseButton">
                        Browse all <img src="browse-arrow.svg" className="browse-arrow" alt="Browse Arrow" />
                    </button>
                </div>

            </div>

        </>

    )

}