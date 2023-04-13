import { NextPage } from "next";
import styles from "../styles/app.module.css";
import { useRouter } from "next/router";
import useAuth from "@/lib/hook/auth";

const ProtectedRoute: NextPage = () => {
  const router = useRouter();
  const { loading, error, loggedIn } = useAuth();

  if (!loading && !loggedIn) {
    router.push("/login");
  }

  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {error && <p> An error occurred. </p>}
      {loggedIn && (
        <>
          <h1>Protected Route</h1>
          <p>You {"can't"} see me if not logged-in!</p>
        </>
      )}
    </div>
  );
};
