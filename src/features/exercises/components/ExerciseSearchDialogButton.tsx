import { useId, useState } from "react";
import { Dialog } from "../../../components/Dialog";
import styles from "./ExerciseSearchDialogButton.module.scss";
import { Exercise } from "../../../data/types";
import { TextInput } from "../../../components/TextInput";
import { EXERCISES } from "../../../data/exercises";
import { ExerciseExampleImage } from "./ExerciseExampleImage";
import { generateImageSrcUrl } from "../../../utils/generateImageSrcUrl";
import { ExerciseBadges } from "./ExerciseBadges";

export type ExerciseSearchDialogButtonProps = {
  onExerciseSelected(exercise: Exercise): void;
};

export const ExerciseSearchDialogButton = ({
  onExerciseSelected,
}: ExerciseSearchDialogButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  const resultsSectionId = useId();

  const lowerCaseSearchFilter = searchFilter.toLowerCase();

  const filteredExercises = EXERCISES.filter(({ name }) =>
    name.toLowerCase().includes(lowerCaseSearchFilter)
  );

  return (
    <>
      <button title="Search for exercise" onClick={() => setIsDialogOpen(true)}>
        🔍
      </button>
      <Dialog
        open={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          setSearchFilter("");
        }}
      >
        <Dialog.Header>
          <TextInput
            autoFocus
            placeholder="Type to search"
            label="🔍 Search for exercise"
            value={searchFilter}
            onChange={setSearchFilter}
            aria-controls={resultsSectionId}
          />
        </Dialog.Header>

        <section
          role="list"
          id={resultsSectionId}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {filteredExercises.length === 0 && (
            <p style={{ width: "100%", textAlign: "center" }}>
              No exercises found by that name. Try another search term.
            </p>
          )}
          {filteredExercises.map((exercise) => (
            <button
              className={styles.exerciseOption}
              role="listitem"
              onClick={(event) => {
                event.preventDefault();
                onExerciseSelected(exercise);
                setIsDialogOpen(false);
              }}
              key={exercise.name}
            >
              <ExerciseExampleImage
                height="auto"
                width={160}
                src={generateImageSrcUrl(exercise.example)}
                wrapperProps={{
                  style: {
                    flexShrink: 0,
                  },
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <b>{exercise.name}</b>
                <ExerciseBadges
                  exercise={exercise}
                  size="small"
                  style={{ justifyContent: "flex-start" }}
                />
              </div>
            </button>
          ))}
        </section>
      </Dialog>
    </>
  );
};
