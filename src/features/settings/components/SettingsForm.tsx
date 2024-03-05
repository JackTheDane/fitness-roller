import { ComponentPropsWithoutRef } from "react";
import { Checkbox } from "../../../components/Checkbox";
import {
  EQUIPMENT_TYPES,
  EXERCISES,
  EXERCISE_TYPES,
  MAJOR_MUSCLES,
  MINOR_MUSCLES,
} from "../../../data/exercises";
import { toggleValueFromArrayByBoolean } from "../../../utils/toggleValueFromArrayByBoolean";
import { useSettingsStore } from "../stores/SettingsStore";
import { Accordion } from "../../../components/Accordion";
import styles from "./SettingsForm.module.scss";

export type SettingsFormProps = Omit<
  ComponentPropsWithoutRef<"form">,
  "onSubmit"
>;

export const SettingsForm = ({ ...props }: SettingsFormProps) => {
  const {
    exercises,
    equipmentTypes,
    exerciseTypes,
    majorMuscles,
    minorMuscles,
    setValues,
  } = useSettingsStore();

  return (
    <form {...props} className={styles.form}>
      <Accordion title="Filters" open>
        <fieldset>
          <legend>Equipment</legend>
          {EQUIPMENT_TYPES.map((equipmentType) => (
            <Checkbox
              label={equipmentType}
              key={equipmentType}
              checked={equipmentTypes.includes(equipmentType)}
              onChange={(newCheckedValue) =>
                setValues((oldValues) => ({
                  equipmentTypes: toggleValueFromArrayByBoolean(
                    oldValues.equipmentTypes,
                    equipmentType,
                    newCheckedValue
                  ),
                }))
              }
            />
          ))}
        </fieldset>

        <fieldset>
          <legend>Exercise types</legend>
          {EXERCISE_TYPES.map((exerciseType) => (
            <Checkbox
              label={exerciseType}
              key={exerciseType}
              checked={exerciseTypes.includes(exerciseType)}
              onChange={(newCheckedValue) =>
                setValues((oldValues) => ({
                  exerciseTypes: toggleValueFromArrayByBoolean(
                    oldValues.exerciseTypes,
                    exerciseType,
                    newCheckedValue
                  ),
                }))
              }
            />
          ))}
        </fieldset>

        <fieldset>
          <legend>Major muscles</legend>
          {MAJOR_MUSCLES.map((majorMuscle) => (
            <Checkbox
              label={majorMuscle}
              key={majorMuscle}
              checked={majorMuscles.includes(majorMuscle)}
              onChange={(newCheckedValue) =>
                setValues((oldValues) => ({
                  majorMuscles: toggleValueFromArrayByBoolean(
                    oldValues.majorMuscles,
                    majorMuscle,
                    newCheckedValue
                  ),
                }))
              }
            />
          ))}
        </fieldset>

        <fieldset>
          <legend>Minor muscles</legend>
          {MINOR_MUSCLES.map((minorMuscle) => (
            <Checkbox
              label={minorMuscle}
              key={minorMuscle}
              checked={minorMuscles.includes(minorMuscle)}
              onChange={(newCheckedValue) =>
                setValues((oldValues) => ({
                  minorMuscles: toggleValueFromArrayByBoolean(
                    oldValues.minorMuscles,
                    minorMuscle,
                    newCheckedValue
                  ),
                }))
              }
            />
          ))}
        </fieldset>
      </Accordion>

      <Accordion title="Available exercises">
        <fieldset>
          <legend>Exercises</legend>
          {EXERCISES.map((exercise) => (
            <Checkbox
              label={exercise.name}
              key={exercise.name}
              checked={exercises.includes(exercise)}
              onChange={(newCheckedValue) =>
                setValues((oldValues) => ({
                  exercises: toggleValueFromArrayByBoolean(
                    oldValues.exercises,
                    exercise,
                    newCheckedValue
                  ),
                }))
              }
            />
          ))}
        </fieldset>
      </Accordion>
    </form>
  );
};
