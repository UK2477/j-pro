import Image from "next/image";
import Menus from "./menus";

const Header = () => {
  return (
    <header className="main-header">
      <div className="inner-header-section">
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-4 d-flex align-items-center">
              <div className="site-logo">
                <Image src="/images/site-logo.png" alt="" layout="fill" />
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-center">
              <Menus />
            </div>
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-end">
              <div className="sign-button">
                <button className="btn">Sign In</button>
                <button className="btn ct-button">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
