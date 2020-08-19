import React from 'react';
import '../authPanels.scss';
import { Link } from 'react-router-dom';
import useInput from '../../../hooks/useInput/useInput';

const LoginPanel = () => {
  const [mail, setMail] = useInput('');
  const [password, setPassword] = useInput('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mail, password);
  };
  return (
    <section className="panel">
      <Link to="/">
        <button className="panel__prev">Wróc do strony głównej </button>
      </Link>

      <div className="container">
        <form className="panel__form" onSubmit={handleSubmit}>
          <h3 className="panel__header">Zaloguj się</h3>

          <input type="email" placeholder="E-mail" id="email" {...setMail} />

          <input
            type="password"
            placeholder="Hasło"
            id="password"
            {...setPassword}
          />
          <Link className="panel__register-link" to="/dashboard/desktop">
            <button type="submit" className="primary-btn">
              Zarejestruj się
            </button>
          </Link>
          <Link className="panel__register-link" to="/signup">
            Nie masz jeszcze konta? Zarejestruj się
          </Link>
        </form>
      </div>
    </section>
  );
};

export default LoginPanel;
