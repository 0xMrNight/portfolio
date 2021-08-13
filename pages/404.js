import styles from "../styles/404.module.css";
import Head from "next/head";
import Link from "next/link";

export default function custom404() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title> 404 - Page Not Found </title>
      </Head>
      <div className={styles.container}>
        <h1>
          <span className="text-red">404</span> -{" "}
          <span className="text-green">Page not found</span>
        </h1>
        <h3 className={styles.desc}>
          {" "}
          Return to the <Link href="/"> Home page </Link>{" "}
        </h3>
      </div>
    </>
  );
}
