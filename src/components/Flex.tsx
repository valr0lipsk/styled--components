import React from 'react'
import styled from "styled-components";

interface StyledProps {
  direction?: string;
  items?: string;
  justify?: string;
  margin?: string;
}

const StyledFlex = styled.div<StyledProps>`
display: flex;
flex-direction: ${props => props.direction || 'row'};
justify-content: ${props => props.justify || 'stretch'};
align-items: ${props => props.items || 'stretch'};
margin: ${({margin}) => margin || '0'};
`

const Flex: React.FC<StyledProps & React.PropsWithChildren> = (props) => {
  return (
    <StyledFlex {...props}/>
  )
}

export default Flex