import Image from "next/image";
import type { VFC } from "react";
import styles from "src/styles/Home.module.css";

// Footer component
export const Footer: VFC = () => (
  <footer className={styles.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{" "}
      <Image
        src="/clerk.svg"
        alt="Clerk.dev"
        className={styles.logo}
        width="64"
        height="64"
      />
      +
      <Image
        src="/nextjs.svg"
        alt="Next.js"
        width="64"
        height="64"
        className={styles.logo}
      />
    </a>
  </footer>
);
