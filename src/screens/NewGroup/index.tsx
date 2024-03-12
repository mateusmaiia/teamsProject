import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";
import { groupCreate } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/appError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigate = useNavigation();

  async function handleNewGroup() {
    try {
      //.trim() remove espaços antes e depois.
      if (group.trim().length === 0) {
        return Alert.alert("Novo grupo", "Informe o nome da turma.");
      }

      await groupCreate(group);
      navigate.navigate("players", { group: group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "Não foi possível criar um novo grupo.");
        console.log();
      }
    }
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" onPress={handleNewGroup} />
      </Content>
    </Container>
  );
}
