import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.wrap}>
      <p>&copy; {new Date().getFullYear()} Gemstone Genomics</p>
    </footer>
  );
};

export default Footer;
