/* eslint-disable jsx-a11y/anchor-is-valid */

export const ContactSection = () => {
  return (
    <section className="contact section-padding" id="section_5">
      <div className="container">
        <div className="row">
          <span className="message">
            <h2 className="ms-4 mb-0">Send Feedback</h2>
            <p>
              I will appriciate your feedback on this web applicaion! Send me an
              email with your honest opinion, I will be waiting
            </p>
          </span>

          <span>
            <form
              action="/"
              method="get"
              className="custom-form contact-form center"
            >
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      required=""
                    />

                    <label htmlFor="floatingInput">Name</label>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Email address"
                      required=""
                    />

                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                </div>

                <div className="col-lg-12 col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Tell me about the project"
                    ></textarea>

                    <label htmlFor="floatingTextarea">
                      Tell me about the project
                    </label>
                  </div>
                </div>

                <div className="col-lg-3 col-12 ms-auto">
                  <button type="submit" className="form-control">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </span>
        </div>
      </div>
    </section>
  );
};
