import type { ReactNode, VFC } from "react";
import { Header } from "src/compornents/Header";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => (
  <>
    <Header />
    <main>{props.children}</main>
  </>
);
