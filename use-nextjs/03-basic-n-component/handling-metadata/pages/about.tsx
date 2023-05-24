import Widget from "@/components/Widget";
import Head from "next/head";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About this website</title>
      </Head>
      <div>
        <Link href={"/"} passHref>
          Back to home
        </Link>
      </div>
      <div>
        <Widget pageName="about" />
      </div>
    </>
  );
};

export default AboutPage;
