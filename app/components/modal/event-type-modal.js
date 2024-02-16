import PhysicalEventSvg from "../svg-components/physicalEventSvg"
import OnlineEventSvg from "../svg-components/onlineEventSvg"

export default function EventTypeModal() {

    return (

        <>

            <div class="modal" id="eventTypeModal">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">

                        <div class="modal-body">
                            <div className="pt-3 mb-5">
                                <h3 className="text-center">
                                    <b>Select Event Type</b>
                                </h3>
                            </div>

                            <div className='d-flex align-content-center justify-content-center'>
                                <div className="row">
                                    <div className="col mb-3">
                                        <div className="d-flex align-content-center justify-content-center">
                                            <div className="card shadow border-0" style={{ width: "300px" }}>
                                                <div className="card-body text-start">
                                                    <h3>Physical</h3>
                                                    <p className="physical-event-type">
                                                        An event that is physically held and requires attendees to show up in person
                                                    </p>

                                                    <div>
                                                        <PhysicalEventSvg />
                                                    </div>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="col">
                                        <div className="d-flex align-content-center justify-content-center">
                                            <div className="card shadow border-0 pb-2" style={{ width: "300px" }}>
                                                <div className="card-body text-start">
                                                    <h3>Online</h3>
                                                    <p>
                                                        A online event that is held remotely and is attended by participants via web conferencing services.
                                                    </p>

                                                    <div>
                                                        <OnlineEventSvg />
                                                    </div>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer border-top-0">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )

}