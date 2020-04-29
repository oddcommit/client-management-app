import React from "react";
import "./homepage.style.css";

export default function Homepage() {
  return (
    <div className="homepageBG">
      <header className=" jumbotron jumbotron-fluid mb-0 bg-overlay ">
        <div className="container row">
          <div className="col-lg-12">
            <div className="intro-text">
              <span className="naslov text-center ">
                doremi - Music Lessons
              </span>
              <hr className="bg-white " />

              <h4 className="tekst text-center">
                We offer music lessons for Piano, Guitar, Drums, Violin, Viola,
                Cello and Bass.
              </h4>
              <hr className="bg-white" />
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
            <div className="col-lg-4 col-md-12 mb-4">
              <div
                className="modal fade"
                id="modal1"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-body mb-0 p-0">
                      <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe
                          className="embed-responsive-item"
                          src="https://www.youtube.com/embed/5oLwrZANJxw"
                          allowfullscreen
                          picture-in-picture
                        ></iframe>
                      </div>
                    </div>

                    <div className="modal-footer justify-content-center">
                      <span className="mr-4">Spread the word!</span>
                      <a type="button" className="btn-floating btn-sm btn-fb">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a type="button" className="btn-floating btn-sm btn-tw">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        type="button"
                        className="btn-floating btn-sm btn-gplus"
                      >
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                      <a type="button" className="btn-floating btn-sm btn-ins">
                        <i className="fab fa-linkedin-in"></i>
                      </a>

                      <button
                        type="button"
                        className="btn btn-outline-primary btn-rounded btn-md ml-4"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a>
                <img
                  className="img-fluid z-depth-1 btn"
                  src="video1.jpg"
                  alt="video"
                  data-toggle="modal"
                  data-target="#modal1"
                />
              </a>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="modal fade"
                id="modal6"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-body mb-0 p-0">
                      <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe
                          className="embed-responsive-item"
                          src="https://www.youtube.com/embed/HOKkOXVZKYs"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>

                    <div className="modal-footer justify-content-center">
                      <span className="mr-4">Spread the word!</span>
                      <a type="button" className="btn-floating btn-sm btn-fb">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a type="button" className="btn-floating btn-sm btn-tw">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        type="button"
                        className="btn-floating btn-sm btn-gplus"
                      >
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                      <a type="button" className="btn-floating btn-sm btn-ins">
                        <i className="fab fa-linkedin-in"></i>
                      </a>

                      <button
                        type="button"
                        className="btn btn-outline-primary btn-rounded btn-md ml-4"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a>
                <img
                  className="img-fluid z-depth-1 btn"
                  src="video2.jpg"
                  alt="video"
                  data-toggle="modal"
                  data-target="#modal6"
                />
              </a>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="modal fade"
                id="modal4"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-body mb-0 p-0">
                      <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe
                          className="embed-responsive-item"
                          src="https://www.youtube.com/embed/6veYo3CmiZU"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>

                    <div className="modal-footer justify-content-center">
                      <span className="mr-4">Spread the word!</span>
                      <a type="button" className="btn-floating btn-sm btn-fb">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a type="button" className="btn-floating btn-sm btn-tw">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        type="button"
                        className="btn-floating btn-sm btn-gplus"
                      >
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                      <a type="button" className="btn-floating btn-sm btn-ins">
                        <i className="fab fa-linkedin-in"></i>
                      </a>

                      <button
                        type="button"
                        className="btn btn-outline-primary btn-rounded btn-md ml-4"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a>
                <img
                  className="img-fluid z-depth-1 btn"
                  src="video3.jpg"
                  alt="video"
                  data-toggle="modal"
                  data-target="#modal4"
                />
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Media</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="/1.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/2.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="/3.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="/4.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="/5.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="/6.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="/7.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="/8.jpg" alt="Third slide" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
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
              <div className="embed-responsive embed-responsive-4by3">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/d/embed?mid=1yrofSsxqpcT7Q84GTCfj3Pf79MrM8OYr"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-3">
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
