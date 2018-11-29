import Meta from "./Meta";
import Header from "./Header";

const Layout = props => (
  <div>
    <Meta />
    <style jsx global>{`
      body {
        background: DarkBlue;
        color: white;
      }
      a {
        color: white;
        text-decoration: none;
        padding: 1em;
      }
    `}</style>
    <Header />
    {props.children}
  </div>
);

export default Layout;
