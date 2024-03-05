import {
  Exercise,
  ExerciseType,
  MajorMuscle,
  MinorMuscle,
} from "./../../../data/types";
import { create, useStore } from "zustand";
import { EquipmentType } from "../../../data/types";
import {
  EQUIPMENT_TYPES,
  EXERCISES,
  EXERCISE_TYPES,
  MAJOR_MUSCLES,
  MINOR_MUSCLES,
} from "../../../data/exercises";
import { SETTINGS_STORAGE_IDENTIFIER } from "../constants";

type SettingsStoreValues = {
  exercises: Exercise[];
  equipmentTypes: EquipmentType[];
  exerciseTypes: ExerciseType[];
  majorMuscles: MajorMuscle[];
  minorMuscles: MinorMuscle[];
};

type SettingsStoreActions = {
  setValues(
    callbackOrValue:
      | SettingsStoreValues
      | ((values: SettingsStoreValues) => Partial<SettingsStoreValues>)
  ): void;
};

const getStorageValues = () => {
  try {
    const storageValues = localStorage.getItem(SETTINGS_STORAGE_IDENTIFIER);

    if (!storageValues) {
      return null;
    }

    return JSON.parse(storageValues) as SettingsStoreValues;
  } catch (error) {
    console.log("Failed to parse locally stored values", error);

    return null;
  }
};

const valuesFromStorage = getStorageValues();

console.log(valuesFromStorage);

export const SettingsStore = create<SettingsStoreValues & SettingsStoreActions>(
  (set) => ({
    setValues(callbackOrValue) {
      // console.log(values);
      set((state) => ({
        ...state,
        ...(typeof callbackOrValue === "function"
          ? callbackOrValue(state)
          : callbackOrValue),
      }));
    },
    exercises: valuesFromStorage?.exercises
      ? EXERCISES.filter((exercise) =>
          valuesFromStorage?.exercises.some(
            ({ name }) => name === exercise.name
          )
        )
      : EXERCISES,
    equipmentTypes: valuesFromStorage?.equipmentTypes ?? EQUIPMENT_TYPES,
    exerciseTypes: valuesFromStorage?.exerciseTypes ?? EXERCISE_TYPES,
    majorMuscles: valuesFromStorage?.majorMuscles ?? MAJOR_MUSCLES,
    minorMuscles: valuesFromStorage?.minorMuscles ?? MINOR_MUSCLES,
  })
);

export const useSettingsStore = () => useStore(SettingsStore);
