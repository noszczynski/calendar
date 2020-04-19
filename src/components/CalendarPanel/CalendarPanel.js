import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCalendar } from "../../utils/dateUtils";
import CalendarItem from "../CalendarItem/CalendarItem";
// import PropTypes from 'prop-types';

const WEEK_DAYS = [
  {
    name: "Monday",
    shortName: "Mon",
  },
  {
    name: "Tuesday",
    shortName: "Tue",
  },
  {
    name: "Wednesday",
    shortName: "Wed",
  },
  {
    name: "Thursday",
    shortName: "Thu",
  },
  {
    name: "Friday",
    shortName: "Fr",
  },
  {
    name: "Saturday",
    shortName: "Sat",
  },
  {
    name: "Sunday",
    shortName: "Sun",
  },
];

const CalendarWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 3.4rem repeat(6, 1fr);
`;

function CalendarPanel() {
  const [schema, setSchema] = useState([]);

  useEffect(() => {
    setSchema(getCalendar());
  }, []);

  return (
    <CalendarWrapper>
      {WEEK_DAYS.map((day) => (
        <CalendarItem key={day.name} item={day} header />
      ))}
      {schema &&
        schema.map((day, index) => <CalendarItem key={index} item={day} />)}
    </CalendarWrapper>
  );
}

CalendarPanel.propTypes = {
  // className: PropTypes.string,
};

CalendarPanel.defaultProps = {
  // className: null,
};

export default CalendarPanel;
