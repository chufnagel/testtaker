import Link from "next/link";

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/profile">
      <a>Profile</a>
    </Link>
    <Link href="/test">
      <a>Test</a>
    </Link>
  </div>
);

export default Header;
