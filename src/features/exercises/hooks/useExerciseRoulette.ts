import { useState } from "react";
import { sleep } from "../../../utils/sleep";
import { RandomExerciseOptions, useRandomExercise } from "./useRandomExercise";

const ROULETTE_TIMINGS = [50, 50, 70, 70, 100, 150, 200, 300, 400, 500, 500];

const runExerciseRoulette = async (callback: () => void) => {
  for await (const timing of ROULETTE_TIMINGS) {
    await sleep(timing);
    callback();
  }
};

export const useExerciseRoulette = (options?: RandomExerciseOptions) => {
  const { exercise, refreshRandomExercise: _refreshRandomExercise } =
    useRandomExercise(options);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshRandomExercise = () => {
    setIsRefreshing(true);
    runExerciseRoulette(_refreshRandomExercise)
      .catch((error) => {
        window.alert("Exercise roulette failed - Check console");
        console.log(error);
      })
      .finally(() => setIsRefreshing(false));
  };

  return {
    exercise,
    isRefreshing,
    refreshRandomExercise,
  };
};
