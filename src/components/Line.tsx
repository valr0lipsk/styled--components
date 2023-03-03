import React from 'react'
import styled from 'styled-components'

interface StyledProps {
  color?: string;
}

const StyledLine = styled.div<StyledProps>`
font-size: 24px;
color: ${props => props.color || props.theme.colors.primary};
`

const Line: React.FC<StyledProps & React.PropsWithChildren> = (props) => {
  return (
    <StyledLine {...props}/>
  )
}

export default Line