import { FlatList } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Form, HeaderList } from "./styles";
import { useState } from "react";
import { NumbersOfPlayer } from "../../components/Filter/styles";
import { PlayCard } from "../../components/Playcard";
import { Button } from "../../components/Button";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState(["oi", "oi", "oi", "oi"]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon type="PRIMARY" icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayer>{players.length}</NumbersOfPlayer>
      </HeaderList>
      {/* <Filter title="TIME A" isActive /> */}

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayCard onRemove={() => {}} name={item} />}
      />

      <Button title="Remover" typeButton="SECONDARY" />
    </Container>
  );
}
