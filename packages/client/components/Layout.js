import Meta from "./Meta";
import Header from "./Header";

const Layout = props => (
  <div>
    <Meta />
    <style jsx global>{`
      body {
        background: DarkBlue;
        color: white;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
      }
      a {
        color: white;
        text-decoration: none;
        padding: 1em;
      }
      .passage {
        text-align: left;
        display: flex;
      }
      .header {
        display: block;
        margin: 0em;
        padding: 1em;
        border-style: solid;
        border-color: black;
        font-size: 1.5em;
        border-width: 0.2em;
      }
      .nav {
      }
      .button {
        display: inline-block;
        font-size: 20px;
      }
    `}</style>
    <Header />
    {props.children}
  </div>
);

export default Layout;
