import { useContext } from "react";
import { FormContext } from "../pages/Tdee";
import { FaCheck } from "react-icons/fa";

function MultiStep1({ content }) {
  const { username, goal } = useContext(FormContext);
  return (
    <div className="tdee-form relative vertical-center oneRem-gap darkGray-bg one-rem-padding">
      <h3 className="no-margin">Results</h3>
      <p className="txt-to-left ">
        Hi <span className="highlight-txt">{username}</span>, <br />
        <br /> Based on the information you provided, we’ve calculated your
        daily nutrition needs to help you{" "}
        <span className="highlight-txt"> {goal} weight</span> effectively. To
        stay on track with your goal, your body needs approximately{" "}
        <span className="highlight-txt">{content.goalCalories}kcal</span> per
        day . This daily intake should include:{" "}
        <div className="toCenter w-fit one-rem-mt">
          <FaCheck className="yellow-text icon" /> Fat:{" "}
          <span className="highlight-txt">{content.fat}g</span>
        </div>
        <div className="toCenter w-fit one-rem-mt">
          <FaCheck className="yellow-text icon" /> Protein:{" "}
          <span className="highlight-txt">{content.proteins}g</span>
        </div>
        <div className="toCenter w-fit one-rem-mt one-rem-mb">
          <FaCheck className="yellow-text icon" /> Carbohydrates:{" "}
          <span className="highlight-txt">{content.carbs}g</span>
        </div>
        Your estimated daily energy expenditure (TDEE) is{" "}
        <span className="highlight-txt">{content.tdee} kcal</span>, which
        represents how much energy your body uses in a typical day. <br />{" "}
        Staying close to these values will help you{" "}
        <span className="highlight-txt">{goal} weight</span> in a healthy and
        sustainable way. <br />
        <br /> If your activity level or body weight changes, we recommend
        recalculating your needs to stay accurate.
        <span className="highlight-txt"> You’ve got this 💪</span> <br />
        <br /> Stay consistent, and your results will follow. <br />
        <br /> Best regards,
        <br /> FitTrack Team.
      </p>
    </div>
  );
}

export default MultiStep1;
