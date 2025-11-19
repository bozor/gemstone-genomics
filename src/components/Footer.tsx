import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.wrap}>
      <div className={s.inner}>
        <p>&copy; {new Date().getFullYear()} Gemstone Genomics</p>
      </div>
    </footer>
  );
};

export default Footer;
