import Widget from "@/components/Widget";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcom to my Next.js website</title>
      </Head>
      <div>
        <Link href={"/about"} passHref>
          About us
        </Link>
      </div>
      <div>
        <Widget pageName="index" />
      </div>
    </>
  );
};

export default IndexPage;
