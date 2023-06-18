import React from 'react';
import styled from '@emotion/styled';
import image from '../../assets/test.jpg';
import testUrl, { ReactComponent as TestSVG } from '../../assets/test.svg';

interface Props {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const Button = ({ children, size = 'medium' }: Props) => {
  return (
    <>
      <StyledButton size={size}>{children}</StyledButton>
      {/* image test */}
      <img width={300} src={image}></img>

      {/* svg component test */}
      <TestSVG />

      {/* svg url test */}
      <img src={testUrl} alt="" />
    </>
  );
};

const StyledButton = styled.button<{ size: 'small' | 'medium' | 'large' }>`
  background-color: green;
  color: #fff;
  border: none;
  cursor: pointer;

  ${({ size }) => {
    if (size === 'small') {
      return `padding: 5px 10px`;
    } else if (size === 'medium') {
      return `padding: 10px 15px`;
    } else {
      return `padding: 15px 25px`;
    }
  }}
`;

export default Button;
