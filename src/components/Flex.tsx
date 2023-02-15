import React from 'react'
import styled, { StyledComponent, ThemedStyledProps } from "styled-components";
import Wrapper from './helpers/Wrapper';

interface Props extends React.PropsWithChildren {
  direction?: string;
  items?: string;
  justify?: string;
  margin?: string;
}

const StyledFlex = styled(Wrapper)`
display: flex;
flex-direction: ${props => props.direction || 'row'};
justify-content: ${props => props.justify || 'stretch'};
align-items: ${props => props.items || 'stretch'};
margin: ${({margin}) => margin || '0'};
`

const Flex: React.FC<Props> = (props) => {
  return (
    <StyledFlex {...props}/>
  )
}

export default Flex