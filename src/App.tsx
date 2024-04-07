import styles from "./App.module.scss";
// import { useRandomExercise } from "./features/exercises/hooks/useRandomExercise";
import { generateImageSrcUrl } from "./features/exercises/utils/generateImageSrcUrl";
import { useSettingsStore } from "./features/settings/stores/SettingsStore";
import { SettingsDialogButton } from "./features/settings/components/SettingsDialogButton";
import { ExerciseExampleImage } from "./features/exercises/components/ExerciseExampleImage";
import { useExerciseRoulette } from "./features/exercises/hooks/useExerciseRoulette";
import { DifficultyLevelsInformation } from "./features/exercises/components/DifficultyLevelsInformation";
import { Collapsible } from "./components/animations/Collapsible";
import { ExerciseLabel } from "./features/exercises/components/ExerciseLabel";
import { Separator } from "./components/Separator";
import { ExerciseSearchDialogButton } from "./features/exercises/components/ExerciseSearchDialogButton";
import { ExerciseBadges } from "./features/exercises/components/ExerciseBadges";

function App() {
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
      <div className={styles.upperToolbar}>
        <ExerciseSearchDialogButton onExerciseSelected={setSelectedExercise} />

        <SettingsDialogButton />
      </div>
      {exercise ? (
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
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            textAlign: "center",
            padding: "60px 40px",
          }}
        >
          <span style={{ fontSize: 60 }}>🎲</span>
          <b style={{ fontSize: "1.2em" }}>
            Click the button below to roll an exercise
          </b>
          <span style={{ fontSize: 30 }}>👇</span>
        </div>
      )}
      <div className={styles.lowerToolbar}>
        <button onClick={refreshRandomExercise} style={{ width: "100%" }}>
          🎲 Roll an exercise
        </button>
        <Collapsible
          open={!!exercise}
          style={{
            transitionProperty: "all",
            width: exercise ? "100%" : 0,
            marginLeft: exercise ? 8 : 0,
          }}
        >
          <button
            onClick={() => window.alert("No yet implemented")}
            style={{ width: "100%", minWidth: "content" }}
            disabled={isRefreshing}
          >
            ✅ Mark as completed
          </button>
        </Collapsible>
      </div>
    </div>
  );
}

export default App;
