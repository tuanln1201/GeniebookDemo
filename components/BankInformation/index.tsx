import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Wrapper from "@/shared/Wrapper";
import Alert from "@/shared/Alert";
import { useTheme } from "styled-components";
import { useBank } from "@/services/hooks";
import { InfoWrapper, Title, Content, CopyButton } from "./style";

const BankInformation = () => {
  const theme = useTheme();
  const [showAlert, setShowAlert] = useState(false);

  const { data, isLoading } = useBank();
  const handleCopy = () => {
    navigator.clipboard.writeText(data?.account.toString());
    setShowAlert(true);
  };
  const handleToggleAlert = () => {
    setShowAlert(!showAlert);
  };
  const indexSkeleton = [1, 2, 3, 4];

  const SkeletonComponent = () => {
    return (
      <>
        {indexSkeleton.map((el) => (
          <InfoWrapper key={el}>
            <Skeleton height={"3rem"} />
          </InfoWrapper>
        ))}
      </>
    );
  };
  const BankInfoComponent = () => {
    return (
      <>
        <InfoWrapper>
          <Title>Chi nhánh ngân hàng</Title>
          <Content>{data?.bank}</Content>
        </InfoWrapper>
        <InfoWrapper>
          <Title>Số tài khoản</Title>
          <Content>{data?.account}</Content>
          <CopyButton onClick={handleCopy}>Copy STK</CopyButton>
        </InfoWrapper>
        <InfoWrapper>
          <Title>Tên tài khoản</Title>
          <Content>{data?.name}</Content>
        </InfoWrapper>
        <InfoWrapper>
          <Title>Nội dung chuyển tiền</Title>
          <Content>{data?.content}</Content>
        </InfoWrapper>
        {showAlert && (
          <Alert
            icon="success_small"
            widthIcon={20}
            heightIcon={20}
            content="Đã copy số tài khoản"
            onItemClicked={handleToggleAlert}
          />
        )}
      </>
    );
  };
  return (
    <Wrapper bgColor={theme.colors.white}>
      {isLoading ? <SkeletonComponent /> : <BankInfoComponent />}
    </Wrapper>
  );
};

export default BankInformation;
