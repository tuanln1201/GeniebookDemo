import styled from "styled-components";

export const Title = styled.h5`
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: 15px;
  margin-top: 1.3125rem;
  margin-bottom: 0.75rem;
  text-align: left;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryText2};
`;