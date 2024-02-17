import Link from "next/link"

export default function ConfirmEventsForm() {

    return (

        <>

            <div className="card py-4 px-4 border-0 mt-4 mb-4" id="create_event_form_card">

                <div class="clearfix">
                    <span class="float-start">
                        <h1 id="create_event_form_text_heading">
                            Confirm tickets
                        </h1>
                        <p id="create_event_form_text_lead">Kindly confirm the tickets before you proceed</p>
                    </span>
                    <span class="float-end">
                        <div id="form_number">
                            4/4
                        </div>
                    </span>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Ticket name</label>
                            <span className="ms-1 text-danger">*</span>
                            <input type="text" class="form-control" value="Regular" placeholder="Your Event Name" name="text" />
                        </div>
                    </div>

                    <div className="col">
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Available quantity</label>
                            <span className="ms-1 text-danger">*</span>
                            <input type="number" value="1000" class="form-control" placeholder="Your Event Name" name="text" />
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Price</label>
                        <div class="input-group w-50">
                            <button type="button" class="btn dropdown-toggle" style={{ background: "#F4F2F7" }} data-bs-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.25 12.7502H18.75V11.2502H20.25C20.4489 11.2502 20.6397 11.1712 20.7803 11.0305C20.921 10.8899 21 10.6991 21 10.5002C21 10.3013 20.921 10.1105 20.7803 9.96988C20.6397 9.82923 20.4489 9.75021 20.25 9.75021H18.75V4.31271C18.75 4.1138 18.671 3.92304 18.5303 3.78238C18.3897 3.64173 18.1989 3.56271 18 3.56271C17.8011 3.56271 17.6103 3.64173 17.4697 3.78238C17.329 3.92304 17.25 4.1138 17.25 4.31271V9.75021H11.1956L6.59156 3.85146C6.49552 3.72823 6.36338 3.63806 6.21361 3.59356C6.06384 3.54906 5.9039 3.55245 5.75615 3.60325C5.60839 3.65405 5.48019 3.74973 5.38945 3.87692C5.29871 4.00411 5.24996 4.15647 5.25 4.31271V9.75021H3.75C3.55109 9.75021 3.36032 9.82923 3.21967 9.96988C3.07902 10.1105 3 10.3013 3 10.5002C3 10.6991 3.07902 10.8899 3.21967 11.0305C3.36032 11.1712 3.55109 11.2502 3.75 11.2502H5.25V12.7502H3.75C3.55109 12.7502 3.36032 12.8292 3.21967 12.9699C3.07902 13.1105 3 13.3013 3 13.5002C3 13.6991 3.07902 13.8899 3.21967 14.0305C3.36032 14.1712 3.55109 14.2502 3.75 14.2502H5.25V19.6877C5.25 19.8866 5.32902 20.0774 5.46967 20.218C5.61032 20.3587 5.80109 20.4377 6 20.4377C6.19891 20.4377 6.38968 20.3587 6.53033 20.218C6.67098 20.0774 6.75 19.8866 6.75 19.6877V14.2502H12.8044L17.4084 20.149C17.4786 20.2389 17.5683 20.3117 17.6708 20.3617C17.7734 20.4117 17.8859 20.4377 18 20.4377C18.083 20.4379 18.1654 20.4239 18.2438 20.3965C18.3914 20.3457 18.5195 20.2502 18.6103 20.1231C18.7011 19.9961 18.7499 19.8438 18.75 19.6877V14.2502H20.25C20.4489 14.2502 20.6397 14.1712 20.7803 14.0305C20.921 13.8899 21 13.6991 21 13.5002C21 13.3013 20.921 13.1105 20.7803 12.9699C20.6397 12.8292 20.4489 12.7502 20.25 12.7502ZM17.25 11.2502V12.7502H13.5366L12.3656 11.2502H17.25ZM6.75 6.4924L9.2925 9.75021H6.75V6.4924ZM6.75 12.7502V11.2502H10.4634L11.6344 12.7502H6.75ZM17.25 17.508L14.7075 14.2502H17.25V17.508Z" fill="#3D3D3D" />
                                </svg>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Nothing here</a></li>
                            </ul>
                            <input type="text" class="form-control w-50" value="5,000.00" />
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Ticket name</label>
                            <span className="ms-1 text-danger">*</span>
                            <input type="text" class="form-control" value="Vip" placeholder="Your Event Name" name="text" />
                        </div>
                    </div>

                    <div className="col">
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Available quantity</label>
                            <span className="ms-1 text-danger">*</span>
                            <input type="number" value="200" class="form-control" placeholder="Your Event Name" name="text" />
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Price</label>
                        <div class="input-group w-50">
                            <button type="button" class="btn dropdown-toggle" style={{ background: "#F4F2F7" }} data-bs-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.25 12.7502H18.75V11.2502H20.25C20.4489 11.2502 20.6397 11.1712 20.7803 11.0305C20.921 10.8899 21 10.6991 21 10.5002C21 10.3013 20.921 10.1105 20.7803 9.96988C20.6397 9.82923 20.4489 9.75021 20.25 9.75021H18.75V4.31271C18.75 4.1138 18.671 3.92304 18.5303 3.78238C18.3897 3.64173 18.1989 3.56271 18 3.56271C17.8011 3.56271 17.6103 3.64173 17.4697 3.78238C17.329 3.92304 17.25 4.1138 17.25 4.31271V9.75021H11.1956L6.59156 3.85146C6.49552 3.72823 6.36338 3.63806 6.21361 3.59356C6.06384 3.54906 5.9039 3.55245 5.75615 3.60325C5.60839 3.65405 5.48019 3.74973 5.38945 3.87692C5.29871 4.00411 5.24996 4.15647 5.25 4.31271V9.75021H3.75C3.55109 9.75021 3.36032 9.82923 3.21967 9.96988C3.07902 10.1105 3 10.3013 3 10.5002C3 10.6991 3.07902 10.8899 3.21967 11.0305C3.36032 11.1712 3.55109 11.2502 3.75 11.2502H5.25V12.7502H3.75C3.55109 12.7502 3.36032 12.8292 3.21967 12.9699C3.07902 13.1105 3 13.3013 3 13.5002C3 13.6991 3.07902 13.8899 3.21967 14.0305C3.36032 14.1712 3.55109 14.2502 3.75 14.2502H5.25V19.6877C5.25 19.8866 5.32902 20.0774 5.46967 20.218C5.61032 20.3587 5.80109 20.4377 6 20.4377C6.19891 20.4377 6.38968 20.3587 6.53033 20.218C6.67098 20.0774 6.75 19.8866 6.75 19.6877V14.2502H12.8044L17.4084 20.149C17.4786 20.2389 17.5683 20.3117 17.6708 20.3617C17.7734 20.4117 17.8859 20.4377 18 20.4377C18.083 20.4379 18.1654 20.4239 18.2438 20.3965C18.3914 20.3457 18.5195 20.2502 18.6103 20.1231C18.7011 19.9961 18.7499 19.8438 18.75 19.6877V14.2502H20.25C20.4489 14.2502 20.6397 14.1712 20.7803 14.0305C20.921 13.8899 21 13.6991 21 13.5002C21 13.3013 20.921 13.1105 20.7803 12.9699C20.6397 12.8292 20.4489 12.7502 20.25 12.7502ZM17.25 11.2502V12.7502H13.5366L12.3656 11.2502H17.25ZM6.75 6.4924L9.2925 9.75021H6.75V6.4924ZM6.75 12.7502V11.2502H10.4634L11.6344 12.7502H6.75ZM17.25 17.508L14.7075 14.2502H17.25V17.508Z" fill="#3D3D3D" />
                                </svg>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Nothing here</a></li>
                            </ul>
                            <input type="text" class="form-control w-50" value="20,000.00" />
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Ticket name</label>
                            <span className="ms-1 text-danger">*</span>
                            <input type="text" class="form-control" value="VVIP" placeholder="Your Event Name" name="text" />
                        </div>
                    </div>

                    <div className="col">
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Available quantity</label>
                            <span className="ms-1 text-danger">*</span>
                            <input type="number" value="20" class="form-control" placeholder="Your Event Name" name="text" />
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Price</label>
                        <div class="input-group w-50">
                            <button type="button" class="btn dropdown-toggle" style={{ background: "#F4F2F7" }} data-bs-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.25 12.7502H18.75V11.2502H20.25C20.4489 11.2502 20.6397 11.1712 20.7803 11.0305C20.921 10.8899 21 10.6991 21 10.5002C21 10.3013 20.921 10.1105 20.7803 9.96988C20.6397 9.82923 20.4489 9.75021 20.25 9.75021H18.75V4.31271C18.75 4.1138 18.671 3.92304 18.5303 3.78238C18.3897 3.64173 18.1989 3.56271 18 3.56271C17.8011 3.56271 17.6103 3.64173 17.4697 3.78238C17.329 3.92304 17.25 4.1138 17.25 4.31271V9.75021H11.1956L6.59156 3.85146C6.49552 3.72823 6.36338 3.63806 6.21361 3.59356C6.06384 3.54906 5.9039 3.55245 5.75615 3.60325C5.60839 3.65405 5.48019 3.74973 5.38945 3.87692C5.29871 4.00411 5.24996 4.15647 5.25 4.31271V9.75021H3.75C3.55109 9.75021 3.36032 9.82923 3.21967 9.96988C3.07902 10.1105 3 10.3013 3 10.5002C3 10.6991 3.07902 10.8899 3.21967 11.0305C3.36032 11.1712 3.55109 11.2502 3.75 11.2502H5.25V12.7502H3.75C3.55109 12.7502 3.36032 12.8292 3.21967 12.9699C3.07902 13.1105 3 13.3013 3 13.5002C3 13.6991 3.07902 13.8899 3.21967 14.0305C3.36032 14.1712 3.55109 14.2502 3.75 14.2502H5.25V19.6877C5.25 19.8866 5.32902 20.0774 5.46967 20.218C5.61032 20.3587 5.80109 20.4377 6 20.4377C6.19891 20.4377 6.38968 20.3587 6.53033 20.218C6.67098 20.0774 6.75 19.8866 6.75 19.6877V14.2502H12.8044L17.4084 20.149C17.4786 20.2389 17.5683 20.3117 17.6708 20.3617C17.7734 20.4117 17.8859 20.4377 18 20.4377C18.083 20.4379 18.1654 20.4239 18.2438 20.3965C18.3914 20.3457 18.5195 20.2502 18.6103 20.1231C18.7011 19.9961 18.7499 19.8438 18.75 19.6877V14.2502H20.25C20.4489 14.2502 20.6397 14.1712 20.7803 14.0305C20.921 13.8899 21 13.6991 21 13.5002C21 13.3013 20.921 13.1105 20.7803 12.9699C20.6397 12.8292 20.4489 12.7502 20.25 12.7502ZM17.25 11.2502V12.7502H13.5366L12.3656 11.2502H17.25ZM6.75 6.4924L9.2925 9.75021H6.75V6.4924ZM6.75 12.7502V11.2502H10.4634L11.6344 12.7502H6.75ZM17.25 17.508L14.7075 14.2502H17.25V17.508Z" fill="#3D3D3D" />
                                </svg>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Nothing here</a></li>
                            </ul>
                            <input type="text" class="form-control w-50" value="100,000.00" />
                        </div>
                    </div>

                    <div className="mt-5 mb-2 d-flex align-content-center justify-content-center">
                        <button className="btn btn-md" style={{ background: "#6A3CB5" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.8335 4.16683C10.8335 3.70659 10.4604 3.3335 10.0002 3.3335C9.53993 3.3335 9.16683 3.70659 9.16683 4.16683V9.16683H4.16683C3.70659 9.16683 3.3335 9.53993 3.3335 10.0002C3.3335 10.4604 3.70659 10.8335 4.16683 10.8335H9.16683V15.8335C9.16683 16.2937 9.53993 16.6668 10.0002 16.6668C10.4604 16.6668 10.8335 16.2937 10.8335 15.8335V10.8335H15.8335C16.2937 10.8335 16.6668 10.4604 16.6668 10.0002C16.6668 9.53993 16.2937 9.16683 15.8335 9.16683H10.8335V4.16683Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-center">Click the button to create more tickets.</p>
                </div>

                <div class="d-grid mt-2">
                    <Link href="/upload-banner-dashboard" class="btn btn-block text-white" style={{ background: "#6A3CB5" }}>
                        Confirm
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