import * as schema from "yup";

 export const movieValidate = schema.object({
    title: schema.string().required( 'Title is required'),
    author: schema.string().required('Author is required'),
    genre: schema.string().required('Genre is required'),
    synopsis: schema.string().optional(),
    picture: schema.string().url().optional(),
  });