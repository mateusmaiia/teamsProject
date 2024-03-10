import * as S from "./styles";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { GroupCard } from "../../components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("newGroup");
  }
  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        // style={{ width: "100%" }}
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        contentContainerStyle={
          groups.length === 0 && { flex: 1, borderRadius: 23 }
        }
      />
      <Button title="Criar uma turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
