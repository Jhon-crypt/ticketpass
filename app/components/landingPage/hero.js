import React from 'react';
import Link from 'next/link';
import './style.css'

export default function HeroPage(props) {
  return (
    <div>

        <div className="hero-bg">
        {/* <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light sticky-top nav-top justify-content-between">
            <Link href="/" className="navbar-brand">
                <h2 className="text-white">ticketPass</h2>
            </Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav me-auto justify-content-center">
                
                    <Link href="/" className="nav-link text-white" style={{ fontSize: '' }}>Home</Link>
                
                
                    <Link href="/about" className="nav-link text-white" style={{ fontSize: '' }}>About</Link>
                
                
                    <Link href="/service" className="nav-link text-white" style={{ fontSize: '' }}>Service</Link>
                
                
                    <Link href="/contact" className="nav-link text-white" style={{ fontSize: '' }}>Contact</Link>
                
                </div>
                <form className="d-flex">
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
            <div className="row g-5 align-items-center py-4">
            <div className="col-lg-6">
                <div className="display-5 mb-3 animated slideInDown text-white text-uppercase">{props.message}</div>
                <p className="slideInDown animated lead-hero">Discover a new era of convenience with Text2Pay. Our secure SMS payment solutions redefine financial interactions, offering a hassle-free experience.</p>
                <div className='btn-div'>
                <Link href="/explore" className="btn btn-primary py-3 px-4 animated slideInDown mt-4"><span className='btn-Text'>GET STARTED</span></Link>
                </div>
            </div>
            <div className="col-lg-6 animated fadeIn">
                <img className="img-fluid animated pulse infinite" style={{ animationDuration: '3s' }} src="img/undraw_img5.svg" alt="Text2Pay Hero Image" />
            </div>
            </div>
        </div> */}
        <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        {/* <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> */}
                        </a>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-white text-white">Home</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        {/* <button type="button" className="btn btn-outline-primary me-2">Login</button> */}
                        <button type="button" className="btn btn-light bold">Sign-up</button>
                    </div>
                </header>
            </div>
            <div>
                <main className='pb-5'>
                    <h1 className="visually-hidden">Heroes examples</h1>

                    <div className="px-4 py-5 my-5 pb-5 text-center">
                        {/* <img className="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                        <h1 className="display-5 fw-bold text-white">Your one-stop shop <br/>for your ticket</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4 text-white">"Unlock Seamless Access to Unforgettable Experiences: Explore Our Comprehensive Ticket Hub". A ticketing platform for events, cinema with wonderful experiences.</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-light btn-lg px-4 gap-3">Book next ticket</button>
                                <button type="button" className="btn btn-outline-light btn-lg px-4">Create an event</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            

        </div>
        <div>
            <div className="container px-4 py-5" id="custom-cards">
            <h2 className="pb-2 text-center text-purple">What Popping</h2>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-1">
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-1.jpg')"}}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                    <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                    </li>
                    <li className="d-flex align-items-center me-3">
                        {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg> */}
                        <small>Earth</small>
                    </li>
                    <li className="d-flex align-items-center">
                        {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg> */}
                        <small>3d</small>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style= {{backgroundImage: "url('unsplash-photo-2.jpg');"}}>
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
                    <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                    </li>
                    <li class="d-flex align-items-center me-3">
                        {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg> */}
                        <small>Pakistan</small>
                    </li>
                    <li class="d-flex align-items-center">
                        {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg> */}
                        <small>4d</small>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-3.jpg')"}}>
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                    <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                    <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                    </li>
                    <li class="d-flex align-items-center me-3">
                        {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg> */}
                        <small>California</small>
                    </li>
                    <li class="d-flex align-items-center">
                        {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg> */}
                        <small>5d</small>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  );
};
