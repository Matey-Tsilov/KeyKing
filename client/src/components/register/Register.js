const Register = () => {
  return (
    <div className="form-fragment">

      <form className="custom-form contact-form own-form">
        <h1 className="big-form-labels">Register</h1>
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

            <label htmlFor="floatingInput">Repeat password:</label>
          </div>
        </div>

        <div className="col-lg-6 center checkbox" >
            <label htmlFor="checkbox">Compare passwords: </label>
            <p className="space">&nbsp;&nbsp;&nbsp;</p>
            <input type="checkbox" name="checkbox" id="checkbox" />
        </div>

        <div className="col-lg-3 col-12 ms-auto center">
          <button type="submit" className="form-control">
            Done
          </button>
        </div>
      </form>
</div>
  );
};

export default Register;
