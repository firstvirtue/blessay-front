import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100px;
  background: gray;

`;

const UserLayer = ({ children }) => (
  <Wrapper>
    유저 패널
    {children}
  </Wrapper>
);

export default UserLayer;