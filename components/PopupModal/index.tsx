import React from "react";
import Image from "next/image";
import ButtonComponent from "@/shared/Button";
import Spinner from "@/shared/Spinner";
import { PopupPayment } from "@/types/Popup";
import {
  PopupWrapper,
  Title,
  Description,
  IconWrapper,
  ModalWrapper,
} from "./style";

const PopupModal = ({
  loading,
  status,
  showPopup,
  handlePopup,
}: PopupPayment) => {
  return (
    <ModalWrapper>
      {loading ? (
        <Spinner />
      ) : (
        <PopupWrapper>
          <IconWrapper status={status}>
            <Image
              src={status ? "/images/success.svg" : "/images/failed.svg"}
              quality={100}
              width={status ? 30 : 24}
              height={status ? 24 : 23}
              alt="be"
            />
          </IconWrapper>
          <Title>
            {status ? "Thanh toán thành công" : "Đã có lỗi thanh toán"}
          </Title>
          <Description>
            {status
              ? "Xin chân thành cảm ơn sự ủng hộ của Quý khách hàng"
              : "Thanh toán thất bại. Vui lòng thử lại"}
          </Description>
          <ButtonComponent
            disabled={false}
            text={"OK"}
            handleButton={() => handlePopup(!showPopup)}
          />
        </PopupWrapper>
      )}
    </ModalWrapper>
  );
};

export default PopupModal;
