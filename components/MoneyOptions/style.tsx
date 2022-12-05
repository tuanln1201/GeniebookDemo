import styled from "styled-components";

type Status = {
  active: boolean;
};
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
export const FormWrapper = styled.form``;
export const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 8px;
`;
export const OptionWrapper = styled.div<Status>`
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 3px 14px rgba(0, 0, 29, 0.12);
  border-radius: 2px;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  cursor: pointer;
  border: ${(props) =>
    props.active
      ? "2px solid #1366e9"
      : `2px solid ${props.theme.colors.white}`};
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.large};
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${(props) => props.theme.colors.primaryText3};
`;

export const MoneyUnit = styled.span`
  text-decoration: underline;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 1rem;
    width: calc(100% - 2rem);
`;