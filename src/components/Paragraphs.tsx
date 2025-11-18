import clsx from "clsx";
import { ReactNode } from "react";

import s from "./Paragraphs.module.css";

type ParagraphsProps = {
  children: ReactNode;
  className?: string;
};

const Paragraphs = ({ children, className }: ParagraphsProps) => {
  return <div className={clsx(s.wrap, className)}>{children}</div>;
};

export default Paragraphs;
