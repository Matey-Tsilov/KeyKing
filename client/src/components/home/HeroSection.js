import { Link } from "react-router-dom"
import { getUserData } from "../../api/util"

const user = getUserData()

export const HeroSection = () => {
   return (
     <section className="hero d-flex justify-content-center align-items-center" id="section_1">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-7 col-12">
                            <div className="hero-text">
                                <div className="hero-title-wrap d-flex align-items-center mb-4">

                                    <h1 className="hero-title ms-3 mb-0">Welcome!</h1>
                                </div>
                  
                                {!user 
                                ? <>
                                <h2 className="mb-4">Do you want to type fast?</h2>
                                <div>
                                
                                <p className="mb-4 login">
                                    <Link to={'/login'} className="custom-btn btn custom-link">Login</Link>

                                </p>

                                <p className="space">&nbsp;&nbsp;&nbsp;</p>

                                <p className="mb-4 register">
                                    <Link to={"/register"} className="custom-btn btn custom-link">Register</Link>
                                </p>
                                <p className="space">&nbsp;&nbsp;&nbsp;</p>

                                <p className="mb-4 guest">
                                    <Link to={"/"} className="custom-btn btn custom-link">Guest</Link>
                                </p>
                                </div>
                                </>
                                 
                                 : <h2 className="mb-4">{user.email}</h2>}

                            </div>
                        </div>

                        <div className="col-lg-5 col-12 position-relative">
                            <div className="hero-image-wrap"></div>
                            <img src="images/logoB.png" className="hero-image img-fluid keyboard" alt="" />
                        </div>

                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#535da1" fill-opacity="1" d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
    </section>
)
}