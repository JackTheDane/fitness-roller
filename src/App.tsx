import styles from "./App.module.scss";
import { useRandomExercise } from "./hooks/useRandomExercise";
import { generateImageSrcUrl } from "./utils/generateImageSrcUrl";
import { useSettingsStore } from "./features/settings/stores/SettingsStore";
import { SettingsDialogButton } from "./features/settings/components/SettingsDialogButton";
import { useSaveSettingsBeforeUnload } from "./features/settings/hooks/useSaveSettingsBeforeUnload";

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
      {exercise?.notes && <div>{exercise?.notes}</div>}
      {exercise?.modifications && <div>{exercise?.modifications}</div>}
    </div>
  );
}

export default App;
