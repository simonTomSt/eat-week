import React from 'react';
import '../authPanels.scss';
import { Link } from 'react-router-dom';
const RegisterPanel = () => {
  return (
    <section className="panel">
      <Link to="/">
        <button className="panel__prev">Wróc do strony głównej </button>
      </Link>

      <div className="container">
        <form className="panel__form">
          <h3 className="panel__header">Zarejestruj się</h3>

          <input type="text" placeholder="Imię" />

          <input type="email" placeholder="E-mail" />

          <input type="password" placeholder="Hasło" />

          <input type="password" placeholder="Potwierdź hasło" />

          <button type="submit" className="primary-btn">
            Zarejestruj się
          </button>
          <Link className="panel__register-link" to="/signin">
            Masz już konto? Zaloguj się
          </Link>
        </form>
      </div>
    </section>
  );
};

export default RegisterPanel;
