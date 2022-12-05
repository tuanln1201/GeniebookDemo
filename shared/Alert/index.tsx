import React from "react";
import Image from "next/image";
import { AlertType } from "@/types/Alert";
import {
  AlertItemContainer,
  AlertItemWrapper,
  AlertItemInfo,
  AlertItemContent,
  ImageWrapper,
} from "./style";

const Alert = ({ icon,widthIcon,heightIcon, content, onItemClicked }: AlertType) => {
  return (
    <AlertItemContainer>
      <AlertItemWrapper>
        <AlertItemInfo>
          <ImageWrapper>
            <Image
              src={`/images/${icon}.svg`}
              alt="Be"
              width={widthIcon}
              height={heightIcon}
            />
          </ImageWrapper>
          <AlertItemContent>{content}</AlertItemContent>
        </AlertItemInfo>
        <ImageWrapper onClick={onItemClicked}>
            <Image src={"/images/cancel.svg"} alt="Be" width={14} height={14} />
        </ImageWrapper>
      </AlertItemWrapper>
    </AlertItemContainer>
  );
};

export default Alert;
