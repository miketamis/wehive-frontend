import React from 'react'
import styled, { css } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const Splash = require('../assets/splash.png');

const SplashContainer = styled.div`
  background-color: #FFD700;
  height: 100vh;
`;

const SplashScreen = props => {
  setTimeout(() => {
    props.history.push("/stoplist");
  }, 3000);
  return (
    <SplashContainer>
      <img src={Splash} alt="" width="100%"/>
    </SplashContainer>
  )
}

export default withRouter(SplashScreen);