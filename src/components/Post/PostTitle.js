import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';

const Aligner = styled.div`
  max-width: 650px;
  margin: 0 auto;
  margin-top: 1rem;
  text-align: left;
`;

const StyledTitle = styled.h3`
  // margin-bottom: 0;
  color: ${oc.gray[8]};
  outline: 0;
  font-size: 42px;
`;

const PostTitle = ({html, onChange}) => (
  <Aligner>
    <StyledTitle 
      dangerouslySetInnerHTML={{__html: html}} 
      onInput={onChange} 
      contentEditable></StyledTitle>
  </Aligner>
);

export default PostTitle;
