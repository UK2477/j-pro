import Image from "next/image";

const Hero_Section = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner-main-section">
        <div className="container">
          <div className="hero-inner-section">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="hero-content">
                  <div className="hero-content-inner">
                    <h1>We Help You To Grow Your Business</h1>
                    <p>
                      Power your business to new heights with our award-winning
                      digital marketing services and technology platform.
                    </p>
                    <button className="btn hero-button">Get Start</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="hero-image">
                  <div className="hero-inner-image">
                    <Image src="/images/hero-image.png" alt="" layout="fill" />
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

export default Hero_Section;
