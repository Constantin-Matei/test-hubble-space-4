import * as yup from "yup"

const initialValues = {
  screenName: "",
}

const validationSchema = yup.object().shape({
  scrrenName: yup
    .string()
    .min(4, "4 characters minim required")
    .max(15, "maximum 15 characters allowed"),
})

export default {
  initialValues,
  validationSchema,
}
