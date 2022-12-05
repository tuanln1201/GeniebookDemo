import styled from "styled-components";

export const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  &:last-child {
    padding-top: 1rem;
    padding-bottom: 0.75rem;
  }
`;

export const Title = styled.h5`
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 12px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryText2};
`;

export const Content = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.large};
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryText1};
`;

export const CopyButton = styled.div`
  right: 0;
  position: absolute;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 2px;
  padding: 0.375rem 0.75rem;
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.large};
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${(props) => props.theme.colors.primaryText1};
`;
