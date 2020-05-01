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

      <section id="about  ">
        <div className="container shadow p-3 my-5 bg-white rounded">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>About</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://lh3.googleusercontent.com/x3WpwDvsZ3-y6Hzb7-ISu16V5-fMaBLFCwiE6kKc7djWnJfx7FnmUwruNJavBe090L1e2v3DOo6n7uaqmacW53Hz9kDeVL0dGAkr1FmHj2CIx_EnOK2e6aVnetNauvzK61NBD7SG5-dq5FFVCdLfxoY9FRkvaUz0joUnzEAF_A8rZ8-5Er8D4XYOoQGJv1Zt8m2lhVfSKM3tIrpMWLd62r78ovEnfvm6u5hgBHd_CLFdK56spm48j3GFUnoWRrnNyfusACyqkNdhutISv-cTt-bPV6PDr3jCuXOCyQHEDt9_AoCflsGHvcVdL999DzFWilJFyEWDVz_Tptut5nx3TljysuJbT1HKlua6dKIF9NZrVCXo6S333St7owbWnOuJVR_wcp79zYgYmuE_XI0ERig1lRYCw00p-hVWerGVD2uJ9k2XWSYGNxQ8C7xpJiL9AxpIejhiVESnt6j4jrv6qMclvuWNOdmy5BJdV6AACvLadlPzmX-wq75lR9mrSreKSy2RSBgclsf9BCOzstF0jT_CpXvVMs9uu8clDnO6VsVzz6pDVuyJ9D3gtD1NFCGrOAHnW1B6ofeuqdzSolplDCF3PW4nZfVYrk5JFifqVaO9eBCiThNWbfiSeDDA2vWmdXAxNUpBYeTWjDGry-Pl5HYU1k8Np1XnMcCgclVHPmtdAfQf0xoejXqwlhW8KQ=w984-h736-no"
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
              <h2>Why Choose Doremi Music?</h2>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-3 ">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://lh3.googleusercontent.com/1Nl18ES7GRq3RQOk6SungxIo_UM3gjyT_B1SxrLU1gn6jsehFIlsKKKeZQWtQpHD8BC3zLurXbPAj1z1HVjhni6HlqHl2zvFEFH8YR7PhC6wsHZsALxBvN2Wo9Vs1N-3amvcPixn6eryHrppxGBHeVvV_MnzAq9AGshuKJR3X0QozRHf9uvY-KLaook6hd1QOoCqIO7I724cag-yVXsv5yLw-8qoAmSbNz65eBV8sSqd8OA7tbxzyasDMOKyvRcwjUb-fuuVOBcxzMKLG-Azv8hGhu20xDciklLyskPqPCxsCP9YUvjxU9I4rLlf1dyJw1oQG8ABDHdyWDjZcTLKLoFSjMvB-IaAJw5oEp-02WH-YOi2o7yy84gyJcv-tdMVZseHgMT67GY4kodw3mAuTjGq-j8-yJqHRj5wOTVWSJuqJlk-mNNI_-puYI9mKDfHfbfPS5VGcOst7qLofWY0YxT0Vo2pTrqfH5E5GZ_xgLXdpE9Cf9YUCVW6T3ThoP8aDT0K0ca-xZ4w5TxG4K7yHL6tF8tFMWwls74qjMryIN1BbgCuxuQ6zyDJijriePf5mKFCvnrDqAkdymoD86wuOLeCnkUAJwQNhzDtVMzpK1Cyokc-m4--9BZOPa2XQHbAXBC9zALB-W3whyduWjvzpRS3ET7WsfBKivzW20sXWaJ0QrZeJ8lDx3siiBPbCw=w984-h657-no"
                  alt="Card image cap"
                />

                <div class="card-body">
                  <h4 class="card-title">
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
                  src="https://lh3.googleusercontent.com/JcSm8JIQ5hx-6599SAY4JK2ZXNI2Cssbfe1_Ud4kkaVv0ELB7Uqd3SAgJWVca9Kx9mLOe-q5893goFOBeiwtu9Qe81XL6rYvN8dfQnied3znTXBon7f3_dyRo_rH4PhECdwZJf3W1M_EdLIV5_f2JoB1OHdc8gOp579kQUaijg1ZZWM_t7wVBd4Qspvpwct5GIHPXI1cRTf-wOBJz33etE1KF7aslRQqSVnZqf1jhb0SzaEKG7LSJ2TovqvX9CSRIvaxfG6xfiu_8DMbIY_useros1btquYnLqazxkNfjN4ictCghCszYrvlbcgbIE5dKrcJ0tN5gxksRKhkxqxSAS8-Rb6_p2Mnc6J8wdZfYjMG9icB95FHbwWtQCKLlR3JLon0FZexoPOK3pVFBe6MDI4NQm60UEOveu3m53GUG72DsvY9hTtT2S1FDXVnjwj9RUNl_a1XhqQxBtg4GHMQvvqIfTn2ErEmXayJyv_FWP4XLJxLLmO22u1dmoaPhzJpQ0U_IqMgPFzgpAvMwcfT4HahroOAHl0OAUKQCORoiHYQxbOrzsCJQL3OLDXYVj8fuG3YN5VKOagFaG2D7PyftYJ8phtmMXtWMkx_UOHSYPODaVlXoTm5TFhsTLSKn7iJlZ-QdtQTv7y0xhkYfnhRSDIUlhlxYNdjH6lqewU4cR2LjExKNPcxzWPcEpWFxQ=w600-h399-no"
                  alt="Card image cap"
                />

                <div class="card-body">
                  <h4 class="card-title">
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
                  src="https://lh3.googleusercontent.com/u96OAC9ytUp1ncldZncURBvbkd1q0dDFUBhdo8XS9kR2fyLNO-RihodNmTUkNLY3Xuz9F5bYlRrIXitBOz9pRIFzjk22NfQP9nvYEUUNLo1TKvfQptlybZMJXBeWxe8yHPUsZNfIs0lbo87mCJOTQJWRyU-2HihyZKt65JfntmheramyKWOz3QTza8OGdWBhGW_Yh8wzPmV3vlyDo6Xn-0A1dZoRmqjs06QI8HVkFAB2gWERN6ogfRj1PVEMewc0eTO6dmdqBUIUN4HX2m6g_j7-hp1YmnbOJ_jv7EnDCaDpk_h6xSIcagZQAuNRczFAgGX1e1dlOwW2gSWsdH7Q3zEYy2aAQr4giJfOBEDUrRPyMu77PxoFGaCqA_UmFIa_RRIXCBrjMcalSMt30kMnbnfQKP3jQHr5GoeEcYeO35dG8RqWB15JybIbLeydwyViK7tYsCv8NHxhqmCcoHh937R0V4VKAngPEUzu8cBgZODIqabgTRxhUxVQSbYpegRT6iSL8oTwAni_H2SqIGRtkugsw6gP4b7PU7SHoueij8hkzPi8SQzEmjLC3BguH646wPf6bohc58P4lUlxit2VDZFI2UglUdDP6uXku4D0-NyQClVgBJeHSTOCzabLhR2L-OtZ9MS8krB1MI15tK3E-_FMzNn0iZhFySzoG_rA9jajbVPzsFWLBlj1ekqNFQ=w600-h400-no"
                  alt="Card image cap"
                />

                <div class="card-body">
                  <h4 class="card-title">
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
                  src="https://lh3.googleusercontent.com/nFTC9TV9vBYJ_TkIK53Qypqht5dlKxZt75WtUh9NQnQHXnGp9Z7v8AIPFnV5ekiDA1P6sKzOX2mh0Sypbd_s4XNZmPhILh7LsbcDURp-C6hqX-3zVznYPiQH8DovdNAjV65MbCwefVg84TGzEzov29MVCPq6p54XxGIUqNKWp69jJtn_28AabVS77k6rzQgDfWdbkxqmA06oaLadXZ6_QazlxK5Y36Q0VOOn7umWqbEyZHS9FPPcwuLNODtHIt2j6aR0duR-llcCuQhT-Fvri7Mp8YBBfqHCA5fkzIx_BKGqjxDJsaCGUDg32dE-tNqWfX7MFI7THHSe1f_DbXT2ACA6GyxqOYF-zm3iMT_TuEVHqJ1arF4UYKWNsYXXp8_frZmJgMEJ40acT9F7oFwKsMErpNsX5yP2NldCVDfmGKPQhJ19zJ2SvMHHH6GcnpbbPiLEWMhClQ3H2TVejqUv0SgL4annB3vEzoIlMRur_4K09e9snSIyUrcvjnC4rbgFVX8-ipd92DxQTT1AHt_UhDqJ39d3PPhe1fCN6ADAqLkbEzE6OuKXMdcXkQxDOEdzkOmASJVNIoo4AcFWE8KRhwWQItZNzv149RlpcXFmYdUrHZO_BRJylPl6m-Kk7DkdnC0p-sI5YdODVvq8nu7bgRkuNwToM6JtT1OF_0AzOkmEAnnZbNHj9WYyPdLnaQ=w984-h656-no"
                  alt="Card image cap"
                />

                <div class="card-body">
                  <h4 class="card-title">
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
              <h2>Media</h2>
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
              <h2>Contact</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 ">
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
