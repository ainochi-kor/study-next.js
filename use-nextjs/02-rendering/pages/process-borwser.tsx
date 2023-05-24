import { NextPage } from "next";
import styles from "../styles/Home.module.css";

const ProcessBrowserPage: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <p> {`I'm running on the ${process.browser ? "client" : "server"}`} </p>
      </main>
    </>
  );
};
