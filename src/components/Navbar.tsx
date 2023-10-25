"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SocialIconContainer from "./SocialIconContainer";
import Image from "next/image";

const navLinks = [
  { title: "Home", href: "/#home" },
  { title: "About", href: "/#about" },
  { title: "Skills", href: "/#skills" },
  { title: "Projects", href: "/#projects" },
  { title: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-50 bg-white"
          : "fixed w-full h-20 z-50 bg-white"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          <Image src="/assets/nav/logo.png" alt="JC" width={80} height={80} />
        </div>
        <div>
          <ul className="hidden md:flex">
            {navLinks.map((nl, idx) => (
              <Link key={idx} href={nl.href}>
                <li className="ml-10 uppercase text-sm pb-2 hover:border-b">
                  {nl.title}
                </li>
              </Link>
            ))}
          </ul>
          <div onClick={toggleMobileNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={
          showMobileNav
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden"
            : ""
        }
      >
        <div
          className={
            showMobileNav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 bg-[#ecf0f3] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <h1>JC</h1>
              <div
                onClick={toggleMobileNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:[w-90%] py-4">
                Let's build something legendary together
              </p>
            </div>
            <div className=" py-4 flex flex-col">
              <ul className="uppercase">
                {navLinks.map((nl, idx) => (
                  <Link key={idx} href={nl.href}>
                    <li className="py-4 text-sm">{nl.title}</li>
                  </Link>
                ))}
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's Connect
                </p>
                <div className="w-full sm:w-[80%] my-4 ">
                  <SocialIconContainer padding={3} scale={105} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
