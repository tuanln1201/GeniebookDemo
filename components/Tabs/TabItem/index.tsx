import React from "react";
import Image from "next/image";
import { TabItem } from "@/types/TabItem";
import {
  TabItemContainer,
  TabItemWrapper,
  TabItemInfo,
  TabItemContent,
  ImageWrapper,
} from "./style";

const TabItem = ({ icon,widthIcon,heightIcon, active, content, onItemClicked }: TabItem) => {
  return (
    <TabItemContainer onClick={onItemClicked}>
      <TabItemWrapper>
        <TabItemInfo>
          <ImageWrapper>
            <Image
              src={`/images/${icon}.svg`}
              alt="Be"
              width={widthIcon}
              height={heightIcon}
            />
          </ImageWrapper>
          <TabItemContent>{content}</TabItemContent>
        </TabItemInfo>
        <ImageWrapper>
          {active ? (
            <Image src={"/images/check.svg"} alt="Be" width={16} height={11} />
          ) : (
            ""
          )}
        </ImageWrapper>
      </TabItemWrapper>
    </TabItemContainer>
  );
};

export default TabItem;
