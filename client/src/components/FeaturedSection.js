export const FeaturedSection = () => {
   return (
    <section className="featured section-padding">
    <div className="container">
        <div className="row">

            <div className="col-lg-6 col-12">
                <div className="profile-thumb">
                    <div className="profile-title">
                        <h4 className="mb-0">Information</h4>
                    </div>

                    <div className="profile-body">
                        <p>
                            <span className="profile-small-title">Name</span> 
                            <span>Joshua Morgan</span>
                        </p>

                        <p>
                            <span className="profile-small-title">Birthday</span> 
                            <span>Aug 12, 1986</span>
                        </p>

                        <p>
                            <span className="profile-small-title">Phone</span> 
                             <span><a href="tel: 305-240-9671">120-240-9600</a></span>
                        </p>

                        <p>
                            <span className="profile-small-title">Email</span> 
                            <span><a href="mailto:hello@josh.design">hello@josh.design</a></span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <div className="about-thumb">
                    <div className="row">
                        <div className="col-lg-6 col-6 featured-border-bottom py-2">
                            <strong className="featured-numbers">20+</strong>

                            <p className="featured-text">Years of Experiences</p>
                        </div>

                        <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                            <strong className="featured-numbers">245</strong>

                            <p className="featured-text">Happy Customers</p>
                        </div>

                        <div className="col-lg-6 col-6 pt-4">
                            <strong className="featured-numbers">640</strong>

                            <p className="featured-text">Project Finished</p>
                        </div>

                        <div className="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                            <strong className="featured-numbers">72+</strong>

                            <p className="featured-text">Digital Awards</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
)
}