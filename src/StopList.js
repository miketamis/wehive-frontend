import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled, { css } from 'styled-components';
import STOPS from './stops';



const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const Stop = styled.li`
padding: 8px;
border-bottom: 1px solid #E8E8E8;
background: #ECF5FC;
display: flex;
cursor: pointer;

`

const StopId = styled.div`
    font-size: 14px;
    margin: 4px 0;
`;

const AddressLabel = styled.div`

`

const Services = styled.div`
font-weight: bold;
margin: 4px 0;
`

const NextArrivalTime = styled.div`
    width: 72px;
    border-left: 1px solid gray;
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 20px;
`


const Body = styled.div`
    flex-grow: 1;
`

const Away = styled.div`
font-size: 10px;
`

const StyledLink = styled(Link)`

text-decoration: none;
color: black;
&:visited {
    text-decoration: none;
color: black; 
}
    
    `

function StopList({ history }) {
    return <List>
        {STOPS.map(stop => <StyledLink to={`/stop/${stop.stopNumber}`}><Stop >
            <Body>
            <StopId>
            Stop {stop.stopNumber}
            </StopId>
            <AddressLabel>
            {stop.addressLabel}
            </AddressLabel>
            <Services>
            {stop.services.map(({ code }) =>  code).join(', ')}

            </Services>
            </Body>
            <NextArrivalTime>
                {stop.nextService.estimatedTimeTillArrival} m 
                <Away>away</Away>
            </NextArrivalTime>
        </Stop></StyledLink>
        ) }
    </List>
}

export default StopList;