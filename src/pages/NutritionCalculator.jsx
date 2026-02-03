import silhouetteWomanGym from "../assets/silhouette-woman-gym.jpg";
import bicepsguy from "../assets/biceps-guy.jpg";
import hackGuy from "../assets/hack-squad-guy.jpg";
import healthyMeal from "../assets/healthyMeal.jpg";

import { LiaAppleAltSolid } from "react-icons/lia";
import { GiProgression } from "react-icons/gi";
import { TbListDetails } from "react-icons/tb";
import { IoSaveOutline } from "react-icons/io5";

import IHPcard from "../components/IHPcard";
import MealNutrition from "../components/MealNutrition";
import Error from "../components/Error";

import { useState, useEffect } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Tdee() {
  const [result, setResult] = useState(false);
  const [ingreId, setIngreId] = useState("");
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [similars, setSimilars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chosen, setChosen] = useState(false);
  const [test, setTest] = useState({});

  const API_KEY = "UwXEj2R8rZys4H2H8JB8HQ9NbUVG4QIpGvVl6aEZ";

  const NUTRIENT_MAP = {
    "Energy": "calories",
    "Protein": "protein",
    "Total lipid (fat)": "fat",
    "Fatty acids, total saturated": "satFat",
    "Carbohydrate, by difference": "carbs",
    "Sugars, total including NLEA": "sugar",
    "Fiber, total dietary": "fiber",
    "Sodium, Na": "sodium",
  };

  useEffect(() => {
    const fetchFoodSimilars = async () => {
      setLoading(true);
      if (chosen) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.nal.usda.gov/fdc/v1/foods/search?query=${value}&api_key=${API_KEY}`,
        );

        if (!response.ok) {
          throw new Error("Cound Not Fetch Ingredient!");
        }

        const data = await response.json();

        if (value) setSimilars(data.foods);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodSimilars();
  }, [value]);

  function addSelect(item) {
    setTest({
      id: item.fdcId,
      name: item.description,
      servingSizeUnit: item.servingSizeUnit || "g",
      servingSize: item.servingSize || 100,
      foodNutrients: item.foodNutrients
        .filter((n) => NUTRIENT_MAP[n.nutrientName])
        .map((n) => ({
          nutrientName: n.nutrientName,
          name: NUTRIENT_MAP[n.nutrientName],
          unitName: n.unitName || "g",
          value: n.value || 0,
        })),
    });
    setValue(item.description);
    setSimilars([]);
    setChosen(true);
  }

  function addIngredient(e) {
    e.preventDefault();

    if (!value.trim()) {
      setErrorMessage("ingredient name is missing");
      return;
    }

    if (!quantity) {
      setErrorMessage("ingredient quantity is missing");
      return;
    }

    const newIngredient = { ...test, quantity: quantity };
    setIngredients((prev) => [...prev, newIngredient]);

    // Clear form
    setValue("");
    setIngreId("");
    setQuantity("");
    setErrorMessage("");
    setChosen(false);
    setTest({});
  }

  function removeIngredient(id) {
    setIngredients((prev) => prev.filter((i) => id !== i.id));
  }

  console.log(test);
  console.log(ingredients);
  

  return (
    <>
      <section
        id="cta-section"
        className="cta-section-bg toCenter"
        style={{
          backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                      url(${silhouetteWomanGym})`,
        }}
      >
        <div className="container no-padding vertical-center">
          <p className="no-margin small-text">Precision</p>
          <h1 className="no-margin">CALCULATE MEAL NUTRITION</h1>
          <p className="no-margin">
            Get nutrition for your meals, calories, fat and Protein.
          </p>
        </div>
      </section>

      <section className="container verPhone-horPc flex-between-to-around two-rem-gap">
        <div className="eighty-to-fourty-width  vertical-center two-rem-gap">
          <div className="w-full flex-between-to-around two-rem-gap">
            <IHPcard
              icon={<TbListDetails />}
              h="Enter meal details"
              p="Provide meal ingredients-list and quantity."
            />

            <IHPcard
              icon={<LiaAppleAltSolid />}
              h="Get instant results"
              p="See your meal's calorie and macronutrient targets immediately"
            />
          </div>
          <div className="w-full flex-between-to-around two-rem-gap">
            <IHPcard
              icon={<IoSaveOutline />}
              h="Save your data"
              p="Keep calculations secure in your account for future reference"
            />

            <IHPcard
              icon={<GiProgression />}
              h="Track progress"
              p="Monitor how your needs change as you work toward your goals"
            />
          </div>
          <div className="w-full flex-between-to-around two-rem-gap">
            <IHPcard
              icon={<TbListDetails />}
              h="Enter your details"
              p="Provide your age, weight, height, activity level, and fitness goals"
            />
            <IHPcard
              icon={<LiaAppleAltSolid />}
              h="Get instant results"
              p="See your personalized calorie and macronutrient targets immediately"
            />
          </div>
        </div>

        <img
          className="squared-img eighty-to-fourty-width"
          src={bicepsguy}
          alt=""
        />
      </section>

      <section id="form" className="relative verPhone-horPc ">
        <div
          className="absolut-full-img"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${healthyMeal})`,
          }}
        />
        {result ? (
          <MealNutrition />
        ) : (
          <div className="vertical-left txt-to-left nut-form-wrapper">
            <h3 className="no-margin">Calculate Your Meal Nutrition</h3>
            <p style={{ marginBottom: "2rem" }} className="no-margin">
              Enter you meal's ingredients name and quantity
            </p>
            <form className="nut-form vertical-left w-full">
              <div className="relative w-full">
                <input
                  className="nut-input w-full"
                  type="text"
                  placeholder="Ingredient e.g. rice, banana..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                {similars.length > 0 && value ? (
                  loading ? (
                    <ul className="relative similars toCenter">
                      <div className="loading-circle" />
                    </ul>
                  ) : (
                    <ul className="relative similars">
                      {similars.map((i) => {
                        const item = i.description
                          ? i.description.charAt(0).toUpperCase() +
                            i.description.slice(1).toLowerCase()
                          : "";
                        return (
                          <li key={i.fdcId} onClick={() => addSelect(i)}>
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  )
                ) : null}
              </div>
              <input
                className="nut-input w-full"
                type="number"
                placeholder="Quantity in grams"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <div className="flex-between w-full one-rem-mt">
                <button className="secondary-btn" onClick={addIngredient}>
                  Add
                </button>
                {ingredients.length ? (
                  <button
                    className="primary-btn"
                    onClick={() => setResult(true)}
                  >
                    Calculate
                  </button>
                ) : (
                  ""
                )}
              </div>

              {errorMessage ? <Error message={errorMessage} /> : ""}

              {ingredients.length ? (
                <div className="ingredients-list-wrapper w-full">
                  <h4 className="no-margin w-full">The List of ingredients:</h4>
                  <ul className="ingredients-list w-full">
                    {ingredients.map((i) => (
                      <li key={i.id} className="flex-between w-full no-margin">
                        <div className="toCenter">
                          <IoIosArrowForward className="icon" />
                          <strong>{i.quantity}g</strong> of{" "}
                          <strong className="max-two-lines">{i.name}</strong>
                        </div>
                        <FaTrash
                          onClick={() => removeIngredient(i.id)}
                          title="Remove Ingredient"
                          className="icon trash"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </form>
          </div>
        )}
      </section>

      <section
        style={{ marginTop: "3rem" }}
        className="container vertical-center"
      >
        <h2 className="no-margin">Pricing</h2>
        <p className="no-margin">
          Everything you need to calculate and track nutrition
        </p>
        <div className="verPhone-horPc w-full">
          <article className="pricing-card vertical-center flex-between oneRem-gap darkGray-bg one-rem-padding eighty-to-fourty-width">
            <div className="vertical-center ">
              <h5 className="no-margin">Free Plan</h5>
              <h3 className="no-margin yellow-text">ALWAYS</h3>
              <p className="no-margin">No credit card required</p>
            </div>
            <ul className="vertical-left h-full w-full oneRem-gap one-rem-mt">
              <li className="toCenter">
                <FaCheck className="secondary-txt" /> Calculate daily calorie
                targets
              </li>
              <li className="toCenter">
                <FaCheck className="secondary-txt" />
                View macro breakdowns
              </li>
              <li className="toCenter">
                <FaCheck className="secondary-txt" />
                Save one calculation
              </li>
            </ul>
            <button className="w-full secondary-btn one-rem-mt">
              Get started
            </button>
          </article>
          <article className="pricing-card vertical-center flex-between oneRem-gap darkGray-bg one-rem-padding eighty-to-fourty-width">
            <div className="vertical-center ">
              <h5 className="no-margin">Premium plan</h5>
              <h3 className="no-margin yellow-text">4.99$</h3>
              <p className="no-margin">Per month, billed annually</p>
            </div>
            <ul className="vertical-left h-full w-full oneRem-gap one-rem-mt">
              <li className="toCenter">
                <FaCheck className="secondary-txt" /> Unlimited calculations
              </li>
              <li className="toCenter">
                <FaCheck className="secondary-txt" />
                Full calculation history
              </li>
              <li className="toCenter">
                <FaCheck className="secondary-txt" />
                Adjust macros by percentage
              </li>
              <li className="toCenter">
                <FaCheck className="secondary-txt" />
                Export & share your data
              </li>
              <li className="toCenter">
                <FaCheck className="secondary-txt" />
                Priority support access
              </li>
            </ul>
            <button className="w-full secondary-btn one-rem-mt">
              Upgrade now
            </button>
          </article>
        </div>
      </section>

      <section className="container toCenter vertical-center">
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

export default Tdee;
