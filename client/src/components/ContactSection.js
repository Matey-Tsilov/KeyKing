/* eslint-disable jsx-a11y/anchor-is-valid */

export const ContactSection = () => {
   return (
    <section className="contact section-padding" id="section_5">
                    <div className="container">
                        <div className="row">

                            <h2 className="text-white ms-4 mb-0">Send Feedback</h2>


                            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                                <form action="/" method="get" className="custom-form contact-form center">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="form-floating">
                                                <input type="text" name="name" id="name" className="form-control" placeholder="Name" required="" />
                                                
                                                <label htmlFor="floatingInput">Name</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-12"> 
                                            <div className="form-floating">
                                                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required="" />
                                                
                                                <label htmlFor="floatingInput">Email address</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-6">
                                            <div className="form-check form-check-inline">
                                                <input name="website" type="checkbox" className="form-check-input" id="inlineCheckbox1" value="1" />

                                                <label className="form-check-label" for="inlineCheckbox1">
                                                    <i className="bi-globe form-check-icon"></i>
                                                    <span className="form-check-label-text">Websites</span>
                                                </label>
                                          </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-6">
                                            <div className="form-check form-check-inline">
                                                <input name="branding" type="checkbox" className="form-check-input" id="inlineCheckbox2" value="1" />

                                                <label className="form-check-label" for="inlineCheckbox2">
                                                    <i className="bi-lightbulb form-check-icon"></i>
                                                    <span className="form-check-label-text">Branding</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-6">
                                            <div className="form-check form-check-inline">
                                                <input name="ecommerce" type="checkbox" className="form-check-input" id="inlineCheckbox3" value="1" />

                                                <label className="form-check-label" for="inlineCheckbox3">
                                                    <i className="bi-phone form-check-icon"></i>
                                                    <span className="form-check-label-text">Ecommerce</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-6">
                                            <div className="form-check form-check-inline me-0">
                                                <input name="seo" type="checkbox" className="form-check-input" id="inlineCheckbox4" value="1" />

                                                <label className="form-check-label" for="inlineCheckbox4">
                                                    <i className="bi-google form-check-icon"></i>
                                                    <span className="form-check-label-text">SEO</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" id="message" name="message" placeholder="Tell me about the project"></textarea>
                                                
                                                <label htmlFor="floatingTextarea">Tell me about the project</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-12 ms-auto">
                                            <button type="submit" className="form-control">Send</button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

    </section>
)
}