import React, { useState } from "react";
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
import {
  useDialogState,
  Dialog,
  DialogDisclosure
} from "reakit/Dialog";

const Report = styled.div`
  padding: 32px 16px;
  background: #d42a25;
  color: white;
`;

const Service = styled.div`
  background: ${({ reported }) => (reported ? `#FEEAE9` : `#F3F9ED`)};
  padding: 16px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StopCode = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Destination = styled.div`
  font-size: 12px;
  padding-top: 4px;
`;

const Time = styled.div`
  font-size: 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

function Services({ stop, history }) {
  const [showDialog, setShowDialog ] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog ] = useState(false);

  return <div>
    <ReportDialog visible={showDialog} service={stop.services[0]} onSubmit={() => {
      setShowSuccessDialog(true);
      setShowDialog(false);
    }
    }/>
    <SuccessDialog visible={showSuccessDialog} onClose={() => {
      setShowSuccessDialog(false);
    }} />
{stop.services.map(
    ({ code, reported, endStopSuburb, estimatedTimeTillArrival }) => (
      <SwipeRow
        rowId={code}
        rightButtons={[<Report>Report</Report>]}
        disableSwipeRight
      >
            <Service
              onClick={() => { setShowDialog(true)}}
              reported={reported}
            >
              <Left>
                <div>
                  <StopCode>{code}</StopCode>
                  <Destination>to {endStopSuburb}</Destination>
                </div>
              </Left>
              <Time>
                {moment()
                  .add(estimatedTimeTillArrival, "minutes")
                  .format("h:mma")}
              </Time>
            </Service>
          
      </SwipeRow>
    )
  )}
    </div>
}

const ServiceHeader = Service;

const Back = styled.div`
  width: 16px;
  height: 16px;
  border: solid #478eb9;

  border-width: 0 3px 3px 0;
  display: inline-block;
  transform: rotate(135deg);
  margin: 8px;
`;

const ReportGrid = styled.div`
  box-sizing: border-box;
  height: 546px;
  width: 336px;
  border: 1px solid #979797;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.4);
  padding: 10px;
`;

const StopLabel = styled.div`
  background-color: #eeeeee;
  margin: -10px;
  padding: 15px;
  display: flex;
  align-items: space-between;
`;

const TimeBox = styled.div`
  borderleft: 1px solid black;
  height: 10px;
`;

const MyDialog = styled(Dialog)`
box-sizing: border-box;
width: 350px;
border-radius: 10px;
box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.4);
color: #212121;
background-color: #ffffff;
position: fixed;
top: 28px;
left: 50%;
transform: translateX(-50%);
border-radius: 0.25rem;
padding: 1em;
max-height: calc(100vh - 56px);
outline: 0;
border: 1px solid rgba(33,33,33,0.25);
color: #212121;
z-index: 999;
`
const MyDialog2 = styled(Dialog)`
width: 350px;
color: #212121;
position: fixed;
top: 28px;
left: 50%;
transform: translateX(-50%);
padding: 1em;
max-height: calc(100vh - 56px);
outline: 0;
color: #212121;
z-index: 999;
`

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 10px;
  margin-top: 20px;
`;

const IconItem = styled.div`
`;

const Access = require('./assets/report/access.png');
const BreakDown = require('./assets/report/breakdown.png');
const Late = require('./assets/report/late.png');
const LeftEarly = require('./assets/report/leftEarly.png');
const NoShow = require('./assets/report/noShow.png');
const Other = require('./assets/report/other.png');
const Packed = require('./assets/report/packed.png');
const Security = require('./assets/report/security.png');

const ButtonRow = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const CancelButton = styled.button`
  box-sizing: border-box;
  height: 41px;
  width: 139px;
  border: 1px solid #FFD700;
  background-color: #FFFFFF;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
  font-size: 13px;
`;
const SubmitButton = styled.button`
	height: 40px;
	width: 138px;
	background-color: #FFD700;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
  font-size: 13px;
`;

function ReportDialog({ visible, onSubmit, service: { code, endStopSuburb, estimatedTimeTillArrival, reported } }) {
  return (
    <>
      <MyDialog visible={visible} >
        <h2>Report this bus service</h2>
        <StopLabel>
          <div>
            <StopCode>{code}</StopCode>
            <Destination>to {endStopSuburb}</Destination>
          </div>
          <TimeBox>
            TimeBox
          </TimeBox>
        </StopLabel>
        <IconGrid>
          <IconItem>
            <img src={BreakDown} alt="" width="85"/>
          </IconItem>
          <IconItem>
            <img src={LeftEarly} alt="" width="85"/>
          </IconItem>
          <IconItem>
            <img src={Late} alt="" width="85"/>
          </IconItem>
          <IconItem>
            <img src={Packed} alt="" width="85"/>
          </IconItem>
          <IconItem>
            <img src={NoShow} alt="" width="85"/>
          </IconItem>
          <IconItem>
            <img src={Access} alt="" width="85"/>
          </IconItem>
          <IconItem>
            <img src={Security} alt="" width="85"/>
          </IconItem>
          <IconItem>
            <img src={Other} alt="" width="85"/>
          </IconItem>
        </IconGrid>
        <ButtonRow>
          <CancelButton>Cancel</CancelButton>
          <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
          {/* <Button>Submit</Button> */}
        </ButtonRow>
      </MyDialog>
    </>
  );
}

const Success = require('./assets/Success.png');

function SuccessDialog({visible, onClose}) {
  return (
    <>
      <MyDialog2 visible={visible}>
        <Link to={'/chat'}>
          <img src={Success} alt="" width="100%" />
        </Link>
      </MyDialog2>
    </>
  );
}

export function ServiceScreen({
  history,
  service: { code, endStopSuburb, estimatedTimeTillArrival, reported }
}) {
  return (
    <div>
      
    </div>
  );
}

export default Services;
