export default function OnlineEventsSection() {

    return (

        <>

            <div class="container px-4 py-5" id="custom-cards">
                <h2 class="pb-2" align="center" style={{ color: "#6A3CB5" }}><b>Online Events</b></h2>

                <div class="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">

                    <div class="col">
                        <div className="card">
                            <img className="img-fluid m-2" style={{ borderRadius: '8px' }} src="/demandcard1.png" alt="Card image" />
                            <div className=" p-2">
                                <span id="popular_demand_card_text_header">Olamide live in concert</span>
                                <br />
                                <span id="popular_demand_card_price_text">₦20,000</span>
                                <br />

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13 2.5H3C2.60218 2.5 2.22064 2.65804 1.93934 2.93934C1.65804 3.22064 1.5 3.60218 1.5 4V11C1.5 11.3978 1.65804 11.7794 1.93934 12.0607C2.22064 12.342 2.60218 12.5 3 12.5H7.5V13.5H6C5.86739 13.5 5.74021 13.5527 5.64645 13.6464C5.55268 13.7402 5.5 13.8674 5.5 14C5.5 14.1326 5.55268 14.2598 5.64645 14.3536C5.74021 14.4473 5.86739 14.5 6 14.5H10C10.1326 14.5 10.2598 14.4473 10.3536 14.3536C10.4473 14.2598 10.5 14.1326 10.5 14C10.5 13.8674 10.4473 13.7402 10.3536 13.6464C10.2598 13.5527 10.1326 13.5 10 13.5H8.5V12.5H13C13.3978 12.5 13.7794 12.342 14.0607 12.0607C14.342 11.7794 14.5 11.3978 14.5 11V4C14.5 3.60218 14.342 3.22064 14.0607 2.93934C13.7794 2.65804 13.3978 2.5 13 2.5ZM3 3.5H13C13.1326 3.5 13.2598 3.55268 13.3536 3.64645C13.4473 3.74021 13.5 3.86739 13.5 4V9H2.5V4C2.5 3.86739 2.55268 3.74021 2.64645 3.64645C2.74021 3.55268 2.86739 3.5 3 3.5ZM13 11.5H3C2.86739 11.5 2.74021 11.4473 2.64645 11.3536C2.55268 11.2598 2.5 11.1326 2.5 11V10H13.5V11C13.5 11.1326 13.4473 11.2598 13.3536 11.3536C13.2598 11.4473 13.1326 11.5 13 11.5Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>Virtual</span>
                                </div>

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13ZM10.6038 7.64625C10.6502 7.69269 10.6871 7.74783 10.7123 7.80853C10.7374 7.86923 10.7504 7.93429 10.7504 8C10.7504 8.06571 10.7374 8.13077 10.7123 8.19147C10.6871 8.25217 10.6502 8.30731 10.6038 8.35375L7.60375 11.3538C7.55731 11.4002 7.50217 11.4371 7.44147 11.4623C7.38077 11.4874 7.31571 11.5004 7.25 11.5004C7.18429 11.5004 7.11923 11.4874 7.05853 11.4623C6.99783 11.4371 6.94269 11.4002 6.89625 11.3538L5.39625 9.85375C5.30243 9.75993 5.24972 9.63268 5.24972 9.5C5.24972 9.36732 5.30243 9.24007 5.39625 9.14625C5.49007 9.05243 5.61732 8.99972 5.75 8.99972C5.88268 8.99972 6.00993 9.05243 6.10375 9.14625L7.25 10.2931L9.89625 7.64625C9.94269 7.59976 9.99783 7.56288 10.0585 7.53772C10.1192 7.51256 10.1843 7.49961 10.25 7.49961C10.3157 7.49961 10.3808 7.51256 10.4415 7.53772C10.5022 7.56288 10.5573 7.59976 10.6038 7.64625Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>1st Jan, 2023</span>
                                </div>

                                <div class="mt-2 d-grid gap-3">
                                    <button type="button" class="btn btn-block text-light" style={{ background: '#6A3CB5' }}>
                                        Get tickets
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div className="card">
                            <img className="img-fluid m-2" style={{ borderRadius: '8px' }} src="/demandcard1.png" alt="Card image" />
                            <div className=" p-2">
                                <span id="popular_demand_card_text_header">Olamide live in concert</span>
                                <br />
                                <span id="popular_demand_card_price_text">₦20,000</span>
                                <br />

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13 2.5H3C2.60218 2.5 2.22064 2.65804 1.93934 2.93934C1.65804 3.22064 1.5 3.60218 1.5 4V11C1.5 11.3978 1.65804 11.7794 1.93934 12.0607C2.22064 12.342 2.60218 12.5 3 12.5H7.5V13.5H6C5.86739 13.5 5.74021 13.5527 5.64645 13.6464C5.55268 13.7402 5.5 13.8674 5.5 14C5.5 14.1326 5.55268 14.2598 5.64645 14.3536C5.74021 14.4473 5.86739 14.5 6 14.5H10C10.1326 14.5 10.2598 14.4473 10.3536 14.3536C10.4473 14.2598 10.5 14.1326 10.5 14C10.5 13.8674 10.4473 13.7402 10.3536 13.6464C10.2598 13.5527 10.1326 13.5 10 13.5H8.5V12.5H13C13.3978 12.5 13.7794 12.342 14.0607 12.0607C14.342 11.7794 14.5 11.3978 14.5 11V4C14.5 3.60218 14.342 3.22064 14.0607 2.93934C13.7794 2.65804 13.3978 2.5 13 2.5ZM3 3.5H13C13.1326 3.5 13.2598 3.55268 13.3536 3.64645C13.4473 3.74021 13.5 3.86739 13.5 4V9H2.5V4C2.5 3.86739 2.55268 3.74021 2.64645 3.64645C2.74021 3.55268 2.86739 3.5 3 3.5ZM13 11.5H3C2.86739 11.5 2.74021 11.4473 2.64645 11.3536C2.55268 11.2598 2.5 11.1326 2.5 11V10H13.5V11C13.5 11.1326 13.4473 11.2598 13.3536 11.3536C13.2598 11.4473 13.1326 11.5 13 11.5Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>Virtual</span>
                                </div>

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13ZM10.6038 7.64625C10.6502 7.69269 10.6871 7.74783 10.7123 7.80853C10.7374 7.86923 10.7504 7.93429 10.7504 8C10.7504 8.06571 10.7374 8.13077 10.7123 8.19147C10.6871 8.25217 10.6502 8.30731 10.6038 8.35375L7.60375 11.3538C7.55731 11.4002 7.50217 11.4371 7.44147 11.4623C7.38077 11.4874 7.31571 11.5004 7.25 11.5004C7.18429 11.5004 7.11923 11.4874 7.05853 11.4623C6.99783 11.4371 6.94269 11.4002 6.89625 11.3538L5.39625 9.85375C5.30243 9.75993 5.24972 9.63268 5.24972 9.5C5.24972 9.36732 5.30243 9.24007 5.39625 9.14625C5.49007 9.05243 5.61732 8.99972 5.75 8.99972C5.88268 8.99972 6.00993 9.05243 6.10375 9.14625L7.25 10.2931L9.89625 7.64625C9.94269 7.59976 9.99783 7.56288 10.0585 7.53772C10.1192 7.51256 10.1843 7.49961 10.25 7.49961C10.3157 7.49961 10.3808 7.51256 10.4415 7.53772C10.5022 7.56288 10.5573 7.59976 10.6038 7.64625Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>1st Jan, 2023</span>
                                </div>

                                <div class="mt-2 d-grid gap-3">
                                    <button type="button" class="btn btn-block text-light" style={{ background: '#6A3CB5' }}>
                                        Get tickets
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div className="card">
                            <img className="img-fluid m-2" style={{ borderRadius: '8px' }} src="/demandcard1.png" alt="Card image" />
                            <div className=" p-2">
                                <span id="popular_demand_card_text_header">Olamide live in concert</span>
                                <br />
                                <span id="popular_demand_card_price_text">₦20,000</span>
                                <br />

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13 2.5H3C2.60218 2.5 2.22064 2.65804 1.93934 2.93934C1.65804 3.22064 1.5 3.60218 1.5 4V11C1.5 11.3978 1.65804 11.7794 1.93934 12.0607C2.22064 12.342 2.60218 12.5 3 12.5H7.5V13.5H6C5.86739 13.5 5.74021 13.5527 5.64645 13.6464C5.55268 13.7402 5.5 13.8674 5.5 14C5.5 14.1326 5.55268 14.2598 5.64645 14.3536C5.74021 14.4473 5.86739 14.5 6 14.5H10C10.1326 14.5 10.2598 14.4473 10.3536 14.3536C10.4473 14.2598 10.5 14.1326 10.5 14C10.5 13.8674 10.4473 13.7402 10.3536 13.6464C10.2598 13.5527 10.1326 13.5 10 13.5H8.5V12.5H13C13.3978 12.5 13.7794 12.342 14.0607 12.0607C14.342 11.7794 14.5 11.3978 14.5 11V4C14.5 3.60218 14.342 3.22064 14.0607 2.93934C13.7794 2.65804 13.3978 2.5 13 2.5ZM3 3.5H13C13.1326 3.5 13.2598 3.55268 13.3536 3.64645C13.4473 3.74021 13.5 3.86739 13.5 4V9H2.5V4C2.5 3.86739 2.55268 3.74021 2.64645 3.64645C2.74021 3.55268 2.86739 3.5 3 3.5ZM13 11.5H3C2.86739 11.5 2.74021 11.4473 2.64645 11.3536C2.55268 11.2598 2.5 11.1326 2.5 11V10H13.5V11C13.5 11.1326 13.4473 11.2598 13.3536 11.3536C13.2598 11.4473 13.1326 11.5 13 11.5Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>Virtual</span>
                                </div>

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13ZM10.6038 7.64625C10.6502 7.69269 10.6871 7.74783 10.7123 7.80853C10.7374 7.86923 10.7504 7.93429 10.7504 8C10.7504 8.06571 10.7374 8.13077 10.7123 8.19147C10.6871 8.25217 10.6502 8.30731 10.6038 8.35375L7.60375 11.3538C7.55731 11.4002 7.50217 11.4371 7.44147 11.4623C7.38077 11.4874 7.31571 11.5004 7.25 11.5004C7.18429 11.5004 7.11923 11.4874 7.05853 11.4623C6.99783 11.4371 6.94269 11.4002 6.89625 11.3538L5.39625 9.85375C5.30243 9.75993 5.24972 9.63268 5.24972 9.5C5.24972 9.36732 5.30243 9.24007 5.39625 9.14625C5.49007 9.05243 5.61732 8.99972 5.75 8.99972C5.88268 8.99972 6.00993 9.05243 6.10375 9.14625L7.25 10.2931L9.89625 7.64625C9.94269 7.59976 9.99783 7.56288 10.0585 7.53772C10.1192 7.51256 10.1843 7.49961 10.25 7.49961C10.3157 7.49961 10.3808 7.51256 10.4415 7.53772C10.5022 7.56288 10.5573 7.59976 10.6038 7.64625Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>1st Jan, 2023</span>
                                </div>

                                <div class="mt-2 d-grid gap-3">
                                    <button type="button" class="btn btn-block text-light" style={{ background: '#6A3CB5' }}>
                                        Get tickets
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div className="card">
                            <img className="img-fluid m-2" style={{ borderRadius: '8px' }} src="/demandcard1.png" alt="Card image" />
                            <div className=" p-2">
                                <span id="popular_demand_card_text_header">Olamide live in concert</span>
                                <br />
                                <span id="popular_demand_card_price_text">₦20,000</span>
                                <br />

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13 2.5H3C2.60218 2.5 2.22064 2.65804 1.93934 2.93934C1.65804 3.22064 1.5 3.60218 1.5 4V11C1.5 11.3978 1.65804 11.7794 1.93934 12.0607C2.22064 12.342 2.60218 12.5 3 12.5H7.5V13.5H6C5.86739 13.5 5.74021 13.5527 5.64645 13.6464C5.55268 13.7402 5.5 13.8674 5.5 14C5.5 14.1326 5.55268 14.2598 5.64645 14.3536C5.74021 14.4473 5.86739 14.5 6 14.5H10C10.1326 14.5 10.2598 14.4473 10.3536 14.3536C10.4473 14.2598 10.5 14.1326 10.5 14C10.5 13.8674 10.4473 13.7402 10.3536 13.6464C10.2598 13.5527 10.1326 13.5 10 13.5H8.5V12.5H13C13.3978 12.5 13.7794 12.342 14.0607 12.0607C14.342 11.7794 14.5 11.3978 14.5 11V4C14.5 3.60218 14.342 3.22064 14.0607 2.93934C13.7794 2.65804 13.3978 2.5 13 2.5ZM3 3.5H13C13.1326 3.5 13.2598 3.55268 13.3536 3.64645C13.4473 3.74021 13.5 3.86739 13.5 4V9H2.5V4C2.5 3.86739 2.55268 3.74021 2.64645 3.64645C2.74021 3.55268 2.86739 3.5 3 3.5ZM13 11.5H3C2.86739 11.5 2.74021 11.4473 2.64645 11.3536C2.55268 11.2598 2.5 11.1326 2.5 11V10H13.5V11C13.5 11.1326 13.4473 11.2598 13.3536 11.3536C13.2598 11.4473 13.1326 11.5 13 11.5Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>Virtual</span>
                                </div>

                                <div className="mt-2">
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13ZM10.6038 7.64625C10.6502 7.69269 10.6871 7.74783 10.7123 7.80853C10.7374 7.86923 10.7504 7.93429 10.7504 8C10.7504 8.06571 10.7374 8.13077 10.7123 8.19147C10.6871 8.25217 10.6502 8.30731 10.6038 8.35375L7.60375 11.3538C7.55731 11.4002 7.50217 11.4371 7.44147 11.4623C7.38077 11.4874 7.31571 11.5004 7.25 11.5004C7.18429 11.5004 7.11923 11.4874 7.05853 11.4623C6.99783 11.4371 6.94269 11.4002 6.89625 11.3538L5.39625 9.85375C5.30243 9.75993 5.24972 9.63268 5.24972 9.5C5.24972 9.36732 5.30243 9.24007 5.39625 9.14625C5.49007 9.05243 5.61732 8.99972 5.75 8.99972C5.88268 8.99972 6.00993 9.05243 6.10375 9.14625L7.25 10.2931L9.89625 7.64625C9.94269 7.59976 9.99783 7.56288 10.0585 7.53772C10.1192 7.51256 10.1843 7.49961 10.25 7.49961C10.3157 7.49961 10.3808 7.51256 10.4415 7.53772C10.5022 7.56288 10.5573 7.59976 10.6038 7.64625Z" fill="#6A3CB5" />
                                        </svg>
                                    </span>
                                    <span>1st Jan, 2023</span>
                                </div>

                                <div class="mt-2 d-grid gap-3">
                                    <button type="button" class="btn btn-block text-light" style={{ background: '#6A3CB5' }}>
                                        Get tickets
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>

    )

}