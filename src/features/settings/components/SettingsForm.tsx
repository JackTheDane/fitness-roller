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
import { Badge } from "../../../components/Badge";
import { EXERCISE_BADGE_COLORS } from "../../exercises/constants";

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
          <Badge as="legend" color={EXERCISE_BADGE_COLORS.equipmentTypes}>
            Equipment
          </Badge>
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
          <Badge as="legend" color={EXERCISE_BADGE_COLORS.exerciseTypes}>
            Exercise types
          </Badge>
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
          <Badge as="legend" color={EXERCISE_BADGE_COLORS.majorMuscles}>
            Major muscles
          </Badge>
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
          <Badge as="legend" color={EXERCISE_BADGE_COLORS.minorMuscles}>
            Minor muscles
          </Badge>
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
