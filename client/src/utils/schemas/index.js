import * as Yup from "yup";

export const schema_login = Yup.string("Input value must be string")
  .matches(/^[A-Za-z0-9_-]{3,15}$/, "Invalid login")
  .required("This field is required");

export const schema_password = Yup.string("Input value must be string")
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    "Invalid password"
  )
  .required("This field is required");

export const schema_avatar = Yup.mixed()
  .nullable()
  .test(
    "file format",
    "Invalid file format",
    (value) =>
      !value ||
      (value &&
        ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(
          value?.type
        ))
  );

export const schema_create_user = Yup.object({
  login: schema_login,
  password: schema_password,
  avatar: schema_avatar,
});
