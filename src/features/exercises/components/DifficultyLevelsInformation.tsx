import { useMemo } from "react";
import {
  DifficultyLevel,
  getDifficultyForExercise,
} from "../utils/getDifficultyForExercise";
import { Exercise } from "../../../data/types";
import { formatDifficultyToString } from "../utils/formatDifficultyToString";

type DifficultyLevelsInformationProps = {
  exercise: Exercise;
};

export const DifficultyLevelsInformation = ({
  exercise,
}: DifficultyLevelsInformationProps) => {
  const difficultyTexts = useMemo<
    Record<DifficultyLevel, string> | undefined
  >(() => {
    const difficulty = getDifficultyForExercise(exercise);

    if (!difficulty) {
      return;
    }

    return {
      easy: formatDifficultyToString(difficulty, "easy"),
      medium: formatDifficultyToString(difficulty, "medium"),
      hard: formatDifficultyToString(difficulty, "hard"),
    };
  }, [exercise]);

  if (!difficultyTexts) {
    return null;
  }

  return (
    <div>
      <div>
        <b>Easy</b>
        <p style={{ marginTop: 0 }}>{difficultyTexts.easy}</p>
      </div>
      <div>
        <b>Medium</b>
        <p style={{ marginTop: 0 }}>{difficultyTexts.medium}</p>
      </div>
      <div>
        <b>Hard</b>
        <p style={{ marginTop: 0 }}>{difficultyTexts.hard}</p>
      </div>
    </div>
  );
};
