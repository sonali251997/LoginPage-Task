import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
      "Email must be a valid Gmail address (example@gmail.com)"
    ),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  username: Yup.string()
    .oneOf(["emilys"], "Only 'emilys' is allowed as username")
    .required("Username is required"),
});

export default validationSchema;