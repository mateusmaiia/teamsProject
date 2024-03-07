import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from "../../assets/logo.png";
import { CaretLeft } from "phosphor-react-native";

export function Header() {
  return (
    <Container>
      <BackButton>
        <BackIcon />
      </BackButton>
      <Logo source={logoImg} />
    </Container>
  );
}
