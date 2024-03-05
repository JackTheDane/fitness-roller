import { Image, ImageProps } from "../../../components/Image";
import { ExerciseExampleImageLoading } from "./ExerciseExampleImageLoading";
import styles from "./ExerciseExampleImage.module.scss";

export type ExerciseExampleImageProps = Omit<ImageProps, "loadingComponent">;

export const ExerciseExampleImage = (props: ExerciseExampleImageProps) => {
  return (
    <div className={styles.root}>
      <Image
        {...props}
        className={styles.image}
        loadingComponent={<ExerciseExampleImageLoading />}
      />
    </div>
  );
};
