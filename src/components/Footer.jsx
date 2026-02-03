import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="container">
      <div className="footer-container darkGray-bg verPhone-horPc w-full">
        <div className="vertical-left txt-to-left eighty-to-fourty-width w-full">
          <h3
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="logo no-margin"
          >
            Fit<span>Track</span>
          </h3>
          <p className="no-margin small-text">
            Stay informed with training updates and nutrition guidance.
          </p>
          <form className="cta-form one-rem-mt w-full">
            <input
              className="cta-input w-full"
              type="text"
              placeholder="Email adress"
            />
            <button className="primary-btn">Join</button>
          </form>
          <p className="tiny-txt gray-txt no-margin">
            We handle your data with care and respect your choice to opt out
            anytime.
          </p>
        </div>
        <div className="footer-uls one-rem-mt toCenter flex-between eighty-to-fourty-width w-full">
          <ul className="ham-menu-links footer-menu-links vertical-center oneRem-gap">
            <h4 className="no-margin gray-txt">Links</h4>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/"
            >
              <a className="primary-text-link">Home</a>
            </Link>

            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/exercises"
            >
              <a className="primary-text-link">Exercises</a>
            </Link>

            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/tdee"
            >
              <a className="primary-text-link">TDEE</a>
            </Link>
            
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/nutrition-calculator"
            >
              <a className="primary-text-link">Nutrition</a>
            </Link>
          </ul>
          <ul className="ham-menu-links footer-menu-links vertical-center oneRem-gap">
            <h4 className="no-margin gray-txt">Company</h4>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/"
            >
              <a className="primary-text-link">Archive</a>
            </Link>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/auth/login"
            >
              <a className="primary-text-link">Log in</a>
            </Link>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/auth/register"
            >
              <a className="primary-text-link">Get started</a>
            </Link>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/"
            >
              <a className="primary-text-link">About us</a>
            </Link>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/"
            >
              <a className="primary-text-link">Contact us</a>
            </Link>
          </ul>
          <ul className="ham-menu-links footer-menu-links footer-menu-links vertical-center">
            <h4 className="no-margin gray-txt">Connect</h4>
            <a
              href="https://facebook.com"
              target="_blank"
              className="toCenter primary-text-link"
            >
              {" "}
              <FaFacebook />
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="toCenter primary-text-link"
            >
              {" "}
              <FaInstagram />
              Instagram
            </a>
            <a
              href="https://x.com"
              target="_blank"
              className="toCenter primary-text-link"
            >
              {" "}
              <FaTwitter />
              Twittr
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="toCenter primary-text-link"
            >
              {" "}
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="toCenter primary-text-link"
            >
              {" "}
              <FaYoutube />
              YouTube
            </a>
          </ul>
        </div>
      </div>
      <div className="flex-between">
        <p className="tiny-txt gray-txt">
          &copy; FitTrack 2026. All right reserved
        </p>
        <div className="toCenter tiny-txt">
          <a href="#" className="gray-txt">
            Privacy policy
          </a>
          <a href="#" className="gray-txt">
            Terms of service
          </a>
          <a href="#" className="gray-txt">
            Cookies settings
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
