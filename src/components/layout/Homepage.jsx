import React from "react";
import "./homepage.style.css";

export default function Homepage() {
  return (
    <div>
      <header className=" jumbotron jumbotron-fluid mb-0">
        <div className="container row">
          <div className="col-lg-12">
            {/* <img
              className="img-responsive center-block"
              src="https://api-assets.clashofclans.com/badges/200/m44uEqux13r-GkmdXdko2y7fil8p0S57uwKJJbHVZnc.png"
            ></img> */}
            <div className="intro-text">
              <span className="naslov text-center">doremi - Music Lessons</span>

              <h4 className="tekst text-center">
                We offer music lessons for Piano, Guitar, Drums, Violin, Viola,
                Cello and Bass.
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <a
                href="https://www.facebook.com/"
                className="btn btn-lg btn-outline"
              >
                <i className="fa fa-facebook"></i> Facebook
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>About</h2>
              <hr className="star-primary" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <img
                src="/teacher.jpg"
                className="img-responsive img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <p>
                <strong>Doremi Music</strong>
                <br />
                <small>We provide quality music lessons, founded 2011.</small>
                <br />
              </p>

              <p>
                <strong>Doremi Music Lessons</strong> is the first professional
                Vietnamese-American music teaching studio offering lessons for a
                wide variety of musical instruments. We also offer studio
                recording services at our in house studio equipped with the
                latest recording equipment. Our store carries a vast selection
                of beginner as well as professional musical equipment and
                accessories.
              </p>
              <p>
                Our goal is to provide the gift of music for the Vietnamese and
                American communities of north Atlanta, Georgia. Our facility is
                equipped with private lesson rooms and surveillance systems to
                keep a safe and secure learning environment for our students and
                customers. Our musically trained and accredited staff will
                provide you with the most effective and engaging learning
                experience.
              </p>
              <p>
                Whether you are pursuing music as a hobby, an extracurricular
                activity for your child or as aprofession, Doremi Music will
                help guide you along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Media</h2>
              <hr className="star-primary" />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6 col-md-3">
              <a href="#" className="thumbnail ">
                <img
                  src="/1.jpg"
                  alt="Portfolio 1"
                  className="img-responsive img-fluid"
                />
              </a>
            </div>

            <div className="col-xs-6 col-md-3">
              <a href="#" className="thumbnail">
                <img
                  src="/2.jpg"
                  alt="Portfolio 2"
                  className="img-responsive img-fluid"
                />
              </a>
            </div>

            <div className="col-xs-6 col-md-3">
              <a href="#" className="thumbnail">
                <img
                  src="/3.jpg"
                  alt="Portfolio 3"
                  className="img-responsive img-fluid"
                />
              </a>
            </div>

            <div className="col-xs-6 col-md-3">
              <a href="#" className="thumbnail">
                <img
                  src="/4.jpg"
                  alt="Portfolio 4"
                  className="img-responsive img-fluid"
                />
              </a>
            </div>

            <div className="col-xs-6 col-md-3">
              <a href="#" className="thumbnail">
                <img
                  src="/5.jpg"
                  alt="Portfolio 5"
                  className="img-responsive img-fluid"
                />
              </a>
            </div>

            <div className="col-xs-6 col-md-3">
              <a href="#" className="thumbnail">
                <img
                  src="/6.jpg"
                  alt="Portfolio 6"
                  className="img-responsive img-fluid"
                />
              </a>
            </div>

            <div className="col-xs-6 col-md-3">
              <a href="#" className="thumbnail">
                <img
                  src="/7.jpg"
                  alt="Portfolio 7"
                  className="img-responsive img-fluid"
                />
              </a>
            </div>

            <div className="col-xs-6 col-md-3">
              <a href="#" className="thumbnail">
                <img
                  src="/8.jpg"
                  alt="Portfolio 8"
                  className="img-responsive img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Contact</h2>
              <hr className="star-primary" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3>Address</h3>
              <p>
                <strong>NORCROSS </strong> <br />
                5430 Jimmy Carter Blvd #112, Norcross, GA 30093
              </p>
              <h3>Phone</h3>
              <p>678-343-1534</p>
              <h3>Email</h3>
              <p>TNdoremi@gmail.com</p>
              <hr />
              <p>
                <strong>SUWANEE </strong> <br />
                302 Satellite Blvd Ste C225, Suwanee, GA 30024
              </p>
              <h3>Phone</h3>
              <p>678-343-1534</p>
            </div>

            <div className="col-lg-6">
              <div className="embed-responsive-item">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106060.55008181452!2d-117.95986053127125!3d33.8279951552879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2808fb8655ad%3A0x535d20ee21ffc70f!2sClash+of+Clans+Attack+Strategy!5e0!3m2!1ssr!2srs!4v1448058178196"
                  width="580"
                  height="400"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="d-flex  justify-content-around">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Media</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
