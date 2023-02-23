import React from 'react'
import styled, {css, keyframes} from 'styled-components'

interface StyledProps {
  alignSelf?: string;
  primary?: boolean;
  outlined?: boolean;
  color?: string;
  background?: string;
}

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`

const StyledButton = styled.button<StyledProps>`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  align-self: ${({alignSelf}) => alignSelf || 'stretch'};

  &:focus {
    outline: none;
  };

  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }

  ${props => props.primary && css`
  color: ${(props: StyledProps) => props.color || 'white'} `};
  background-color: ${(props: StyledProps) => props.background || 'white'};

  ${props => props.outlined && css`
  color: ${(props: StyledProps) => props.color || 'white'} `};
  border: 1px solid ${(props: StyledProps) => props.color || 'white'};
  background-color: transparent;
  ;

`

const LargeButton = styled(StyledButton)`
  font-size: 30px;
`

const Button: React.FC<StyledProps & React.PropsWithChildren> = (props) => {
  return (
    <StyledButton {...props}/>
  )
}

export default Button