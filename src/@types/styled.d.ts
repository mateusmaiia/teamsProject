import "styled-components/native";
import themeSS from "../theme/themeSS";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaulTheme extends ThemeType {}
}
