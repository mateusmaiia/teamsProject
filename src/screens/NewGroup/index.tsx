import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigate = useNavigation();

  function handleNewGroup() {
    navigate.navigate("players", { group: group });
    {
      /**ou posso passar somente {group} o js entende que o nome da propriedade é group e o nome do estado tambem */
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
