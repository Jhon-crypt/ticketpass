export default function UploadBannerForm() {
  return (
    <>
      <div className="card py-4 px-4 border-0 mt-4 mb-4" id="upload-container2">
        <div class="clearfix">
          <span class="float-end">
            <div id="form_number">2/3</div>
          </span>

          <h2>Upload a banner image to continue</h2>
          <p className="text-muted">
            Upload a JPEG or PNG file: A 2:1 ratio (rectangular image) is best
            advised
          </p>
        </div>
        <div class="container mt-5">
          <div id="fileUpload">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onchange="displayImage()"
            />
            <label for="fileInput" id="fileLabel">
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-upload"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                </svg>
              </div>
              <p className="text-muted">
                Drag or choose the photo you want to upload from your computer
              </p>
              <button type="button" id="btn" class="btn ">
                +
              </button>
            </label>

            <img id="previewImage" alt="Preview Image" />
          </div>
        </div>

        <button class="btn py-2 me-2 ms-2 mt-4" id="btn" type="button">
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
