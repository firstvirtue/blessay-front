import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';
import { Link } from 'react-router-dom';

const Positioner = styled.div`
  margin-top: 10rem;
  margin-left: 20px;
  margin-right: 20px;
  
`;

const PostWrapper = ({children}) => (
  <Positioner>
    {children}
  </Positioner>
);

export default PostWrapper;
