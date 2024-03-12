import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";
import { groupCreate } from "../../storage/group/groupCreate";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigate = useNavigation();

  async function handleNewGroup() {
    try {
      await groupCreate(group);
      navigate.navigate("players", { group: group });
    } catch (error) {
      throw error;
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
