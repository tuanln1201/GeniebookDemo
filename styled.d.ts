import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      yellow: string;
      green: string;
      pink: string;
      gray: string;
      grey: string;
      primaryText1: string;
      primaryText2: string;
      primaryText3: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      big: string;
    };
  }
}
