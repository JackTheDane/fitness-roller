import { CSSProperties, ComponentPropsWithoutRef } from "react";
import { Image, ImageProps } from "../../../components/Image";
import { Shimmer } from "../../../components/Shimmer";
import styles from "./ExerciseExampleImage.module.scss";
import { ExerciseExampleImageLoading } from "./ExerciseExampleImageLoading";
import { combineClasses } from "../../../utils/combineClasses";

export type ExerciseExampleImageProps = Omit<
  ImageProps,
  "loadingComponent" | "loading"
> & {
  loading?: boolean;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  wrapperProps?: ComponentPropsWithoutRef<"div">;
};

export const ExerciseExampleImage = ({
  loading,
  width = "100%",
  height = 600,
  wrapperProps: _wrapperProps,
  ...props
}: ExerciseExampleImageProps) => {
  const { style, className, ...wrapperProps } = _wrapperProps ?? {};

  return (
    <div
      className={combineClasses(className, styles.root)}
      style={{
        ...style,
        height,
        width,
      }}
      {...wrapperProps}
    >
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
