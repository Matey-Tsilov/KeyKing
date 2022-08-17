import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as api from '../../api/api.js'

const Register = () => {

  const passRef = useRef()
  const rePassRef = useRef()

  const navigate = useNavigate()

  const [values, setValues] = useState({
    email: "",
    password: "",
    rePass: "",
    checkbox: false
  });

  const onInputChange = (e) => {        
       
       if (e.target.name === 'checkbox') {
          const type = (e.target.checked) ? 'text' : 'password' 
          passRef.current.type = type
          rePassRef.current.type = type
       }
       
       setValues(v => { return {...v, [e.target.name]: e.target.value || e.target.checked }})
  };

  const onFormSubmit = async (e) => {
        e.preventDefault()

        if (values.password === values.rePass) {
            const createdUserInfo = await api.register(values.email,values.password)
            navigate('/')
        }else {
            throw {message: "Passwords don't match!"}
        }  

  }

  return (
    <div className="form-fragment">
      <form onSubmit={onFormSubmit} className="custom-form contact-form own-form">
        <h1 className="big-form-labels">Register</h1>
        <div className="col-lg-6 col-md-6 col-12 center">
          <div className="form-floating">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              value={values.email}
              onChange={onInputChange}
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
              value={values.password}
              onChange={onInputChange}
              ref={passRef}
            />

            <label htmlFor="floatingInput">Password:</label>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12 center">
          <div className="form-floating">
            <input
              type="password"
              name="rePass"
              id="rePass"
              className="form-control"
              placeholder="Repeat password"
              value={values.rePass}
              onChange={onInputChange}
              ref={rePassRef}
            />

            <label htmlFor="floatingInput">Repeat password:</label>
          </div>
        </div>

        <div className="col-lg-6 center checkbox">
          <label htmlFor="checkbox">Compare passwords: </label>
          <p className="space">&nbsp;&nbsp;&nbsp;</p>
          <input type="checkbox" name="checkbox" id="checkbox" onClick={onInputChange}/>
        </div>

        <div className="col-lg-3 col-12 ms-auto center">
          <button type="submit" className="form-control">
            Done
          </button>
        </div>
        <div className="middle">
          <Link className="link" to={"/login"}>
            <strong>Already have an account?</strong>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
