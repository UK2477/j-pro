import Image from "next/image";

const Access = () => {
  return (
    <section className="access-section">
      <div className="access-main-inner-section">
        <div className="container">
          <div className="access-inner-section">
            <div className="access-inner-sub-section">
              <div className="access-content">
                <h2>Sign Up For Free Early Access</h2>
                <div className="access-input">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                  <button className="btn">Send</button>
                </div>
              </div>
              <div className="access-img">
                <Image src="/images/access-img.png" alt="" layout="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
