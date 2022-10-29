import { useState } from "react";
import { onLoginComplete } from "../service/data-service";

function Login({ setToken }) {
  const [error, setError] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    onLoginComplete(form.username.value, form.password.value)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }

  return (
    <div className="p-3">
      <div className="container text-center p-5">
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="form-control mb-3"
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="password"
          />
          <button type="submit" className="btn btn-danger">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
