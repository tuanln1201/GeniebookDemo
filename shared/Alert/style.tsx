import styled from "styled-components";

export const AlertItemContainer = styled.div`
  background-color: ${(props) => props.theme.colors.green};
  border-radius: 8px;
  position: absolute;
  bottom: 0.75rem;
  width: calc(100% - 2rem)
;`;

export const AlertItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem 0.75rem 1.125rem;
`;

export const AlertItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  gap: 12px;
`;

export const AlertItemContent = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.large};
  line-height: 16px;
  margin: 0;
  color: ${(props) => props.theme.colors.primaryText1};
`;
export const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
`;
