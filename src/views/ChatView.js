import React, { useState } from "react";

import styled, { css } from "styled-components";

const ChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const GreyLine = styled.div`
	height: 6px;
	width: 94px;
	border-radius: 4px;
  background-color: #D8D8D8;
  align-self: center;
`;

const ChatObjectLeft = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
const ChatObjectRight = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const GreyCircle = styled.div`
  height: 28px;
  width: 28px;
  background-color: #d8d8d8;
  border-radius: 17px;
`;

const GreyCircleRight = styled.div`
  height: 28px;
  width: 28px;
  background-color: #0e83ff;
  border-radius: 17px;
`;

const ChatBox = styled.div`
  height: 76px;
  width: 254px;
  padding: 0px 15px;
  margin: 0px 10px;
  border-radius: 17px;
  background-color: #e5e5ea;
`;
const ChatBoxRight = styled.div`
  height: 76px;
  width: 254px;
  padding: 0px 15px;
  margin: 0px 10px;
  border-radius: 17px;
  background-color: #0e83ff;
  color: white;
`;

const TextInput = styled.input`
  box-sizing: border-box;
  align-self: center;
  height: 34px;
  width: 90%;
  border: 1px solid #c8c8cd;
  border-radius: 18px;
  background-color: #fafafa;
  position: absolute;
  bottom: 10px;
  padding: 15px;
`;

export default function ChatView() {
  return (
    <>
      <ChatWindow>
        <GreyLine />
        <h2>Arrange a ride with fellow bees</h2>
        <ChatObjectLeft>
          <GreyCircle />
          <ChatBox>
            <p>Looks like the bus isn’t coming. I’ve been waiting 10 minutes</p>
          </ChatBox>
        </ChatObjectLeft>
        <br />
        <ChatObjectRight>
          <ChatBoxRight>
            <p>Oh no, I have an important meeting at work today</p>
          </ChatBoxRight>
          <GreyCircleRight />
        </ChatObjectRight>
        <br />
        <ChatObjectLeft>
          <GreyCircle />
          <ChatBox>
            <p>My friend is picking me up, want a lift to CBD?</p>
          </ChatBox>
        </ChatObjectLeft>
        <br />
        <ChatObjectRight>
          <ChatBoxRight>
            <p>That’ll be amazing thank you so much.</p>
          </ChatBoxRight>
          <GreyCircleRight />
        </ChatObjectRight>
        <TextInput type="text" />
      </ChatWindow>
    </>
  );
}
