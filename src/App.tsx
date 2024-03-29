import styles from "./App.module.scss";
// import { useRandomExercise } from "./features/exercises/hooks/useRandomExercise";
import { generateImageSrcUrl } from "./utils/generateImageSrcUrl";
import { useSettingsStore } from "./features/settings/stores/SettingsStore";
import { SettingsDialogButton } from "./features/settings/components/SettingsDialogButton";
import { useSaveSettingsBeforeUnload } from "./features/settings/hooks/useSaveSettingsBeforeUnload";
import { ExerciseExampleImage } from "./features/exercises/components/ExerciseExampleImage";
import { useExerciseRoulette } from "./features/exercises/hooks/useExerciseRoulette";
import { DifficultyLevelsInformation } from "./features/exercises/components/DifficultyLevelsInformation";
import { Collapsible } from "./features/animations/Collapsible";
import { ExerciseLabel } from "./features/exercises/components/ExerciseLabel";
import { Separator } from "./components/Separator";
import { ExerciseSearchDialogButton } from "./features/exercises/components/ExerciseSearchDialogButton";
import { ExerciseBadges } from "./features/exercises/components/ExerciseBadges";

function App() {
  useSaveSettingsBeforeUnload();

  const {
    exercises,
    equipmentTypes,
    exerciseTypes,
    majorMuscles,
    minorMuscles,
  } = useSettingsStore();

  const { exercise, isRefreshing, refreshRandomExercise, setSelectedExercise } =
    useExerciseRoulette({
      exercises,
      equipmentTypes,
      exerciseTypes,
      majorMuscles,
      minorMuscles,
    });

  return (
    <div className={styles.app}>
      <div className={styles.toolbar}>
        <ExerciseSearchDialogButton onExerciseSelected={setSelectedExercise} />
        <button className={styles.rerollButton} onClick={refreshRandomExercise}>
          🎲 Reroll
        </button>
        <SettingsDialogButton />
      </div>
      {!exercise && "No exercise..."}
      {exercise && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <ExerciseExampleImage
            src={generateImageSrcUrl(exercise.example)}
            loading={isRefreshing}
          />
          <ExerciseLabel animate={!isRefreshing}>{exercise.name}</ExerciseLabel>
          <Collapsible delay={{ open: 900 }} open={!isRefreshing}>
            <div className={styles.exerciseInformation}>
              <Separator />
              <DifficultyLevelsInformation exercise={exercise} />
              {exercise.notes && (
                <div>
                  <b>Notes</b>
                  <p style={{ marginTop: 0 }}>{exercise.notes}</p>
                </div>
              )}
              {exercise.modifications && (
                <div>
                  <b>Modifications</b>
                  <p style={{ marginTop: 0 }}>{exercise.modifications}</p>
                </div>
              )}
              <ExerciseBadges exercise={exercise} />
            </div>
          </Collapsible>
        </div>
      )}
    </div>
  );
}

export default App;
