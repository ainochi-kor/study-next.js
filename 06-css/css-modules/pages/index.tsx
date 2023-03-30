import { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}> Welcome to the CSS Modules example </h1>
    </div>
  );
};

export default Home;
