import { useContext } from "react";
import { FormContext } from "../pages/Tdee";

function MultiStep1() {
  const {username, setUsername, email, setEmail} = useContext(FormContext)   

  return (
    <form className="tdee-form relative vertical-left oneRem-gap darkGray-bg">
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
    </form>
  );
}

export default MultiStep1;
