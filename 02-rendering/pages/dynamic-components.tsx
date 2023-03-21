import { NextPage } from "next";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const Highlight = dynamic(() => import("../components/Highlight"), {
  ssr: false,
});

const DynamicPage: NextPage = () => {
  return (
    <div className={styles.main}>
      <Highlight code={`console.log('Hello, world! ')`} language="js" />
    </div>
  );
};
