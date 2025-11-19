import Main from "./Main";
import Intro from "./Intro";
import Paragraphs from "./Paragraphs";

import s from "./PageOurTechnology.module.css";

const PageOurTechnology = () => {
  return (
    <Main className={s.wrap}>
      <h1>Our&#8197;Technology</h1>
      <Intro
        text="The inevitable lattice defects of all natural crystals manifest themselves through the spectral dependence of
light absorption in the mid-IR region of the optical spectrum."
      />
      <Paragraphs>
        <p>
          By collecting multiple spectral data taken from different parts of the
          crystal sample, followed by the data analysis using methods of deep
          machine learning, it is possible to identify spectral markers
          associated with otherwise unique lattice defect patterns.
        </p>
        <p>
          The core of the proposed method is a neural network trained on a
          number of samples belonging to the same class. The class could be
          multiple measurements of the same diamond or gemstones of the same
          geographical origin. The trained neural network is able to identify
          previously untested samples and to predict their origin correctly.
        </p>
        <p>
          Results of our study suggest that the underlying crystal property
          allowing its identification is ever- present native defects in the
          lattice. Three-dimensional pattern of those defects being set by
          temperature, pressure and their gradients in both time and space
          during crystal formation seems to bear information about its identity,
          including its origin. In many aspects, it resembles genomics in living
          cells, and we call it the <strong>gemstone genomics</strong> concept.
        </p>
      </Paragraphs>
    </Main>
  );
};

export default PageOurTechnology;
