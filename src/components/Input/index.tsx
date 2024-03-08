import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";

export function Input({ ...rest }: TextInputProps) {
  //Ou eu poderia desestruturar o valor "const {COLORS} = useTheme()" de dentro do obj theme.
  const theme = useTheme();
  return <Container {...rest} placeholderTextColor={theme.COLORS.GRAY_300} />;
}
