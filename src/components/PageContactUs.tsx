import Main from "./Main";

import s from "./PageContactUs.module.css";

const PageContactUs = () => {
  return (
    <Main className={s.wrap}>
      <h1>Contact&#8197;Us</h1>
      <p>
        Get in touch with us be emailing{" "}
        <a href="mailto:info@gemstonegenomics.com">info@gemstonegenomics.com</a>
        .
      </p>
    </Main>
  );
};

export default PageContactUs;
