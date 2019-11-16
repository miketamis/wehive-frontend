import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled, { css } from 'styled-components';
import StopListA from './StopList'
import Services, { ServiceScreen } from './Services'
import STOPS from './stops';
import SplashScreen from "./views/SplashScreen";

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
          <Route path="/stop/:stopnumber/:code" component={(props) =>{
              const stop = STOPS.find(({ stopNumber }) => stopNumber + '' === props.match.params.stopnumber + '')
              console.log(stop)
              const service = stop.services.find(({ code }) => code + '' === props.match.params.code + '')
              console.log(service);
             return <ServiceScreen {...props} service={service} />
          }} />
          <Route path="/stop/:stopnumber" component={Stop}/>
        
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

`

function Stop({ match, history }) {
  const stop = STOPS.find(({ stopNumber }) => stopNumber + '' === match.params.stopnumber + '')
  return <div>
        <Header title="Departures" onClickLeftIcon={() => history.goBack()} />
        <SubHeader>Stop {stop.stopNumber} - {stop.addressLabel}</SubHeader>
        <Services stop={stop} history={history} />
    </div>
}

const ICON_SIZE = '24px';
const ProfilePicture = styled.img`
  border-radius: 50%;
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  border: 1px solid #acacac;
`;

const HeaderContainer = styled.div`
background: white;
display: flex;
padding: 8px;
margin-bottom: 8px;
`
const HeaderText = styled.div`
  margin: auto;
  font-size: 16px;
  font-weight: 600;
`

const LeftIcon = styled.div`
    width: 16px;
    height: 16px;
    border: solid ${({ show }) => show ? '#478EB9' : '#FF'};
    
    border-width: 0 3px 3px 0;
    display: inline-block;
    transform: rotate(135deg);
    margin: 8px;
    
    
   

`;

function Header({ title, onClickLeftIcon }) {
  return <HeaderContainer>
    <LeftIcon show={!!onClickLeftIcon} onClick={onClickLeftIcon}  /> <HeaderText>{title}</HeaderText><ProfilePicture src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
  </HeaderContainer>
}

const TabList = styled.ul`
list-style-type: none;
    display: flex;
    padding-left: 0;
    margin: 0;
`

const Tab = styled.li`
flex: 1;
text-align: center;
padding: 0 8px 16px;
border-bottom: 1px solid gray;
  ${({ selected }) => selected && css`
    border-bottom: 3px solid #478EB9;
    color: #478EB9;
  `}
`

const Bar = styled.div`
  width: 1px;
    height: 24px;
    background: grey;
`

function Tabs() {
  return <TabList>
    <Tab selected>List view</Tab>
    <Bar></Bar>
    <Tab>Map view</Tab>
  </TabList>
}

function Home() {
  return <h2>Home</h2>;
}

function StopList() {
  return <div>
    <Header  title="Select your stop" />
    <Tabs></Tabs>
    <StopListA />
    </div>;
}

function StopMap() {
  return <h2>Select your stop - Map view</h2>;
}