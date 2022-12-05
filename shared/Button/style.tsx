import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.colors.yellow};
  border-radius: 2px;
  border: 0;
  padding: 0.625rem 0.75rem;
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.large};
  line-height: 17px;
  text-align: center;
  color: ${(props) => props.theme.colors.primaryText3};
  &:disabled {
    background: ${(props) => props.theme.colors.white};
    cursor: not-allowed;
  }
`;
