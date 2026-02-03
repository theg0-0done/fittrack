import { Link, useParams } from "react-router-dom";
import hackGuy from "../assets/hack-squad-guy.jpg";
import Error from "../components/Error";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const { method } = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim()) {
      setError("Username or Email is required");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    if (!confirm.trim() && method === "register") {
      setError("Password Confirmation is required");
      return;
    }

    setError("");
    navigate("/");
    setUsername("");
    setPassword("");
    setConfirm("");
  }

  return (
    <>
      <section className="relative vertical-center">
        <div className="big-title-wrapper nutrition relative toCenter w-full">
          <h1 className="no-margin big-title w-full">JOIN US TODAYY!</h1>
          <h1 className="no-margin big-title big-title-bg w-full">
            JOIN US TODAYY!
          </h1>
        </div>
        <p className="no-margin eighty-max-width">
          Start tracking your fitness journey and reach your goals with
          precision
        </p>
      </section>

      <section id="auth" className="toCenter container">
        <div className="auth-card vertical-center one-rem-padding ">
          <h2 className="no-margin">
            {method === "login" ? "Log in" : "Get started now"}
          </h2>
          <p className="no-margin one-rem-mb eighty-max-width">
            Enter your details below to{" "}
            {method === "login" ? "login" : "create your account"} and begin
          </p>
          <form
            onSubmit={handleSubmit}
            className="auth-form one-rem-mt vertical-center w-full "
          >
            <div className="w-full toCenter">
              <div className="auth-input-wrapper">
                <input
                  name="first name"
                  type="text"
                  className="auth-input w-full"
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">First name</label>
              </div>
              <div className="auth-input-wrapper">
                <input
                  name="last name"
                  type="text"
                  className="auth-input w-full"
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">Last name</label>
              </div>
            </div>
            <div className="auth-input-wrapper">
              <input
                name="eamil"
                type="email"
                className="auth-input w-full"
                placeholder=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">Email adress</label>
            </div>
            <div className="w-full toCenter">
              <div className="auth-input-wrapper">
                <input
                  name="first name"
                  type="date"
                  className="auth-input w-full"
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">birthday</label>
              </div>
              <div style={{maxWidth: '30%'}} className="auth-input-wrapper">
                <input
                  name="last name"
                  type="text"
                  className="auth-input w-full"
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">Country</label>
              </div>
            </div>
            <div className="auth-input-wrapper">
              <input
                name="password"
                type="password"
                className="auth-input w-full"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>

            {method === "register" ? (
              <div className="auth-input-wrapper">
                <input
                  name="confirm password"
                  type="password"
                  className="auth-input w-full"
                  placeholder=""
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
                <label htmlFor="confirm password">Confirm Password</label>
              </div>
            ) : null}

            <div className="w-full flex-between one-rem-mt">
              <button type="submit" className="primary-btn ">
                {method === "login" ? "login" : "register"}
              </button>
              <a href="" className="underlined small-text no-margin gray-txt">
                Forget Your Password?
              </a>
            </div>
          </form>

          {error ? <Error message={error} /> : ""}

          {method === "login" ? (
            <p className="one-rem-mt ">
              You don't have an account yet?{" "}
              <Link
                onClick={() => {
                  setError("");
                  setUsername("");
                  setPassword("");
                  setConfirm("");
                }}
                className="yellow-text underlined"
                to="/auth/register"
              >
                Register
              </Link>
            </p>
          ) : (
            <p className="one-rem-mt ">
              You already have an account?{" "}
              <Link
                onClick={() => {
                  setError("");
                  setUsername("");
                  setPassword("");
                  setConfirm("");
                }}
                className="yellow-text underlined"
                to="/auth/login"
              >
                Log in
              </Link>
            </p>
          )}
        </div>
      </section>

      <section className="container toCenter vertical-center">
        <h2 className="no-margin">Ready To Begin</h2>
        <p>
          Create your account now or contact our team for guidance on your
          fitness path{" "}
        </p>
        <div className="toCenter w-full two-rem-gap">
          <a href="#auth">
            <button className="primary-btn">Sign up</button>
          </a>
          <button className="secondary-btn">Learn more</button>
        </div>
        <div
          className="cta-section-bg"
          style={{
            backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                        url(${hackGuy})`,
            marginTop: "2rem",
          }}
        />
      </section>
    </>
  );
}

export default Auth;
