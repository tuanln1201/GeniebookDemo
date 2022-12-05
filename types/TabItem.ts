export interface TabItem {
    active: boolean;
    content: string;
    icon: string;
    widthIcon: number;
    heightIcon: number;
    onItemClicked: () => void;
  }
  