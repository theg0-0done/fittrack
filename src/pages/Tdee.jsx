import bicepsGuy from "../assets/biceps-guy.jpg";
import tdee from "../assets/tdee.jpg";
import gym from "../assets/gym.jpg";
import inclineGuy from "../assets/inclinePressGuy.jpg";
import gymGirl from "../assets/gym-girl2.jpg";
import cableGuy from "../assets/cablesGuy.jpg";
import hackGuy from "../assets/hack-squad-guy.jpg";
import girl from "../assets/standingGild.jpg";

import MultiStep1 from "../components/MultiStep1";
import MultiStep2 from "../components/MultiStep2";
import MultiStep3 from "../components/MultiStep3";
import Results from "../components/Results";
import Error from "../components/Error";

import { useState, createContext } from "react";

export const FormContext = createContext();

function NutritionCalculator() {
  const [current, setCurrent] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [intensity, setIntensity] = useState("");
  const [goal, setGoal] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState({});
  const steps = [
    {
      id: 1,
      form: <MultiStep1 onNext={() => setCurrent((prev) => prev + 1)} />,
    },
    {
      id: 2,
      form: <MultiStep2 onNext={() => setCurrent((prev) => prev + 1)} />,
    },
    {
      id: 3,
      form: <MultiStep3 onNext={() => setCurrent((prev) => prev + 1)} />,
    },
  ];

  const stepProgress =
    current < steps.length && (current * 100) / (steps.length - 1);

  function clearEverything() {
    setUsername("");
    setEmail("");
    setGender("");
    setHeight("");
    setAge("");
    setWeight("");
    setIntensity("");
    setGoal("");
    setCurrent(0);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (current === 0) {
      if (!username.trim()) {
        setError("Please enter your username!");
        return;
      } else if (!email.trim()) {
        setError("Please enter your email address!");
        return;
      }
    }

    if (current === 1) {
      if (!gender.trim()) {
        setError("Please enter a gender!");
        return;
      } else if (!age.trim()) {
        setError("Please enter your age!");
        return;
      } else if (!height.trim()) {
        setError("Please enter your height!");
        return;
      } else if (!weight.trim()) {
        setError("Please enter your weight!");
        return;
      }
    }

    setError("");
    setCurrent((prev) => prev + 1);
  }

  function bodyNutrition() {
    if (!intensity.trim()) {
      setError("Please set the intensity!");
      return;
    } else if (!goal.trim()) {
      setError("Please set your goal!");
      return;
    }
    setError("");

    const intensityFactors = {
      light: 1.375,
      moderate: 1.55,
      hard: 1.725,
    };

    const goalFactors = {
      maintain: { caloriesF: 0, proteinF: 1.6 },
      gain: { caloriesF: 500, proteinF: 2.2 },
      lose: { caloriesF: -500, proteinF: 2.4 },
    };

    const BMR =
      10 * weight + 6.25 * height - 5 * age + (gender === "male" ? 5 : -161);

    const tdee = BMR * intensityFactors[intensity];

    const goalCalories = tdee + goalFactors[goal].caloriesF;

    const protein = weight * goalFactors[goal].proteinF;
    const proteinCalories = protein * 4;

    const fat = weight * 0.8;
    const fatCalories = fat * 9;

    const carbs = (goalCalories - proteinCalories - fatCalories) / 4;

    setResult({
      tdee: Number(tdee.toFixed(0)),
      goalCalories: Number(goalCalories.toFixed(0)),
      proteins: Number(protein.toFixed(1)),
      fat: Number(fat.toFixed(1)),
      carbs: Number(carbs.toFixed(1)),
    });

    setCurrent((prev) => prev + 1);
  }

  return (
    <>
      <section className="vertical-center one-rem-padding">
        <div className="big-title-wrapper nutrition relative toCenter w-full">
          <h1 className="no-margin big-title w-full">KNOW YOUR NUMBERS</h1>
          <h1 className="no-margin big-title big-title-bg w-full">
            KNOW YOUR NUMBERS
          </h1>
        </div>
        <p className="no-margin eighty-max-width text-to-center">
          Calculate exactly what your body needs each day to reach your goals
        </p>
      </section>

      <section className="container">
        <p className="no-margin one-rem-mt">How To</p>
        <h2 className="no-margin">Track Your Progress</h2>
        <p className="No-margin secondary-txt">
          Height, Weight, Goal and how hard you train
        </p>
        <div className="verPhone-horPc ">
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent, black), url(${tdee})`,
            }}
            className="squared-img height-two-width oneRem-gap one-rem-padding"
          >
            <p className="no-margin small-text yellow-text ">Step 1</p>
            <h3 className="no-margin">Enter Your Informations</h3>
            <p className="no-margin one-rem-mb">
              Enter your username and th email adress, where we can write you.
            </p>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent, black), url(${gym})`,
            }}
            className="squared-img height-two-width oneRem-gap one-rem-padding"
          >
            <p className="no-margin small-text yellow-text ">Step 2</p>
            <h3 className="no-margin">Enter You Meaurements</h3>
            <p className="no-margin one-rem-mb">
              Gender, age, Height and Weight play a big role here.
            </p>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent, black), url(${bicepsGuy})`,
            }}
            className="squared-img height-two-width oneRem-gap one-rem-padding"
          >
            <p className="no-margin small-text yellow-text ">Step 3</p>
            <h3 className="no-margin">Choose Your Goal</h3>
            <p className="no-margin one-rem-mb">
              Build muscle, lose fat, or maintain what you have
            </p>
          </div>
        </div>
      </section>

      <section className="container vertical-center oneRem-gap">
        <p className="no-margin small-text ">Benefits</p>
        <h2 className="no-margin">What You Get</h2>
        <p className="no-margin">Everything needed to fuek you goal</p>
        <div className="verPhone-horPc two-rem-gap ">
          <div className="darkGray-bg height-two-width hText-hImg-card vertical-center">
            <div className="vertical-left oneRem-gap one-rem-padding one-rem-mb ">
              <p className="no-margin small-text gray-txt">Precise</p>
              <h3 className="no-margin">Numbers Tailored To Your Body</h3>
              <p className="no-margin small-text">
                No generic advice here, just your targets
              </p>
            </div>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                url(${cableGuy})`,
              }}
              className="overflow-hidden squared-img fifty-max-height "
            />
          </div>
          <div className="darkGray-bg height-two-width hText-hImg-card vertical-center">
            <div className="vertical-left oneRem-gap one-rem-padding one-rem-mb ">
              <p className="no-margin small-text gray-txt">Flexible</p>
              <h3 className="no-margin">Adjust As Your Progress</h3>
              <p className="no-margin small-text">
                Yous needs change, so your numbers do too.
              </p>
            </div>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                url(${gymGirl})`,
                backgroundPosition: "top",
              }}
              className="overflow-hidden squared-img fifty-max-height "
            />
          </div>
          <div className="darkGray-bg height-two-width hText-hImg-card vertical-center">
            <div className="vertical-left oneRem-gap one-rem-padding one-rem-mb ">
              <p className="no-margin small-text gray-txt">Simple</p>
              <h3 className="no-margin">Easy To Understand And Use</h3>
              <p className="no-margin small-text">
                Clear targets mean better decisions daily
              </p>
            </div>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                url(${inclineGuy})`,
              }}
              className="overflow-hidden squared-img fifty-max-height "
            />
          </div>
        </div>
      </section>

      <section id="form" className="tdee-section">
        <h2 className="no-margin one-rem-mb ">
          CALORIES ARE DATA,
          <br />
          NOT GUILT.
        </h2>
        <div className="tdee-section-content overflow-hidden">
          <div className="background w-full dark-it">
            <img className="w-full squared-img dark-it" src={girl} alt="" />
          </div>
          <div className="relative tdee-form-wrapper vertical-center">
            {current < steps.length ? (
              <div className="progress-wrapper">
                <div
                  style={{ width: `${stepProgress}%` }}
                  className="progress-bar"
                />
                <div className="progress-steps flex-between ">
                  {steps.map((s) => (
                    <p
                      key={s.id}
                      onClick={() => current >= s.id && setCurrent(s.id - 1)}
                      className={`no-margin step ${s.id - 1 <= current && "active"}`}
                    >
                      {s.id}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
            <FormContext.Provider
              value={{
                username,
                setUsername,
                email,
                setEmail,
                gender,
                setGender,
                age,
                setAge,
                height,
                setHeight,
                weight,
                setWeight,
                intensity,
                setIntensity,
                goal,
                setGoal,
              }}
            >
              {current < steps.length ? (
                steps[current].form
              ) : (
                <Results content={result} />
              )}
              {current < steps.length - 1 ? (
                <div className="w-full flex-end">
                  <button
                    type="submit"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    Next
                  </button>
                </div>
              ) : current === steps.length - 1 ? (
                <div className="w-full flex-end">
                  <button
                    type="submit"
                    className="primary-btn"
                    onClick={bodyNutrition}
                  >
                    Calculate
                  </button>
                </div>
              ) : (
                <button className="secondary-btn" onClick={clearEverything}>
                  Do it again
                </button>
              )}
            </FormContext.Provider>
            {error ? <Error key={error} message={error} /> : null}
          </div>
          {/* <div className="form-container vertical-center container no-margin no-padding">
          </div> */}
        </div>
      </section>

      <section className="container toCenter vertical-center one-rem-mt">
        <h2 className="no-margin">Start tracking today</h2>
        <p className="no-margin">
          Keep your calculations safe and monitor progress over time with a free
          account{" "}
        </p>
        <div className="toCenter w-full two-rem-gap">
          <button className="primary-btn">Sign up</button>
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

export default NutritionCalculator;
