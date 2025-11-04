import clsx from "clsx";
import { ReactNode } from "react";

import s from "./Main.module.css";

type MainProps = {
  children: ReactNode;
  className: string;
};

const Main = ({ children, className }: MainProps) => {
  return <main className={clsx(s.wrap, className)}>{children}</main>;
};

export default Main;
