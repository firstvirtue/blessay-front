import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { shadow } from 'lib/styleUtils';

const Aligner = styled.div`
  display: block;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  color: ${oc.gray[6]};
  &:hover {
    color: ${oc.gray[7]};
  }
`;

const HeaderLink = ({to, children}) => (
  <Aligner>
    <StyledLink to={to}>{children}</StyledLink>
  </Aligner>
);

export default HeaderLink;
