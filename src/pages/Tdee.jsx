import bicepsGuy from "../assets/biceps-guy.jpg";
import tdee from "../assets/tdee.jpg";
import gym from "../assets/gym.jpg";
import inclineGuy from "../assets/inclinePressGuy.jpg";
import gymGirl from "../assets/gym-girl2.jpg";
import cableGuy from "../assets/cablesGuy.jpg";
import hackGuy from "../assets/hack-squad-guy.jpg";

import MultiStep1 from "../components/MultiStep1";
import MultiStep2 from "../components/MultiStep2";
import MultiStep3 from "../components/MultiStep3";
import Results from "../components/Results";

import { useState } from "react";

function NutritionCalculator() {
  const [current, setCurrent] = useState(0);
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

      <section className="container vertical-center oneRem-gap  ">
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

      <section id="form" className="darkGray-bg">
        <div className="vertical-center container no-margin no-padding">
          <h2 className="no-margin one-rem-mb">
            CALORIES ARE DATA,
            <br />
            NOT GUILT.
          </h2>
          <div className="relative tdee-form-wrapper vertical-center ">
            <div className="progress-wrapper">
              <div
                style={{ width: `${stepProgress}%` }}
                className="progress-bar"
              />
              <div className="progress-steps flex-between ">
                {steps.map((s) => (
                  <p
                    onClick={() => current >= s.id && setCurrent(s.id - 1)}
                    className={`no-margin step ${s.id - 1 <= current && "active"}`}
                  >
                    {s.id}
                  </p>
                ))}
              </div>
            </div>
            {current < steps.length ? steps[current].form : <Results />}
          </div>
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
