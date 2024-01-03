export default function EventTypeHero() {

    return (

        <>

            <div class="px-4 pt-5 pt-10 text-center">
                <br /><br /><br />
                <h1 class="display-5 fw-bold text-light" style={{ fontSize: "84px" }}>Events</h1>
                <div class="col-lg-6 mx-auto">

                    <div class="input-group input-group-lg mb-3">
                        <input type="text" class="form-control" placeholder="Search" />
                        <button class="btn text-white" style={{ backgroundColor: "#6A3CB5" }} type="submit">Search</button>
                    </div>

                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link text-light" style={{ fontSize: "14px" }}><b>Quick Search</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" style={{ fontSize: "14px" }}><b>Concert</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" style={{ fontSize: "14px" }}><b>House Party</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" style={{ fontSize: "14px" }}><b>Conference</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" style={{ fontSize: "14px" }}><b>Fests</b></a>
                        </li>
                    </ul>

                </div>
            </div>

        </>

    )

}