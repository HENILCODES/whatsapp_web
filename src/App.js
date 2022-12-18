import React, { useEffect, useState } from "react";
import useInput from "./hook/useInput";
import Pdf from "react-to-pdf";
import "./App.css";
function App() {
  const ref = React.createRef();
  let [formValid, setFormValid] = useState(false);
  let [pending, setPending] = useState(false);
  let {
    input: NameInput,
    inputValid: NameValid,
    inputIsValid: NameIsValid,
    onBlurHandler: onNameBlur,
    onChangeHandler: onNameChange,
    resetInput: nameReset,
  } = useInput((value) => value.trim().length === 0);
  let {
    input: SemminarInput,
    inputValid: SemminarValid,
    inputIsValid: SemminarIsValid,
    onBlurHandler: onSemminarBlur,
    onChangeHandler: onSemminarChange,
    resetInput: SemminarReset,
  } = useInput((value) => value.trim().length === 0);

  let [Datas, setDatas] = useState({ name: "", semminar: "" });

  let submitHandler = async (event) => {
    event.preventDefault();
    if (NameValid && SemminarValid) {
      return;
    }
    try {
      setPending(true);
      await fetch(
        "https://henil-2bfd8-default-rtdb.firebaseio.com/college.json",
        {
          method: "POST",
          body: JSON.stringify(Datas),
          headers: { "content-type": "application/json" },
        }
      );
      setPending(false);
    } catch (erro) {
      console.log(erro.message);
    }
    nameReset();
    SemminarReset();
  };
  useEffect(() => {
    if (NameValid || SemminarValid) {
      setFormValid(true);
    } else {
      setDatas({ name: NameInput, semminar: SemminarInput });
      setFormValid(false);
    }
  }, [NameValid, SemminarValid, NameInput, SemminarInput]);
  return (
    <div className="main">
      <div ref={ref} className="box">
        <div className="infor">
          <form autoComplete="off" onSubmit={submitHandler}>
            <div className="input_box">
              <label htmlFor="user" className="label">
                Student name
              </label>
              <input
                type="text"
                className="input"
                value={NameInput}
                onChange={onNameChange}
                onBlur={onNameBlur}
                id="user"
                title="User Name"
              />
              {NameIsValid && <p className="error-p">Name Required</p>}
            </div>
            <div className="input_box">
              <label className="label" htmlFor="password">
                Semminar Name
              </label>
              <div className="password">
                <input
                  type="text"
                  className="inputx"
                  value={SemminarInput}
                  onChange={onSemminarChange}
                  onBlur={onSemminarBlur}
                  id="password"
                  title="Password"
                />
              </div>
              {SemminarIsValid && <p className="error-p">Semminar Required</p>}
            </div>
            {pending ? (
              <div className="loader"></div>
            ) : (
              <button className="Log_Button" disabled={formValid} type="submit">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
      <Pdf targetRef={ref} filename="code-example.pdf" x={40} y={20}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    </div>
  );
}
export default App;
