import { ReactNode } from "react";
import clsx from "clsx";

import Footer from "./Footer";

import s from "./Main.module.css";

type MainProps = {
  children: ReactNode;
  className: string;
  showBg?: boolean;
};

const Main = ({ children, className, showBg = true }: MainProps) => {
  return (
    <>
      <main className={clsx(s.wrap, className)}>
        <div className={s.inner}>{children}</div>
        {showBg ? <span className={s.logoBg}></span> : null}
      </main>
      <Footer />
    </>
  );
};

export default Main;
