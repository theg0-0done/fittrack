import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function clearPage() {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <nav className="flex-between">
      <div className="toCenter">
        <Link onClick={clearPage} to="/">
          <h3 onClick={clearPage} className="logo no-margin">
            Fit<span>Track</span>
          </h3>
        </Link>
        <ul className="nav-links-wrapper toCenter">
          <Link onClick={clearPage} to="/">
            <a className="primary-text-link">Home</a>
          </Link>
          <Link onClick={clearPage} to="/exercises">
            <a className="primary-text-link">Exercises</a>
          </Link>
          <Link onClick={clearPage} to="/tdee">
            <a className="primary-text-link">TDEE</a>
          </Link>
          <Link onClick={clearPage} to="/nutrition-calculator">
            <a className="primary-text-link">Nutrition</a>
          </Link>
        </ul>
      </div>
      <div className="nav-btn-wrapper toCenter">
        <Link onClick={clearPage} to="/auth/login">
          <button className="primary-btn">Log in</button>
        </Link>
        <Link onClick={clearPage} to="/auth/register">
          <button className="secondary-btn">START NOW</button>
        </Link>
      </div>
      <div
        className={"toCenter ham-btn" + (isOpen ? " open" : "")}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`ham-menu-container ${isOpen ? "open" : ""}`}>
        <div className="ham-menu">
          <ul className="ham-menu-links vertical-left">
            <h4 className="no-margin one-rem-mb gray-txt">Links</h4>
            <Link onClick={clearPage} to="/">
              <a className="primary-text-link ham-menu-link ">Home</a>
            </Link>
            <Link onClick={clearPage} to="/exercises">
              <a className="primary-text-link ham-menu-link ">Exercises</a>
            </Link>
            <Link onClick={clearPage} to="/tdee">
              <a className="primary-text-link ham-menu-link ">TDEE</a>
            </Link>
            <Link onClick={clearPage} to="/nutrition-calculator">
              <a className="primary-text-link ham-menu-link ">Nutrition</a>
            </Link>
          </ul>
          <ul className="ham-menu-links vertical-left">
            <h4 className="no-margin one-rem-mb gray-txt">Company</h4>
            <Link onClick={clearPage} to="/">
              <a className="primary-text-link ham-menu-link ">Archive</a>
            </Link>
            <Link onClick={clearPage} to="/exercises">
              <a className="primary-text-link ham-menu-link ">About us</a>
            </Link>
            <Link onClick={clearPage} to="/tdee">
              <a className="primary-text-link ham-menu-link ">Contact us</a>
            </Link>
          </ul>
          <div className="vertical-left">
            <h4 className="no-margin one-rem-mb gray-txt">Make Action</h4>
            <Link className="w-full" onClick={clearPage} to="/auth/login">
              <button className="primary-btn ham-menu-link">Log in</button>
            </Link>
            <Link className="w-full" onClick={clearPage} to="/auth/register">
              <button className="secondary-btn ham-menu-link">START NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
