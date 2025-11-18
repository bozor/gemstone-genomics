import Main from "./Main";
import Intro from "./Intro";

import s from "./PageAboutUs.module.css";
import Paragraphs from "./Paragraphs";

const PageAboutUs = () => {
  return (
    <Main className={s.wrap}>
      <h1>About&#8197;Us</h1>
      <Intro
        text="The company was founded in 2025 to explore the concept of gemstone
        genomics and to realise its significant commercial potential."
      />
      <h2>Key People</h2>
      <div className={s.people}>
        <div className={s.person}>
          <h3 className="fs-h4">Anatoly Grudinin</h3>
          <Paragraphs className={s.content}>
            <p>
              Managing Director and a Principal Photonics Scientist. Prior to
              founding Gemstone Genomics, Anatoly was the CEO of Fainium, a
              fibre laser company focused on commercialising ultrafast fibre
              lasers. In 2016, the company was acquired and is now part of
              Hamamatsu.
            </p>
            <p>
              He published over 200 scientific papers in peer-reviewed journals
              and holds over 20 patents.
            </p>
          </Paragraphs>
        </div>
        <div className={s.person}>
          <h3 className="fs-h4">Rajeev Ratan</h3>
          <Paragraphs className={s.content}>
            <p>
              Principal Data Scientist with a focus on Large Language Models
              (LLMs), Natural Language Processing (NLP), and predictive
              analytics. With nearly a decade of experience in AI and data
              science, he has worked across education, computer vision, and
              telecommunications, including as a Senior Computer Vision Engineer
              at a U.S.-based AI startup.
            </p>
            <p>
              Passionate about AI education, Rajeev has published eight data
              science courses on Udemy with over 75,000 students and has
              authored multiple research papers. He holds an MSc in Artificial
              Intelligence from the University of Edinburgh and a BSc in
              Electrical and Computer Engineering
            </p>
          </Paragraphs>
        </div>
      </div>
    </Main>
  );
};

export default PageAboutUs;
