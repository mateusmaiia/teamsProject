import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "../../utils/AppError";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroup = await groupsGetAll();

    const groupAlreadyExists = storedGroup.includes(newGroup);
    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com este nome.");
    }

    const storage = JSON.stringify([...storedGroup]);

    await AsyncStorage.setItem(GROUP_COLECTION, storage);
  } catch (error) {
    throw error;
  }
}
