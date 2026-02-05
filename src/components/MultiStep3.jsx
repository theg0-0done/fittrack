import { useContext } from "react";
import { FormContext } from "../pages/Tdee";

function MultiStep3() {
  const { intensity, setIntensity, goal, setGoal } = useContext(FormContext);

  return (
    <form className="tdee-form relative vertical-left oneRem-gap darkGray-bg one-rem-padding">
      <div className="txt-to-left">
        <h3 className="no-margin">What drives your fitness</h3>
        <p className="no-margin small-text gray-txt">
          Your goals shape your nutrition plan.
        </p>
      </div>
      <label className="vertical-left w-full one-rem-mt">
        Intensity:
        <select
          name="intensity"
          id="intensity"
          className="w-full"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
        >
          <option value="" disabled></option>
          <option value="light">Light (1-2 days a week)</option>
          <option value="moderate">Moderate (3-5 days a week)</option>
          <option value="vigorous">Vigorous (6-7 days a week)</option>
        </select>
      </label>
      <label className="vertical-left w-full">
        Goal:
        <select
          name="goal"
          id="goal"
          className="w-full"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="" disabled></option>
          <option value="lose">Lose Weight</option>
          <option value="maintain">Maintain Weight</option>
          <option value="gain">Gain Weight</option>
        </select>
      </label>
    </form>
  );
}

export default MultiStep3;
