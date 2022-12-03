import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Touch = () => {
  return (
    <section className="touch-section">
      <div className="touch-main-inner-section">
        <div className="container">
          <div className="touch-inner-section">
            <div className="touch-inner-sub-section">
              <div className="row align-items-center">
                <div className="col-12 col-md-5 d-flex align-items-center">
                  <div className="touch-heading">
                    <h1>Get In Touch With Us</h1>
                    <p>Do you have any questions?</p>
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <div className="touch-form">
                    <div className="touch-inner-form">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control type="emial" placeholder="Email" />
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2">
                          <Form.Control
                            as="textarea"
                            placeholder="Massage"
                            style={{ height: "100px" }}
                          />
                        </FloatingLabel>
                        <Button type="submit">SEND</Button>
                      </Form>
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

export default Touch;
