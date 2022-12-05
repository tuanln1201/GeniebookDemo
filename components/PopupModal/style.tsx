import styled from "styled-components";

type Background = {
  status: boolean;
};
export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 999;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -1rem;
`;

export const PopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: calc(100% - 2rem);
  background-color: ${(props) => props.theme.colors.white};
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.big};
  line-height: 22px;
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.colors.primaryText1};
`;

export const Description = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.large};
  line-height: 20px;
  margin-bottom: 2.5rem;
  color: ${(props) => props.theme.colors.primaryText1};
`;

export const IconWrapper = styled.div<Background>`
  width: 56px;
  height: 56px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 50%;
  margin-bottom: 1rem;
  background-color: ${(props) =>
    props.status ? props.theme.colors.green : props.theme.colors.pink};
`;
