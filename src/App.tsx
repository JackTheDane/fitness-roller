import styles from "./App.module.scss";
// import { useRandomExercise } from "./features/exercises/hooks/useRandomExercise";
import { generateImageSrcUrl } from "./utils/generateImageSrcUrl";
import { useSettingsStore } from "./features/settings/stores/SettingsStore";
import { SettingsDialogButton } from "./features/settings/components/SettingsDialogButton";
import { useSaveSettingsBeforeUnload } from "./features/settings/hooks/useSaveSettingsBeforeUnload";
import { Badge } from "./components/Badge";
import { EXERCISE_BADGE_COLORS } from "./features/exercises/constants";
import { ExerciseExampleImage } from "./features/exercises/components/ExerciseExampleImage";
import { useExerciseRoulette } from "./features/exercises/hooks/useExerciseRoulette";
import { DifficultyLevelsInformation } from "./features/exercises/components/DifficultyLevelsInformation";
import { Collapsible } from "./features/animations/Collapsible";

function App() {
  useSaveSettingsBeforeUnload();

  const {
    exercises,
    equipmentTypes,
    exerciseTypes,
    majorMuscles,
    minorMuscles,
  } = useSettingsStore();

  const { exercise, isRefreshing, refreshRandomExercise } = useExerciseRoulette(
    {
      exercises,
      equipmentTypes,
      exerciseTypes,
      majorMuscles,
      minorMuscles,
    }
  );

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
      {!exercise && "No exercise..."}
      {exercise && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            textAlign: "center",
          }}
        >
          <ExerciseExampleImage
            src={generateImageSrcUrl(exercise.example)}
            loading={isRefreshing}
          />
          <b
            style={{
              fontSize: 20,
            }}
          >
            {exercise.name}
          </b>
          <Collapsible delay={{ open: 500 }} open={!isRefreshing}>
            <div className={styles.exerciseInformation}>
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
            </div>
          </Collapsible>
        </div>
      )}
    </div>
  );
}

export default App;
