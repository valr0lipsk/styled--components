import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Line from './Line'

interface StyledProps {
  color?: string
}

const StyledConsole = styled.textarea<StyledProps>`
  width: 100%;
  height: 70vh;
  background-color: #000;
  font-size:24px;
  color: ${props => props.color || props.theme.colors.primary};
  border: none;
  resize: none;

  &:focus {
    border: none;
    outline: none;
  }
`

const Console: React.FC<StyledProps> = ({color, ...props}) => {
  const [lines, setLines] = React.useState(['C/users/valr.lipsk>']);

  const handleKeyDown = (e: any) => {
    if (e.charCode === 13) {
      setLines([...lines, 'C/users/valr.lipsk>'])
    }
  }

  return (
   <Flex>
    <Flex direction='column' margin='0 1em'>
      {lines.map(line => 
        <Line color={color} key={line+Math.random()}>{line}</Line>)}
    </Flex>
      <StyledConsole color={color} onKeyPress={handleKeyDown}/>
   </Flex>
  )
}

export default Console