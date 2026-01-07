import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Footer({ darkMode }) {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className={`mt-5 py-4 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="container text-center">
        <p className="mb-2">
          this is currently a placeholder, idk what ill use the footer for
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link className="text-decoration-none" to="/">
            Home
          </Link>
          <Link className="text-decoration-none" to="/profile">
            Profile
          </Link>
          <Link className="text-decoration-none" to="/others">
            Others
          </Link>
        </div>
      </div>
    </footer>
  );
}
