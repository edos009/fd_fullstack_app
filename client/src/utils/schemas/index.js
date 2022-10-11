import * as Yup from "yup";

export const schema_login = Yup.string("Input value must be string")
  .matches(/^[A-Za-z0-9_-]{3,15}$/, "Invalid login")
  .required("This field is required");

export const schema_password = Yup.string("Input value must be string")
  .min(8, "Password must be at least 8 characters")
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    "Invalid password, password example: Aaaaaa1$"
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

export const schema_content = Yup.string("Input value must be string")
  .max(64, "The field must not be more than 64 characters")
  .required("This field is required");

export const schema_deadLine = Yup.string("Input value must be string")
  .matches(
    /^((([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29))$/,
    "Invalid date, date must be in YYYY-MM-DD format"
  )
  .required("This field is required");

export const schema_create_user = Yup.object({
  login: schema_login,
  password: schema_password,
  avatar: schema_avatar,
});

export const schema_edit_user = Yup.object({
  login: schema_login,
  avatar: schema_avatar,
});

export const schema_task = Yup.object({
  content: schema_content,
  deadLine: schema_deadLine,
});
