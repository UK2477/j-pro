import Image from "next/image";

const Business = () => {
  return (
    <section className="business-section">
      <div className="business-inner-main-section">
        <div className="container">
          <div className="business-inner-section">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="business-left-section">
                  <div className="business-image">
                    <Image
                      src="/images/business-image-1.png"
                      alt=""
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="business-right-section">
                  <div className="business-right-inner-section">
                    <div className="business-header">
                      <h1>We take care of your business</h1>
                      <p>
                        Select your project from here by clicking on projects.
                        Its help us what you need from us.Make your better
                        version of your web,app or video.
                      </p>
                    </div>
                    <div className="business-list">
                      <ul className="m-0 p-0">
                        <li>
                          <div className="business-list-inner d-flex align-items-center">
                            <div className="business-list-img">
                              <span>1</span>
                            </div>
                            <div className="business-list-content">
                              <p>
                                Power your business to new heights with our
                                award-winning
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="business-list-inner d-flex align-items-center">
                            <div className="business-list-img">
                              <span>2</span>
                            </div>
                            <div className="business-list-content">
                              <p>
                                Our award-winning digital marketing services and
                                technology platform.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="business-list-inner d-flex align-items-center">
                            <div className="business-list-img">
                              <span>3</span>
                            </div>
                            <div className="business-list-content">
                              <p>
                                Business to new heights with our award-winning
                                digital marketing.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
