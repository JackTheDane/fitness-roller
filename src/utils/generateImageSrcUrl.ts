import { Exercise } from "../data/types";

const ensureTrailingSlash = (string: string) =>
  string.endsWith("/") ? string : `${string}/`;

export const generateImageSrcUrl = (exerciseExample: Exercise["example"]) =>
  `${ensureTrailingSlash(
    import.meta.env.BASE_URL
  )}exercises/${exerciseExample}` as const;
