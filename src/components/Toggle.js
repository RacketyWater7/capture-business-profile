import React, { useState } from "react";
import { motion } from "framer-motion";
// import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

// const ToggleDiv = styled.div`
//   cursor: pointer;
// `;

export default Toggle;