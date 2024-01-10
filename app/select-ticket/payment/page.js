import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Payment() {
  const Section = {
    background: "#6A3CB5",
    height: "20rem",
    borderBottomLeftRadius: "50px", // Adjust the value as needed
    borderBottomRightRadius: "50px", // Adjust the value as needed
  };

  const Color = {
    color: "#6A3CB5",
  };

  return (
    <>
      <section style={Section}>
        <div>
          <div className="container pt-5">
            <h2 class="text-light " data-aos="fade-up">Payment gateway</h2>
          </div>

          <div className="container">
            <div className="card bg-light  pe-5 py-5 px-4">
              <div className="container pe-5 py-5 px-4">
                <div class="row g-5">
                  <div class="col-md-6 col-lg-6 order-md-last">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                      <span class="text-dark">Summary</span>
                      {/* <span class="badge bg-primary rounded-pill">3</span> */}
                    </h4>
                    <span style={Color}>Add discount code</span>
                    <ul class="list-group mb-3">
                      <li class="list-group-item d-flex justify-content-between lh-sm py-3">
                        <div>
                          <h6 class="my-0 ">1 x Earlybird tickets</h6>
                          {/* <small class="text-body-secondary">
                            Brief description
                          </small> */}
                        </div>
                        <span class="text-body-secondary">₦30,000</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between lh-sm py-3">
                        <div>
                          <h6 class="my-0">1 x VIP tickets</h6>
                          {/* <small class="text-body-secondary">
                            Brief description
                          </small> */}
                        </div>
                        <span class="text-body-secondary">₦50,000</span>
                      </li>
                      
                      <li class="list-group-item d-flex justify-content-between bg-body-tertiary py-3">
                        <div class="text-dark">
                          <h6 class="my-0">Fees</h6>
                        </div>
                        <span class="text-dark">−₦5,000</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between">
                        <span>Total</span>
                        <strong>₦85,000</strong>
                      </li>
                    </ul>

                    {/* <button
                      class="w-100 btn btn-secondary btn-lg"
                      type="submit"
                    >
                      Checkout
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </button> */}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 style={Color}>Your ticket has been reserved</h4>
                    <span className="mb-3">
                      Kindly checkout to claim your tickets
                    </span>
                    <form class="needs-validation" novalidate />
                    <div class="row g-3">
                      <div class="col-sm-6">
                        
                      </div>
                    </div>

                    <hr class="my-4" />
                    {/* 
                    <h4 class="mb-1" style={Color}>
                      Send tickets to others
                    </h4>
                    <span className="mb-3">
                      Tickets will only be issued to the email addresses listed.
                    </span>
                    <br></br>
                    <span class="mt-5" style={Color}>
                      Ticket 1 -{" "}
                      <span text-grey>
                        Earlybird ticket
                        <span />
                      </span>
                    </span>
                    <form class="needs-validation mt-4" novalidate />
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <label for="firstName" class="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div class="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <label for="lastName" class="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastName"
                          placeholder=""
                          value=""
                          required
                        />

                      <div class="col-6">
                        <label for="username" class="form-label">
                          Email
                        </label>
                        <div class="input-group has-validation">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder=""
                          />
                          <div class="invalid-feedback">
                            Your username is required.
                          </div>
                        </div>
                      </div>

                      <div class="col-6">
                        <label for="email" class="form-label">
                          Confirm Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder=""
                        />
                        <div class="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="phone" class="form-label">
                          Phone Number
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="address"
                          placeholder=""
                          required
                        />
                        <div class="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
                    </div>

                    <hr class="my-4" /> */}
                    {/* <div class="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div> */}

                    {/* <span class="mt-5" style={Color}>
                      Ticket 2 -{" "}
                      <span className="text-grey">
                        Earlybird ticket
                        <span />
                      </span>
                    </span> */}
                    {/* <form class="needs-validation mt-4" novalidate />
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <label for="firstName" class="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div class="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <label for="lastName" class="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div class="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div class="col-6">
                        <label for="username" class="form-label">
                          Email
                        </label>
                        <div class="input-group has-validation">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder=""
                          />
                          <div class="invalid-feedback">
                            Your username is required.
                          </div>
                        </div>
                      </div>

                      <div class="col-6">
                        <label for="email" class="form-label">
                          Confirm Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder=""
                        />
                        <div class="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="phone" class="form-label">
                          Phone Number
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="address"
                          placeholder=""
                          required
                        />
                        <div class="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
                    </div>

                    <form /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>


        <Footer />
        
      </section>
    </>
  );
}
