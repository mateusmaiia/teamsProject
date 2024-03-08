import { TouchableOpacityProps } from "react-native";
import { ButtonIconStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  type: ButtonIconStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ type, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon type={type} name={icon} />
    </Container>
  );
}
