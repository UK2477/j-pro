import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-inner-main-section">
        <div className="container">
          <div className="testimonial-inner-section">
            <div className="row">
              <div className="col-12 col-md-3">
                <div className="testimonial-first">
                  <div className="testimonial-img">
                    <Image
                      src="/images/testimonial-image-1.png"
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <h2>What they say?</h2>
                  <p>
                    When budgets were being cut and the country was deep in the
                    throes.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-9 d-flex align-items-center">
                <div className="testimonial-main-section">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <div className="test-main">
                        <div className="test-inner-main active">
                          <div className="test-header d-flex align-items-center justify-content-between">
                            <div className="test-left">
                              <div className="test-img">
                                <Image
                                  src="/images/test-img-1.png"
                                  alt=""
                                  layout="fill"
                                />
                              </div>
                              <div className="test-inner-header">
                                <h4>Adom Shafi</h4>
                                <p>UI/UX Designer</p>
                              </div>
                            </div>
                            <div className="test-right">
                              <span>1</span>
                            </div>
                          </div>
                          <div className="test-body">
                            <p>
                              We are happy to hear you had a positive experience
                              at Noren! We value your input and encourage you to
                              let us know more details about your experience
                              with us.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="test-main">
                        <div className="test-inner-main">
                          <div className="test-header d-flex align-items-center justify-content-between">
                            <div className="test-left">
                              <div className="test-img">
                                <Image
                                  src="/images/test-img-2.png"
                                  alt=""
                                  layout="fill"
                                />
                              </div>
                              <div className="test-inner-header">
                                <h4>Selena Gomz</h4>
                                <p>Mnager of saro</p>
                              </div>
                            </div>
                            <div className="test-right">
                              <span>2</span>
                            </div>
                          </div>
                          <div className="test-body">
                            <p>
                              We are happy to hear you had a positive experience
                              at Noren! We value your input and encourage you to
                              let us know more details about your experience
                              with us.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-button">
                    <button className="btn">
                        <Image src="/images/testimonial-button-1.png" alt="" layout="fill" />
                    </button>
                    <button className="btn">
                        <Image src="/images/testimonial-button-2.png" alt="" layout="fill" />
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
