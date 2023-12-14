import BootstrapClientJs from "./components/bootstrapJsClient/bootstrapClient"
import Link from "next/link";
import Header from "./components/landingPage/header";
import './components/landingPage/style.css'
import Footer from "./components/footer/footer";

export default function SelectTicket() {
  const Section = {
    background: "#6A3CB5",
  height: "37rem",
  display: "flex",
  flexDirection: "column", // Enclose "column" in quotes
  alignItems: "bottom",
  };




  return (
    <>

      <div>
        <section style={Section}>
          <Header />
          
          <div className="heroImg container" style={{ backgroundImage: "url('headerImg.png')"}}>
            <div className=" mt-3 pt-3">
              <main className='pb-3'>
                  <h1 className="visually-hidden">Heroes examples</h1>

                  <div className="px-4 py-5 my-5 text-center">
                      {/* <img className="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                      <h1 className="display-5 hero-title fw-bold text-white">Your one-stop shop <br/>for your ticket</h1>
                      <div className="col-lg-9 mb-3 mx-auto">
                          <p className="hero-content mb-4 text-white">"Unlock Seamless Access to Unforgettable Experiences: Explore Our Comprehensive Ticket Hub". A ticketing platform for events, cinema with wonderful experiences.</p>
                          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                              <button type="button" className="btn btn-light btn-lg hero-btn px-4 gap-3">Book next ticket</button>
                              <button type="button" className="btn btn-outline-light btn-lg hero-btn2 px-4">Create an event</button>
                          </div>
                      </div>
                  </div>
              </main>
            </div>
          </div>
          
         

          
            <div className="container pt-5 pb-5" id="custom-cards">
              <h2 className="pb-2 pt-3 border-bottom text-purple features-title text-center">What's Popping</h2>

              <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-2 mb-3 mt-3">
                <div className="col col-md-6" style={{height: "400px", position: "relative" }} >
                  <div
                    className="overflow-hidden  rounded-4"
                    style={{
                      height: "100%",
                      backgroundImage: "url('eventImg.jpeg')",
                      backgroundSize: "100% 100%",
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
                              
                              <a href="/events" className="btn btn-lg hero-btn2" style={{ background: "#6A3CB5"}}>Browse Event</a>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-md-6" style={{height: "400px", position: "relative" }} >
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
                              
                              <a href="/events" className="btn btn-lg hero-btn2" style={{ background: "#6A3CB5"}}>Browse Movies</a>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col col-md-6" style={{height: "400px", }} >
                  <div
                      className="overflow-hidden rounded-4 p-0 m-0"
                      style={{
                        height: "100%",
                        backgroundImage: "url('eventImg.png')",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="px-4 py-5 my-5 text-center">
                      
                        <h1 className="display-5 hero-title fw-bold text-white">Event</h1>
                        <div className="col-lg-9 mb-3 mx-auto">
                            <p className="hero-content mb-4 text-white">New offers daily, would you like to get notified?</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                
                                <button type="button" className="btn btn-outline-light btn-lg hero-btn2 px-4">Create an event</button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div> */}



                <div className="col col-md-6" style={{height: "400px", position: "relative" }} >
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
                              
                              <a href="/events" className="btn btn-lg hero-btn2" style={{ background: "#6A3CB5"}}>Browse Sports</a>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
              <div className="d-grid gap-2 browse-div d-sm-flex justify-content-sm-center pt-3">
                <button type="button" className="btn btn-outline-purple btn-lg px-4" id="browseButton">
                  Browse all <img src="browse-arrow.svg" className="browse-arrow" alt="Browse Arrow"/>
                </button>
              </div>

            </div>

       

          <Footer/>

        </section>
      </div>

    </>
  )
}
