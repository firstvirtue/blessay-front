import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { shadow } from 'lib/styleUtils';

const Aligner = styled.div`
  margin-top: 1rem;
  text-align: left;
`;

const StyledLink = styled(Link)`
  color: ${oc.gray[8]};
  &:hover {
    color: ${oc.gray[9]};
  }
`;

const RouteLink = ({to, children}) => (
  <Aligner>
    <StyledLink to={to}>{children}</StyledLink>
  </Aligner>
);

export default RouteLink;
