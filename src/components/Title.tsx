import React, { FC } from "react";
import styled from "styled-components";

interface Props extends React.PropsWithChildren {
  color?: string;
}

const StyledTitle = styled.h1`
  color: ${props => props.color || props.theme.colors.primary};
`;
const Title: FC<Props> = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
