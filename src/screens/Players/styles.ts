import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.GRAY_700};

  flex-direction: row;
  border-radius: 6px;
  justify-content: center;
`;

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0 12px;
`;
