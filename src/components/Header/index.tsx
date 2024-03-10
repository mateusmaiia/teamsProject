import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBackHome() {
    navigation.navigate("groups");
  }
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBackHome}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
