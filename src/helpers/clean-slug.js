import slugify from "slugify";
import { REGEX } from "../constants";

export const cleanSlug = (title) => {
  const regex = REGEX.slugRegExp;

  return slugify(title, {
    remove: regex,
    lower: true
  });
};
