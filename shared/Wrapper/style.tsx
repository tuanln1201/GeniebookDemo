import styled from "styled-components";

type Wrapper = {
  bgColor: string;
};

export const WrapperComponent = styled.div<Wrapper>`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 2rem;
  background-color: ${(props) => props.bgColor};
`;
