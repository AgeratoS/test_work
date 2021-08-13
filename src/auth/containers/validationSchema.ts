import * as yup from "yup";


export const validationSchema = yup.object().shape({
    login: yup.string().email("Must be valid format").required("It's required value"),
    password: yup.string().min(6, "Password must have at least 6 symbols").required("It's required value")
})