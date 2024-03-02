import { useState } from "react";
import "./App.css";
import { Checkbox } from "./components/Checkbox";
import {
  EQUIPMENT_TYPES,
  EXERCISE_TYPES,
  MAJOR_MUSCLES,
  MINOR_MUSCLES,
} from "./data/exercises";
import { useRandomExercise } from "./hooks/useRandomExercise";
import { generateImageSrcUrl } from "./utils/generateImageSrcUrl";
import {
  Equipment,
  ExerciseType,
  MajorMuscle,
  MinorMuscle,
} from "./data/types";
import { toggleValueFromArrayByBoolean } from "./utils/toggleValueFromArrayByBoolean";

function App() {
  const [selectedEquipmentTypes, setSelectedEquipmentTypes] =
    useState<Equipment[]>(EQUIPMENT_TYPES);
  const [selectedExerciseTypes, setSelectedExerciseTypes] =
    useState<ExerciseType[]>(EXERCISE_TYPES);
  const [selectedMajorMuscles, setSelectedMajorMuscles] =
    useState<MajorMuscle[]>(MAJOR_MUSCLES);
  const [selectedMinorMuscles, setSelectedMinorMuscles] =
    useState<MinorMuscle[]>(MINOR_MUSCLES);

  const { exercise, refreshRandomExercise } = useRandomExercise({
    equipment: selectedEquipmentTypes,
    exerciseType: selectedExerciseTypes,
    majorMuscle: selectedMajorMuscles,
    minorMuscle: selectedMinorMuscles,
  });

  return (
    <>
      <form>
        <fieldset>
          <legend>Equipment</legend>
          {EQUIPMENT_TYPES.map((equipmentType) => (
            <Checkbox
              label={equipmentType}
              value={equipmentType}
              key={equipmentType}
              checked={selectedEquipmentTypes.includes(equipmentType)}
              onChange={(newCheckedValue) =>
                setSelectedEquipmentTypes((oldValues) =>
                  toggleValueFromArrayByBoolean(
                    oldValues,
                    equipmentType,
                    newCheckedValue
                  )
                )
              }
            />
          ))}
        </fieldset>

        <fieldset>
          <legend>Exercise types</legend>
          {EXERCISE_TYPES.map((exerciseType) => (
            <Checkbox
              label={exerciseType}
              value={exerciseType}
              key={exerciseType}
              checked={selectedExerciseTypes.includes(exerciseType)}
              onChange={(newCheckedValue) =>
                setSelectedExerciseTypes((oldValues) =>
                  toggleValueFromArrayByBoolean(
                    oldValues,
                    exerciseType,
                    newCheckedValue
                  )
                )
              }
            />
          ))}
        </fieldset>

        <fieldset>
          <legend>Major muscles</legend>
          {MAJOR_MUSCLES.map((majorMuscle) => (
            <Checkbox
              label={majorMuscle}
              value={majorMuscle}
              key={majorMuscle}
              checked={selectedMajorMuscles.includes(majorMuscle)}
              onChange={(newCheckedValue) =>
                setSelectedMajorMuscles((oldValues) =>
                  toggleValueFromArrayByBoolean(
                    oldValues,
                    majorMuscle,
                    newCheckedValue
                  )
                )
              }
            />
          ))}
        </fieldset>

        <fieldset>
          <legend>Minor muscles</legend>
          {MINOR_MUSCLES.map((minorMuscle) => (
            <Checkbox
              label={minorMuscle}
              value={minorMuscle}
              key={minorMuscle}
              checked={selectedMinorMuscles.includes(minorMuscle)}
              onChange={(newCheckedValue) =>
                setSelectedMinorMuscles((oldValues) =>
                  toggleValueFromArrayByBoolean(
                    oldValues,
                    minorMuscle,
                    newCheckedValue
                  )
                )
              }
            />
          ))}
        </fieldset>
      </form>

      {exercise?.name ?? "No exercise..."}
      {exercise && <img src={generateImageSrcUrl(exercise.example)} alt="" />}
      <button onClick={refreshRandomExercise}>Refresh</button>
    </>
  );
}

export default App;
