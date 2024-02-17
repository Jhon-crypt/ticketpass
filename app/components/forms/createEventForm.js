import Link from "next/link"

export default function CreateEventForm() {

    return (

        <>

            <div className="card py-4 px-4 border-0 mt-4 mb-4" id="create_event_form_card">

                <div class="clearfix">
                    <span class="float-start">
                        <h1 id="create_event_form_text_heading">
                            Let’s create your next event, together
                        </h1>
                        <p id="create_event_form_text_lead">Fill in the following details to continue</p>
                    </span>
                    <span class="float-end">
                        <div id="form_number">
                            1/4
                        </div>
                    </span>
                </div>

                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Event Name</label>
                    <span className="ms-1 text-danger">*</span>
                    <input type="text" class="form-control" placeholder="Your Event Name" name="text" />
                </div>

                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Event description</label>
                    <span className="ms-1 text-danger">*</span>
                    <textarea class="form-control" placeholder="Tell us a little about the event"
                        rows="5" id="comment" name="text"></textarea>
                </div>

                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Event Location</label>
                    <span className="ms-1 text-danger">*</span>
                    <input type="text" class="form-control mb-1" placeholder="For example: LCCI Center, Berger, Lagos" name="text" />
                    <button className="btn btn-md" style={{ background: "#F2F4F7" }}>
                        <span>Use google maps</span>
                        <span className="ms-2">
                            <img src="/maps-icon.png" className="img-fluid" height="24px" width="24px" />
                        </span>
                    </button>
                </div>

                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">
                        Location Suggestions
                        <span className="ms-2" style={{ color: "#9D9FA1" }}>(Closest landmark)</span>
                    </label>
                    <input type="text" class="form-control" placeholder="For example: Aso Rock" name="text" />
                </div>

                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">
                        Create URL
                        <span className="ms-2" style={{ color: "#9D9FA1" }}>(Not more than 12 characters, special characters not allowed)</span>
                    </label>
                    <span className="ms-1 text-danger">*</span>
                    <div class="input-group mb-3">
                        <span class="input-group-text">ticketpass.ng/events</span>
                        <input type="text" class="form-control" placeholder="/Your Url" name="email" />
                    </div>
                </div>

                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">
                        Event schedule <span className="ms-1 text-danger">*</span><br />
                        <span style={{ color: "#9D9FA1" }}>Start</span>
                    </label>
                    <div className="row mb-2">
                        <div className="col">
                            <input type="date" class="form-control" />
                        </div>
                        <div className="col">
                            <input type="time" class="form-control" />
                        </div>
                    </div>
                    <span style={{ color: "#9D9FA1" }}>End</span>
                    <div className="row mb-2">
                        <div className="col">
                            <input type="date" class="form-control" />
                        </div>
                        <div className="col">
                            <input type="time" class="form-control" />
                        </div>
                    </div>
                </div>

                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">
                        Event Category <span className="ms-1 text-danger">*</span>
                        <span className="ms-2" style={{ color: "#9D9FA1" }}>(Select one)</span>
                    </label>
                    <div className="row mb-3">
                        <div className="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label class="form-check-label">Nightlife / Club</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label class="form-check-label">Fashion</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label class="form-check-label">Concert</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label class="form-check-label">Community</label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label class="form-check-label">Tech</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label class="form-check-label">Finance</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label class="form-check-label">Religious</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label class="form-check-label">Students</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label class="form-check-label">Corporate</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label class="form-check-label">Media</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label class="form-check-label">Charity / NGO</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label class="form-check-label">Other</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-grid mt-4">
                    <Link href="/upload-banner-dashboard" class="btn btn-block text-white" style={{ background: "#6A3CB5" }}>
                        Continue
                        <span className="ms-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M5.5 12H19.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.5 18L19.5 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.5 6L19.5 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </Link>
                </div>

            </div>

        </>

    )

}