import * as S from "./styles";
import { useEffect, useState, useCallback } from "react";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { GroupCard } from "../../components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGetAll } from "../../storage/group/groupsGetAll";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  async function handleNewGroup() {
    navigation.navigate("newGroup");
  }

  async function fetchGroups() {
    const data = await groupsGetAll();
    setGroups(data);
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

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
