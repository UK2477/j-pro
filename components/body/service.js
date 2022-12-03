import Image from "next/image";

const Service = () => {
  return (
    <div className="service-section">
      <div className="service-main-inner-section">
        <div className="container">
          <div className="service-inner-section text-center">
            <div className="service-heading">
              <h1>Our Services</h1>
              <h4>
                We cannot wait for governments to do it all. Globalization
                operates on Internet time
              </h4>
            </div>
            <div className="service-box-section">
              <div className="service-box-inner-section">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="service-box">
                      <div className="service-inner-box">
                        <div className="service-img">
                          <Image
                            src="/images/service-img-1.png"
                            alt=""
                            layout="fill"
                          />
                        </div>
                        <div className="service-content">
                          <h3>Grow Your Traffic</h3>
                          <p>
                            This I choose to do. If there is a price, this I
                            choose to pay. If it is my death, then I choose to
                            die. Where this takes me, there I choose to go. I
                            choose. This I choose to do
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="service-box">
                      <div className="service-inner-box active">
                        <div className="service-img">
                          <Image
                            src="/images/service-img-2.png"
                            alt=""
                            layout="fill"
                          />
                        </div>
                        <div className="service-content">
                          <h3>Get Quality Leads</h3>
                          <p>
                            Select your project from here by clicking on
                            projects. Its help us what you need from us.Make
                            your better version of your web,app or video.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="service-box">
                      <div className="service-inner-box">
                        <div className="service-img last-box">
                          <img src="./images/service-img-3.png" alt="" />
                        </div>
                        <div className="service-content">
                          <h3>Drive More Sales</h3>
                          <p>
                            Set up a beautiful branded careers page without any
                            tecnical support and have jobs updated automatically
                            every time you create a new position.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
