import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorModal } from "../ErrorModal/ErrorModal.js";
import * as api from "../../api/api.js";
import UserContext from "../../Contexts/Context.js";



const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const refs = {
    email: emailRef,
    password: passwordRef,
  };

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [validation, setValid] = useState({
    email: "valid",
    password: "valid",
  });

  const [errorObj, setErrorObj] = useState({});

  const {user, setUser} = useContext(UserContext)

  const emptyInputs = Object.values(values).some((v) => v == "");

  const onValidateInputs = (e) => {
    const inputName = e.target.name;

    if (e.target.value === "") {
      setValid((v) => {
        return { ...v, [inputName]: "invalid" };
      });
      refs[inputName].current.style.borderColor = "red";
    } else {
      setValid((v) => {
        return { ...v, [inputName]: "valid" };
      });
      refs[inputName].current.style.borderColor = "";
    }
  };

  const onInputChange = (e) => {
    setValues((v) => {
      return { ...v, [e.target.name]: e.target.value };
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

   if (emptyInputs) {
      setErrorObj({
        message: "Please fill all fields before creating an account!",
      });
    } else {
      try {
        const getUserInfo = await api.login(
          values.email,
          values.password
        );
        setUser(getUserInfo)
        navigate("/");
      } catch (error) {
        setErrorObj(error);
      }
    }
  };

  return (
    <>
      {errorObj.message === undefined ? null : <ErrorModal error={errorObj} />}

      <div className="form-fragment">
        <form
          onSubmit={onFormSubmit}
          className="custom-form contact-form own-form"
        >
          <h1 className="big-form-labels">Login</h1>
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
              {validation.email == "invalid" ? (
                <p className="err"> Email is mandatory! </p>
              ) : null}
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
              {validation.password == "invalid" ? (
                <p className="err"> Password is mandatory! </p>
              ) : null}
            </div>
          </div>

          <div className="col-lg-3 col-12 ms-auto center">
            <button type="submit" className="form-control">
              Login
            </button>
          </div>
          <div className="middle">
            <Link className="link" to={"/register"}>
              <strong>Don't have an account?</strong>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
