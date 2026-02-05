import { useContext } from "react";
import { FormContext } from "../pages/Tdee";

function MultiStep2({ onNext }) {
  const {
    gender,
    setGender,
    age,
    setAge,
    height,
    setHeight,
    weight,
    setWeight,
  } = useContext(FormContext);

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
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
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
    </form>
  );
}

export default MultiStep2;
