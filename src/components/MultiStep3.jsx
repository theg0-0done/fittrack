import { useState } from "react";
import Error from "./Error";

function MultiStep1({ onNext }) {
  const [intensity, setIntensity] = useState("");
  const [goal, setGoal] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!intensity.trim()) {
      setError("Please set the intensity!");
      return;
    }

    if (!goal.trim()) {
      setError("Please set your goal adress!");
      return;
    }

    onNext();
    setGoal("");
    setIntensity("");
    setError("");
  }

  return (
    <form className="tdee-form relative vertical-left oneRem-gap darkGray-bg one-rem-padding">
      <div className="txt-to-left">
        <h3 className="no-margin">What drives your fitness</h3>
        <p className="no-margin small-text gray-txt">
          Your goals shape your nutrition plan.{" "}
        </p>
      </div>
      <label className="vertical-left w-full one-rem-mt">
        Intensity:
        <select
          name="Intensity"
          id="intensity"
          className="w-full"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
        >
          <option value="" disabled selected></option>
          <option value="light">Leight (1-2 days a week)</option>
          <option value="moderate">Moderate (3-5 days a week)</option>
          <option value="vigorous">Vigorous (6-7 days a week)</option>
        </select>
      </label>
      <label className="vertical-left w-full">
        Goal:
        <select
          name="Intensity"
          id="intensity"
          className="w-full"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="" disabled selected></option>
          <option value="lose">Lose Weight</option>
          <option value="maintain">Maintain Weight</option>
          <option value="gain">Gain Weight</option>
        </select>
      </label>

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
