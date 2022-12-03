import Image from "next/image";
import React from "react";
import Menus from "./menus";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-inner-main-section">
        <div className="footer-inner-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="site-logo">
                  <Image src="/images/site-logo.png" alt="" layout="fill" />
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-end">
                <Menus />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 d-flex align-items-center">
                <div className="copy-r">
                  <span>@ All right reserved 2020</span>
                  <span>Design By Adom Shafi</span>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="icon-main">
                  <span className="line"></span>
                  <p>FOLLOW US</p>
                  <div className="follow-icon">
                    <span>
                      <Image
                        src="/images/footer-icon-1.png"
                        alt=""
                        layout="fill"
                      />
                    </span>
                    <span>
                      <Image
                        src="/images/footer-icon-2.png"
                        alt=""
                        layout="fill"
                      />
                    </span>
                    <span>
                      <Image
                        src="/images/footer-icon-3.png"
                        alt=""
                        layout="fill"
                      />
                    </span>
                    <span className="active">
                      <Image
                        src="/images/footer-icon-4.png"
                        alt=""
                        layout="fill"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
