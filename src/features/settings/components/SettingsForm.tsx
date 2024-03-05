import { ComponentPropsWithoutRef } from "react";
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
import { CheckBoxList } from "./CheckBoxList";

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
          <CheckBoxList
            options={EQUIPMENT_TYPES}
            selectedOptions={equipmentTypes}
            onOptionCheckedChange={(equipmentType, newCheckedValue) =>
              setValues((oldValues) => ({
                equipmentTypes: toggleValueFromArrayByBoolean(
                  oldValues.equipmentTypes,
                  equipmentType,
                  newCheckedValue
                ),
              }))
            }
          />
        </fieldset>

        <fieldset>
          <legend>Exercise types</legend>
          <CheckBoxList
            options={EXERCISE_TYPES}
            selectedOptions={exerciseTypes}
            onOptionCheckedChange={(exerciseType, newCheckedValue) =>
              setValues((oldValues) => ({
                exerciseTypes: toggleValueFromArrayByBoolean(
                  oldValues.exerciseTypes,
                  exerciseType,
                  newCheckedValue
                ),
              }))
            }
          />
        </fieldset>

        <fieldset>
          <legend>Major muscles</legend>
          <CheckBoxList
            options={MAJOR_MUSCLES}
            selectedOptions={majorMuscles}
            onOptionCheckedChange={(majorMuscle, newCheckedValue) =>
              setValues((oldValues) => ({
                majorMuscles: toggleValueFromArrayByBoolean(
                  oldValues.majorMuscles,
                  majorMuscle,
                  newCheckedValue
                ),
              }))
            }
          />
        </fieldset>

        <fieldset>
          <legend>Minor muscles</legend>
          <CheckBoxList
            options={MINOR_MUSCLES}
            selectedOptions={minorMuscles}
            onOptionCheckedChange={(minorMuscle, newCheckedValue) =>
              setValues((oldValues) => ({
                minorMuscles: toggleValueFromArrayByBoolean(
                  oldValues.minorMuscles,
                  minorMuscle,
                  newCheckedValue
                ),
              }))
            }
          />
        </fieldset>
      </Accordion>

      <Accordion title="Available exercises">
        <fieldset>
          <legend>Exercises</legend>
          <CheckBoxList
            options={EXERCISES}
            selectedOptions={exercises as typeof EXERCISES}
            getLabel={({ name }) => name}
            onOptionCheckedChange={(exercise, newCheckedValue) =>
              setValues((oldValues) => ({
                exercises: toggleValueFromArrayByBoolean(
                  oldValues.exercises,
                  exercise,
                  newCheckedValue
                ),
              }))
            }
          />
          {/* {EXERCISES.map((exercise) => (
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
          ))} */}
        </fieldset>
      </Accordion>
    </form>
  );
};
