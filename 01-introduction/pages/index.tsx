import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [randomNumber, setRandomNumber] = useState<number>();

  useEffect(() => {
    const number = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(number);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Custom Babel and Webpack Configuration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.card}>
        <h1> Custom Babel and Webpack Configuration Example </h1>
        <div className={styles.card}>
          Your lucky number is: {randomNumber} <br />
          Refresh the page for a different lucky number.
        </div>
        <div className={styles.description}>
          Lucky number has been generated <b>client side</b> using the{" "}
          <b>experimental pipeline operator</b> and its Babel plugin! <br />
          Open the <code>.babelrc</code> to see how to add more experimental
          features to your Next.js app.
        </div>
        <code className={styles.code} style={{ marginTop: "1rem" }}>
          const number = Math.floor(Math.random() * 10) + 1;
        </code>
      </main>
    </div>
  );
}
