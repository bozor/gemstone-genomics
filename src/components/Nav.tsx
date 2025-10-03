import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/about-us"}>About Us</Link>
        <Link href={"/what-is-gemstone-genomics"}>
          What is Gemstone Genomics
        </Link>
        <Link href={"/our-technology"}>Our Technology</Link>
        <Link href={"/contact-us"}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Nav;
