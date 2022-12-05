import styled from "styled-components";

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.big};
  line-height: 24px;
  color: ${(props) => props.theme.colors.primaryText1};
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
