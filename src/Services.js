import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled, { css } from "styled-components";

import SwipeRow from "react-swipe-row";
import moment from "moment";


const Report = styled.div`
  padding: 32px 16px;
  background: #D42A25;
  color: white;
`;

const Service = styled.div`
  background: ${({ reported }) => reported ? `#FEEAE9` : `#F3F9ED`};
  padding: 16px;
  border-bottom: 1px solid #E8E8E8;
  display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StopCode = styled.div`
font-size: 24px;
        font-weight: 700;
`
const Destination = styled.div`
    font-size: 12px;
    padding-top: 4px;
`

const Time = styled.div`
    font-size: 20px;
`

const Left = styled.div`

`

function Services({ stop }) {
  return stop.services.map(({ code, reported, endStopSuburb, estimatedTimeTillArrival }) => (
    <SwipeRow
      rowId={code}
      rightButtons={[<Report>Report</Report>]}
      disableSwipeRight
    >
      <Service reported={reported}>
          <Left>
          <StopCode>{code}</StopCode>
          <Destination>to {endStopSuburb}</Destination>
          </Left>
          <Time>
          {moment().add(estimatedTimeTillArrival, 'minutes').format('h:mma')}
          </Time>
        </Service>

    </SwipeRow>
  ));
}

export default Services;
