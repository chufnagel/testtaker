import Link from "next/link";

const Header = () => (
  <div className="header">
    <Link href="/">
      <a className="nav home">Home</a>
    </Link>
    <Link href="/profile">
      <a className="nav profile">Profile</a>
    </Link>
    <Link href="/test">
      <a className="nav test">Test</a>
    </Link>
  </div>
);

export default Header;
