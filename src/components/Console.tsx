import React from 'react'
import styled from 'styled-components'

interface StyledProps {
  color: string
}

const StyledConsole = styled.textarea<StyledProps>`
  width: 100%;
  height: 70vh;
  background-color: #000;
  font-size:24px;
  color: ${({color}) => color || 'white'};
  border: none;
  resize: none;

  &:focus {
    border: none;
    outline: none;
  }
`

const Console: React.FC<StyledProps> = (props) => {
  return (
   <StyledConsole {...props}/>
  )
}

export default Console