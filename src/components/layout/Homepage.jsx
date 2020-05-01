import React from "react";
import "./homepage.style.css";

export default function Homepage() {
  return (
    <div className="homepageBG">
      <header className=" jumbotron jumbotron-fluid mb-0 bg-overlay ">
        <div className=" row d-flex justify-content-center">
          <div className=" col-lg-12  ">
            <div className=" container intro-text ">
              <span className="naslov text-center ">
                <img className="img-fluid" src="logo1.png" alt="" />{" "}
              </span>
              <hr className="bg-danger " />

              <h4 className="tekst text-center ">
                We offer music lessons for Piano, Guitar, Drums, Violin, Viola,
                Cello and Bass.
              </h4>
              <hr className="bg-danger " />
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="container shadow p-3 my-5 bg-white rounded">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="h2Ttitle">About</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <img
                src="teacher.jpg"
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
      <section id="information">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-4">
              <h2 className="h2Ttitle">Why Choose Doremi Music?</h2>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-3 ">
              <div class="card">
                <img
                  class="card-img-top"
                  src="piano1.jpg"
                  alt="Card image cap"
                />

                <div class="card-body">
                  <h4 class="card-title infotext">
                    <a>CURRICULUM</a>
                  </h4>
                  <p class="card-text">
                    Our curriculum includes theory, application, and
                    performance. We believe that a solid foundation of basic
                    music theory is very important for any musician. With the
                    solid foundation of music theory, students can effectively
                    apply what they’ve learned to musical pieces ranging from
                    classical to contemporary. We offer many different teaching
                    techniques and will use the method that is most effective
                    and fun for our students.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="card">
                <img
                  class="card-img-top"
                  src="teacher2.jpg"
                  alt="Card image cap"
                />

                <div class="card-body">
                  <h4 class="card-title infotext">
                    <a>TEACHERS</a>
                  </h4>
                  <p class="card-text">
                    Our professionally trained staffs are graduates from music
                    institutions such as Georgia State University, University of
                    Georgia, The Atlanta Institute of Music, and The Saigon
                    Music Conservatory. Our teachers are also bilingual and are
                    fluent in Vietnamese, English, and Spanish to better aid in
                    student, teacher, and parent communication. Our teachers are
                    also trained in the pedagogy of beginners as well as
                    advanced students.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="card">
                <img
                  class="card-img-top"
                  src="chair.jpg"
                  alt="Card image cap"
                />

                <div class="card-body">
                  <h4 class="card-title infotext">
                    <a>FACILITY</a>
                  </h4>
                  <p class="card-text">
                    Our studio rooms are very spacious while offering an
                    effective private one-on-one learning experience for our
                    students. Each room is equipped with video surveillance
                    cameras that can be seen from the lobby to insure that all
                    of our students are in a safe and secure learning
                    environment. Our teaching studios also offer most musical
                    instruments for students to use during their lesson, such as
                    pianos, guitars, and drums.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="card">
                <img
                  class="card-img-top"
                  src="background.jpg"
                  alt="Card image cap"
                />

                <div class="card-body">
                  <h4 class="card-title infotext">
                    <a>PERFORMANCES</a>
                  </h4>
                  <p class="card-text">
                    The students will also get a chance to perform for faculty
                    and parents at our seasonal student recitals. Students will
                    get to experience the gratification of being able to perform
                    in front of an audience of teachers, parents, and peers. We
                    also host an annual concert, in which students can enjoy the
                    experience of performing under the bright lights, in a big
                    venue, and hearing the applause of a big audience at our
                    most spectacular show of the year.
                  </p>
                </div>
              </div>
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

              <a className="img-zoom">
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

              <a className="img-zoom">
                <img
                  className="img-fluid z-depth-1 btn"
                  src="video2.jpg"
                  alt="video"
                  data-toggle="modal"
                  data-target="#modal6"
                />
              </a>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 ">
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

              <a className="img-zoom">
                <img
                  className="img-fluid z-depth-1 btn"
                  src="video3.jpg"
                  alt="video"
                  data-toggle="modal"
                  data-target="#modal4"
                  width="600"
                />
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <h3 className="infotext">
                Videos{" "}
                <span className="text-primary">
                  <a href="https://www.youtube.com/user/TNdoremi/featured">
                    {" "}
                    <i
                      className="fab fa-youtube fa-2x"
                      style={{ color: "red" }}
                    ></i>
                  </a>
                </span>
              </h3>
              <hr className="bg-danger " />
              <h3 className="infotext">Sideshow</h3>
            </div>
          </div>

          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner shadow-sm p-3 mb-5 bg-white rounded ">
              <div className="carousel-item active">
                <img className="d-block w-100" src="/1.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 "
                  src="/2.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item ">
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
        <div className="container shadow-sm p-3 my-5 bg-white rounded">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="h2Ttitle">Contact Us</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 ">
              <div className="my-auto">
                <h2 className="text-center">Address</h2>{" "}
                <ul className="fa-ul mb-4 ml-0">
                  <li id="mail-address">
                    <a>
                      <i className="fas fa-envelope-open mr-2 mb-3 contact-icons"></i>
                      TNdoremi@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-mobile-alt mr-2 mb-4 contact-icons"></i>
                    678-343-1534
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt mr-2 contact-icons"></i>
                    <strong>NORCROSS </strong> <br />{" "}
                    <p className="ml-3">
                      5430 Jimmy Carter Blvd #112, Norcross, GA 30093
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt mr-2 contact-icons"></i>
                    <strong>SUWANEE </strong> <br />
                    <p className="ml-3">
                      302 Satellite Blvd Ste C225, Suwanee, GA 30024
                    </p>
                  </li>
                </ul>
              </div>
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
            <div className="col-lg-12">
              <p className="mt-5">
                If you have any questions, comments or concerns, please email us
                your comments and we will get back to you ASAP. Thank you for
                visiting Doremi Music!
              </p>

              <form
                class="contact-form d-flex flex-column align-items-center"
                action="https://formspree.io/TNdoremi@gmail.com "
                method="POST"
              >
                <div class="form-group w-75">
                  <input
                    type="name"
                    class="form-control"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div class="form-group w-75">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    name="name"
                    required
                  />
                </div>

                <div class="form-group w-75">
                  <textarea
                    class="form-control"
                    type="text"
                    placeholder="Message"
                    rows="7"
                    name="name"
                    required
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-submit btn-info w-75">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-3 ">
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <ul className="d-flex list-unstyled justify-content-around ">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#information">Info</a>
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
