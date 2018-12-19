import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
// import { faAlarmClock } from "@fortawesome/free-solid-svg-icons";
// import { faClock } from "@fortawesome/fontawesome-svg-core";
library.add(faClock);

const Meta = () => {
  library.add(faClock);
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/x-icon" href="../static/favicon.ico" />
      </Head>
    </div>
  );
};

export default Meta;
