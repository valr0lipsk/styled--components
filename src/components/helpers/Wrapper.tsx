import React from 'react'

interface Props extends React.PropsWithChildren {
  direction?: string;
  items?: string;
  justify?: string;
  margin?: string;
}

const Wrapper: React.FC<Props> = (props) => {
  return (
    <div>{props.children}</div>
  )
}

export default Wrapper