import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CalendarItemWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid #b4b4b4;
  border-left: 1px solid #b4b4b4;
`;

const ItemTitle = styled.h3`
  padding: 1rem;
  color: #505050;
  font-size: 1.3rem;

  &.out {
    color: #b4b4b4;
  }
`;

function CalendarItem({ item, header }) {
  return (
    <CalendarItemWrapper className={header ? "no-border-bottom" : ""}>
      <ItemTitle className={header || item.outOfMonth ? "out" : ""}>
        {item.name}
      </ItemTitle>
    </CalendarItemWrapper>
  );
}

CalendarItem.propTypes = {
  item: PropTypes.object,
  header: PropTypes.bool,
};

CalendarItem.defaultProps = {
  item: {},
  header: false,
};

export default CalendarItem;
