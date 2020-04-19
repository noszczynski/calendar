import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

const SideWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

function SidePanel() {
  return <SideWrapper>SidePanel GG</SideWrapper>;
}

SidePanel.propTypes = {
  // className: PropTypes.string,
};

SidePanel.defaultProps = {
  // className: null,
};

export default SidePanel;
