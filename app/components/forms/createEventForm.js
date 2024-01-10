export default function CreateEventForm() {

    return (

        <>

            <div className="mt-5 mb-3" id="create_event_form_card">

                <div class="clearfix">
                    <span class="float-start">
                        <h1 id="create_event_form_text_heading">
                            Let’s create your next event, together
                        </h1>
                        <p id="create_event_form_text_lead">Fill in the following details to continue</p>
                    </span>
                    <span class="float-end">
                        <div id="form_number">
                            1/3
                        </div>
                    </span>
                </div>

                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Event Name</label>
                    <input type="email" class="form-control" placeholder="Your Name" name="text"/>
                </div>

                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Event description</label>
                    <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                </div>

            </div>

        </>

    )

}