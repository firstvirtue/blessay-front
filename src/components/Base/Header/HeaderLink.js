import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { shadow } from 'lib/styleUtils';

const Aligner = styled.div`
  display: block;
  margin-top: 1rem;
`;

const StyledLink = styled.a`
  color: ${oc.gray[6]};
  &:hover {
    color: ${oc.gray[7]};
  }
`;

const HeaderLink = ({to, children}) => (
  <Aligner>
    <StyledLink href={to}>{children}</StyledLink>
  </Aligner>
);

export default HeaderLink;
