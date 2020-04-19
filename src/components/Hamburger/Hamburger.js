import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

const HamburgerWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const HamburgerSlice = styled.div`
  display: block;
  height: 2px;
  width: 100%;
  background-color: gray;
  border-radius: 2px;
  position: relative;
  max-width: 2rem;

  &::after,
  &::before {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background-color: gray;
    border-radius: 2px;
    position: absolute;
  }
  &::after {
    transform: translateY(-6px);
  }
  &::before {
    transform: translateY(6px);
  }
`;

function Hamburger() {
  return (
    <HamburgerWrapper>
      <HamburgerSlice />
    </HamburgerWrapper>
  );
}

Hamburger.propTypes = {
  // className: PropTypes.string,
};

Hamburger.defaultProps = {
  // className: null,
};

export default Hamburger;
