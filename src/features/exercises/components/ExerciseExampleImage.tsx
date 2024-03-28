import { Image, ImageProps } from "../../../components/Image";
import { Shimmer } from "../../../components/Shimmer";
import styles from "./ExerciseExampleImage.module.scss";
import { ExerciseExampleImageLoading } from "./ExerciseExampleImageLoading";

export type ExerciseExampleImageProps = Omit<
  ImageProps,
  "loadingComponent" | "loading"
> & {
  loading?: boolean;
};

export const ExerciseExampleImage = ({
  loading,
  ...props
}: ExerciseExampleImageProps) => {
  return (
    <div className={styles.root}>
      {loading ? (
        <ExerciseExampleImageLoading />
      ) : (
        <Image
          {...props}
          alt=""
          className={styles.image}
          loadingComponent={<Shimmer />}
        />
      )}
    </div>
  );
};
