import { useState } from "react";
import Error from "./Error";

function MultiStep1({ onNext }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim()) {
      setError("Please enter your username!");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email adress!");
      return;
    }

    onNext();
    setEmail("");
    setUsername("");
    setError("");
  }

  return (
    <form className="tdee-form relative vertical-left oneRem-gap darkGray-bg one-rem-padding">
      <div className="txt-to-left">
        <h3 className="no-margin">Tell us who you are</h3>
        <p className="no-margin small-text gray-txt">
          We keep this information private and secure.
        </p>
      </div>
      <input
        type="text"
        className="tdee-input w-full"
        placeholder="First & Last name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        className="tdee-input w-full"
        placeholder="Email adress"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="w-full flex-end">
        <button onClick={handleSubmit} type="submit" className="primary-btn ">
          Submit
        </button>
      </div>

      {error ? <Error message={error} /> : null}
    </form>
  );
}

export default MultiStep1;
