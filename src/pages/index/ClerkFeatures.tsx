import Image from "next/image";
import Link from "next/link";
import styles from "src/styles/Home.module.css";

export const ClerkFeatures = () => (
  <Link href="/user">
    <a className={styles.cardContent}>
      <Image src="/icons/layout.svg" width="32" height="32" alt="layout" />
      <div>
        <h3>Explore features provided by Clerk</h3>
        <p>
          Interact with the user button, user profile, and more to preview what
          your users will see
        </p>
      </div>
      <div className={styles.arrow}>
        <Image
          src="/icons/arrow-right.svg"
          width="32"
          height="32"
          alt="arrow"
        />
      </div>
    </a>
  </Link>
);
