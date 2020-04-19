import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import styled from "styled-components";
import { getTodayAsNumber } from "../../utils/dateUtils";
// import PropTypes from 'prop-types';

const HeaderWrapper = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid #b4b4b4;
  display: flex;
`;

const TodayWrapper = styled.div`
  display: flex;
  height: 4rem;
  width: 4rem;
  position: relative;
`;

const Today = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-60%);
  color: #fff;
  font-size: 1.5rem;
`;

const Bookmark = styled.span`
  display: block;
  position: absolute;
  font-size: 4rem;
  z-index: -1;
  color: #58b368;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Hamburger />
      <TodayWrapper>
        <Today>{getTodayAsNumber()}</Today>
        <Bookmark className="material-icons">bookmark</Bookmark>
      </TodayWrapper>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  // className: PropTypes.string,
};

Header.defaultProps = {
  // className: null,
};

export default Header;
