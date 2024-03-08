import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";
import { ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  typeButton?: ButtonTypeStyleProps;
};

export function Button({ title, typeButton = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={typeButton} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}

//O componente "Container" é uma coisa e o "Button" outra, cada um tem sua tipagem.  um type é a propriedade do Container e o outro do Button.
