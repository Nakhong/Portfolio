import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#AboutMe">
        <AiOutlineUser />
      </a>
      <a href="#skills">
        <BiBook />
      </a>
      <a href="#Portfolio">
        <RiServiceLine />
      </a>
      <a href="#ContactMe">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
