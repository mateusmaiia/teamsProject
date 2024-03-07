import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

//Passando todas as propriedades de um TouchableOpacity para este componente
type GroupCardProps = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
