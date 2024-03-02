import { Exercise } from "../data/types";

export const generateImageSrcUrl = (exerciseExample: Exercise["example"]) =>
  `/exercises/${exerciseExample}` as const;
