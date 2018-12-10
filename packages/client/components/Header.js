import Link from "next/link";

const Header = () => (
  <div className="header">
    <Link href="/">
      <a className="nav start">Home</a>
    </Link>
    <Link href="/quiz">
      <a className="nav quiz">Quiz</a>
    </Link>
    <Link href="/results">
      <a className="nav results">Results</a>
    </Link>
  </div>
);

export default Header;
