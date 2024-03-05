import styles from "./App.module.scss";
import { useRandomExercise } from "./hooks/useRandomExercise";
import { generateImageSrcUrl } from "./utils/generateImageSrcUrl";
import { useSettingsStore } from "./features/settings/stores/SettingsStore";
import { SettingsDialogButton } from "./features/settings/components/SettingsDialogButton";
import { useSaveSettingsBeforeUnload } from "./features/settings/hooks/useSaveSettingsBeforeUnload";
import { Badge } from "./components/Badge";

function App() {
  useSaveSettingsBeforeUnload();

  const {
    exercises,
    equipmentTypes,
    exerciseTypes,
    majorMuscles,
    minorMuscles,
  } = useSettingsStore();

  const { exercise, refreshRandomExercise } = useRandomExercise({
    exercises,
    equipmentTypes,
    exerciseTypes,
    majorMuscles,
    minorMuscles,
  });

  return (
    <div className={styles.app}>
      <div className={styles.toolbar}>
        <button className={styles.rerollButton} onClick={refreshRandomExercise}>
          🎲 Reroll
        </button>

        <SettingsDialogButton />
      </div>
      {exercise?.name ?? "No exercise..."}
      {exercise && (
        <img width={500} src={generateImageSrcUrl(exercise.example)} alt="" />
      )}
      {exercise && (
        <>
          <div className={styles.badges}>
            {exercise.equipmentTypes.map((equipmentType) => (
              <Badge color="blue" key={equipmentType}>
                {equipmentType}
              </Badge>
            ))}
            {exercise.exerciseTypes.map((exerciseType) => (
              <Badge color="green" key={exerciseType}>
                {exerciseType}
              </Badge>
            ))}
            {exercise.majorMuscles.map((majorMuscle) => (
              <Badge color="darkred" key={majorMuscle}>
                {majorMuscle}
              </Badge>
            ))}
            {exercise.minorMuscles.map((minorMuscle) => (
              <Badge color="purple" key={minorMuscle}>
                {minorMuscle}
              </Badge>
            ))}
          </div>
          {exercise.notes && <div>{exercise.notes}</div>}
          {exercise.modifications && <div>{exercise.modifications}</div>}
        </>
      )}
    </div>
  );
}

export default App;
