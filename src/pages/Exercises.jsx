import HackGuy from "../assets/hack-squad-guy.jpg";
import muscles from "../assets/arm-back-muscles.jpg";
import musclesMom from "../assets/musclarMom.jpg";
import weightPlates from "../assets/weightPlates.jpg";
import dumbells from "../assets/dumbels.jpg";
import inclineGuy from "../assets/inclinePressGuy.jpg";
import cableGuy from "../assets/cablesGuy.jpg";

function Exercises() {
  return (
    <>
      <section
        id="cta-section"
        className="cta-section-bg toCenter"
        style={{
          backgroundImage: `
              linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url(${HackGuy})`,
        }}
      >
        <div className="container vertical-center">
          <h1 className="no-margin">BUILD WITH PURPOSE</h1>
          <p className="no-margin">
            Find movements that match your strength, your equipment, and where
            you stand right now
          </p>
        </div>
      </section>

      <section className="container vertical-center">
        <p className="no-margin">Filters</p>
        <h2 className="no-margin">Narrow down your search</h2>
        <p className="no-margin">
          Choose by body part to target specific areas
        </p>
        <div className="toCenter w-full one-rem-mt verPhone-horPc">
          <div
            className="grid-square squared-img toCenter vertical-left eighty-to-fourty-width"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url(${muscles})`,
            }}
          >
            <div className="txt-to-left eighty-max-width">
              <p>Body</p>
              <h3 className="no-margin">
                Select the muscle group YOU want to target
              </h3>
              <p>Chest, back, legs, shoulders, and more</p>
            </div>
          </div>
          <div className="squared-grid eighty-to-fourty-width">
            <div
              className="grid-square squared-img toCenter"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url(${dumbells})`,
              }}
            >
              <div className="vertical-left txt-to-left">
                <p className="small-text no-margin">Equipements</p>
                <h4 className="no-margin">
                  Find exercises with what available
                </h4>
                <p className="small-text no-margin">
                  Dumbbells, barbells, machines, or bodyweight
                </p>
              </div>
            </div>
            <div
              className="grid-square squared-img toCenter"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url(${musclesMom})`,
              }}
            >
              <div className="vertical-left txt-to-left">
                <p className="small-text no-margin">Ability</p>
                <h4 className="no-margin">Match exercises to your ability</h4>
                <p className="small-text no-margin">
                  Beginner, intermediate, or advanced movements
                </p>
              </div>
            </div>
            <div
              className="grid-square squared-img"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url(${inclineGuy})`,
              }}
            >
              <div className="vertical-left txt-to-left">
                <p className=" no-margin small-text">Target</p>
                <h4 className="no-margin">Target specific musclegroups</h4>
                <p className="no-margin small-text">
                  Beginner, intermediate, or advanced movements
                </p>
              </div>
            </div>
            <div
              className="grid-square squared-img toCenter"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url(${weightPlates})`,
              }}
            >
              <div className="vertical-left txt-to-left">
                <p className="small-text no-margin">Tools</p>
                <h4 className="no-margin">Work with what on hand</h4>
                <p className="small-text no-margin">
                  Dumbbells, barbells, machines, or bodyweight
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container toCenter vertical-center">
        <h2 className="no-margin">Find your next movement</h2>
        <p className="no-margin">
          Search by name or use filters to discover exercises
        </p>
        <form className="cta-form toCenter strech w-full one-rem-mt eighty-to-fourty-width">
          <input
            className="cta-input"
            type="text"
            placeholder="Seach exercise, body-part, muscle-group..."
          />
          <button className="primary-btn">Seach</button>
        </form>
        <div
          className="cta-section-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url(${cableGuy})`,
            marginTop: "2rem",
          }}
        />
      </section>
    </>
  );
}

export default Exercises;
