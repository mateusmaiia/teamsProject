import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLECTION } from "../storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playerGetByGroup } from "./playerGetByGroup";
import { AppError } from "../../utils/AppError";
export async function PlayerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playerGetByGroup(group);

    const playerAlredyExist = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );
    if (playerAlredyExist.length > 0) {
      throw new AppError(`Essa pessoa já está adicionada a um time aqui.`);
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLECTION}-${group}`, storage);
  } catch (error) {}
}
