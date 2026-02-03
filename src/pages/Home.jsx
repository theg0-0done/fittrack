import HeroImage from "../assets/hero-pic.png";
import GymImg from "../assets/gym.jpg";
import TDEE from "../assets/tdee.jpg";
import Meal from "../assets/meal.jpg";
import inclinePressGuy from "../assets/inclinePressGuy.jpg";
import { comments } from "../data/comments";
import ReactStars from "react-stars";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <section
        id="hero-section"
        className="hero-section container toCenter no-padding"
      >
        <div className="background-shadow" />
        <div className="hero-title-wrapper toCenter">
          <div className="toCenter">
            <h1 className="hero-title">you are not behind</h1>
            <h1 className="hero-title hero-title-outline">
              you are not behind
            </h1>
          </div>
          <div className="toCenter">
            <h1 className="hero-title hero-title2">you are building</h1>
            <h1 className="hero-title hero-title2 hero-title-outline">
              you are building
            </h1>
          </div>
        </div>
        <div className="toCenter overflow-hidden">
          <img src={HeroImage} alt="Hero Image" className="hero-image" />
        </div>
      </section>

      <section
        id="specials"
        className="specials-section container vertical-center toCenter no-padding"
      >
        <h2 className="no-margin">What we offer</h2>
        <p className="no-margin eighty-max-width">
          The scale doesn’t tell the whole story. Energy, confidence,
          discipline. That’s progress.
        </p>
        <div className="specials-cards-wrapper verPhone-horPc strech">
          <div className="specials-card toCenter darkGray-bg border-spin-animation">
            <div className="one-rem-padding vertical-left oneRem-gap">
              <h5 className="no-margin yellow-text">Exercises</h5>
              <h3 className="no-margin">Find Your Movement</h3>
              <p className="no-margin">
                Browse our complete exercise library with detailed form cues
              </p>
              <button className="secondary-btn">Explore</button>
            </div>
            <img src={GymImg} alt="Gym" />
          </div>
          <div className="specials-card toCenter darkGray-bg border-spin-animation">
            <div className="one-rem-padding vertical-left oneRem-gap">
              <h5 className="no-margin yellow-text">TDEE</h5>
              <h3 className="no-margin">Calculate You Needs</h3>
              <p className="no-margin">
                Get precise calorie and macro targets based on your goals{" "}
              </p>
              <button className="secondary-btn">Calculate</button>
            </div>
            <img src={TDEE} alt="TDEE" />
          </div>
          <div className="specials-card toCenter darkGray-bg border-spin-animation">
            <div className="one-rem-padding vertical-left oneRem-gap">
              <h5 className="no-margin yellow-text">Nutrition</h5>
              <h3 className="no-margin">Meal Macros</h3>
              <p className="no-margin">
                Calculate the macros for any meal or recipe in seconds
              </p>
              <button className="secondary-btn">Explore</button>
            </div>
            <img src={Meal} alt="meal" />
          </div>
        </div>
      </section>

      <section id="testimonials" className="container vertical-center">
        <h2 className="no-margin">What Others Say</h2>
        <p className="no-margin eighty-max-width">
          Hear from our community members who have transformed their lives with
          our fitness programs.
        </p>
        <div className="comments-wrapper w-full overflow-hidden">
          <div
            className="comments-track w-full"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {comments.map((comment) => (
              <div className="comment-card flex-between-to-center w-full oneRem-gap">
                <div className="squared-img-wrapper border-spin-animation">
                  <img
                    className="squared-img"
                    src={comment.image}
                    alt={comment.name}
                  />
                </div>
                <div className="txt-to-left vertical-left fifty-max-width">
                  <ReactStars
                    className="no-margin"
                    count={5}
                    size={18}
                    value={comment.rating}
                    isHalf={true}
                    edit={false}
                    activeColor="yellow"
                    color="#757B81"
                  />
                  <p className="comment-txt">"{comment.feedback}"</p>
                  <h4 className="no-margin">{comment.name}</h4>
                  <p className="no-margin secondary-txt">{comment.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="one-rem-mt toCenter">
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            className="secondary-btn rounded-btn no-padding"
          >
            <IoIosArrowForward
              className="arrow"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
          <button
            onClick={() =>
              setIndex((i) => Math.min(i + 1, comments.length - 1))
            }
            className="secondary-btn rounded-btn no-padding"
          >
            <IoIosArrowForward className="arrow" />
          </button>
        </div>
      </section>

      <section id="progress" className="container vertical-center">
        <h2 className="no-margin">Our Progress</h2>
        <p className="no-margin eighty-max-width">
          Join thousands of satisfied members who have achieved their fitness
          goals with us.
        </p>
        <div className="progress-content flex-between verPhone-horPc">
          <div className="vertical-center one-rem-padding">
            <div className="big-title-wrapper relative toCenter">
              <h1 className="no-margin big-title">2.4M</h1>
              <h1 className="no-margin big-title big-title-bg">2.4M</h1>
            </div>
            <p className="no-margin">Workouts Logged</p>
          </div>
          <div className="vertical-center one-rem-padding">
            <div className="relative big-title-wrapper toCenter">
              <h1 className="no-margin big-title">18M</h1>
              <h1 className="no-margin big-title big-title-bg">18M</h1>
            </div>
            <p className="no-margin">Meals Tracked</p>
          </div>
          <div className="vertical-center one-rem-padding">
            <div className="relative big-title-wrapper toCenter">
              <h1 className="no-margin big-title">847K</h1>
              <h1 className="no-margin big-title big-title-bg">847K</h1>
            </div>
            <p className="no-margin">Active Members</p>
          </div>
        </div>
      </section>

      <section
        id="cta-section"
        className="cta-section-bg toCenter"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url(${inclinePressGuy})`,
        }}
      >
        <div className="cta-container vertical-center eighty-max-width vertical-center">
          <h2 className="no-margin">Get weekly fitness insights</h2>
          <p className="no-margin">
            Receive training tips, nutrition strategies, and app updates
            delivered to your inbox.
          </p>
          <form className="cta-form responsive-mt toCenter strech w-full">
            <input
              className="cta-input"
              type="text"
              placeholder="Enter e-mail adress"
            />
            <button className="primary-btn">Subscribe</button>
          </form>
          <p className="tiny-txt gray-txt">
            We respect your privacy. Unsubscribe anytime from any email.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
