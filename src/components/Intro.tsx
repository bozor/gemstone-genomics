import s from "./Intro.module.css";

type IntroProps = {
  text: string;
};

const Intro = ({ text }: IntroProps) => {
  return (
    <div className={s.wrap}>
      <p>{text}</p>
    </div>
  );
};

export default Intro;
