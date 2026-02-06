import { Link } from "react-router-dom";

function Error404() {
  return (
    <section
      style={{ minHeight: "60vh" }}
      className="relative vertical-center overflow-hidden"
    >
      <div className="big-title-wrapper relative toCenter w-full">
        <h1 className="no-margin big-title w-full">ERROR 404</h1>
        <h1 className="no-margin big-title big-title-bg w-full">ERROR 404</h1>
      </div>
      <h2 className="no-margin">Page Not Found!</h2>
      <Link to="/">
        <button className="secondary-btn one-rem-mt">Back to home page</button>
      </Link>
    </section>
  );
}

export default Error404;
