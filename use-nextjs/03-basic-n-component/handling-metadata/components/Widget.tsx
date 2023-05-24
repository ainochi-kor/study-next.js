import Head from "next/head";
import { useState } from "react";

interface P {
  pageName: string;
}

const Widget: React.FC<P> = ({ pageName }) => {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <>
        <Head>
          <title> {"You're browsing the {pageName} page"} </title>
        </Head>
        <div>
          <button onClick={() => setActive(false)}>
            Restore original title
          </button>
          Take a look at the title!
        </div>
      </>
    );
  }

  return (
    <>
      <button onClick={() => setActive(true)}>Change page title</button>
    </>
  );
};

export default Widget;
