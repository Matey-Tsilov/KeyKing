import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorModal } from "../ErrorModal/ErrorModal.js";

import * as textService from "../../services/textService"

const Edit = () => {
    const {id} = useParams()

    const [uptext, setupText] = useState({})

    useEffect(() => {
        textService.getById(id)
        .then(result => setupText({
      title: result.title,
      language: result.language,
      loot: result.loot,
      time: result.time,
      content: result.content,
      imageUrl: result.imageUrl
        }))
    }, [id])


    const titleInputRef = useRef();
    const languageInputRef = useRef();
    const lootInputRef = useRef();
    const imageUrlInputRef = useRef();
    const contentInputRef = useRef();
    const timeInputRef = useRef();

  
    const refs = {
      title: titleInputRef,
      language: languageInputRef,
      loot: lootInputRef,
      time: timeInputRef,
      content: contentInputRef,
      imageUrl: imageUrlInputRef

    };
  
    const navigate = useNavigate();
  
    const [validation, setValid] = useState({
        title: "valid",
        language: "valid",
        loot: "valid",
        time: "valid",
        content: "valid",
        imageUrl: "valid"
    });
  
    const [errorObj, setErrorObj] = useState({});
  
    console.log(Object.values(uptext));
  
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
      setupText((v) => {
        return { ...v, [e.target.name]: e.target.value };
      });
    };
  
    const onFormSubmit = async (e) => {
      e.preventDefault();
  
     if ((Object.values(uptext)).some((v) => v === "")) {
        setErrorObj({
          message: "Please fill all fields before creating an account!",
        });
      } else {
        try {
          const updatedUser = await textService.updateText(id, {...uptext, loot: Number(uptext.loot), time: Number(uptext.time)}) ;
          navigate(`/details/${id}`);
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
            <h1 className="big-form-labels">Update Text</h1>
            <div className="col-lg-6 col-md-6 col-12 center">
              <div className="form-floating">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  placeholder="Title here:"
                  value={uptext.title}
                  onChange={onInputChange}
                  ref={titleInputRef}
                  onBlur={onValidateInputs}
                />
  
                <label htmlFor="floatingInput">title:</label>
                {validation.title == "invalid" ? (
                  <p className="err"> Title field is mandatory! </p>
                ) : null}
              </div>
            </div>
  
            <div className="col-lg-6 col-md-6 col-12 center">
              <div className="form-floating">
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className="form-control"
                  placeholder="ImageUrl here:"
                  value={uptext.imageUrl}
                  onChange={onInputChange}
                  ref={imageUrlInputRef}
                  onBlur={onValidateInputs}
                />
  
                <label htmlFor="floatingInput">imageUrl:</label>
                {validation.imageUrl == "invalid" ? (
                  <p className="err"> ImageUrl field is mandatory! </p>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 center">
              <div className="form-floating">
                <textarea
                  type="text"
                  name="content"
                  id="content"
                  className="form-control"
                  placeholder="Email address here:"
                  value={uptext.content}
                  onChange={onInputChange}
                  ref={contentInputRef}
                  onBlur={onValidateInputs}
                />
  
                <label htmlFor="floatingInput">content:</label>
                {validation.content == "invalid" ? (
                  <p className="err"> Content field is mandatory! </p>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 center">
              <div className="form-floating">
                <input
                  type="text"
                  name="language"
                  id="language"
                  className="form-control"
                  placeholder="Language here:"
                  value={uptext.language}
                  onChange={onInputChange}
                  ref={languageInputRef}
                  onBlur={onValidateInputs}
                />
  
                <label htmlFor="floatingInput">language:</label>
                {validation.language == "invalid" ? (
                  <p className="err"> Language field is mandatory! </p>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 center">
              <div className="form-floating">
                <input
                  type="number"
                  name="time"
                  min={0}
                  id="time"
                  className="form-control"
                  placeholder="0"
                  value={uptext.time}
                  onChange={onInputChange}
                  ref={timeInputRef}
                  onBlur={onValidateInputs}
                />
  
                <label htmlFor="floatingInput">time:</label>
                {validation.time == "invalid" ? (
                  <p className="err"> Time field is mandatory! </p>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 center">
              <div className="form-floating">
                <input
                  type="number"
                  min={0}
                  name="loot"
                  id="loot"
                  className="form-control"
                  placeholder="Loot here:"
                  value={uptext.loot}
                  onChange={onInputChange}
                  ref={lootInputRef}
                  onBlur={onValidateInputs}
                />
  
                <label htmlFor="floatingInput">loot:</label>
                {validation.loot == "invalid" ? (
                  <p className="err"> Loot field is mandatory! </p>
                ) : null}
              </div>
            </div>
  
            <div className="col-lg-3 col-12 ms-auto center">
              <button type="submit" className="form-control">
                Edit
              </button>
            </div>
          </form>
        </div>
      </>
    );
}
export default Edit