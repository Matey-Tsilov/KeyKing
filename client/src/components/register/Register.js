import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorModal } from "../ErrorModal/ErrorModal.js";
import * as api from '../../api/api.js'

const Register = () => {


  const emailRef = useRef()
  const passwordRef = useRef()
  const rePassRef = useRef()
  const btnRef = useRef()

  const refs = {
    email: emailRef,
    password: passwordRef,
    rePass: rePassRef,
    btn: btnRef
  }

  const navigate = useNavigate()

  const [values, setValues] = useState({
    email: "",
    password: "",
    rePass: "",
    checkbox: false
  });

  const [validation, setValid] = useState({
    email: "valid",
    password: "valid",
    rePass: "valid"
  })

  const [errorObj, setErrorObj] = useState({})

  const disableBtn = Object.values(values).some((v) => v == '')

  const onValidateInputs = (e) => {
    const inputName = e.target.name

    if (e.target.value == '') {
        setValid((v) => { return {...v, [inputName]: "invalid"}})
        refs[inputName].current.style.borderColor = "red"
    }else{
        setValid((v) => { return {...v, [inputName]: "valid"}})
        refs[inputName].current.style.borderColor = ""
    }
  }

  const onInputChange = (e) => {        
       
       if (e.target.name === 'checkbox') {
          const type = (e.target.checked) ? 'text' : 'password' 
          passwordRef.current.type = type
          rePassRef.current.type = type
          setValues(v => { return {...v, checkbox: e.target.checked }})

       }
       
       setValues(v => { return {...v, [e.target.name]: e.target.value}})
  };

  const onFormSubmit = async (e) => {
        e.preventDefault()

        if (values.password !== values.rePass) {
            setErrorObj({message: "Passwords don't match"})
        }else {
            try {
               const createdUserInfo = await api.register(values.email,values.password)
               navigate('/')
            } catch (error) {
               setErrorObj(error)
           }
        }

  }

  return (
 <>
    {errorObj.message === undefined ? null : <ErrorModal error={errorObj}/>}

    <div className="form-fragment">
      <form onSubmit={onFormSubmit} className="custom-form contact-form own-form">
        <h1 className="big-form-labels">Register</h1>
        <div className="col-lg-6 col-md-6 col-12 center">
          <div className="form-floating">

            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              value={values.email}
              onChange={onInputChange}
              ref={emailRef}
              onBlur={onValidateInputs}
              />

            <label htmlFor="floatingInput">Email address:</label>
            {validation.email == 'invalid' ? <p className="err"> Email is mandatory! </p> : null}
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
              ref={passwordRef}
              onBlur={onValidateInputs}
              />

            <label htmlFor="floatingInput">Password:</label>
            {validation.password == 'invalid' ? <p className="err"> Password is mandatory! </p> : null}

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
              onBlur={onValidateInputs}
              />

            <label htmlFor="floatingInput">Repeat password:</label>
            {validation.rePass == 'invalid' ? <p className="err"> rePass is mandatory! </p> : null}

          </div>
        </div>

        <div className="col-lg-6 center checkbox">
          <label htmlFor="checkbox">Compare passwords: </label>
          <p className="space">&nbsp;&nbsp;&nbsp;</p>
          <input type="checkbox" name="checkbox" id="checkbox" onClick={onInputChange}/>
        </div>

        <div className="col-lg-3 col-12 ms-auto center">
          <button type="submit" className="form-control" disabled={disableBtn}>
            {disableBtn ? "Fill all fields before creating account!" : "Create"}
          </button>
        </div>
        <div className="middle">
          <Link className="link" to={"/login"}>
            <strong>Already have an account?</strong>
          </Link>
        </div>
      </form>
    </div>
</>
  );
};

export default Register;
