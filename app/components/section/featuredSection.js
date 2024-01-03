export default function FeaturedSection() {

    return (

        <>

            <div class="container px-4 py-5" id="custom-cards">
                <h2 class="pb-2" align="center" style={{ color: "#6A3CB5" }}><b>Featured Events</b></h2>

                <div class="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">

                    <div class="col">
                        <div class="card img-fluid" style={{ width:"500px"}}>
                            <img class="card-img-top" src="/card1.jpeg" alt="Card image" style={{width: "100%",}} />
                            <div class="card-img-overlay" style={{ backgroundColor: "linear-gradient(180deg, rgba(83, 56, 117, 0.29) 44.33%, rgba(48, 2, 108, 0.28) 56.41%, rgba(19, 0, 50, 0.80) 73.02%);" }}>
                               <br /><br /><br /><br />

                                <h4 class="card-title text-light" style={{ fontSize: "20px", fontWeight: "300px", lineHeight: "32px" }}>
                                    <b>Island block party</b>
                                </h4>
                                <p class="card-text text-light">
                                1st Jan, 2023, 4pm
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card img-fluid" style={{ width:"500px"}}>
                            <img class="card-img-top" src="/card2.jpeg" alt="Card image" style={{width: "100%",}} />
                            <div class="card-img-overlay">
                                <br /><br /><br /><br />

                                <h4 class="card-title text-light" style={{ fontSize: "20px", fontWeight: "600px", lineHeight: "32px" }}>
                                    <b>Hangout with Bill Gates</b>
                                </h4>
                                <p class="card-text text-light">
                                1st Jan, 2023, 4pm
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card img-fluid" style={{ width:"500px"}}>
                            <img class="card-img-top" src="/card3xx.jpg" alt="Card image" style={{width: "100%",}} />
                            <div class="card-img-overlay">
                                <br /><br /><br /><br />

                                <h4 class="card-title text-light" style={{ fontSize: "20px", fontWeight: "600px", lineHeight: "32px" }}>
                                    <b>Island block party</b>
                                </h4>
                                <p class="card-text text-light">
                                1st Jan, 2023, 4pm
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card img-fluid" style={{ width:"500px"}}>
                            <img class="card-img-top" src="/card4.jpeg" alt="Card image" style={{width: "100%",}} />
                            <div class="card-img-overlay">
                                <br /><br /><br /><br />

                                <h4 class="card-title text-light" style={{ fontSize: "20px", fontWeight: "600px", lineHeight: "32px" }}>
                                    <b>Island block party</b>
                                </h4>
                                <p class="card-text text-light">
                                1st Jan, 2023, 4pm
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>

    )

}