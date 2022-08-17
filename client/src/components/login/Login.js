import { Link } from "react-router-dom"

const Login = () => {


return (
    <div className="form-fragment">

      <form className="custom-form contact-form own-form">
        <h1 className="big-form-labels">Login</h1>
        <div className="col-lg-6 col-md-6 col-12 center">
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

            <label htmlFor="floatingInput">Email address:</label>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12 center">
          <div className="form-floating">
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required=""
              />

            <label htmlFor="floatingInput">Password:</label>
          </div>
        </div>

        <div className="col-lg-3 col-12 ms-auto center">
          <button type="submit" className="form-control">
            Done
          </button>
        </div>
        <div className="middle"><Link className="link" to={'/register'}><strong>Don't have an account?</strong></Link></div>
      </form>
</div>
)
}

export default Login