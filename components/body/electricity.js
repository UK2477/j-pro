import Image from "next/image";

const Electricity = () => {
  return (
    <section className="electricity-section">
      <div className="electricity-main-inner-section">
        <div className="container">
          <div className="electricity-inner-section">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="electricity-left-section">
                  <div className="electricity-left-inner-section">
                    <div className="electricity-heading">
                      <h2>
                        Jersey Electricity are reducing their recuitment costs
                        by 83%
                      </h2>
                      <p>
                        They have also attracted 3x more apllicationts and
                        filled some very competitive roles useing Digital Agency
                        social advertising tools. If this success continues,
                        they will achive a 20x ROL on Digital Agency this year.
                      </p>
                    </div>
                    <div className="electricity-button">
                      <button className="btn">Get Start</button>
                      <span>or</span>
                      <a href="#">Get the Case Study</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="electricity-img">
                  <Image
                    src="/images/electricity-img-1.png"
                    alt=""
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Electricity;
