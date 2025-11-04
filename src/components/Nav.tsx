"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { useMediaQuery } from "usehooks-ts";

import { useTransitionRouter } from "@/vendor/next-view-transitions";

import Hamburger from "./Hamburger";

import s from "./Nav.module.css";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "What is Gemstone Genomics", href: "/what-is-gemstone-genomics" },
  { name: "Our Technology", href: "/our-technology" },
  { name: "Contact Us", href: "/contact-us" },
];

const Nav = () => {
  const router = useTransitionRouter();
  const [showNav, setShowNav] = useState(false);
  const notMobile = useMediaQuery("(min-width: 700px)");

  const slideInOut = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  const handleOnClick = (pathname: string) => {
    setShowNav(false);
    setTimeout(
      () => {
        router.push(pathname, {
          onTransitionReady: notMobile ? slideInOut : () => {},
        });
      },
      notMobile ? 0 : 150
    );
  };

  return (
    <nav className={s.nav}>
      <div className={s.logo} onClick={() => handleOnClick("/")}>
        <Image
          src={"images/genomics-symbol-logo.svg"}
          fill
          alt="Gemstone Genomics"
        />
      </div>
      <Hamburger showNav={showNav} setShowNav={setShowNav} />
      <div className={clsx(s.links, { [s.visible]: showNav })}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleOnClick(e.currentTarget.pathname)}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div
        className={clsx(s.overlay, { [s.linksVisible]: showNav })}
        onClick={() => setShowNav(false)}
      ></div>
    </nav>
  );
};

export default Nav;
