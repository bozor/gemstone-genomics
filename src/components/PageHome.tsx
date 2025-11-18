import Image from "next/image";

import Main from "./Main";
import Intro from "./Intro";

import s from "./PageHome.module.css";

const PageHome = () => {
  return (
    <Main className={s.wrap}>
      <div className={s.logo}>
        <Image
          src={"images/genomics-full-logo.svg"}
          fill
          alt="Gemstone Genomics"
        />
      </div>

      <Intro
        text="Gemstone genomics is an innovative concept that reflects the unique
        attributes of natural crystals embedded in the crystallographic lattice
        during crystal growth."
      />
      <p>
        The ever-present lattice defects form a complex three-dimensional
        pattern that contains information about the crystal and its origin. Our
        method, based on a combination of spectroscopy and deep machine
        learning, enables the extraction of this information and allows for the
        accurate, non-invasive identification of crystal samples.
      </p>
    </Main>
  );
};

export default PageHome;
