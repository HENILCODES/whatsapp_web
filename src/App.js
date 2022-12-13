import React from "react";
import './App.css'
function App() {
  return (
    <div className="main">
      <div className="box">
        <div className="infor">
          <form autoComplete="off">
            <div className="input_box">
              <label htmlFor="user" className="label">
                User name
              </label>
              <input
                type="text"
                className="input"
                placeholder="type username"
                id="user"
                title="User Name"
              />
            </div>
            <div className="input_box">
              <label className="label" htmlFor="password">
                password
              </label>
              <div className="password">
                <input
                  type="text"
                  className="inputx"
                  placeholder="type Password"
                  id="password"
                  title="Password"
                />
              </div>
            </div>
            <button className="Log_Button" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
