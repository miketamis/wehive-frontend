import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import styled, { css } from "styled-components";
import StopListA from "./StopList";
import Services, { ServiceScreen } from "./Services";
import STOPS from "./stops";
import SplashScreen from "./views/SplashScreen";
import ChatView from "./views/ChatView";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/stoplist">
          <StopList />
        </Route>
        <Route path="/stopmap">
          <StopMap />
        </Route>
        <Route
          path="/stop/:stopnumber/:code"
          component={props => {
            const stop = STOPS.find(
              ({ stopNumber }) =>
                stopNumber + "" === props.match.params.stopnumber + ""
            );
            console.log(stop);
            const service = stop.services.find(
              ({ code }) => code + "" === props.match.params.code + ""
            );
            console.log(service);
            return <ServiceScreen {...props} service={service} />;
          }}
        />
        <Route path="/stop/:stopnumber" component={Stop} />
        <Route path="/chat" component={ChatView} />

        <Route path="/">
          <SplashScreen />
          {/* <Redirect to="/stoplist" /> */}
        </Route>
      </Switch>
    </Router>
  );
}

const SubHeader = styled.div`
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid gray;
  padding-bottom: 16px;
`;

function Stop({ match, history }) {
  const stop = STOPS.find(
    ({ stopNumber }) => stopNumber + "" === match.params.stopnumber + ""
  );
  return (
    <div>
      <Header title={stop.addressLabel} subtitle={stop.stopNumber} onClickLeftIcon={() => history.goBack()} />
      <Services stop={stop} history={history} />
    </div>
  );
}

const ICON_SIZE = "30px";
const ProfilePicture = styled.img`
  border-radius: 50%;
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  border: 3px solid #ffffff;
  margin-right: 15px;
`;

const HeaderContainer = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: start;
  padding-top: 10px;
  justify-content: center;
  height: ${({ show }) => (show ? "150px" : "50px")};
  width: 100%;
  background-color: #ffd700;
  border-bottom-left-radius: ${({ show }) => (show ? "50%" : "0%")};
  border-bottom-right-radius: ${({ show }) => (show ? "50%" : "0%")};
`;
const HeaderText = styled.div`
  justify-self: center;
  font-size: 26px;
  font-weight: 600;
`;

const LeftIcon = styled.div`
  width: 16px;
  height: 16px;
  border: solid ${({ show }) => (show ? "#000000" : "#FF")};

  border-width: 0 3px 3px 0;
  display: inline-block;
  transform: rotate(135deg);
  margin: 8px;
`;

const Header = withRouter(HeaderInside);

function HeaderInside({ title, subtitle, onClickLeftIcon }, props) {
  console.log(props);
  return (
    <HeaderContainer show={!onClickLeftIcon}>
      <LeftIcon show={!!onClickLeftIcon} onClick={onClickLeftIcon} />{" "}
      <HeaderText>{title}</HeaderText>
      <ProfilePicture src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
    </HeaderContainer>
  );
}

const TabListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TabList = styled.ul`
  position: absolute;
  top: 80px;
  list-style-type: none;
  display: flex;
  padding-left: 0;
  margin: 0;
  height: 61px;
  width: 263px;
  background-color: #FFFFFF;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.1);
  z-height: 999;
`;

const Tab = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ selected }) => selected && css`
    color: #cccccc;
  `}
`;

const Bar = styled.div`
  width: 1px;
  height: 100%;
  background: grey;
`;

const ListIcon = require('./assets/Icons/List.png');
const MapIcon = require('./assets/Icons/Map.png');

function Tabs() {
  return (
    <TabListContainer>
      <TabList>
        <Tab>
         <img src={ListIcon} alt="" height="20"/>
          List
        </Tab>
        <Bar></Bar>
        <Tab selected>
          <img src={MapIcon} alt="" height="20"/>
          Map
        </Tab>
      </TabList>
    </TabListContainer>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function StopList() {
  return (
    <div>
      <Header title="Select your stop" />
      <Tabs></Tabs>
      <br/>
      <StopListA />
    </div>
  );
}

function StopMap() {
  return <h2>Select your stop - Map view</h2>;
}
