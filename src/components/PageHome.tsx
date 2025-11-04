import Image from "next/image";

import s from "./PageHome.module.css";

const PageHome = () => {
  return (
    <div className={s.page}>
      <main className={s.main}>
        <div className={s.logo}>
          <Image
            src={"images/genomics-full-logo.svg"}
            fill
            alt="Gemstone Genomics"
          />
        </div>
        <p>coming soon - watch this space</p>
      </main>
    </div>
  );
};

export default PageHome;
