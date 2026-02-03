import { useState } from "react";
import Error from "./Error";

function MultiStep1({ onNext }) {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!age.trim()) {
      setError("Please enter your age!");
      return;
    }

    if (!height.trim()) {
      setError("Please enter your height adress!");
      return;
    }

    if (!weight.trim()) {
      setError("Please enter your weight adress!");
      return;
    }

    onNext();
    setHeight("");
    setWeight("");
    setAge("");
    setError("");
  }

  return (
    <form className="tdee-form relative vertical-left oneRem-gap darkGray-bg one-rem-padding">
      <div className="txt-to-left">
        <h3 className="no-margin">What are your measurements</h3>
        <p className="no-margin small-text gray-txt">
          These help us calculate what your body needs.
        </p>
      </div>

      <div className="vertical-left w-full one-rem-mt">
        <strong>
          <p className="no-margin">Gender:</p>
        </strong>
        <div className="toCenter">
          <label>
            Male
            <input type="radio" value="male" />
          </label>
          <label>
            Female
            <input type="radio" value="female" />
          </label>
        </div>
      </div>
      <div className="flex-between w-full oneRem-gap">
        <label className="vertical-left ">
          <strong>Age:</strong>
          <input
            type="number"
            className="tdee-input w-full"
            placeholder="(years)"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label className="vertical-left ">
          <strong>Height:</strong>
          <input
            type="number"
            className="tdee-input w-full"
            placeholder="(cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label className="vertical-left ">
          <strong>Weight:</strong>
          <input
            type="number"
            className="tdee-input w-full"
            placeholder="(kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>

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
