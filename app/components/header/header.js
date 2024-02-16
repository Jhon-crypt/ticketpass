import Link from "next/link";

export default function Header() {
  const Color = {
    backgroundColor: "#6A3CB5",
  };

  return (

    <><div class="container-fluid " style={Color}>
      <nav class="navbar navbar-expand-md pt-4">
        <div class="container">
          <a class="navbar-brand text-dark" href="#">

            <img src="https://res.cloudinary.com/db7wwc9ex/image/upload/v1702233547/logo_ektonr.png" />

          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse" id="navbarsExample04">

            <ul class="navbar-nav mx-auto mb-md-0" style={{ width: "400px" }}>

              <li class="nav-item pe-2">
                <a class="nav-link active text-light" aria-current="page" href="#" style={{ color: "" }}><b>About</b></a>
              </li>

              <li class="nav-item pe-2">
                <a class="nav-link text-light" href="#"><b>Shop</b></a>
              </li>

              <li class="nav-item pe-2">
                <a class="nav-link text-light" href="#"><b>Blog</b></a>
              </li>

              <li class="nav-item pe-2">
                <a class="nav-link text-light" href="#"><b>Product</b></a>
              </li>

              <li class="nav-item pe-2">
                <a class="nav-link text-light" href="#"><b>Contact Us</b></a>
              </li>

            </ul>

            <div class="col-md-2 text-center">
              <Link href="/signup/account-type" type="button" class="text-decoration-none btn btn-outline-light me-2">Create Event</Link>
            </div>

          </div>
        </div>

      </nav>
    </div>
    </>
  );



}
