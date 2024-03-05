import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export type ImageProps = {
  loadingComponent?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"img">, "onLoad">;

export const Image = ({
  loadingComponent,
  src,
  style,
  ...props
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const previousSrcRef = useRef(src);

  useEffect(() => {
    if (previousSrcRef.current !== src) {
      setIsLoading(true);
      previousSrcRef.current = src;
    }
  }, [src, previousSrcRef]);

  return (
    <>
      {isLoading && loadingComponent}
      <img
        {...props}
        src={src}
        onLoad={() => setIsLoading(false)}
        style={{
          display: isLoading ? "none" : "initial",
          ...style,
        }}
      />
    </>
  );
};
