import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-top text-center small text-muted py-3">
      <p>
        <Link to="/" className="mx-1">
          Home
        </Link>{" "}
        |{" "}
        <Link className="mx-1" to="/about">
          About Us
        </Link>{" "}
      </p>
      <p className="m-0">
        Copyright &copy; {new Date().getFullYear()}&nbsp;
        <Link to="/" className="text-muted">
          MyNBA
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
