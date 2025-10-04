"use client";
import Link from "next/link";
import { SyntheticEvent } from "react";

import { useTransitionRouter } from "@/vendor/next-view-transitions";

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

  const handleOnClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(e.currentTarget.pathname, {
      onTransitionReady: slideInOut,
    });
  };

  return (
    <nav className={s.nav}>
      <div className={s.links}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleOnClick(e)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
