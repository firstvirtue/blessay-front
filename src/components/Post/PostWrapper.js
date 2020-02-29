import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';
import { Link } from 'react-router-dom';

const Positioner = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  margin-top: 10rem;
  padding-left: 20px;
  padding-right: 20px;
`;

const PostWrapper = ({children}) => (
  <Positioner>
    <Wrapper>
      {children}
    </Wrapper>
  </Positioner>
);

export default PostWrapper;
