import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroup = await groupsGetAll();

    const storage = JSON.stringify([...storedGroup, newGroup]);

    await AsyncStorage.setItem(GROUP_COLECTION, storage);
  } catch (error) {
    throw error;
  }
}
