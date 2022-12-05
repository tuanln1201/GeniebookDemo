import styled from "styled-components";

export const TabItemContainer = styled.div`
  margin-left: -1rem;
  margin-right: -1rem;
  background-color: ${(props) => props.theme.colors.white};
`;
export const TabItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.125rem;
`;

export const TabItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  gap: 12px;
`;

export const TabItemContent = styled.h4`
  
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
