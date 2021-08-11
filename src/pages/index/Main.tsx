import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Image from "next/image";
import Link from "next/link";
import { ClerkFeatures } from "src/pages/index/ClerkFeatures";
import { SignupLink } from "src/pages/index/SignupLink";
import styles from "src/styles/Home.module.css";

export const Main = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>Welcome to your new app</h1>
    <p className={styles.description}>Sign up for an account to get started</p>

    <div className={styles.cards}>
      <div className={styles.card}>
        <SignedIn>
          <ClerkFeatures />
        </SignedIn>
        <SignedOut>
          <SignupLink />
        </SignedOut>
      </div>

      <div className={styles.card}>
        <Link href="https://dashboard.clerk.dev">
          <a target="_blank" rel="noreferrer" className={styles.cardContent}>
            <Image
              src="/icons/settings.svg"
              width="32"
              height="32"
              alt="settings"
            />
            <div>
              <h3>Configure settings for your app</h3>
              <p>
                Visit Clerk to manage instances and configure settings for user
                management, theme, and more
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
      </div>
    </div>

    <div className={styles.links}>
      <Link href="https://docs.clerk.dev">
        <a target="_blank" rel="noreferrer" className={styles.link}>
          <span className={styles.linkText}>Read Clerk documentation</span>
        </a>
      </Link>
      <Link href="https://nextjs.org/docs">
        <a target="_blank" rel="noreferrer" className={styles.link}>
          <span className={styles.linkText}>Read NextJS documentation</span>
        </a>
      </Link>
    </div>
  </main>
);
