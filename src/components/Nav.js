import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="work">2. Our Work</Link>
        </li>
        <li>
          <Link to="contact">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  align-items: center;
  padding: 1rem 10rem;
  margin: auto;
  justify-content: space-between;
  background: #282828;
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;
