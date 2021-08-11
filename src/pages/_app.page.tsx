import "src/styles/globals.css";

import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

// 認証が不要なページがあればパスを設定する。
// 例：
//   "/"              for pages/index.js
//   "/foo"           for pages/foo/index.js
//   "/foo/bar"       for pages/foo/bar.js
//   "/foo/[...bar]"  for pages/foo/[...bar].js
const publicPages: string[] = [];

const MyApp = (props: AppProps) => {
  const { push, pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider frontendApi={clerkFrontendApi} navigate={(to) => push(to)}>
      {isPublicPage ? (
        <props.Component {...props.pageProps} />
      ) : (
        <>
          <SignedIn>
            <props.Component {...props.pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
};

export default MyApp;
