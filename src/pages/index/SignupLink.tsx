import Image from "next/image";
import Link from "next/link";
import arrowRight from "public/icons/arrow-right.svg";
import userPlus from "public/icons/user-plus.svg";
import styles from "src/styles/Home.module.css";

export const SignupLink = () => (
  <Link href="/sign-up">
    <a className={styles.cardContent}>
      <Image src={userPlus} />
      <div>
        <h3>Sign up for an account</h3>
        <p>
          Sign up and sign in to explore all the features provided by Clerk
          out-of-the-box
        </p>
      </div>
      <div className={styles.arrow}>
        <Image src={arrowRight} />
      </div>
    </a>
  </Link>
);
