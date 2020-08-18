import React from "react";
import "./LoginPanel.scss";
const LoginPanel = () => {
  return (
    <div className="login">
      <div className="container">
        <forrm className="login__from">
          <label>
            Imię: <input type="text" />
          </label>
          <label>
            E-mail: <input type="text" />
          </label>
          <label>
            Hasło: <input type="text" />
          </label>
        </forrm>
      </div>
    </div>
  );
};

export default LoginPanel;
