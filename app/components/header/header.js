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

                      <div class="col-md-2 text-end">
                          <button type="button" class="btn btn-outline-light me-2">Create Event</button>

                      </div>

                  </div>
              </div>

          </nav>
      </div><style>
              {`
// @keyframes example {
//     0% { transform: scale(1); }
//     50% { transform: scale(1.1); }
//     100% { transform: scale(1); }
// }

.animated-icon {
    animation: example 2s infinite;
}
.animated-icon:hover{
    color: black;
}


@keyframes fadeFromRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .fade-in-from-right {
    animation: fadeFromRight 1s ease-in-out;
    animation-fill-mode: forwards; /* Retains the final state of the animation */
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.mygee-icon:hover {
    animation:  4s ease;
    transition: 1s ease-in-out;
    background:transparent;
}

@keyframes bounceOnce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  .bounce-once {
    animation: bounceOnce 1s;
  }
  // .nav-item{
  //   transition:1s linear;
  //   border-bottom:1px solid green;
  // }

  // .nav-item:hover{
    
  //   // border-bottom:5px solid black;

  // }

  .move-up:hover, .move-up:active {
    display: inline-block;
    transform: translateY(-1.5px);
    -webkit-transition: all .15s ease;
    transition: all .15s ease;
}
.main-btn:hover, .main-btn:focus, .main-btn:active {

    opacity: 0.95;
    box-shadow: 0 9px 32px 0   rgba(0,0,0,.15);
}

nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all .5s;
}

nav ul li a:hover {
  color: #555;
}

nav.stroke ul li a,
nav.fill ul li a {
position: relative;
}
nav.stroke ul li a:after,
nav.fill ul li a:after {
position: absolute;
bottom: 0;
left: 0;
right: 0;
margin: auto;
width: 0%;
content: '.';
color: transparent;
background: #aaa;
height: 1px;
}
nav.stroke ul li a:hover:after {
width: 100%;
}

nav.fill ul li a {
transition: all 2s;
}

nav.fill ul li a:after {
text-align: left;
content: '.';
margin: 0;
opacity: 0;
}
nav.fill ul li a:hover {
color: #fff;
z-index: 1;
}
nav.fill ul li a:hover:after {
z-index: -10;
animation: fill 1s forwards;
-webkit-animation: fill 1s forwards;
-moz-animation: fill 1s forwards;
opacity: 1;
}
  
`}
          </style></>
  );


  
}
