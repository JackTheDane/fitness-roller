import styles from "./App.module.scss";
import { useRandomExercise } from "./hooks/useRandomExercise";
import { generateImageSrcUrl } from "./utils/generateImageSrcUrl";
import { useSettingsStore } from "./features/settings/stores/SettingsStore";
import { SettingsDialogButton } from "./features/settings/components/SettingsDialogButton";
import { useSaveSettingsBeforeUnload } from "./features/settings/hooks/useSaveSettingsBeforeUnload";
import { Badge } from "./components/Badge";
import { EXERCISE_BADGE_COLORS } from "./features/exercises/constants";
import { ExerciseExampleImage } from "./features/exercises/components/ExerciseExampleImage";

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
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <SettingsDialogButton />
        </div>
        <button className={styles.rerollButton} onClick={refreshRandomExercise}>
          🎲 Reroll
        </button>
      </div>
      {exercise?.name ?? "No exercise..."}
      {exercise && (
        <>
          <ExerciseExampleImage
            src={generateImageSrcUrl(exercise.example)}
            alt=""
          />
          <div className={styles.badges}>
            {exercise.equipmentTypes.map((equipmentType) => (
              <Badge
                color={EXERCISE_BADGE_COLORS.equipmentTypes}
                key={equipmentType}
              >
                {equipmentType}
              </Badge>
            ))}
            {exercise.exerciseTypes.map((exerciseType) => (
              <Badge
                color={EXERCISE_BADGE_COLORS.exerciseTypes}
                key={exerciseType}
              >
                {exerciseType}
              </Badge>
            ))}
            {exercise.majorMuscles.map((majorMuscle) => (
              <Badge
                color={EXERCISE_BADGE_COLORS.majorMuscles}
                key={majorMuscle}
              >
                {majorMuscle}
              </Badge>
            ))}
            {exercise.minorMuscles.map((minorMuscle) => (
              <Badge
                color={EXERCISE_BADGE_COLORS.minorMuscles}
                key={minorMuscle}
              >
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
