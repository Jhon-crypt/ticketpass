export default function CreateTicketsForm() {
    return (
      <>
        <div className="card py-4 px-4 border-0 mt-4 mb-4" id="create-ticket-container2">
          <div class="clearfix">
            <span class="float-end">
              <div id="form_number">3/4</div>
            </span>
  
            <h2>Create tickets</h2>
            <p className="text-muted">
              Fill in the following details to continue
            </p>
            <div className="row">
              <div className="col-6">
                      <label for="email" class="form-label">Ticket name <span className="text-danger">*</span></label>
                      <input type="email" class="form-control" placeholder="For example: Regular" name="text"/>
              </div>
              <div className="col-6">
                      <label for="email" class="form-label">Available quantity <span className="text-danger">*</span></label>
                      <input type="email" class="form-control" placeholder="For example: 50" name="text"/>
              </div>
              
            </div>
          </div>
          <div class="container mt-5">
            <div id="fileUpload">
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onchange="displayImage()"
              />
              <label for="fileInput" id="fileLabel" className="pt-3">
                
                <button type="button" id="btn" class="btn ">
                  +
                </button>
                <p className="text-muted mt-3">
                  Click the button to create more tickets.
                </p>
              </label>
  
              <img id="previewImage" alt="Preview Image" />
            </div>
          </div>
  
          <button class="btn py-2 me-2 ms-2 mt-5" id="btn" type="button">
            Continue{" "}
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
          </button>
        </div>
      </>
    );
  }
  